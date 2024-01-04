interface SwiperItem {
  items: {
    description: string;
    title: string;
    paragraph: string;
  }[];
}

type SwiperData = SwiperItem[];

const swiperData: SwiperData = [
  {
    items: [
      {
        description: 'Legacy blockchains',
        title: '1-size-fits-none',
        paragraph:
          'A single, limiting design for the entire network. No ability to optimize for specific use cases, so compromises and tradeoffs must be made.',
      },
      {
        description: 'Parachains',
        title: 'Specialized',
        paragraph:
          'Parachains are specialized for a multitude of use cases, enabling more optimized services and thriving, multifaceted economies.',
      },
    ],
  },
  {
    items: [
      {
        description: 'Legacy blockchains',
        title: 'Isolated',
        paragraph:
          'Most blockchains are like walled gardens, cut off from each other and unable to communicate, prohibiting the free flow of data and commerce.',
      },
      {
        description: 'Parachains',
        title: 'Interconnected',
        paragraph:
          'Parachains are a rich, interconnected ecosystem where data flows freely between chains, leading to innovative new interoperable services.',
      },
    ],
  },
  {
    items: [
      {
        description: 'Legacy blockchains',
        title: 'Limited scalability',
        paragraph:
          'Transactions are processed one-by-one, leading to bottlenecks, network congestion and high fees when dapp usage spikes.',
      },
      {
        description: 'Parachains',
        title: 'Scalable',
        paragraph:
          'Parachains process transactions "in parallel", spreading them across the entire multichain network for maximum scalability.',
      },
    ],
  },
  {
    items: [
      {
        description: 'Legacy blockchains',
        title: 'Difficult to upgrade',
        paragraph:
          'Like all software, blockchains need periodic upgrades to stay relevant. Upgrading most blockchains is painstaking, making them slow to evolve and respond as new technology becomes available.',
      },
      {
        description: 'Parachains',
        title: 'Seamless on-chain upgrades',
        paragraph:
          'Kusama makes upgrading a blockchain more like upgrading a conventional app, with the ability to make most updates seamlessly and automatically in the background.',
      },
    ],
  },
  {
    items: [
      {
        description: 'Legacy blockchains',
        title: 'No financial agency',
        paragraph:
          'Legacy blockchains are dependent on centralized organizations to finance activities that benefit the network, and communities as a whole have no financial agency.',
      },
      {
        description: 'Parachains',
        title: 'On-chain treasuries',
        paragraph:
          'Parachains can leverage on-chain treasuries, giving decentralized communities the financial agency once limited to corporations and governments.',
      },
    ],
  },
  {
    items: [
      {
        description: 'Legacy blockchains',
        title: 'No clear decision making',
        paragraph:
          'Most blockchains have no formal governance procedures. Individual stakeholders are often powerless to propose changes, with decisions made by opaque groups of insiders.',
      },
      {
        description: 'Parachains',
        title: 'Built-in, customizable governance',
        paragraph:
          'Parachains can leverage Kusama’s built-in, transparent governance features or create their own to implement the system that’s best for their community.',
      },
    ],
  },
  {
    items: [
      {
        description: 'Legacy blockchains',
        title: 'Difficult and costly to secure',
        paragraph:
          'Securing blockchains requires a massive amount of resources, creating a significant barrier to entry for new chains and leading to competition for scarce resources between chains.',
      },
      {
        description: 'Parachains',
        title: 'Built-in security',
        paragraph:
          'Parachains get robust security automatically when they connect to Kusama—no need to bootstrap their own network of miners or validators.',
      },
    ],
  },
  {
    items: [
      {
        description: 'Legacy blockchains',
        title: 'Difficult and costly to build and maintain',
        paragraph:
          'Building a conventional blockchain typically takes years of hard work and large teams of experts. Maintenance is costly and time consuming.',
      },
      {
        description: 'Parachains',
        title: 'Streamlined development with Substrate',
        paragraph:
          'Parachains can use the Substrate blockchain framework to drastically simplify and speed up development and maintenance.',
      },
    ],
  },
  {
    items: [
      {
        description: 'Legacy blockchains',
        title: 'High, unpredictable transaction fees',
        paragraph:
          'Fees on blockchains are often unpredictable, fluctuating based on short-term network usage and congestion.',
      },
      {
        description: 'Parachains',
        title: 'Low, transparent fees',
        paragraph:
          'Transaction fees are known in advance and fee structures can be customized by parachain teams. Users can pay fees in the parachain’s native token.',
      },
    ],
  },
  {
    items: [
      {
        description: 'Legacy blockchains',
        title: 'Limited transaction types',
        paragraph:
          'Blockchains and smart contracts are typically limited to a few basic transaction types, like sending funds or triggering a contract. Transactions between chains are limited and often mediated by centralized services.',
      },
      {
        description: 'Parachains',
        title: 'Any type of data',
        paragraph:
          'Kusama allows any type of data to be sent between dapps and parachains, creating an interoperable internet of blockchains and opening the door to a host of innovative new services.',
      },
    ],
  },
];

export default swiperData;
