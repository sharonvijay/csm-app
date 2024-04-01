import { Injectable } from '@angular/core';
import axios from 'axios';
import { Issue} from '../models/issue.model';

@Injectable({
  providedIn: 'root'
})
export class RaiseIssueService {
  private baseUrl = 'http://localhost:7070/raiseIssue/api';
  private raiseIssueUrl = this.baseUrl+'/createIssue';

  constructor() { }
  async raiseIssue(issue : Issue):Promise<any>
  {
    try {
      const response = await axios.post(this.raiseIssueUrl,issue);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
