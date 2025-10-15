import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: false,
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  categoryName = '';

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizService.categoryName = params['categoryName'];
      this.categoryName = this.quizService.categoryName;
    });
  }

  get name() {
    return this.authService.user?.username || 'Anonyme';
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
