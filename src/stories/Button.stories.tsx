import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // borderColor:{control:'color'},
    // color:{control:'color'}
    // hasOutline: { control: "boolean" },
    type: {
      control: { type: "select" },
    },
    icon: { control: "radio" },
    handleOnClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SimplyButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimplyButton.args = {
  type: "default",
  label: "Do something",
  // outline: false,
  // icon: "none",
  // hasIcon: false,
  // hasOutline: false,
};
SimplyButton.parameters = {
  controls: {
    include: ["type", "label", "size", "darker", "lighter", "handleOnClick"],
  },
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.parameters = {
  controls: { include: ["icon", "size", "label"] },
};
ButtonWithIcon.args = {
  hasIcon: true,
  outline: false,
};

export const ButtonWithOutline = Template.bind({});
ButtonWithOutline.args = {
  type: "default",
  label: "Do something",
  // hasOutline: true,
  outline: true,
  hasIcon: false,
};
ButtonWithOutline.parameters = {
  controls: { include: ["size", "label", "type"] },
};
// export const Success = Template.bind({});
// Success.args = {
//   type:'success',
//   label: 'Button',
// };

// export const Warning = Template.bind({});
// Warning.args = {
//   type:'warning',
//   label: 'Button',
// };

// export const Default = Template.bind({})
// Default.args={
//   type:'default',
//   label:'Button',
// }
