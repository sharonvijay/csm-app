import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Issue } from 'src/app/models/issue.model';
import { RaiseIssueService } from 'src/app/services/raise-issue.service';

@Component({
  selector: 'app-raise-issue',
  templateUrl: './raise-issue.component.html',
  styleUrls: ['./raise-issue.component.css']
})
export class RaiseIssueComponent {
  issue : Issue ={
    userId:0,
    issueName:''
  }
  successMessage: string = '';


  constructor(private raiseIssueService : RaiseIssueService){}

  async rasieIssue(form : NgForm)
  {
    try
    {
      const response = await this.raiseIssueService.raiseIssue(this.issue);
      console.log(response);

      setTimeout(() => {
        this.successMessage = 'Issue raised successfully';
        form.resetForm();
        this.issue = { userId: 0, issueName: '' };
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
