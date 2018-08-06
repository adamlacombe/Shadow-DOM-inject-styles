# Shadow-DOM-inject-styles
A helper function to easily modify Shadow DOM CSS.

```ts
import {injectStyles} from 'shadow-dom-inject-styles';

const toolbar = (this.el.querySelector('ion-header > ion-toolbar') as HTMLElement);
    
// language=CSS
const styles = `
  .toolbar-background {
    background: red !important;;
  }
`;

injectStyles(toolbar, '.toolbar-background', styles);
```