import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medication } from './medication';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private medicationUrl = 'https://mstrest.herokuapp.com/medications';

  constructor(private http: HttpClient) { }

  getMedications (): Observable<Medication[]> {
    return this.http.get<Medication[]>(this.medicationUrl);
  }

  getMedication(id: number): Observable<Medication> {
    const url = `${this.medicationUrl}/${id}`;
    return this.http.get<Medication>(url);
  }

  addMedication (medication: Medication): Observable<Medication> {
    return this.http.post<Medication>(this.medicationUrl, medication, httpOptions);
  }

  deleteMedication (medication: Medication | number): Observable<Medication> {
    const id = typeof medication === 'number' ? medication : medication.id;
    const url = `${this.medicationUrl}/${id}`;

    return this.http.delete<Medication>(url, httpOptions);
  }

  updateMedication(medication: Medication): Observable<any> {
    return this.http.put(this.medicationUrl, medication, httpOptions);
  }



}
