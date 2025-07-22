import { ReactComponent as DownIcon } from '../../assets/images/down.svg';
import './Accordion.scss';
import { ReactNode, useState } from 'react';

export interface AccordionProps {
  title: ReactNode;
  content: ReactNode;
  hasBorder?: boolean;
  isDisabled?: boolean;
  shouldOpenOnIconClick?: boolean;
  accordionIcon?: ReactNode;
}

function Accordion(props: AccordionProps) {
  const { title, content, hasBorder, isDisabled, accordionIcon, shouldOpenOnIconClick } = props;
  const [isActive, setIsActive] = useState(false);

  const accordionHandler = () => !isDisabled && setIsActive(!isActive);

  return (
    <div className="accordion-item">
      <div
        className={`accordion-title ${isDisabled && 'accordion-title-disabled'}`}
        onClick={!shouldOpenOnIconClick ? accordionHandler : undefined}
        data-testid="accordionTitle"
        role="button"
        tabIndex={0}
        onKeyPress={accordionHandler}
      >
        <div>{title}</div>
        <div
          className={`accordion-down-icon ${isActive && 'accordion-up-icon'}
          }`}
        >
          <span role="presentation" onClick={shouldOpenOnIconClick ? accordionHandler : undefined}>
            {accordionIcon}
          </span>
        </div>
      </div>
      {isActive && (
        <div className={`accordion-content ${hasBorder && 'accordion-border-show'}`}>{content}</div>
      )}
    </div>
  );
}

export default Accordion;

Accordion.defaultProps = {
  hasBorder: true,
  isDisabled: false,
  shouldOpenOnIconClick: false,
  accordionIcon: <DownIcon />,
};
