import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DataGridComponent } from './DataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { CharacterColumnsConfig, dataRow } from '../../_mocks_/constants';

export default {
  title: 'Component/Functional/DataGrid',
  component: DataGridComponent,
} as ComponentMeta<typeof DataGridComponent>;

const Template: ComponentStory<typeof DataGridComponent> = (args) => <DataGridComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: dataRow,
  columns: CharacterColumnsConfig
};
