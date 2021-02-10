import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBarComponent  from './NavigationBar';

export default {
  title: 'NavigationBar/NavigationBar',
  parameters: {
    component: NavigationBarComponent,
  }
};

const Template = (args) => <Router><NavigationBarComponent {...args} /></Router>;

export const NavigationBar = Template.bind({});
NavigationBar.args = {
  links: [{ to: '/films', text: 'Films' }, { to: '/books', text: 'Books' }],
  currentUrl: '/films',
  title: 'Harry Potter App',
}


