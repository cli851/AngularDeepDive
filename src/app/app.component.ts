import { CoursesService } from './services/courses.service';
import { Observable } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  courses$: Observable<Course[]>

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {

    this.courses$ = this.coursesService.loadCourses()

  }

  save(course: Course){
    this.coursesService.saveCourse(course)
  }



}
