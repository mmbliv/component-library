import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // borderColor:{control:'color'},
    // color:{control:'color'}

  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  type:'danger',
  label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  type:'success',
  label: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  type:'warning',
  label: 'Button',
};

export const Default = Template.bind({})
Default.args={
  type:'default',
  label:'Button',
}