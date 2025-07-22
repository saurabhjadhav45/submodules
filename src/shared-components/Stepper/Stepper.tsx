import React from 'react';

import './Stepper.scss';

type Step = {label: string; isActive: boolean; isCompleted: boolean};
export interface StepperProps {
  steps: Step[];
  variant?: 'horizontal' | 'vertical';
}
interface StepSvg {
  isActive: boolean;
  isCompleted: boolean;
  indx: number;
}

function StepSvg({isActive, isCompleted, indx}: StepSvg) {
  return (
    <svg
      className={`svg ${isCompleted ? 'completed' : ''} ${
        isActive ? 'active' : 'disable'
      }`}>
      {isCompleted ? (
        <path d='M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z' />
      ) : (
        <>
          <circle cx='12' cy='12' r='12' />
          <text
            className='step-txt'
            x='12'
            y='12'
            textAnchor='middle'
            dominantBaseline='central'>
            {indx + 1}
          </text>
        </>
      )}
    </svg>
  );
}
function Stepper(props: StepperProps) {
  const {steps, variant} = props;

  return (
    <div className='stepper' data-testid='stepper'>
      {variant === 'horizontal' ? (
        <div className='stepper-horizontal'>
          {steps.map((step, indx) => {
            const {isActive, isCompleted, label} = step;
            return (
              <div className='step-item' key={label}>
                {indx !== 0 && (
                  <div className='stepper-connector'>
                    <span
                      className={`connector-line  ${
                        isActive ? 'active' : 'disable'
                      }`}
                    />
                  </div>
                )}
                <span className='step-item-inside'>
                  <span>
                    <StepSvg
                      isActive={isActive}
                      isCompleted={isCompleted}
                      indx={indx}
                    />
                  </span>
                  <span
                    className={`step-label ${isActive && 'active-label fw-5'}`}>
                    {label}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className='stepper-vertical'>
          {steps.map((step, indx) => {
            const {isActive, isCompleted, label} = step;
            return (
              <React.Fragment key={label}>
                <div className='stepper-vertical-container'>
                  <span className='vertical-step-item'>
                    <span className='item-container'>
                      <StepSvg
                        indx={indx}
                        isActive={isActive}
                        isCompleted={isCompleted}
                      />
                    </span>
                    <span
                      className={`step-label ${
                        isActive && 'is-active-label fw-6'
                      }`}>
                      {label}
                    </span>
                  </span>
                </div>
                {indx !== steps.length - 1 && (
                  <div className='vertical-connector'>
                    <span className='vertical-connector-line' />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}

Stepper.defaultProps = {
  variant: 'horizontal',
};

/** this call back handles deep equality check */
const memoCb = (prevProps: StepperProps, newProps: StepperProps) => {
  const keys = Object.keys(prevProps);

  for (let i = 0; i < keys.length; i += 1) {
    if (
      prevProps[keys[i] as keyof StepperProps] !==
      newProps[keys[i] as keyof StepperProps]
    ) {
      return false;
    }
  }
  return true;
};

export default React.memo(Stepper, memoCb);
