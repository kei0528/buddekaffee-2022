import { useProgressiveImageState } from './ProgressiveImage.state';

type ProgressiveImageType = {
  src: string;
  srcLowReso: string;
  width: string;
  height: string;
  objectFit?: 'contain' | 'cover';
  className?: string;
};

export const ProgressiveImage = ({ src, srcLowReso, height, className = '', width, objectFit = 'contain' }: ProgressiveImageType) => {
  const { highResoImgOnLoad, highResoImgLoaded } = useProgressiveImageState();

  return (
    <div className={`relative ${className}`} style={{ height: height, width: width }}>
      <img className='absolute w-full h-full duration-[2s]' style={{ objectFit: objectFit, opacity: highResoImgLoaded ? 1 : 0 }} src={src} onLoad={highResoImgOnLoad} alt='' />
      <img className='absolute w-full h-full blur-xl duration-[2s]' style={{ objectFit: objectFit, opacity: highResoImgLoaded ? 0 : 1 }} src={srcLowReso} alt='' />
    </div>
  );
};
