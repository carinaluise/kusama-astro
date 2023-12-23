import cx from 'classnames';

const Button = ({
  varient = 'default',
  onClick = undefined,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        'my-4 border-2 px-4 py-2 hover:border-turqoise hover:text-turqoise',
        {
          'border-pink text-pink ': varient === 'default',
        },
        {
          'border-white text-white': varient === 'white',
        },
        {
          'border-pink text-xs tracking-tight text-pink':
            varient === 'small',
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
