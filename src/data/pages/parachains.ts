import diamond1 from '../../images/parachains/diamond1.svg';
import diamond2 from '../../images/parachains/diamond2.svg';
import diamond3 from '../../images/parachains/diamond3.svg';
import diamond4 from '../../images/parachains/diamond4.svg';
import diamond5 from '../../images/parachains/diamond5.svg';
import diamond6 from '../../images/parachains/diamond6.svg';

import nft1 from '../../images/parachains/nft1.jpg';
import nft2 from '../../images/parachains/nft2.jpg';
import nft3 from '../../images/parachains/nft3.jpg';

export interface ParachainTypes {
  title: string;
  description: string;
  img: ImageMetadata;
}

export interface AuctionInfoTypes {
  title: string;
  description: string;
}

export interface NFTTypes {
  aside: string;
  title: string;
  img: ImageMetadata;
}

interface ParachainsDataTypes {
  paraverse: ParachainTypes[];
  auctionInfo: AuctionInfoTypes[];
  nfts: NFTTypes[];
}

export const parachainsData: ParachainsDataTypes = {
  paraverse: [
    {
      title: 'Independent token economies',
      description:
        'Parachains with their own tokens, fee structures, and economic ecosystems.',
      img: diamond1,
    },
    {
      title: 'Smart contract parachains',
      description:
        'Platforms for hosting smart contract-based dapps and services.',
      img: diamond2,
    },
    {
      title: 'Common good parachains',
      description:
        'Designed for the benefit of the entire Kusama ecosystem, common good chains typically use the network’s native token, KSM.',
      img: diamond3,
    },
    {
      title: 'Parachain hubs',
      description:
        'Parachains that provide a range of functionality to serve a broader community or use case, for example DeFi hubs and governance hubs.',
      img: diamond4,
    },
    {
      title: 'Bridge parachains',
      description:
        'Bridges allow Kusama parachains to connect to external networks like Polkadot, Bitcoin, and Ethereum.',
      img: diamond5,
    },
    {
      title: 'Parathreads',
      description:
        'Pay-as-you-go parachains for early-stage networks and those that don’t need continuous connectivity to Kusama.',
      img: diamond6,
    },
  ],
  auctionInfo: [
    {
      title: 'Bonding',
      description:
        'To bid in an auction, parachain teams agree to lock up (or bond) a portion of Kusama’s native token, KSM, for the duration of the lease. While bonded for a lease, the KSM cannot be used for other activities like staking or transfers.',
    },
    {
      title: 'Auction cost',
      description:
        'After the lease, the full amount of KSM is unlocked, meaning auctions do not require teams to “spend” KSM. The cost of running a parachain on Kusama is best characterized as the opportunity cost of not being able to use the bonded KSM for other activities.',
    },
    {
      title: 'Crowdloans',
      description:
        'Some parachain teams will fund their bid with the help of a crowdloan campaign, which allows them to accept contributions from KSM holders. Crowdloan contributors get their KSM back at the end of the lease, and parachain teams can choose to reward them in various ways, including with a distribution of the parachain’s native token.',
    },
    {
      title: 'Auction Duration',
      description:
        'Auctions on Kusama have an open bidding period of approximately 1 week. At the end of the week, the precise moment of the auction’s close is determined retroactively. This prevents last-minute “auction sniping” and promotes more accurate price discovery. Parachains can onboard to Kusama immediately after the auction.',
    },
  ],
  nfts: [
    {
      aside: 'Kusama Parachain Launch',
      title: 'Birdboy by Vidam',
      img: nft1,
    },
    {
      aside: 'Kusama Parachain Launch',
      title: 'Fractanary by Andreas Preis',
      img: nft2,
    },
    {
      aside: 'Kusama Parachain Launch',
      title: 'Anatomy of a cryptocanary by Awer',
      img: nft3,
    },
  ],
};
