export function injectStyles(shadowRootElement: HTMLElement, insertBeforeSelector: string, styles: string) {
  const root = shadowRootElement.shadowRoot;

  if (root !== null) {
    const styleElements = root.querySelectorAll('style');

    if (!Array.from(styleElements).some(el => el.innerHTML === styles)) {
      const newStyleTag = document.createElement('style');
      newStyleTag.innerHTML = styles;
      root.insertBefore(newStyleTag, root.querySelector(insertBeforeSelector));
    }
  }
}
