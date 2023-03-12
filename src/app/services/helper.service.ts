import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = '/api/read/json';
  posts: Post[] = [];

  getRawData(): Observable<any> {
    return this.httpClient.get(this.apiUrl, { responseType: 'text' });
  }

  parseAndAssignDates(posts: Post[]) {
    const weekdayStartIndex = 0;
    const weekdayEndIndex = 3;
    const monthStartIndex = 8;
    const monthEndIndex = 11;
    const dayStartIndex = 5;
    const dayEndIndex = 7;

    posts.forEach((post) => {
      const weekday = post['date']
        .substring(weekdayStartIndex, weekdayEndIndex)
        .toUpperCase();
      post['weekday'] = weekday;

      const month = post['date']
        .substring(monthStartIndex, monthEndIndex)
        .toUpperCase();
      post['month'] = month;

      const day = post['date']
        .substring(dayStartIndex, dayEndIndex)
        .toUpperCase();
      post['day'] = day;
    })
  }

  parseApiStringToJson(apiString: String) {
    const startIndex = apiString.indexOf('{');
    const endIndex = apiString.lastIndexOf(';');
    const selectedString = apiString.substring(startIndex, endIndex);
    return JSON.parse(selectedString);
  };

  categorizePostsByDate(posts: Post[]) {
    let previousMonth = '',
      previousDay = '';
    // Assign only the first post of each day, set false the rest until the day changes. Repeat for each day. 
    posts.forEach(post => {
      if (previousDay === post['day'] && previousMonth === post['month']) {
        post['is-date-visible'] = false;
      } else {
        post['is-date-visible'] = true;
      }

      previousMonth = post['month'];
      previousDay = post['day'];

    })
  };


}

