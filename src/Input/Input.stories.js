import React from 'react';
import InputComponent  from './Input';

export default {
  title: 'Form/Input',
  parameters: {
    component: InputComponent,
    componentSubtitle: 'Input with upper label',
  }
};

const Template = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});
Input.args = {
  type: 'text',
  label: 'email',
  value: '',
  placeholder: 'email...'
}


