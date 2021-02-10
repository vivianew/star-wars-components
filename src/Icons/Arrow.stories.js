import React from 'react';
import ArrowComponent  from './Arrow';

export default {
  title: 'Icons/Arrow',
  parameters: {
    component: ArrowComponent,
    componentSubtitle: 'Arrow that you can rotate',
  }
};

const Template = (args) => <ArrowComponent {...args} />;

export const ArrowUp = Template.bind({});
ArrowUp.args = {
  onClick: null,
  width: 16,
  rotation: 90,
  animation: '',
  className: '',
}

export const ArrowDown = Template.bind({});
ArrowDown.args = {
  ...ArrowUp,
  rotation: -90,
}

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  ...ArrowUp,
  rotation: 0,
}

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
  ...ArrowUp,
  rotation: 180,
}


