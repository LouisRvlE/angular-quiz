import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  standalone: false,
})
export class ResultComponent implements OnInit {
  score = 0;

  constructor(
    private quizService: QuizService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quizService.checkAnswers();
    this.score = this.quizService.score;
  }

  goToHome() {
    this.router.navigate(['/']);
    this.quizService.resetQuiz();
  }

  get name() {
    return this.authService.user?.username || 'Anonyme';
  }

  get scoreTotal(): number {
    return this.quizService.quizContent.filter(
      (q) => q.category === this.quizService.categoryName
    ).length;
  }

  getGifUrl() {
    if (this.score > this.scoreTotal / 2)
      return 'https://media.giphy.com/media/YRuFixSNWFVcXaxpmX/giphy.gif';
    return 'https://media.giphy.com/media/jWcypagX0tNtiup1pg/giphy.gif';
  }
}
