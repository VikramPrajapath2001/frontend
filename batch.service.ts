import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from '../models/batch';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  private apiUrl = 'http://localhost:9001/api/batches';

  constructor(private http: HttpClient) {}

  getAllBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.apiUrl);
  }

  getBatchById(id: number): Observable<Batch> {
    return this.http.get<Batch>(`${this.apiUrl}/${id}`);
  }
  // getBatchByName(name: string): Observable<Batch> {
  //   return this.http.get<Batch>(`${this.apiUrl}/${name}`);
  // }

  updateBatchStaffName(id: number, name: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/staff/${id}`, { name });
  }

  deleteBatch(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
