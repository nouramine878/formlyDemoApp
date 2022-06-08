import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  skills = [
    {
      label: 'javascript', value: 'javascript'
    },
    {
      label: 'java', value: 'java'
    },
    {
      label: 'Angular', value: 'Angular'
    },
    {
      label: 'drupal', value: 'drupal'
    }
  ];
  getSkills(): Observable<any[]> {
    return of(this.skills);
  }

}
