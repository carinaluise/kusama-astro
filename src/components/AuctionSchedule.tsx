import React, { useState } from 'react';
import Link from './Link';
import auctionData, {
  AuctionTypes,
} from '../data/components/auctions';

const AuctionSchedule = () => {
  const [selectedAuction, setSelectedAuction] =
    useState<AuctionTypes>({
      start: '#7924237',
      end: '#8023773',
    });

  const handleAuctionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedIndex = Number(event.target.value);
    setSelectedAuction(auctionData[selectedIndex]);
  };

  return (
    <div className="mx-auto">
      <h3 className="mb-8 text-center xl:mb-12">
        Full Auction Schedule
      </h3>
      <div className="mx-auto w-4/5 lg:w-1/2">
        <div className="mx-auto w-4/5">
          <select
            className="auction-select w-full bg-pink/50 px-4 py-2"
            onChange={handleAuctionChange}
          >
            {auctionData.map((auction, index) => (
              <option
                className="opacity-70"
                key={index}
                value={index}
              >
                Auction {index + 1}
              </option>
            ))}
          </select>
          <div className="mx-auto flex justify-end">
            <button className="relative bottom-10 bg-black bg-pink/90 px-4 py-2">
              ▼
            </button>
          </div>
        </div>
        {selectedAuction && (
          <div className="mx-auto">
            <div className="mb-4 border-b-[1px] border-gray/20 pb-4">
              <h5 className="mb-0">Auction Starts</h5>
              {'winners' in selectedAuction ? (
                <Link
                  classNames="my-0"
                  href={`https://kusama.subscan.io/block/${selectedAuction.start}`}
                >
                  Block {selectedAuction.start}
                </Link>
              ) : (
                <p className="my-0">Block {selectedAuction.start}</p>
              )}
            </div>
            {'endStart' in selectedAuction && (
              <div className="mb-4 border-b-[1px] border-gray/20 pb-4">
                <h5 className="my-0">Ending Period Starts</h5>
                <Link
                  classNames="my-0"
                  href={`https://kusama.subscan.io/block/${selectedAuction.endStart}`}
                >
                  Block {selectedAuction.endStart}
                </Link>
              </div>
            )}
            <div className="mb-4 border-b-[1px] border-gray/20 pb-4">
              <h5 className="my-0">Bidding Ends</h5>
              {'winners' in selectedAuction ? (
                <Link
                  classNames="my-0"
                  href={`https://kusama.subscan.io/block/${selectedAuction.end}`}
                >
                  Block {selectedAuction.end}
                </Link>
              ) : (
                <p className="my-0">Block {selectedAuction.start}</p>
              )}
            </div>
            {'winners' in selectedAuction && (
              <div className="mb-4 border-b-[1px] border-gray/20 pb-4">
                <h5 className="my-0">
                  Winning parachain(s) onboarded:
                </h5>
                <p className="my-0">
                  {(selectedAuction.winners ?? []).map(
                    (winner, index) => (
                      <React.Fragment key={index}>
                        <Link
                          classNames="my-0"
                          href={winner.link}
                        >
                          Lease Period {winner.leaseNo}
                        </Link>
                        {index === 0 && ' - '}
                      </React.Fragment>
                    )
                  )}
                </p>
              </div>
            )}
            <p className="text-xs opacity-60">
              The block numbers listed above can change based on
              network block production and the potential for skipped
              blocks. Click on the block number for an estimate of the
              date and time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuctionSchedule;
