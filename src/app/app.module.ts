import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { WidgetAreasComponent } from './widget-areas/widget-areas.component';
import { WidgetFlowComponent } from './widget-flow/widget-flow.component';
import { FlowMeterComponent } from './flow-meter/flow-meter.component';
import { WidgetMapComponent } from './widget-map/widget-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MapComponent,
    ToggleButtonComponent,
    WidgetAreasComponent,
    WidgetFlowComponent,
    FlowMeterComponent,
    WidgetMapComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
