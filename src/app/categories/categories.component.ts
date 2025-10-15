import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/services/quiz.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone: false,
})
export class CategoriesComponent implements OnInit {
  categories: any[] = this.quizService.categories;
  filteredCategories: any[] = this.quizService.categories;
  searchControl = new FormControl('');
  searchTerm: string = '';

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.getCategories();

    this.searchControl.valueChanges.subscribe((value) => {
      this.searchTerm = value ?? '';
    });
  }

  filterCategories() {
    this.filteredCategories = this.categories.filter((category) =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  clearSearch() {
    this.searchControl.setValue('');
    this.filteredCategories = this.categories;
  }

  navigateToQuiz(categoryName: string) {
    this.quizService.categoryName = categoryName;
    this.router.navigate(['/quiz', categoryName]);
  }

  get isLoading() {
    return this.categories.length === 0;
  }
}
