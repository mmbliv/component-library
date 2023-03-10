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
    // options: {
    //   control: "array",
    // },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const FormWithTextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FormWithTextInput.args = {
  type: "textInput",
};
FormWithTextInput.parameters = {
  controls: { include: ["label", "placeHolder", "size"] },
};

export const FormWithOption = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FormWithOption.args = {
  type: "selectInput",
};
FormWithOption.parameters = {
  controls: { include: ["options"] },
};

export const FormWithNumber = Template.bind({});
FormWithNumber.args = {
  type: "numberInput",
};
FormWithNumber.parameters = {
  controls: { include: ["min", "max", "step", "startValue"] },
};

export const FormWithButton = Template.bind({});
FormWithButton.args = {
  type: "textInputWithButton",
};
FormWithButton.parameters = {
  controls: {
    include: ["placeHolder", "label", "size", "handleOnClick"],
  },
};

export const FormCheckbox = Template.bind({});
FormCheckbox.args = {
  type: "checkBox",
};
FormCheckbox.parameters = {
  controls: {
    include: [
      "checkedState",
      "valueCheckbox",
      "labelCheckbox",
      "checkboxColor",
    ],
  },
};
