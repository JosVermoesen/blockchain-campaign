import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Web3Service } from './blockchain/web3.service';

import { worker } from 'cluster';
import { resourceUsage } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  campaigns!: string[];

  constructor(private ws: Web3Service) {}

  ngOnInit() {
    this.ws.getCampaignsArray().then((result) => {
      this.campaigns = result;
    });
  }
}
