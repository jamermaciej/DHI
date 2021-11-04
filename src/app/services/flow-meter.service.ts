import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowMeterService {
  private _isMarkerEnable = new BehaviorSubject<boolean>(false);

  constructor() { }

  isMarkerEnable(): Observable<boolean> {
    return this._isMarkerEnable.asObservable();
  }

  enableMarker(value: boolean) {
    this._isMarkerEnable.next( value );
  }

}
