import cx from 'classnames';

const Button = ({ varient = 'default', onClick = undefined, children }) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        'border-2 my-4 hover:border-turqoise hover:text-turqoise py-2 px-4',
        { 'border-pink text-pink ': varient === 'default' },
        { 'border-white text-white': varient === 'white' },
        { 'text-xs tracking-tight border-pink text-pink': varient === 'small' }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
