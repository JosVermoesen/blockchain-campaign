import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

const campaignAbi = require('./campaignABI.json');
const campaignFactoryAbi = require('./campaignFactoryABI.json');

declare var window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  private web3!: Web3;
  private campaignFactoryContract!: Contract;
  private campaignContract!: Contract;
  private contractAddress = '0x0C081cc13c62BC9cAd9Ce6d322Ad97D0f77A6967';

  constructor(private zone: NgZone) {
    if (window.web3) {
      this.web3 = new Web3(window.ethereum);
      this.campaignFactoryContract = new this.web3.eth.Contract(
        campaignFactoryAbi,
        this.contractAddress
      );

      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      alert(
        'Metamask not found. Install or enable Metamask. Be sure to run Rinkeby testwork'
      );
    }
  }

  getAccount(): Promise<string> {
    return this.web3.eth.getAccounts().then((accounts) => accounts[0] || '');
  }

  async callFactory(fnName: string, ...args: any[]) {
    const acc = await this.getAccount();

    return this.campaignFactoryContract.methods[fnName](...args).call({
      from: acc,
    });
  }

  async getCampaignsArray(): Promise<[]> {
    const campaignsArray = await this.callFactory('getDeployedCampaigns');
    return campaignsArray;
  }

  /* onEvent(name: string) {
    return this.onEvents(name);
  } */

  /* onEvents(event: string) {
    return new Observable((observer) => {
      this.contract.events[event]().on(
        'data',
        (data: { event: any; returnValues: any }) => {
          // THIS MUST RUN INSIDE ANGULAR ZONE AS IT'S LISTENING FOR 'ON'
          this.zone.run(() => {
            observer.next({
              event: data.event,
              payload: data.returnValues,
            });
          });
        }
      );
    });
  } */
}
