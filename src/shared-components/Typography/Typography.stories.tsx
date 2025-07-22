import type { Meta, StoryObj } from '@storybook/react';

import Typography, {TypographyProps} from './Typography';

const meta: Meta = {
  title: 'Typography',
  component: Typography,
};

export default meta;

const Template: StoryObj<TypographyProps> = function typographyFun(args) {
  const {children, classNames, variant, align, gutterBottom, noWrap} = args;
  return (
    <Typography
      variant={variant}
      classNames={classNames}
      align={align}
      gutterBottom={gutterBottom}
      noWrap={noWrap}>
      {children}
    </Typography>
  );
};

export const defaultTypography = Template.bind({});

defaultTypography.args = {
  children: 'hi this is new',
  variant: 'body1',
  classNames: '',
  align: 'center',
  gutterBottom: false,
  noWrap: false,
};

export const customTypography = Template.bind({});

customTypography.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos non expedita aliquam vero quam. Tempore, nisi sint, eveniet omnis impedit dicta fuga nihil velit ea in magnam laborum suscipit distinctio? Quia sunt nemo exercitationem ad ipsa natus, obcaecati rerum tempore molestias odio quos. Consequuntur, quam, labore distinctio necessitatibus mollitia temporibus ab perspiciatis debitis aliquid officiis quae ex repudiandae? Fugiat porro et repellat hic ut cupiditate possimus, nisi, quisquam vitae voluptatibus mollitia quia aut ipsa voluptas dolore deserunt natus nemo laborum, rerum provident? Qui dolorum distinctio mollitia consequatur non, repellendus, placeat sequi beatae odio est ipsam incidunt soluta voluptatibus eligendi!',
  variant: 'body1',
  classNames: '',
  align: 'inherit',
  gutterBottom: false,
  noWrap: true,
};

export const allTypography: StoryObj<TypographyProps> = function typographyFun() {
  return (
    <div>
      <Typography variant='h1' gutterBottom>
        H1. header Typography
      </Typography>
      <Typography variant='h2' gutterBottom>
        H2. header Typography
      </Typography>
      <Typography variant='h3' gutterBottom>
        H3. header Typography
      </Typography>
      <Typography variant='h4' gutterBottom>
        H4. header Typography
      </Typography>
      <Typography variant='h5' gutterBottom>
        H5. header Typography
      </Typography>
      <Typography variant='h6' gutterBottom>
        H6. header Typography
      </Typography>
      <Typography variant='body1' gutterBottom>
        body1. default Typography
      </Typography>
      <Typography variant='body2' gutterBottom>
        body2. Typography
      </Typography>
      <Typography variant='button' gutterBottom>
        button. typography
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        subtitle1. typography
      </Typography>
      <Typography variant='subtitle2' gutterBottom>
        subtitle2. typography
      </Typography>
      <Typography variant='caption' gutterBottom>
        caption. typography
      </Typography>
    </div>
  );
};
