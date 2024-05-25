import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-get-all-news',
  templateUrl: './get-all-news.component.html',
  styleUrls: ['./get-all-news.component.css']
})
export class GetAllNewsComponent implements OnInit {
  newsData: any[] = []; // Array to hold the fetched news data

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchNews(); // Call the method to fetch news data when component initializes
  }

  // Method to fetch news data from the backend
  fetchNews() {
    this.newsService.getNews().subscribe(
      (data) => {
        console.log('Fetched news data:', data);
        this.newsData = Array.isArray(data) ? data : [data]; // Ensure newsData is always an array
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

  onUpdateNews(id: string): void {
    this.router.navigate(['/update-news', id]);
  }

 
}
