import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _enrollementService:EnrollmentService){}

  topics =['Angular','React','Vue'];
  topicHasError=true;
  submitted =false;
  errorMsg='';


   userModel = new User('','tsanchit92@gmail.com',1234567891,'default','morning',true);

   validateTopic(value:any)
   {
     if(value==='default')
     {
       this.topicHasError=true;
     }
     else{
       this.topicHasError=false;
     }
   }

   onSubmit()
   {
     alert("form submitted succesfully");
     this.submitted=true;
     this._enrollementService.enroll(this.userModel)
      .subscribe(
        data=>console.log('Succes!',data),
        error=>this.errorMsg=error.statusText
      )
   }
}
