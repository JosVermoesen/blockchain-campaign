import web3 from './web3';
import CampaignFactory from './CampaignFactory.json';

const address = '0x0C081cc13c62BC9cAd9Ce6d322Ad97D0f77A6967';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  address
);

export default instance;
