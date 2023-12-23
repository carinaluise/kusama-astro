import { useState } from 'react';

import { useLocalStorage } from '../hooks/use-local-storage';
import cx from 'classnames';

import Button from './Button';

const YoutubeEmbed = ({
  id,
  title,
  thumbnail,
  containerClassNames = '',
}) => {
  const [value, setValue] = useLocalStorage('cookie-settings');

  const [isThumbnailVisible, setIsThumbnailVisible] = useState(true);

  const isValueInit = Boolean(value);
  const cookiesEnabled =
    isValueInit &&
    Object.values(value).every(option => option === true);

  return (
    <div
      className={cx([
        containerClassNames,
        'aspect-w-16 aspect-h-9 border-current relative overflow-hidden rounded border-0 ',
      ])}
    >
      <CustomThumbnail
        id={id}
        title={title}
        thumbnail={thumbnail}
        onClick={() => setIsThumbnailVisible(false)}
      />

      {!isThumbnailVisible && (
        <div className="absolute top-0 h-full w-full">
          {cookiesEnabled && (
            <iframe
              className="border-1 border-currrent h-full w-full rounded"
              title={title}
              allow="fullscreen; encrypted-media accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              frameBorder="0"
              src={`https://www.youtube-nocookie.com/embed/${id}?&mute=1&autoplay=1&autopause=0`}
            ></iframe>
          )}

          {!cookiesEnabled && (
            <CookieOverlay
              id={id}
              title={title}
              thumbnail={thumbnail}
              acceptAll={() =>
                setValue({
                  necessary: true,
                  functional: true,
                  performance: true,
                  marketing: true,
                })
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

const CustomThumbnail = ({ title, thumbnail, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hover:cursor-pointer"
    >
      <img
        className="h-full w-full object-cover"
        src={thumbnail}
        alt={title}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          className="focus-visible:outline-primary outline-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2"
          role="button"
          alt={title}
          onClick={onClick}
          type="button"
        >
          <img
            className="bg-pink hover:bg-turqoise"
            src="/images/play.png"
          />
        </button>
      </div>
    </div>
  );
};

const CookieOverlay = ({ id, acceptAll }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-95 text-white">
      <h3 className="font-heading mb-4 mt-8 text-center text-white sm:mt-4">
        You must enable all cookie types to play this video
      </h3>
      <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 ">
        <Button
          varient="small"
          onClick={acceptAll}
        >
          Accept All
        </Button>
        <a href={`https://www.youtube.com/watch?v=${id}`}>
          <Button varient="small">Watch on YouTube</Button>
        </a>
      </div>
    </div>
  );
};

export default YoutubeEmbed;
