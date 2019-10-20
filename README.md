# Overlay
a simple overlay for use in browser games.

## Install
```sh
    npm install --save arclib-overlay
```

## Usage
```js
const overlay = createOverlay(<node>, <callback>)
```
Create the overlay passing in a root node to attach to.
Return a template function in the callback.

### Create
Create a new overlay and attach a new [lit-html](https://lit-html.polymer-project.org/guide) template function.
`html` and `styleMap` are provided to the callback.
```js
    const overlay = createOverlay(document.body, ({ html, styleMap }) => {
        let styles = {
            color: 'red'
        }

        let overlayTemplate = (data) => {
            return html`
                <div style=${styleMap(styles)}>
                    <p>Score: ${data.score}</p>
                </div>
            `;
        }

        return overlayTemplate;
    });
```

### Update
Update the overlay
```js
    // set score to 10
    overlay.update({
        score: 10
    })
```