import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form } from "./Form";

export default {
  title: "Example/Form",
  component: Form,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // borderColor:{control:'color'},
    // color:{control:'color'}
    option: {
      control: "object",
    },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const FormWithTextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FormWithTextInput.args = {
  type: "textInput",
};
export const FormWithOption = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FormWithOption.args = {
  type: "selectInput",
};
