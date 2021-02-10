import React from 'react';
import TableComponent  from './Table';

export default {
  title: 'Table/Table',
  parameters: {
    component: TableComponent,
  }
};

const Template = (args) => <TableComponent {...args} />;

export const Table = Template.bind({});
Table.args = {
  item: {
    Teacher: 'Severus'
  }
}


