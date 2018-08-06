export function injectStyles(shadowRootElement: HTMLElement, insertBeforeSelector: string, styles: string) {
	let root              = shadowRootElement.shadowRoot;
	let styleAlreadyAdded = false;
	let currentStyleTags  = Array.from(root.querySelectorAll('style'));
	currentStyleTags.forEach((element: HTMLStyleElement, index) => {
		if (element.innerHTML == styles) {
			styleAlreadyAdded = true;
		}
		if ((currentStyleTags.length - 1) == index && styleAlreadyAdded == false) {
			let newStyleTag       = document.createElement('style');
			newStyleTag.innerHTML = styles;
			root.insertBefore(newStyleTag, root.querySelector(insertBeforeSelector));
		}
	});
}