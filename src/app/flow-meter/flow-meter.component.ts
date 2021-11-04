import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlowMeterService } from '../services/flow-meter.service';

@Component({
  selector: 'app-flow-meter',
  templateUrl: './flow-meter.component.html',
  styleUrls: ['./flow-meter.component.scss']
})
export class FlowMeterComponent implements OnInit {
  flowForm!: FormGroup;
  isSubmited = false;

  flowTypes = [
    {
      label: 'Przepływ wirtualny',
      value: 'Przepływ wirtualny'
    },
    {
      label: 'Sprzedaz - odczyt ręczny',
      value: 'Sprzedaz - odczyt ręczny'
    },
    {
      label: 'Sprzedaz - odczyt co 12h',
      value: 'Sprzedaz - odczyt co 12h'
    },
    {
      label: 'Sprzedaz - Online',
      value: 'Sprzedaz - Online'
    },
    {
      label: 'Przepływ międzystrefowy',
      value: 'Przepływ międzystrefowy'
    },
    {
      label: 'Przepływ - Zbiornik',
      value: 'Przepływ - Zbiornik'
    },
    {
      label: 'Przepływ - SUW/ZUW',
      value: 'Przepływ - SUW/ZUW'
    },
    {
      label: 'Przepływ nieznany',
      value: 'Przepływ nieznany'
    },
  ];

  constructor(private fb: FormBuilder, private flowMeterService: FlowMeterService) { }

  ngOnInit(): void {
    this.flowForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      average_flow: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmited = true;

    if ( this.flowForm.valid ) {
      this.isSubmited = false;
      this.flowMeterService.enableMarker(true);
      this.flowForm.reset();
    }
  }

}
