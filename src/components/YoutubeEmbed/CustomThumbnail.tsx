import React from 'react';

interface CustomThumbnailTypes {
  id: string;
  title: string;
  thumbnail: string;
  onClick: () => void;
}

const CustomThumbnail = ({
  title,
  thumbnail,
  onClick,
}: CustomThumbnailTypes) => {
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
          onClick={onClick}
          type="button"
        >
          <img
            className="scale-[0.7] bg-pink hover:bg-turqoise sm:scale-100"
            src="/images/play.png"
          />
        </button>
      </div>
    </div>
  );
};

export default CustomThumbnail;
