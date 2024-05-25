import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  pagedUsers: any[] = [];
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get<{ users: any[] }>('http://localhost:4050/getallUser')
      .subscribe(
        (response) => {
          this.users = response.users.reverse();
          this.setPage(1);
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }

  setPage(page: number): void {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.users.length);
    this.pagedUsers = this.users.slice(startIndex, endIndex);
    this.currentPage = page;
    console.log(this.pagedUsers);
  }

  pageChanged(page: number): void {
    this.setPage(page);
  }

  isPreviousDisabled(): boolean {
    return this.currentPage === 1;
  }

  previousPage(): void {
    if (!this.isPreviousDisabled()) {
      this.setPage(this.currentPage - 1);
    }
  }
  isNextDisabled(): boolean {
    const totalPages = Math.ceil(this.users.length / this.pageSize);
    return this.currentPage === totalPages;
  }
  

  nextPage(): void {
    this.setPage(this.currentPage + 1);
  }
}
