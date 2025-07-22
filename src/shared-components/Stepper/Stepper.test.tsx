import {render} from '@testing-library/react';

import Stepper from './Stepper';

describe('Stepper component', () => {
  const steps = [
    {label: 'step1', isActive: true, isCompleted: true},
    {label: 'step2', isActive: true, isCompleted: false},
    {label: 'step3', isActive: false, isCompleted: false},
  ];
  it('Should render default Stepper component', () => {
    const {getByTestId} = render(<Stepper steps={steps} />);
    const stepper = getByTestId('stepper');
    expect(stepper).toBeInTheDocument();
  });

  it('Should display step completed ', () => {
    render(<Stepper steps={steps} />);
    const completed = document.querySelectorAll('path');
    expect(completed.length).toBe(1);
  });

  it('Should display number of steps ', () => {
    render(<Stepper steps={steps} />);
    const active = document.querySelectorAll('text');
    expect(active[0].textContent).toBe('2');
    expect(active[1].textContent).toBe('3');
  });

  it('Should render vertical Stepper component', () => {
    const {getByTestId} = render(<Stepper variant='vertical' steps={steps} />);
    const stepper = getByTestId('stepper');
    expect(stepper).toBeInTheDocument();
  });

  it('Should render Stepper component with diffrent props', () => {
    const {getByTestId, rerender} = render(
      <Stepper variant='vertical' steps={steps} />
    );
    const stepper = getByTestId('stepper');
    expect(stepper).toBeInTheDocument();
    const steps2 = [
      {label: 'step1', isActive: true, isCompleted: true},
      {label: 'step2', isActive: true, isCompleted: true},
      {label: 'step3', isActive: true, isCompleted: true},
      {label: 'step4', isActive: true, isCompleted: true},
    ];
    rerender(<Stepper variant='vertical' steps={steps2} />);
    const completed = document.querySelectorAll('path');
    expect(completed.length).toBe(4);
  });

  it('Should render Stepper component with same props', () => {
    const {getByTestId, rerender} = render(
      <Stepper variant='vertical' steps={steps} />
    );
    const stepper = getByTestId('stepper');
    expect(stepper).toBeInTheDocument();
    rerender(<Stepper variant='vertical' steps={steps} />);
    const completed = document.querySelectorAll('path');
    expect(completed.length).toBe(1);
  });
});
