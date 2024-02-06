import { Oval } from 'react-loader-spinner';

export default function Loading({ variant = 'lg', centered }) {
  return (
    <Oval
      visible={true}
      strokeWidth={3}
      height={variant === 'sm' ? '20' : '30'}
      width={variant === 'sm' ? '20' : '30'}
      color="#646cff"
      secondaryColor="#646cffff"
      ariaLabel="oval-loading"
      wrapperClass="loader-container"
    />
  );
}
