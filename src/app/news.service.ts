import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://127.0.0.1:4050/news'; // Fix the API URL format
  private getnewapiUrl = 'http://127.0.0.1:4050/getallnews'; // Update with your actual backend API URL

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    // console.log(this.getnewapiUrl); // Log the API URL
    // console.log("Test");
    return this.http.get<any>(this.getnewapiUrl);
  
  }

  addNews(newsData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newsData);
  }
  getNewsById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // Method to update news by ID
  updateNews(id: string, newsData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, newsData);
  }
  
}
