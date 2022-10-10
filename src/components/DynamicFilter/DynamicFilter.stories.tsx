import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DynamicFilterComponent } from './DynamicFilter';

const actualState = {
  name: '',
  gender: 'John',
  status: '',
};

export default {
  title: 'Component/Functional/DynamicFilter',
  component: DynamicFilterComponent,
} as ComponentMeta<typeof DynamicFilterComponent>;

const Template: ComponentStory<typeof DynamicFilterComponent> = (args) => <DynamicFilterComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'DynamicFilterComponent',
  variant: 'outlined',
  extraData: {
    gender: ['female', 'male', 'genderless', 'unknown'],
    status: ['alive', 'dead', 'unknown'],
  },
  data: {
    actualFilterData: { ...actualState },
    fields: [
      {
        accessor: 'name',
        filterType: 'inputField',
      },
      {
        accessor: 'status',
        filterType: 'dropdown',
      },
      {
        accessor: 'gender',
        filterType: 'dropdown',
      },
    ],
    callbackFunction: () => {},
  },
};
