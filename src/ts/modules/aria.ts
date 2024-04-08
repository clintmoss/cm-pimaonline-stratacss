import { customElementAria } from "../config";

// Function to add aria label to custom elements
customElementAria.forEach((customElement: { customHtmlTag: string, ariaProp: string, ariaValue: string }) => {

  // For each custom element, find all instances on the page
  let customHtmlAriaElements: NodeListOf<HTMLElement> = document.querySelectorAll(customElement.customHtmlTag);

  if (customHtmlAriaElements.length > 0) {
    customHtmlAriaElements.forEach((customHtmlAriaElement: HTMLElement) => {
      // For each instance, set the corresponding aria attribute and value
      if (customHtmlAriaElement instanceof HTMLElement) {
        customHtmlAriaElement.setAttribute(customElement.ariaProp, customElement.ariaValue);
      } else {
        console.error("Document error: element is not an HTMLElement:", customHtmlAriaElement);
      }

    })
  }

})  