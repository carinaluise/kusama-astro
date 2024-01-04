interface FooterItem {
  title: string;
  items: {
    title: string;
    link: string;
  }[];
}

type FooterRoutes = FooterItem[];

const footerRoutes: FooterRoutes = [
  {
    title: 'Developers',
    items: [
      {
        title: 'Guide',
        link: 'https://guide.kusama.network/',
      },
      {
        title: 'Github',
        link: 'https://github.com/paritytech/polkadot',
      },
      {
        title: 'Technical Riot Chat',
        link: 'https://matrix.to/#/!HzySYSaIhtyWrwiwEV:matrix.org?via=matrix.parity.io&via=matrix.org&via=web3.foundation',
      },
      {
        title: 'Web3 Foundation Grants',
        link: 'https://grants.web3.foundation/',
      },
      {
        title: 'Governance Chat',
        link: 'https://matrix.to/#/#Kusama-Direction:parity.io',
      },
      {
        title: 'Validator Chat',
        link: 'https://matrix.to/#/!LhjZccBOqFNYKLdmbb:polkadot.builders?via=matrix.parity.io&via=matrix.org&via=web3.foundation',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Community Hub',
        link: 'https://web3foundation.notion.site/Polkadot-Kusama-Community-Hub-ee1fd077ff6c42c381940404f6aa9f1c',
      },
      {
        title: 'Ambassador Program',
        link: 'https://share.hsforms.com/7051618/2ed06e3a-2d5b-4acf-a9f1-71970bf868cb',
      },
      {
        title: 'Meetup Hub',
        link: 'https://www.notion.so/4511c156770e4ba9936386d8be5fe5be',
      },
      {
        title: 'Find a Local Meetup',
        link: 'https://www.meetup.com/pro/polkadot/',
      },
      {
        title: 'Blog',
        link: 'https://polkadot.network/blog/tag/kusama/',
      },
      {
        title: 'Brand Assets',
        link: '#blog',
      },
    ],
  },
  {
    title: 'Social',
    items: [
      {
        title: 'Discord',
        link: 'https://kusama-discord.w3f.tools/',
      },
      {
        title: 'Watercooler Riot Chat',
        link: 'https://matrix.to/#/!HfRYKXBoPmDBCAWUEJ:polkadot.builders?via=web3.foundation&via=matrix.org&via=matrix.parity.io',
      },
      {
        title: 'Twitter',
        link: 'https://twitter.com/kusamanetwork',
      },
      {
        title: 'Reddit',
        link: 'https://www.reddit.com/r/Kusama/',
      },
      {
        title: 'YouTube',
        link: 'https://www.youtube.com/channel/UCq4MRrQhdoIR0b44GxcCPxw',
      },
      {
        title: 'Crowdcast Webinars',
        link: 'https://www.crowdcast.io/polkadot',
      },
    ],
  },
  {
    title: 'Info',
    items: [
      {
        title: 'Support',
        link: 'https://support.polkadot.network/support/home',
      },
      {
        title: 'Polkadot',
        link: 'https://polkadot.network/',
      },
      {
        title: 'Substrate',
        link: 'https://docs.substrate.io/',
      },
      {
        title: 'Careers',
        link: 'https://web3.bamboohr.com/careers',
      },
      {
        title: 'Web3 Foundation',
        link: 'https://web3.foundation/',
      },
      {
        title: 'Parity Technologies',
        link: 'https://www.parity.io/',
      },
    ],
  },
];

export default footerRoutes;
