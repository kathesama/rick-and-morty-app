import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UnderConstructionPage} from './UnderConstruction';

export default {
  title: 'Component/Pages/UnderConstructionPage',
  component: UnderConstructionPage,
} as ComponentMeta<typeof UnderConstructionPage>;

const Template: ComponentStory<typeof UnderConstructionPage> = (args) => <UnderConstructionPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'UnderConstructionPage',
};
