import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizApiService {
  constructor(private http: HttpClient) {}

  getTestimonials<T>(): Observable<T> {
    return this.http.get<T>('/assets/questionnaire.json');
  }
}
