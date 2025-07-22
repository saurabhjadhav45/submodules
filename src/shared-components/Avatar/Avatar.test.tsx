import {render, screen} from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar component', () => {
  it('Should avatar component render', () => {
    render(<Avatar firstName='John' lastName='David' rounded size='small' />);
    expect(screen.getByTestId('avatar-container')).toBeInTheDocument();
    expect(screen.getByTestId('avatar-text')).toBeInTheDocument();
    expect(screen.getByTestId('avatar-text')).toHaveTextContent('JD');
  });
  it('imageUrl should render', () => {
    render(
      <Avatar
        imageUrl='https://res.cloudinary.com/de9kghuz8/image/upload/v1658372152/thumbnail_Newuser_58f9959886.png'
        alt='avatar'
        rounded
        size='small'
      />
    );
    expect(screen.getByTestId('avatar-container')).toBeInTheDocument();
    expect(screen.getByTestId('avatar-image')).toBeInTheDocument();
  });
});
