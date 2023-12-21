const FAQData = [
  {
    category: 'Parachains',
    items: [
      {
        question: 'How many total parachain slots will be availble?',
        answer:
          'Based on theoretical computing constraints, the current goal and expectation is that there will be approximately 100 parachain slots available on Kusama, though potential future optimizations (such as nested relay chains) may further increase this number. However, it will take some time before Kusama fully supports 100 parachain slots, and they are likely to be added to the system slowly over time. Not all of these slots will be allocated via parachain slot auctions (upon successful governance vote to begin auctions), as some will be used for governance-enabled common-good parachains and parathreads.',
      },
      {
        question: 'How and when will parathreads be enabled?',
        answer:
          'We expect parathread functionality to launch some months after parachains are live. As with any network upgrade, it will need to be enabled through on-chain governance.',
      },
    ],
  },
  {
    category: 'Leases & Auctions',
    items: [
      {
        question:
          'What happens to the KSM locked up for the duration of the lease?',
        answer:
          'KSM locked for the duration of the parachain’s lease period remains in the account used by the parachain team to bid in the slot auction (or, in the case of a crowdloan, in the index for the campaign), and it is reserved and unavailable for other uses such as staking. At the conclusion of the slot lease, anyone can request for the full amount of KSM to be unlocked, after which it is once again free to be used for activities such as transfers, withdrawals, and staking. For crowdloans, contributed KSM is locked from the moment the contribution is made until the end of the lease, unless the crowdloan campaign is unsuccessful in securing a slot via auction, in which case contributed KSM can be unlocked at the end of the campaign as specified by the parachain team.',
      },
      {
        question: 'What does a slot lease cost?',
        answer:
          'The cost of leasing a parachain slot will purely be a function of market supply and demand, so it’s difficult to give any meaningful estimate as to what the bid requirement will be. However, its important to realize that the actual cost of a parachain slot is not the same as the size of the parachain bid. Since parachain bonds are returned at the conclusion of the slot lease, the actual cost of running a parachain is best characterized as the opportunity cost of not staking those KSM for the duration of the lease. The need to run collators is an additional but relatively minor cost. In general, for high throughput applications we expect parachains to be more economical than building with smart contracts or building a standalone blockchain.',
      },
      {
        question:
          'What is the duration of a slot lease? Do parachains have to bid for the full duration?',
        answer:
          'Parachain teams can bid for leases in contiguous increments of 1-8 6-week periods (from a minimum of 6 weeks to a maximum of 48 weeks). After the lease is over, the slot will go up for auction again and the team will need to bid again if they wish to retain a slot (or connect as a parathread once that feature has launched). Parachain slots are fungible, so to avoid any downtime in connectivity and minimize the risk of losing a subsequent auction, teams can bid on and secure an adjacent slot before their current lease ends.',
      },
      {
        question:
          'What happens if a parachain team loses a slot auction?',
        answer:
          'They will need to join a subsequent auction and bid again. Once parathread functionality is delivered (expected some months after parachains launch), parachain teams will have the option of connecting to Kusama as a parathread while they attempt to secure a dedicated slot. In the case of crowdloan campaigns, a campaign can be set up to last for several auctions to increase the chances of winning a slot. If a team does not win a slot by the end of their set crowdloan campaign endpoint, the total amount of contributed KSM can be once again unlocked and the team will need to initiate a new campaign if they wish to continue participating in auctions.',
      },
      {
        question: 'Why were these lease periods/limits chosen?',
        answer:
          'The method for dividing the parachain slot leases into six-week periods was partly inspired by the desire to allow for a greater amount of parachain diversity, and to prevent particularly large and well-funded parachains from hoarding slots. By making each lease period a 6 weeks but the total slot deployment period 48 weeks, the mechanism can cope with well-funded parachains that will ensure they secure a slot at the end of their lease, while gradually allowing other parachains to enter the ecosystem to occupy the six-week durations that are not filled. For example, if a large, well-funded parachain has already acquired a slot for range 1 - 8, they would be very interested in getting the next slot that would open for 2 - 9. Under this mechanism, that parachain could acquire only period 9 (since that is the only one it needs) and allow range 2 - 8 of the second parachain slot to be occupied by another chain.',
      },
      {
        question:
          'What happens at the end of a parachain’s slot lease? Does the team lose its slot?',
        answer:
          'Individual parachain slots can only be leased for a period of up to 48 weeks (in six-week increments). At the conclusion of the lease, the slot will go back up for auction and the team will need to bid for a slot again if they wish to retain one. Parachain slots are fungible, so teams do not need to always bid on the same slot. To avoid any downtime in connectivity and minimize the risk of losing a subsequent auction, teams can bid on and secure an adjacent slot before their current lease period ends. Teams can also choose to connect to Kusama as a parathread once that feature has launched.',
      },
      {
        question:
          'How can there be multiple teams that win a single auction?',
        answer:
          'Each auction allocates a parachain slot for a total deployment period of 48 weeks. Teams are not required to bid for the full 48-week period, but can specify a contiguous range from 6 weeks to 48 weeks. This means that two or more teams may win one particular slot auction if they each bid on different, non-overlapping lease periods within the full 48-week deployment period. For example, one team may bid on the first 24 weeks, and another team could bid on the second 24 weeks. The winner selection algorithm is designed to maximize the amount of KSM held over the entire 48-week period, and will pick the best combination of non-overlapping bids to achieve that objective.',
      },
      {
        question:
          'How can I follow the status of auctions in progress?',
        answer:
          'Those who have an active account on Kusama will be able to follow auctions in progress on UIs like polkadot.js. There are also a number of 3rd party auction dashboards in development, though Web3 Foundation cannot vouch for their accuracy or safety so always be sure to do your own research.',
      },
      {
        question:
          'Are there other ways of securing a parachain slot besides the candle auction?',
        answer:
          'Parachains considered a common-good for the entire network can be added to a slot via governance vote. Common-good chains are parachains viewed as a common-good, in the sense that they will benefit the entire network, for example a bridge that apps on Kusama could use to connect to an external network like Bitcoin or Ethereum. Chains are designated as a common-good parachain by network governance, which can vote to allocate the chain an empty slot on the Relay Chain, thereby bypassing the auction process. Common-good chains can be thought of as system-level and public utility chains that provide functions and benefits to the network that builders can tap into.',
      },
      {
        question:
          'Which teams participated in the first round of auctions?',
        answer:
          'The following teams took part in the first batch of auctions, for slots 1-5: Altair, Bifrost, Crab Network, Crust Shadow, Genshiro, Karura, Khala Network, Mars, Moonriver, PolkaSmith by PolkaFoundry, Robonomics, Sakura, Shiden, SubGame Gamma.',
      },
    ],
  },
  {
    category: 'Crowdloans',
    items: [
      {
        question:
          'What is a parachain slot crowdloan and how can I participate?',
        answer:
          'Parachain teams may or may not choose to use Kusama’s crowdloan mechanism to help back their parachain slot lease bid. To participate in a crowdloan, users agree to lock up a portion of KSM for the duration of the parachain slot lease period, after which they can be unlocked. To participate in a crowdloan, you must have a transferable balance of KSM, so if your tokens are currently locked due to staking, you’ll need to unbond them in advance of the crowdloan campaign. The unbonding period on Kusama is currently 7 days. The details of individual crowdloan campaigns and the process for joining them will be determined and communicated by the respective parachain teams. Important: Kusama’s native crowdloan mechanism does NOT require users to send KSM from their own wallet/account to a third-party address to participate in a crowdloan. Native crowdloan contributions are made with a special transaction using what’s called a campaign index, whereby contributed KSM remain locked in the campaign index (if the auction is successful, contributed KSM remains locked from the moment the contribution is made until the end of the lease). Legitimate teams conducting a crowdloan natively on Kusama will NOT ask you to send tokens to their address to participate. However, some teams may choose to conduct a crowdloan campaign using other mechanisms or platforms. In this case, be sure to never send tokens to anyone you don’t trust. Always check teams’ official channels to find out how to participate.',
      },
      {
        question:
          'What are the benefits of participating in a crowdloan campaign?',
        answer:
          'Beyond the non-material benefits of supporting parachain teams’ success, teams may or may not offer additional rewards for participating in a crowdloan campaign. A project team who is sourcing the required KSM from its community may choose the type of award, if any, offered to participants for locking their KSM in the event of a winning bid. The decision on the type of award to offer for a successfully secured parachain slot is completely in the control of the project teams and will not receive any input from Web3 Foundation. Awards will take many forms and may vary widely among projects, from a network’s native token to certain goods or rights as directed by project teams and accepted by community members.',
      },
      {
        question:
          'What does it mean for a crowdloan campaign to be conducted ‘natively on Kusama’? What other options are there?',
        answer:
          'A crowdloan conducted natively on Kusama is one that uses the Crowdloan pallet to interact directly with Kusama without the involvement of third parties. Participants in a Kusama-native crowdloan must have a transferable balance (not locked for staking, vesting, governance etc). Teams may also choose to conduct their crowdloan campaign through other methods, including on third party platforms like custodians and exchanges. Important: Kusama’s native crowdloan mechanism does NOT require users to send KSM from their own wallet/account to a third-party address to participate in a crowdloan. Native crowdloan contributions are made with a special transaction using what’s called a campaign index, whereby contributed KSM remain locked in the campaign index (if the auction is successful, contributed KSM remains locked from the moment the contribution is made until the end of the lease). Legitimate teams conducting a crowdloan natively on Kusama will NOT ask you to send tokens to their address to participate. However, some crowdloan campaigns may take place non-natively using other mechanisms or platforms such as exchanges or custodians. In this case, make sure you trust all parties involved and be sure to never send tokens to anyone you don’t trust. Always check teams’ official channels to find out how to participate.',
      },
      {
        question:
          'Is there a minimum contribution amount to participate in a crowdloan?',
        answer:
          'Yes, the current minimum crowdloan contribution is 0.1 KSM. Some teams may also choose to set their own minimum contribution required for receiving rewards.',
      },
      {
        question:
          'Why do crowdloan campaigns have a maximum amount of total allowed contributions?',
        answer:
          'Setting a maximum contribution amount allows teams to place a cap on the rewards that they are willing to offer crowdloan contributors. For example, if a team decides to award contributors with a certain distribution of their native token for every KSM contributed, this allows them to cap the maximum distribution they are willing to make. Teams may choose to reward contributors (or not) in any way they see fit, and Web3 Foundation has no input on what those rewards may consist of.',
      },
    ],
  },
];

export default FAQData;
