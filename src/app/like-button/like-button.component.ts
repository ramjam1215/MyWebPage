import { Component, OnInit, Input } from '@angular/core';
import { Like } from '../Like';
import { WebAppService } from '../web-app.service';

@Component({
  selector: 'like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  @Input() likes: Like;
  @Input() i: number;
  bShow = true;
  
  constructor(private appService: WebAppService) { }

  ngOnInit() {
  }

  hide()
  {
    this.bShow = false;
  }

  addLike()
  {
    console.log(this.likes);

    this.increment();
    //console.log(this.likes.data);

    this.appService.updateData(this.likes.uid, this.likes.data)
    .then(res => {
      console.log("pushed to database");
      console.log(res);
    })

    .catch(err =>{
      console.log("Something went wrong");
      console.log(err);
    });

    this.hide();
  }

  increment()
  {
    this.likes.data++;
  }

  
}
