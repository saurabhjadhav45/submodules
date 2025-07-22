/**
 * imports
 * library
 * react-testing methods
 * Badge component
 */
import {render, screen} from '@testing-library/react';

import {ReactComponent as Icon} from '../../assets/images/email.svg';
import Badge from './Badge';

describe('Badge Component', () => {
  it('Should render default Badge component', () => {
    render(
      <Badge id='1' content={[]}>
        Badge
      </Badge>
    );
    const badgeElem = screen.getByTestId('badge-elem');
    expect(badgeElem).toBeInTheDocument();
    expect(badgeElem).toHaveTextContent('Badge');
  });

  it('Should render standard Badge component if content is greater than max value', () => {
    render(
      <Badge id='1' content={1234} variant='standard' maxValue={999}>
        Badge
      </Badge>
    );
    const standardElem = screen.getByTestId('standard-elem');
    expect(standardElem).toHaveTextContent('999+');
  });

  it('Should render standard Badge component if content is less than max value', () => {
    render(
      <Badge id='1' content={23} variant='standard' maxValue={99}>
        Badge
      </Badge>
    );
    const standardElem = screen.getByTestId('standard-elem');
    expect(standardElem).toHaveTextContent('23');
  });

  it('Should render standard Badge component if content is Icon', () => {
    render(
      <Badge id='1' content={<Icon />} variant='standard'>
        Badge
      </Badge>
    );
    const standardElem = screen.getByTestId('standard-elem');
    expect(standardElem).toContainHTML('svg');
  });

  it('Should render standard Badge component if Icon exist', () => {
    render(
      <Badge id='1' content='113' variant='standard'>
        <Icon />
      </Badge>
    );
    const standardElem = screen.getByTestId('standard-elem');
    expect(standardElem).toBeInTheDocument();
  });

  it('Should render dot Badge component if variant equal to dot', () => {
    render(
      <Badge id='1' variant='dot'>
        Badge
      </Badge>
    );
    const standardElem = screen.getByTestId('dot-elem');
    expect(standardElem).toBeInTheDocument();
    expect(standardElem).toHaveTextContent('');
  });
});
