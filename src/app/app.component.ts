import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Observable<any[]>;

  constructor(public database: AngularFirestore) {
    this.items = database.collection('items').valueChanges();
  }

  ngOnInit() {}

  auth() {
    // app().auth()
    // https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
  }
}
