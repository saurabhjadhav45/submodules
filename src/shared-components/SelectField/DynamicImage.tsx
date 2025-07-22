import {useEffect, useState} from 'react';

interface DynamicImageProps {
  imgName: string;
}

function DynamicImage({imgName}: DynamicImageProps) {
  const [img, setImg] = useState<string>('');

  useEffect(() => {
    import(`../../assets/images/${imgName}.svg`).then(
      (image: {default: string}) => setImg(image.default)
    );
  }, [imgName]);
  return (
    <div>
      <img src={img} alt={imgName} />
    </div>
  );
}

export default DynamicImage;
