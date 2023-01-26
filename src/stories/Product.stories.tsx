import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Product } from "./Product";
import computerImg from "./assets/computer.png";

export default {
  title: "Example/Product",
  component: Product,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    iconActive: { control: "boolean", if: { arg: "overlay" } },
  },
  parameters: { controls: { sort: "requiredFirst" } },
} as ComponentMeta<typeof Product>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args} />
);

export const ProductBlockColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProductBlockColumn.args = {
  column: true,
  img: "/computer.png",
  type: "block",
};
ProductBlockColumn.parameters = {
  controls: {
    include: [
      "img",
      "name",
      "price",
      "overlay",
      "iconActive",
      "activeStartNumber",
      "inactiveStart",
      "oldPrice",
      "border",
      "background",
    ],
  },
};

export const ProductBlockRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProductBlockRow.args = {
  // img: computerImg,
  type: "block",
  row: true,
};
ProductBlockRow.parameters = {
  controls: {
    include: [
      "img",
      "name",
      "price",
      "overlay",
      "iconActive",
      "activeStartNumber",
      "inactiveStart",
      "oldPrice",
      "border",
      "background",
    ],
  },
};

export const ProductInlineRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProductInlineRow.args = {
  img: "/computer.png",
  type: "inline",
};
ProductInlineRow.parameters = {
  controls: {
    include: [
      "img",
      "name",
      "price",
      "overlay",
      "iconActive",
      "activeStartNumber",
      "inactiveStart",
      "oldPrice",
    ],
  },
};
