import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: 'add-news.component.html',
  styleUrls: ['add-news.component.css']
})
export class AddNewsComponent {
  newsForm: FormGroup;
  isFormSubmitted: boolean = false; // Add boolean flag for form submission status

  constructor(private formBuilder: FormBuilder, private newsService: NewsService) {
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.newsForm.valid) {
      this.newsService.addNews(this.newsForm.value).subscribe(
        (response) => {
          console.log('News added successfully:', response);
          this.newsForm.reset(); // Reset the form after successful submission
          this.isFormSubmitted = true; // Set form submission flag to true

          setTimeout(() => {
            this.isFormSubmitted = false;
          }, 1000);
        },
        (error) => {
          console.error('Error adding news:', error);
        }
      );
    } else {
      // Mark all form fields as touched to display validation errors
      this.markFormGroupTouched(this.newsForm);
    }
  }

  // Helper function to mark all form controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
