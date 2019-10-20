# Overlay
a simple overlay for use in browser games.

## Install
```sh
    npm install --save arclib-overlay
```

## Usage

### Create
Create a new overlay and attach a template.
```js
    const overlay = createOverlay(document.body, ({ html, styleMap }) => {
        return (data) => {
            let styles = {
                color: 'red'
            }

            return html`
                <div style=${styleMap(styles)}>
                    <p>Score: ${data.score}</p>
                </div>
            `;
        }
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

### 