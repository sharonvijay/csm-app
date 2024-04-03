import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RaiseIssue } from 'src/app/models/raise-issue.model';
import { RaiseIssueService } from 'src/app/services/raise-issue.service';

@Component({
  selector: 'app-raise-issue',
  templateUrl: './raise-issue.component.html',
  styleUrls: ['./raise-issue.component.css']
})
export class RaiseIssueComponent {
  issue : RaiseIssue ={
    userId:0,
    issueName:''
  }
  successMessage: string = '';


  constructor(private raiseIssueService : RaiseIssueService){
    const userIdFromStorage = localStorage.getItem('userId');
    if (userIdFromStorage !== null) {
      this.issue.userId = parseInt(userIdFromStorage, 10);
    }
  }

  async rasieIssue(form : NgForm)
  {
    try
    {
      const response = await this.raiseIssueService.raiseIssue(this.issue);
      console.log(response);

      setTimeout(() => {
        this.successMessage = 'Issue raised successfully';
        form.resetForm();
        this.issue = { userId: this.issue.userId, issueName: '' };
      }, 1000);

      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
      
    }
    catch(error)
    {
      console.error('Error during raising Issue', error);

    }
  }

}
