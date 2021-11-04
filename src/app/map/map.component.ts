import { takeUntil } from 'rxjs/operators';
import { FlowMeterService } from './../services/flow-meter.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { latLng, Layer, marker, tileLayer, Map, LeafletMouseEvent, icon } from 'leaflet';
import { Observable, Subject } from 'rxjs';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  isSidebarOpen: Observable<boolean> | undefined;
  isMarkerEnable: boolean | undefined;

  destroySubject$: Subject<any> = new Subject();
  
  LAYER_OSM = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  });
  
  options = {
		layers: [ this.LAYER_OSM ],
		zoom: 15,
		center: latLng(49.8228409431432, 20.802348630968485)
	};
  
  markers: Layer[] = [];

  constructor(private sidebarService: SidebarService, private flowMeterService: FlowMeterService) { }

  addMarker(map: LeafletMouseEvent) {
    const newMarker = marker(
			[ map.latlng.lat, map.latlng.lng ], {
        icon: icon({
          iconSize: [ 50, 50 ],
          iconAnchor: [ 25, 25 ],
          iconUrl: 'assets/marker.png'
        }),
        
      }
		);

		this.markers.push(newMarker);
    this.flowMeterService.enableMarker(false);
  }

  ngOnInit(): void {
    this.isSidebarOpen = this.sidebarService.isSidebarOpen();
    this.flowMeterService.isMarkerEnable().pipe(
      takeUntil(this.destroySubject$)
    ).subscribe(data => this.isMarkerEnable = data)
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

}
