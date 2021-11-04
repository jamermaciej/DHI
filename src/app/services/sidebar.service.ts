import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _isSidebarOpen = new BehaviorSubject<boolean>(false);

  constructor() { }

  isSidebarOpen(): Observable<boolean> {
    return this._isSidebarOpen.asObservable();
  }

  toggleSidebar() {
    const sidebarStatus = this._isSidebarOpen.getValue();
    this._isSidebarOpen.next(!sidebarStatus);
  }
}
