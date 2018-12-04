export function injectStyles(
  shadowRootElement: HTMLElement,
  insertBeforeSelector: string,
  styles: string
) {
  const root = shadowRootElement.shadowRoot;
  let styleAlreadyAdded = false;
  const currentStyleTags = Array.from(root.querySelectorAll('style'));
  currentStyleTags.forEach((element: HTMLStyleElement, index) => {
    if (element.innerHTML === styles) {
      styleAlreadyAdded = true;
    }
    if (currentStyleTags.length - 1 === index && styleAlreadyAdded === false) {
      const newStyleTag = document.createElement('style');
      newStyleTag.innerHTML = styles;
      root.insertBefore(newStyleTag, root.querySelector(insertBeforeSelector));
    }
  });
}
