import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { ProductOverlay } from "./ProductOverlay";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ProductOverlay",
  component: ProductOverlay,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProductOverlay>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductOverlay> = (args) => (
  <ProductOverlay {...args} />
);

export const Overlay = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Overlay.args = {};
Overlay.parameters = {
  controls: {
    include: ["active"],
  },
};
