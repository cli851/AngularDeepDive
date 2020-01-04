import { CourseCardComponent } from './course-card/course-card.component';
import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {


  courses = COURSES

  @ViewChildren(CourseCardComponent, {read : ElementRef})
  cards: QueryList<ElementRef>

  constructor() {

  }

  ngAfterViewInit(): void {


  }

  onCoursesEditied() {
    this.courses.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    )
  }


  onCourseSelected(course: Course) {

  }

}
