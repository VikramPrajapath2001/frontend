import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  batchId!: number;
  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.batchId = +this.route.snapshot.paramMap.get('batchId')!;
    this.studentService.getAllStudents().subscribe((data) => {
      this.students = data.filter(
        (student) => student.batch.id === this.batchId
      );
      this.filteredStudents = this.students;
    });
  }

  onSearch(): void {
    this.filteredStudents = this.students.filter((student) =>
      student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
