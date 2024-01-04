import equals from '../../images/index/equals.svg';
import fast from '../../images/index/fast.svg';
import lifesaver from '../../images/index/saver.svg';
import node from '../../images/index/node.svg';
import technology from '../../images/index/technology.svg';
import arrows from '../../images/index/arrows.svg';

interface BoxItem {
  title: string;
  link1: string;
  link2: string;
}

interface CustomBlockchain {
  title: string;
  description: string;
  img: ImageMetadata;
}

interface BringToYourProject {
  title: string;
  description: string;
}

interface IndexDataTypes {
  customBlockchain: CustomBlockchain[];
  bringToYourProject: BringToYourProject[];
  parachainsAndApplications: string[];
  ksmTokenUtilization: string[];
  boxItems: BoxItem[];
}

const indexData: IndexDataTypes = {
  customBlockchain: [
    {
      title: 'Fast Iteration',
      description:
        'Move fast and ship your product. Kusama’s risk-taking and nimble mentality allows developers to move swiftly through the governance and upgrade process, enabling rapid progress and growth.',
      img: fast,
    },
    {
      title: 'Low Economic Barriers',
      description:
        'Launch your custom blockchain (parachain) project with low barriers to entry. Ideal for lean startups looking to move fast and iterate.',
      img: equals,
    },
    {
      title: 'Advanced Technology',
      description:
        'Build on a next-generation, sharded, multichain network, while employing the newest features before they are deployed on Polkadot.',
      img: technology,
    },
    {
      title: 'Open Governance',
      description:
        'Kusama is owned and governed by a community of network participants who vote on and control the evolution of the network. Have a voice and make your mark in the evolution of the network.',
      img: lifesaver,
    },
    {
      title: 'Engaged Community',
      description:
        'Leverage Polkadot’s global brand and developer community for your parachain, parathread or dApp.',
      img: arrows,
    },
    {
      title: 'Valuable Experience',
      description:
        'For teams looking to move to Polkadot after fine-tuning on Kusama, begin building your community and brand on Kusama before deployment.',
      img: node,
    },
  ],
  bringToYourProject: [
    {
      title: 'Innovation',
      description:
        'Kusama is built by the same teams as Polkadot, using nearly the same code and tools. The network places the latest tech from Parity Technologies and Web3 Foundation in the hands of developers, even before those features make it to Polkadot.',
    },
    {
      title: 'Scalability',
      description:
        'Kusama’s sharded blockchains and open governance provide a scalable and future-proof infrastructure for businesses, marketplaces, and applications to deploy and mature.',
    },
    {
      title: 'Interoperability',
      description:
        'Kusama brings multiple blockchains together into one sharded network, freeing developers from the siloes created by legacy blockchain networks.',
    },
    {
      title: 'Customization',
      description:
        'With Substrate, developers can build their own app-specific blockchain and connect it to Kusama.',
    },
  ],
  parachainsAndApplications: [
    'Gaming and eSports',
    'Messaging',
    'DAO',
    'Marketplaces',
    'Oracles',
    'Music',
    'Social Networking',
  ],
  ksmTokenUtilization: [
    'Validate the network',
    'Nominate validators',
    'Bond parachains or parathreads',
    'Vote on governance referenda',
  ],
  boxItems: [
    {
      title: 'Build',
      link1: 'Kusama Docs',
      link2: 'Learn Substrate',
    },
    {
      title: 'Validate',
      link1: 'Start Validating',
      link2: 'Technical Updates',
    },
    {
      title: 'Join',
      link1: 'Ambassador Program',
      link2: 'Nominate a Validator',
    },
  ],
};

export default indexData;
