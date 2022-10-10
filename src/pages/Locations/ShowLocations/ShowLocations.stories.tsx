import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ShowLocationsPage} from './ShowLocations';

export default {
  title: 'Component/Pages/ShowLocationsPage',
  component: ShowLocationsPage,
} as ComponentMeta<typeof ShowLocationsPage>;

const Template: ComponentStory<typeof ShowLocationsPage> = (args) => <ShowLocationsPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'ShowLocationsPage',
};
