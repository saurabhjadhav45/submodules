import {ReactNode, memo, useCallback} from 'react';

import Link from '../Link/Link';
import './Breadcrumbs.scss';

export interface BreadcrumbType {
  id: number;
  text: ReactNode;
  icon?: ReactNode;
  route?: string;
}

type BreadcrumbColors =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'info'
  | 'warning'
  | 'dark';

export interface IBreadcrumbsProps {
  breadcrumbs: BreadcrumbType[];
  separator?: '/' | '>' | '-';
  inactiveBreadcrumbColor?: BreadcrumbColors;
  activeBreadcrumbColor?: BreadcrumbColors;
}

function Breadcrumbs(props: IBreadcrumbsProps) {
  const {
    breadcrumbs,
    separator,
    inactiveBreadcrumbColor,
    activeBreadcrumbColor,
  } = props;

  const breadcrumbContent = useCallback(() => {
    const breadcrumbsLength = breadcrumbs.length - 1;
    return breadcrumbs.map((breadcrumb, index) => (
      <div
        className={`breadcrumb-content ${
          breadcrumbsLength === index && 'absent-router'
        }`}
        key={breadcrumb.id}>
        <Link
          href={breadcrumb.route || '/'}
          className={`${
            breadcrumbsLength === index
              ? `text-${activeBreadcrumbColor}`
              : `text-${inactiveBreadcrumbColor}`
          } `}>
          <div
            className={`breadcrumb-text ${
              breadcrumbsLength === index
                ? 'breadcrumb-active'
                : 'breadcrumb-inactive'
            }`}>
            <div className='breadcrumb-text-wrapper'>
              {breadcrumb.icon && (
                <span className='breadcrumb-icon' data-testid='breadcrumb-icon'>
                  {breadcrumb.icon}
                </span>
              )}
              <span>{breadcrumb.text}</span>
            </div>
          </div>
        </Link>
        {breadcrumbsLength !== index && (
          <span className='breadcrumb-separator'>{separator}</span>
        )}
      </div>
    ));
  }, [breadcrumbs, separator, inactiveBreadcrumbColor, activeBreadcrumbColor]);

  return (
    <div className='breadcrumb-container' data-testid='breadcrumb-wrapper'>
      {breadcrumbContent()}
    </div>
  );
}

Breadcrumbs.defaultProps = {
  separator: '/',
  inactiveBreadcrumbColor: 'secondary',
  activeBreadcrumbColor: 'black',
};

export default memo(Breadcrumbs);
