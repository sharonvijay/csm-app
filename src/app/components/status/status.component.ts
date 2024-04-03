import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue.model';
import { IssueStatusService } from 'src/app/services/issue-status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  loggedOut : boolean = false;
  data : Issue[] = [];

  constructor(private issueStatusService: IssueStatusService) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if(!userId)
    {
      this.loggedOut = true;
    }
    else{
      this.loggedOut = false;
    }
    
    if (userId) {
      this.issueStatusService.issueStatus(userId)
        .then((response: Issue[]) => {
          this.data = response;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      console.error('User ID not found in localStorage');
    }
  }
}