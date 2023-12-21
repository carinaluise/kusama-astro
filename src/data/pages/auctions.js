import Frame1 from '../../images/auctions/frame1.svg';
import Frame2 from '../../images/auctions/frame2.svg';
import Frame3 from '../../images/auctions/frame3.svg';
import Frame4 from '../../images/auctions/frame4.svg';
import Frame5 from '../../images/auctions/frame5.svg';
import Frame6 from '../../images/auctions/frame6.svg';

import Square1 from '../../images/auctions/square1.png';
import Square2 from '../../images/auctions/square2.png';
import Square3 from '../../images/auctions/square3.png';
import Square4 from '../../images/auctions/square4.png';
import Square5 from '../../images/auctions/square5.png';

import Square6 from '../../images/auctions/square6.png';
import Square7 from '../../images/auctions/square7.png';
import Square8 from '../../images/auctions/square8.png';
import Square9 from '../../images/auctions/square9.png';
import Square10 from '../../images/auctions/square10.png';

const AuctionsData = {
  participate: [
    {
      description: 'Design a parachain and build it using Substrate',
      img: Frame1,
    },
    {
      description:
        'Test and optimize locally, then on a testnet like Rococo',
      img: Frame2,
    },
    {
      description: 'Determine a slot lease auction strategy',
      img: Frame3,
    },
    {
      description:
        'Join an auction and bid away for approximately 1 week',
      img: Frame4,
    },
    {
      description:
        'Deploy on the acquired slot after the start of the lease',
      img: Frame5,
    },
    {
      description:
        'Renew at end of the lease period by joining another auction',
      img: Frame6,
    },
  ],
  mechanics: [
    {
      description:
        'Teams bid by specifying at least one contiguous range of 1-8 lease periods (each lease period is 6 weeks) and the amount of KSM they are willing to lock up for the duration of the chosen range',
      img: Square1,
    },
    {
      description:
        'Open bidding continues for the duration of the auction. Teams can see other bids and increase their bid over time to stay competitive throughout the auction.',
      img: Square2,
    },
    {
      description:
        'At the end of the auction, the precise moment of the auction’s close is randomly and retroactively determined by a verifiable random function (VRF).',
      img: Square3,
    },
    {
      description:
        'The winning parachain is automatically onboarded at the start of the lease. The KSM amount that was bid remains locked for the duration of the lease, after which it can be unlocked.',
      img: Square4,
    },
    {
      description:
        'Teams can extend their lease by winning another auction before the conclusion of their current slot lease period.',
      img: Square5,
    },
  ],
  crowdloans: [
    {
      description:
        'The team creates a crowdloan campaign, setting a maximum of total allowed contributions and a campaign end date (to account for the possibility of losing one or more auctions, a campaign can last for several auctions), and invites their community to participate.',
      img: Square6,
    },
    {
      description:
        'Crowdloan contributors initiate a special transaction allocating transferable KSM to the campaign’s index (this is different from a normal send transaction, contributors should NOT send KSM to an external account).',
      img: Square7,
    },
    {
      description:
        'KSM contributions can be submitted throughout the duration of the crowdloan campaign or until an auction is won, up to the maximum amount of contributions set by the parachain team when creating the campaign.',
      img: Square8,
    },
    {
      description:
        'If there are enough contributions to win an auction, the chain is automatically deployed at the start of the lease, and the full amount of KSM contributed to the campaign index will remain locked for the duration of the lease.',
      img: Square9,
    },
    {
      description:
        'Crowdloaned KSM can be unlocked and returned to contributor’s control at the end of the lease period. In the event that a crowdloan campaign ends without the team winning an auction, contributors’ KSM can be unlocked at the end of the campaign.',
      img: Square10,
    },
  ],
  crowdloans2: [
    {
      title: 'DYOR',
      description:
        'Thoroughly research the parachain project and team, and read the details and conditions of their crowdloan campaign. Given that Kusama is a decentralized network and crowdloans are conducted independently by independent teams, it’s important to do your own research. Make sure you only get information from official channels. If ever in doubt, ask in the crowdloan Discord chat.',
    },
    {
      title: 'Learn how to protect yourself',
      description:
        'Read this guide for the basic tips on avoiding scams. If you’re inexperienced using blockchain technology, make sure you’re aware of basic best practices like how to protect your secret keys.',
    },
    {
      title: 'Determine where you will participate',
      description:
        'Teams can choose to host their crowdloan campaigns natively on Kusama and/or via third party intermediaries. For Kusama-native crowdloans, you can participate on Polkadot-JS. If you’re less experienced using blockchain technology, you may find it easier to participate in a non-native campaign. Find out where you can participate here.',
    },
    {
      title: 'Create a Kusama account',
      description:
        'You’ll need a Kusama account with a free balance of KSM to contribute to a Kusama-native crowdloan. Watch the video to learn how to create an account on Polkadot-JS.',
      videoSrc: '0adTOJ6ZoEo',
      thumbnail: '/thumbnails/account.webp',
    },
    {
      title: 'Make your contribution',
      description:
        'Watch the video below to learn how to contribute via Polkadot-JS.',
      videoSrc: 'w7fErttPUcI',
      thumbnail: '/thumbnails/crowdloans2.webp',
    },
  ],
  safetyTips: [
    {
      description: 'Never share your seed phrase or account password.',
    },
    {
      description:
        'Remember that it’s easy for scammers to impersonate people online.',
    },
    {
      description:
        'If you are participating in a Kusama-native crowdloan (see FAQ below), never send your KSM to an address. Native crowdloan contributions are made with a special transaction in Kusama using what’s called a campaign index, where contributed KSM remain locked until the end of the lease period. Legitimate teams will not ask you to send KSM to an address to participate in a Kusama-native crowdloan.',
    },
    {
      description:
        'If participating in a non-native crowdloan campaign, always consult the official channels of parachain teams to verify the details of how to participate. Remember that scammers may try to impersonate official channels and team members. Never participate in a crowdloan you don’t trust, and never send tokens to someone you don’t trust.',
    },
    {
      description:
        'Remember that if you are scammed, there is nothing that can be done to recover your funds.',
    },
  ],
};

export default AuctionsData;
