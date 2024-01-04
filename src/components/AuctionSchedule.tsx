import React, { useState } from 'react';
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
    <div className="">
      <h3 className="mb-12 text-center xl:mb-24">
        Full Auction Schedule
      </h3>
      <div className="mx-auto text-center">
        <select
          className="w-full bg-pink px-32 py-2 sm:w-1/2"
          onChange={handleAuctionChange}
        >
          {auctionData.map((auction, index) => (
            <option
              className="text-center"
              key={index}
              value={index}
            >
              Auction {index + 1}
            </option>
          ))}
        </select>
      </div>
      {selectedAuction && (
        <div className="mx-auto my-12 sm:my-24 sm:w-3/4">
          <div className="mb-4 border-b-[1px] border-gray/20 pb-4">
            <h5>Auction Starts</h5>
            {'winners' in selectedAuction ? (
              <a
                href={`https://kusama.subscan.io/block/${selectedAuction.start}`}
              >
                Block {selectedAuction.start}
              </a>
            ) : (
              <p>Block {selectedAuction.start}</p>
            )}
          </div>
          {'endStart' in selectedAuction && (
            <div className="mb-4 border-b-[1px] border-gray/20 pb-4">
              <h5>Ending Period Starts</h5>
              <a
                href={`https://kusama.subscan.io/block/${selectedAuction.endStart}`}
              >
                Block {selectedAuction.endStart}
              </a>
            </div>
          )}
          <div className="mb-4 border-b-[1px] border-gray/20 pb-4">
            <h5>Bidding Ends</h5>
            {'winners' in selectedAuction ? (
              <a
                href={`https://kusama.subscan.io/block/${selectedAuction.end}`}
              >
                Block {selectedAuction.end}
              </a>
            ) : (
              <p>Block {selectedAuction.start}</p>
            )}
          </div>
          {'winners' in selectedAuction && (
            <div className="mb-4 border-b-[1px] border-gray/20 pb-4">
              <h5>Winning parachain(s) onboarded:</h5>
              <p>
                {(selectedAuction.winners ?? []).map(
                  (winner, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={winner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lease Period {winner.leaseNo}
                      </a>
                      {index === 0 && ' - '}
                    </React.Fragment>
                  )
                )}
              </p>
            </div>
          )}
          <p className="text-sm opacity-70">
            The block numbers listed above can change based on network
            block production and the potential for skipped blocks.
            Click on the block number for an estimate of the date and
            time.
          </p>
        </div>
      )}
    </div>
  );
};

export default AuctionSchedule;
