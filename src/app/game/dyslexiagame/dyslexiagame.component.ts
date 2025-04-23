import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../../home/components/nav-bar/nav-bar.component";
import { FooterComponent } from '../../home/components/footer/footer.component';

@Component({
  selector: 'app-dyslexiagame',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent],
  templateUrl: './dyslexiagame.component.html',
  styleUrls: ['./dyslexiagame.component.css']
})
export class DyslexiagameComponent implements OnInit {
  colors = ['Red', 'Blue', 'Green', 'Yellow'];
  currentWord = '';
  currentColor = '';
  options: string[] = [];
  trial = 1;
  totalTrials = 15;
  score = 0;
  correctAnswers = 0;
  responseTimes: number[] = [];
  startTime!: number;
  isResultPage = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.isResultPage = this.router.url.includes('dyslexia_game/results');

      if (!this.isResultPage) {
        this.generateQuestion();
      }
    });

    const state = history.state;
    if (this.isResultPage && state) {
      this.correctAnswers = state.correctAnswers || 0;
      this.totalTrials = state.totalTrials || 15;
      this.responseTimes = state.responseTimes || [];
    }
  }

  generateQuestion() {
    const randomWord = this.colors[Math.floor(Math.random() * this.colors.length)];
    let randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];

    while (randomColor === randomWord) {
      randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    this.currentWord = randomWord;
    this.currentColor = randomColor;
    this.options = this.shuffle([...this.colors]);
    this.startTime = performance.now();
  }

  shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  checkAnswer(selected: string) {
    const responseTime = performance.now() - this.startTime;
    this.responseTimes.push(responseTime);

    if (selected === this.currentColor) {
      this.correctAnswers++;
    }

    if (this.trial < this.totalTrials) {
      this.trial++;
      this.generateQuestion();
    } else {
      this.router.navigate(['/dyslexia_game', 'results'], {
        state: {
          correctAnswers: this.correctAnswers,
          totalTrials: this.totalTrials,
          responseTimes: this.responseTimes
        }
      });
    }
  }

  getColorCode(color: string): string {
    switch (color.toLowerCase()) {
      case 'red': return '#ef4444';
      case 'blue': return '#3b82f6';
      case 'green': return '#10b981';
      case 'yellow': return '#f59e0b';
      default: return '#ccc';
    }
  }

  get accuracy(): number {
    return Math.round((this.correctAnswers / this.totalTrials) * 100);
  }

  get averageResponseTime(): number {
    const total = this.responseTimes.reduce((a, b) => a + b, 0);
    return Math.round(total / this.responseTimes.length);
  }
  
  get learningStrengths(): string[] {
    const acc = this.accuracy;
    const time = this.averageResponseTime;
    const strengths: string[] = [];
  
    if (acc >= 90) strengths.push("✨ Precision Under Pressure");
    else if (acc >= 75) strengths.push("✨ Methodical Processing");
    else strengths.push("✨ Growth-Oriented Learner");
  
    if (time < 1500) strengths.push("✨ Quick Cognitive Reflexes");
    else if (time < 2500) strengths.push("✨ Balanced Processing Speed");
    else strengths.push("✨ Thoughtful Decision Making");
  
    if (acc >= 80 && time < 2000) strengths.push("✨ Independent Thinking");
  
    return strengths;
  }  

  tryAgain() {
    this.router.navigate(['/dyslexia_game']);
  }
}
