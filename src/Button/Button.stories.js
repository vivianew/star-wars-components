import React from 'react';

import ButtonComponent  from './Button';

export default {
  title: 'Form/Button',
  parameters: {
    component: ButtonComponent,
    componentSubtitle: 'Click me'
  }
};

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
  type: 'submit',
  label: 'Submit Me',
}


