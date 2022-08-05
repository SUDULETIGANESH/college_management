import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentDetail } from './student-detail.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  public studentForm = this.fb.group({
    name: [''],
    dob: [''],
    yoa: [''],
    contact: this.fb.group({
      mobileNo: [''],
      email: [''],
      address: ['']
    })
  })


  constructor(private http: HttpClient,
    private router: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails() {
    this.router.params.subscribe(param => {
      this.http.get<StudentDetail>("/api/student/" + param['id']).subscribe(resp => {
        this.studentForm.patchValue(resp);
       (this.studentForm.get('contact') as FormGroup).patchValue(resp.contact);
       console.log(resp.contact);
      })
    });
  }

}
