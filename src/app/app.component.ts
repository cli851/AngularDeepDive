import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES

  title = COURSES[0].description;

  course = COURSES[0]

  price = 9.992341423545323445

  startDate = new Date(2000, 0, 1)

  onCourseSelected(course: Course) {
    console.log("App Component - click event bubbled...", course)
  }

}
