import React from "react";
import { customElementsData } from "../../../ts/modules/variables";

// Function to generate custom element. Returns a function that renders a ReactElement with children.
const createCustomElement = (elementName: string) => {
  return (props: React.PropsWithChildren<any>): React.ReactElement => {
    return React.createElement(elementName, props, props.children);
  };
};

// Create an object to store custom elements
const customElements: { [key: string]: React.FC<any> } = {};

// Iterate through customElementsData and create custom elements dynamically
customElementsData.forEach((customElement: { jsxName: string, customHtmlTag: string }) => {
  customElements[customElement.jsxName] = createCustomElement(customElement.customHtmlTag);
});

// Export the object containing all custom elements
export default customElements;
