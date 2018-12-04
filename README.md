# Shadow-DOM-inject-styles
A helper function to easily modify Shadow DOM CSS.

## Install
```bash
npm install shadow-dom-inject-styles --save
```

## Vanilla JS Example / Demo
[jsfiddle](https://jsfiddle.net/ry4sbnom/1/)

```html
<script type="module">
  import {injectStyles} from 'https://unpkg.com/shadow-dom-inject-styles@latest/dist/index.js';

  setTimeout(() => {

    const toolbar = document.querySelector('ion-app > ion-header > ion-toolbar');

    // language=CSS
    const styles = `
        .toolbar-background {
            background: red !important;
        }
        .toolbar-container {
            color: #fff !important;
        }
    `;

    injectStyles(toolbar, '.toolbar-background', styles);

  }, 200);
</script>
```

## Typescript Example

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
