import React, { useState } from 'react';

import { useLocalStorage } from '../../hooks/use-local-storage';
import cx from 'classnames';

import YoutubeOverlay from './YoutubeOverlay';
import CustomThumbnail from './CustomThumbnail';

interface YoutubeEmbedTypes {
  id: string;
  title: string;
  thumbnail: string;
  containerClassNames?: string;
}

const YoutubeEmbed = ({
  id,
  title,
  thumbnail,
  containerClassNames = '',
}: YoutubeEmbedTypes) => {
  const [value, setValue] = useLocalStorage('cookie-settings');

  const [isThumbnailVisible, setIsThumbnailVisible] =
    useState<boolean>(true);

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
            />
          )}

          {!cookiesEnabled && (
            <YoutubeOverlay
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

export default YoutubeEmbed;
