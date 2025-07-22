import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tooltip from './Tooltip';

describe('Test the Tooltip component', () => {
  function renderTooltipContent() {
    return <span>This is tooltip</span>;
  }

  it('render the Tooltip default props', () => {
    render(
      <Tooltip content={renderTooltipContent()} direction='right'>
        hover me
      </Tooltip>
    );
    const tooltip = screen.getByTestId('tooltip-wrapper');
    expect(tooltip).toBeInTheDocument();
  });

  it('render the Tooltip component with props (HOVER)', () => {
    render(
      <Tooltip
        content={renderTooltipContent()}
        direction='left'
        hasArrowPointer>
        hover me
      </Tooltip>
    );
    const tooltip = screen.getByTestId('tooltip-wrapper');
    expect(tooltip).toBeInTheDocument();
    userEvent.hover(tooltip);
    expect(screen.getByText('This is tooltip')).toBeInTheDocument();
    userEvent.unhover(tooltip);
    expect(screen.queryByText('This is tooltip')).not.toBeInTheDocument();
  });

  it('show the text when focus the input (FOCUS)', async () => {
    render(
      <Tooltip
        content={renderTooltipContent()}
        hasArrowPointer={false}
        direction='bottom'
        behavior='focus'>
        <input data-testid='input-box' type='text' name='' id='' />
      </Tooltip>
    );
    expect(screen.getByTestId('input-box')).toBeInTheDocument();
    fireEvent.focus(screen.getByTestId('input-box'));
    fireEvent.mouseOver(screen.getByTestId('tooltip-wrapper'));
    expect(screen.queryByText('This is tooltip')).toBeInTheDocument();
    fireEvent.focusOut(screen.getByTestId('tooltip-wrapper'));
    expect(screen.queryByText('This is tooltip')).not.toBeInTheDocument();
  });
});
