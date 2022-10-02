import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

export default {
  title: 'Component/Pages/Home',
  component: Home,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});

/* export const LoggedIn = Template.bind({});

   // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
   LoggedIn.play = async ({ canvasElement }: any) => {
     const canvas = within(canvasElement);
     const loginButton = await canvas.getByRole('button', { name: 'navigateButton' });
     await userEvent.click(loginButton);
   }; */
