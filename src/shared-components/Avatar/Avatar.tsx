import {memo} from 'react';

import './Avatar.scss';

export interface AvatarProps {
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  alt?: string;
  rounded?: boolean;
  size?: 'small' | 'medium' | 'large';
}
function Avatar({
  firstName,
  lastName,
  imageUrl,
  alt,
  rounded,
  size,
}: AvatarProps) {
  const userName = `${firstName && firstName.substring(0, 1)}${
    lastName && lastName.substring(0, 1)
  }`;

  return (
    <div className='avatar-container' data-testid='avatar-container'>
      {imageUrl ? (
        <div
          data-testid='avatar-image'
          className={`avatar-image ${rounded && 'rounded'} ${size}`}>
          <img
            className={`${rounded && 'rounded'} `}
            alt={alt}
            src={imageUrl}
          />
        </div>
      ) : (
        userName && (
          <div
            data-testid='avatar-text'
            className={`${userName && 'avatar-text'}  ${
              rounded && 'rounded'
            } ${size}`}>
            {userName}
          </div>
        )
      )}
    </div>
  );
}
Avatar.defaultProps = {
  firstName: '',
  lastName: '',
  imageUrl: '',
  alt: '',
  size: 'medium',
  rounded: true,
};

export default memo(Avatar);
