import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class IssueStatusService {
  private baseUrl = 'http://localhost:7070/raiseIssue/api';
  private statusUrl = this.baseUrl+'/getAllUserIssues';

  constructor() { }

  async issueStatus(userId : string):Promise<any>
  {
    try {
      const response = await axios.get(this.statusUrl+'/'+userId);
      return response.data;
    } catch (error) {
      throw error;
    }

  }
}
