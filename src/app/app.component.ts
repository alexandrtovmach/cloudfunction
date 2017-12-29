import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  email: string;
  password: string;
  loaded: boolean = false;
  exam: [any];

  constructor(
    public authService: AuthService,
    public databaseService: DatabaseService,
  ) {}

  ngOnInit() {
    this.loaded = true
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

  generateChapterExam() {
    this.loaded = false

    this.databaseService.getQuestions()
    .then((data) => {
      this.exam = data.val().sort(() => {
        return (Math.random() > 0.5)
      })
      this.databaseService.addChapterExam(this.exam)
      .then((exam) => {
        console.log(`This id of created exam: ${exam.key}`)
        this.loaded = true
      })
    })
  }

  generateCourseExam() {
    this.loaded = false

    this.databaseService.getQuestions()
    .then((data) => {
      this.exam = data.val().sort(() => {
        return (Math.random() > 0.5)
      })
      this.databaseService.addCourseExam(this.exam)
      .then((exam) => {
        console.log(`This id of created exam: ${exam.key}`)
        this.loaded = true
      })
    })
  }
}
