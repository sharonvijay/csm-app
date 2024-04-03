import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Issue } from 'src/app/models/issue.model';
import { ResolveIssueService } from 'src/app/services/resolve-issue.service';

@Component({
  selector: 'app-resolve-issue',
  templateUrl: './resolve-issue.component.html',
  styleUrls: ['./resolve-issue.component.css']
})
export class ResolveIssueComponent implements OnInit{
  data : Issue[] = [];

  constructor(private resolveIssueService : ResolveIssueService){}

  ngOnInit(): void {
    this.resolveIssueService.getIssues().then((response:Issue[])=>{
      this.data = response.map(issue => ({ ...issue, issueStatus: '' }));
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
    
  }

  testFunction()
  {
    console.log("Test Function");
  }

  async updateStatus(issue: Issue) {
    console.log(issue);
    console.log("Modda");
    if (issue.issueStatus) {
        issue.status = issue.issueStatus;
        console.log("pukku");
        
        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0'); // Ensure 2-digit format
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const year = currentDate.getFullYear();
        // Format the date as dd-mm-yyyy
        const formattedDate = `${day}-${month}-${year}`;
        // Assign the formatted date to the resolvedAt property of the issue
        issue.resolvedAt = formattedDate;

        const userIdString: string | null = localStorage.getItem('userId');
        const userId: number = userIdString ? parseInt(userIdString) : 0;
                
        if (userId) {
            console.log(userId+' babu')
            issue.resolvedBy = userId;
            this.resolveIssueService.updateIssueStatus(issue).then(() => {
                console.log('Issue status updated successfully:', issue);
            }).catch(error => {
                console.error('Error updating issue status:', error);
            });
        } else {
            console.error('User ID not found in localStorage');
        }
    } else {
        console.error('Please select a valid status');
    }
}


}
