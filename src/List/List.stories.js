import React from 'react';
import ListComponent  from './List';
import { testData } from './List.spec';

export default {
  title: 'List/List',
  parameters: {
    component: ListComponent,
  }
};

const Template = (args) => <ListComponent {...args} />;

export const List = Template.bind({});
List.args = {
  data: testData,
  titleKey: 'student',
}


