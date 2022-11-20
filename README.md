<h1 align="center">canvi</h1>
<p align="center">
<i>a simple Canvas Node.js UI framework 🚀</i> <br/> <br/>
<b> <a href="https://github.com/gulje/canvi/issues">Issues</a> </b> |
<b> <a href="https://github.com/gulje/canvi/pulls">Pull Requests</a> </b>
</p>

# Overview

```ts
import { Size, Margins } from '@canvi/core';
import { Stage, CanviEngine, HLayout, Box } from '@canvi/gui';
import { CanviEngine } from '@canvi/engine';

const stage = new Stage({
  size: new Size(500, 500),
  engine: CanviEngine,
  layout: new HLayout({
    margin: new Margins(15, 15, 15, 15),
  }),
});

stage.layout.addItem(
  new Box({
    size: new Size(100, 100),
  }),
);

stage.layout.addItem(
  new Box({
    size: new Size(100, 100),
  }),
);

stage.draw();
```

# License

canvi is licensed under the [MIT License](LICENSE).
