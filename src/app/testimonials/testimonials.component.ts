import { Component } from "@angular/core";

@Component({
    selector: "app-testimonials",
    templateUrl: "./testimonials.component.html",
    styleUrls: ["./testimonials.component.css"]
})
export class TestimonialsComponent {
    testimonials = [
        { name: 'John Doe', feedback: 'This is an amazing service!' },
        { name: 'Jane Smith', feedback: 'Highly recommend to everyone.' },
        { name: 'Sam Wilson', feedback: 'Fantastic experience overall.' }
      ];
}