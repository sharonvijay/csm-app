import { Injectable } from '@angular/core';
import axios from 'axios';
import { Issue } from '../models/issue.model';
import { ResolveIssue } from '../models/resolve-issue.model';
import { AcceptIssue } from '../models/accept-issue.model';

@Injectable({
  providedIn: 'root'
})
export class ResolveIssueService {
  private baseUrl = 'http://localhost:9090/resolveIssue/api';
  private getALlIssuesUrl = this.baseUrl+'/getAllIssues';
  private resolveIssueUrl = this.baseUrl+'/resolveIssue';
  private acceptIssueUrl = this.baseUrl+'/acceptIssue';

  acceptIssue: AcceptIssue = {
    issueId: 0,
    adminId: 0
  };

  resolveIssue: ResolveIssue = {
    issueId: 0,
    adminId: 0
  };

  constructor() { }

  async getIssues():Promise<any>
  {
    try {
      const response = await axios.get(this.getALlIssuesUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateIssueStatus(issue:Issue):Promise<any>
  {
    if(issue.status === 'PROCESSING')
    {
      this.acceptIssue.issueId = issue.id;
      this.acceptIssue.adminId = issue.resolvedBy

      try{
        const response = await axios.post(this.acceptIssueUrl,this.acceptIssue);
        return response.data;

      }
      catch(error)
      {
        throw error;
      }

    }
    else if(issue.status === 'RESOLVED')
    {
      this.resolveIssue.issueId = issue.id;
      console.log('service lo ')
      console.log(this.acceptIssue.issueId);
      this.resolveIssue.adminId = issue.resolvedBy
      console.log(this.acceptIssue.adminId);

      try{
        const response = await axios.post(this.resolveIssueUrl, this.resolveIssue);
        return response.data;
      }
      catch(error)
      {
        throw error;
      }

    }
  }
}
