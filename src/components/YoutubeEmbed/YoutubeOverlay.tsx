import React from 'react';
import Button from '../Button';
import Link from '../Link';

interface YoutubeOverlayTypes {
  id: string;
  title: string;
  thumbnail: string;
  acceptAll: () => void;
}

const YoutubeOverlay = ({ id, acceptAll }: YoutubeOverlayTypes) => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-95 text-white">
      <h3 className="font-heading mb-4 mt-8 text-center text-white sm:mt-4">
        You must enable all cookie types to play this video
      </h3>
      <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 ">
        <Button
          variant="small"
          onClick={acceptAll}
        >
          Accept All
        </Button>
        <Link href={`https://www.youtube.com/watch?v=${id}`}>
          <Button variant="small">Watch on YouTube</Button>
        </Link>
      </div>
    </div>
  );
};

export default YoutubeOverlay;
