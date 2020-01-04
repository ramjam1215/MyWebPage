import { Component, OnInit } from '@angular/core';
import { WebAppService } from './web-app.service';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { config } from './app.config';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'JC InterActive';
  author = 'James Corcoran';


  data: Observable<any>;

  constructor(private db: AngularFirestore, private appService: WebAppService) { }

  //this is basically the read
  ngOnInit()
  {
    this.data = this.appService.getData()
    .pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.get("likes");
        const uid = a.payload.doc.id; 

        console.log(data);
        console.log(uid);
        //document.data is an iterable object
        //property spread notation:
        //basically builds the properties of this object for you
        return {uid, data};
      });
    })
    );
  }


}
