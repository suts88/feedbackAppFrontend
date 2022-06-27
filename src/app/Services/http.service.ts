import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFeedbackModel } from 'src/Models/IFeedbackModel';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllFeedbacks(): Observable<IFeedbackModel[]>{
    const url = 'http://localhost:8080/feedbacks/all';
    return this.http.get<IFeedbackModel[]>(url);
  }

  getFeedbackById(id: String): Observable<IFeedbackModel>{
    const url = `http://localhost:8080/feedbacks/${id}`;
    return this.http.get<IFeedbackModel>(url);
  }

  createNewFeedback(feedback: IFeedbackModel): Observable<Object> {
    const url = 'http://localhost:8080/feedbacks';
    return this.http.post(url, feedback);
  }
}
