import {render, screen} from '@testing-library/react';

import HomeIcon from '../icons/HomeIcon/HomeIcon';
import Breadcrumbs, {BreadcrumbType} from './Breadcrumbs';

const breadcrumbsData: BreadcrumbType[] = [
  {
    id: 1,
    text: 'MUI',
  },
  {
    id: 2,
    text: 'Core',
  },
  {
    id: 3,
    text: 'Breadcrumbs',
  },
];

const breadcrumbsWithROutes: BreadcrumbType[] = [
  {
    id: 1,
    text: 'MUI',
    icon: <HomeIcon width={14} height={14} />,
    route: 'https://perennialsys.com/',
  },
  {
    id: 2,
    text: 'Core',
    icon: <HomeIcon width={14} height={14} />,
    route: 'https://storybook.js.org/',
  },
  {
    id: 3,
    text: 'Breadcrumbs',
    icon: <HomeIcon width={14} height={14} />,
    route: 'https://reactjs.org/',
  },
];

describe('Rendering part for Breadcrumbs component testing', () => {
  it('should render Breadcrumbs with default props', () => {
    render(<Breadcrumbs breadcrumbs={breadcrumbsData} />);

    const breadcrumbsWrapper = screen.getByTestId('breadcrumb-wrapper');

    expect(breadcrumbsWrapper).toBeInTheDocument();
  });

  it('should render Breadcrumbs with icons and routes props', () => {
    render(<Breadcrumbs breadcrumbs={breadcrumbsWithROutes} />);

    expect(screen.getAllByTestId('breadcrumb-icon')).toHaveLength(3);
  });
});
