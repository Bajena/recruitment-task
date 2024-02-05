import { Oval } from 'react-loader-spinner';

export default function Loading({ variant = 'lg' }) {
  return (
    <Oval
      visible={true}
      strokeWidth={3}
      height={variant === 'sm' ? '20' : '30'}
      width={variant === 'sm' ? '20' : '30'}
      color="#646cff"
      secondaryColor="#646cffff"
      ariaLabel="oval-loading"
      wrapperClass={
        variant === 'sm' ? 'loader-container__small' : 'loader-container'
      }
    />
  );
}
