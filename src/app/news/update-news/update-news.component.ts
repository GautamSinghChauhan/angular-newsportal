import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../news.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {
  updateNewsForm: FormGroup;
  newsId!: string;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateNewsForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', Validators.required],
      author: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.newsId = id;
      this.newsService.getNewsById(this.newsId).subscribe((newsItem) => {
        this.updateNewsForm.patchValue(newsItem);
      });
    } else {
      console.error('No news ID found in route parameters');
      // Handle the case when id is null (e.g., navigate away, show an error message, etc.)
    }
  }

  onSubmit(): void {
    if (this.updateNewsForm.valid) {
      this.newsService.updateNews(this.newsId, this.updateNewsForm.value).subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error updating news:', error);
        }
      );
    }
  }
  
}
