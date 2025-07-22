import {fireEvent, render, screen, waitFor} from '@testing-library/react';

import Accordion from './Accordion';

describe('Accordion component', () => {
  it('should render Accordion with title and content', async () => {
    render(
      <Accordion title='Title' hasBorder={false} content='Content text' />
    );
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    const title = await waitFor(() => screen.getByTestId('accordionTitle'));
    fireEvent.click(title);
    expect(screen.getByText(/Content text/i)).toBeInTheDocument();
    fireEvent.keyPress(title);
    expect(screen.getByText(/Content text/i)).toBeInTheDocument();
  });

  it('should render Accordion with react node data', async () => {
    const content =
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.';
    render(<Accordion title={<h2>Title</h2>} content={<p>{content}</p>} />);
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    const title = await waitFor(() => screen.getByTestId('accordionTitle'));
    fireEvent.click(title);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should render disabled Accordion with title', async () => {
    render(<Accordion title='Title' content='Content text' isDisabled />);
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    const title = await waitFor(() => screen.getByTestId('accordionTitle'));
    fireEvent.click(title);
    expect(document.querySelectorAll('.accordion-content')).toHaveLength(0);
  });
});
