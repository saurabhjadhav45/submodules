import type { Meta, StoryObj } from '@storybook/react';

import Toast, {ToastProps} from './Toast';

const meta: Meta = {
  title: 'Toast',
  component: Toast,
};

export default meta;

const getIdToast = (id: string) => {
  return id;
};

const Template: StoryObj<ToastProps> = function toast(args) {
  const {
    id,
    typeofToast,
    showIcon,
    position,
    isCloseVisible,
    heading,
    content,
    closeFn,
    variant,
  } = args;
  return (
    <div style={{width: '500px', height: '400px'}}>
      <Toast
        id={id}
        typeofToast={typeofToast}
        showIcon={showIcon}
        isCloseVisible={isCloseVisible}
        heading={heading}
        position={position}
        content={content}
        closeFn={closeFn}
        variant={variant}
      />
    </div>
  );
};

export const Default = Template.bind({});
export const ToastNotify = Template.bind({});
export const TextToast = Template.bind({});

Default.args = {
  id: '1',
  typeofToast: 'success',
  content:
    'Lorem ipsum dolor sit am, consectetur adipisicing elite. Rem, obcaecati.',
  showIcon: true,
  isCloseVisible: true,
  closeFn: getIdToast,
  heading: '',
};

ToastNotify.args = {
  id: '2',
  position: 'top-left',
  typeofToast: 'success',
  heading: 'Notification Title',
  content:
    'Lorem ipsum dolor sit am, consectetur adipisicing elite. Rem, obcaecati.',
  isCloseVisible: true,
  showIcon: true,
  closeFn: getIdToast,
};

TextToast.args = {
  id: '3',
  position: 'top-left',
  showIcon: false,
  content:
    'Lorem ipsum dolor sit am, consectetur adipisicing elite. Rem, obcaecati.',
  isCloseVisible: true,
  closeFn: getIdToast,
  heading: '',
  typeofToast: 'info',
};
