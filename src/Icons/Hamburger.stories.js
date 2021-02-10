import React from 'react';
import HamburgerComponent from './Hamburger';

export default {
  title: 'Icons/Hamburger',
  parameters: {
    component: HamburgerComponent,
    componentSubtitle: 'Mobile Nav Bar Helper',
  }
};

const Template = (args) => <HamburgerComponent {...args} />;

export const Hamburger = Template.bind({});
