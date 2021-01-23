import { Injectable } from '@angular/core';
import { Contacts } from '../../models/contacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
}
