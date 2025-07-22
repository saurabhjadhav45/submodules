import React, {ReactNode, memo, useCallback, useMemo} from 'react';

import './Typography.scss';

type variantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'button'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption';

export interface TypographyProps {
  variant?: variantType;
  classNames?: string;
  children: ReactNode;
  gutterBottom?: boolean;
  align?: 'center' | 'right' | 'left' | 'justify' | 'inherit';
  noWrap?: boolean;
  dataTestId?: string;
}

interface VariantsMap {
  [key: string]: React.ElementType;
}

const variantsMapping: VariantsMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'span',
  caption: 'span',
};

function Typography(props: TypographyProps) {
  const {
    variant,
    classNames,
    children,
    gutterBottom,
    align,
    noWrap,
    dataTestId,
  } = props;

  const Component = useMemo(
    () => variantsMapping[variant as variantType],
    [variant]
  );

  const getVariant = useCallback(() => {
    switch (variant) {
      case 'h1':
      case 'h2':
        return 'fw-3';

      case 'h6':
      case 'subtitle2':
        return 'fw-5';

      case 'button':
        return 'fw-6';

      default:
        return 'fw-4';
    }
  }, [variant]);

  return (
    <Component
      data-testid={dataTestId}
      className={`${classNames} ${noWrap && 'typography-nowrap'} ${
        gutterBottom && 'gutter-bottom'
      } typography-wrapper typography-variant-${variant} typography-${align} ${getVariant()}`}>
      {children}
    </Component>
  );
}

Typography.defaultProps = {
  classNames: '',
  align: 'inherit',
  gutterBottom: false,
  noWrap: false,
  variant: 'body1',
  dataTestId: 'typography',
};

export default memo(Typography);
