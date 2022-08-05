import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentSearch } from './studentsearch.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students: StudentSearch[] = [];

  constructor(private http: HttpClient,
    private route:Router) { }

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData() {
    this.http.get<StudentSearch[]>("/api/students").subscribe((response) => {
      this.students = response;
    })
  }

  showDetail(studentId: string) {
    this.route.navigateByUrl('/students/'+studentId);
  }
}
