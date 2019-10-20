import { html, render } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';

// Overlay
const overlayPrototype = {
    root: null,
    data: {},
    init: function(templateFactory) {
        // create overlay body and attach to root
        this.body = document.createElement('div');
        this.body.style = `
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
        `;
        this.root.appendChild(this.body);

        // set template function
        this.template = templateFactory({ html, styleMap })

        return this;
    },
    update: function(updates) {
        // apply updates
        this.data = {
            ...this.data,
            ...updates
        };

        // render
        this.render();
    },
    render: function() { render(this.template(this.data), this.body) }
}

// create an overlay
export const createOverlay = (root, templateFactory) => {
    return Object.create(overlayPrototype, {
        root: {
            writable: true,
            value: root
        }
    }).init(templateFactory);
};