import React from 'react';
import ListItemComponent  from './ListItem';

export default {
  title: 'List/ListItem',
  parameters: {
    component: ListItemComponent,
    componentSubtitle: 'toggle me!',
  }
};

const Template = (args) => <ListItemComponent {...args} />;

export const ListItem = Template.bind({});
ListItem.args = {
  itemTitle: 'Gryffindor',
  itemInfo: { students: ['Harry', 'Ron'] },
}


