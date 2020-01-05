import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { config } from './app.config.js';

@Injectable({
  providedIn: 'root'
})
export class WebAppService {
  
  bShow: boolean;

  constructor(private db: AngularFirestore)
  {
    this.bShow = true;
    console.log( this.bShow + " from constructor" );
  }

  getData() { return this.db.collection(config.collection_endpoint).snapshotChanges(); }

  /*
  updating data
  https://firebase.google.com/docs/firestore/manage-data/add-data#update-data
  */
  updateData(uid: string, update)
  {
    
    return this.db.collection(config.collection_endpoint)
    .doc(uid)
    .update({likes: update });

    //this.likesDoc = this.db.doc(`${config.collection_endpoint}/${uid}`);
    //this.likesDoc.update(update);
  }

  hide()
  {
    this.bShow = false;
    console.log(this.bShow + " from hide()");
  }



}
