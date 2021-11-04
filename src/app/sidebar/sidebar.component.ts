import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSidebarOpen: Observable<boolean> | undefined;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.isSidebarOpen = this.sidebarService.isSidebarOpen();
  }

}
