import React from 'react';
import PageComponent  from './Page';
import { testData } from '../List/List.spec';

export default {
  title: 'Page/Page',
  parameters: {
    component: PageComponent,
    componentSubtitle: 'Page wrapper for list'
  }
};

const Template = (args) => <PageComponent {...args} />;

export const Page = Template.bind({});
Page.args = {
  title: 'Students at Hogwarts',
  intro: 'This is a list of students',
  data: testData,
  titleKey: 'student',
}


