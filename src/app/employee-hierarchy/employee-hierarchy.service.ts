import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { SERVICE_URL } from './employee-hierarchy.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeHierarchyService {

  constructor(private http: Http) {
  }

  public processEmployeeHierarchy(payload: string): Observable<Object> {

    return this.http.post(this.getUrl(), payload, this.getOptions())
      .map((res: Response) => res.json());
  }

private getUrl() {
    return SERVICE_URL;
  }

  private getOptions() {
    return new RequestOptions({headers: this.getHeaders()});
  }

  private getHeaders() {
    return new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }

}
