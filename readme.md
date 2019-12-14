# GameNeat

A simple library for easier game development in JavaScript on HTML5 canvasContext.

## NPM

```
npm i game-neat --save
```

## Create new game

```js
import GameNeat from "game-neat";

const game = GameNeat();
```

## Scene API

With Scene API you can manipulate with current Scene, so far there is only one Scene.

#### Scene methods

- setCanvas (element: string | Element): CanvasRenderingContext2D
- setBackground (options: BackgroundOptions): void
- startRender (): void
- stopRender (): void
- setOnRenderCallback (callback: Function): void

#### setCanvas(element: string | Element)

With this method you can specify your canvasContext element as a target for Scene rendering.
I recommend to call this method right after creating new game.

You can pass selector as a string or directly your canvasContext element.

Returns canvasContext context or throws TypeError exception.

```js
const game = GameNeat();

game.scene.setCanvas("#game");
```

#### setBackground (options: BackgroundOptions)

Sets a background image with url provided in object or background color.

You can set background scrolling speed with verticalSpeed and horizontalSpeed properties.

All those properties can be omitted, so if you want to for example just change scrolling speed you can do this pretty easily.
Previous settings will be preserved.

```js
game.scene.setBackground({
    backgroundUrl: "road.svg",
    verticalSpeed: 5,
    horizontalSpeed: 4,
    backgroundColor: "#000"
});

// elsewhere

game.scene.setBackground({ horizontalSpeed: 0 }); // only sets horizontal speed to 0
```

#### startRender()

Use this method to initiate scene rendering.

```js
const game = GameNeat();

game.scene.setCanvas("#game");

game.scene.setBackground({
    backgroundUrl: "road.svg",
    verticalSpeed: 5,
    horizontalSpeed: 4,
    backgroundColor: "#000"
});

game.scene.startRender();
```

#### setOnRenderCallback(callback: Function)

Sets a callback which will be called on each scene render.

```js
game.scene.setOnRenderCallback(() => {
    console.log("scene render occurred");
});
```

## Draw API

- drawText (options: DrawTextOptions): object
- drawRectangle (options: DrawRectangleOptions): object
- clearText (textId: any): boolean
- setFontSize (fontSize: number): void
- setStrokeColor (color: string): void
- setStrokeAndFillColor (color: string): void
- setFillColor (color: string): void
- setFont (fontFamily: string): void

#### drawText(options: DrawTextOptions)

Draws text on canvas with specified position, content and possibly alongside dynamic content.

```js
game.draw.drawText({ x: 8, y: 32, content: "Static content" });
```

##### Dynamic content example 
 
```js
const data = { counter: 0 };

game.scene.setOnRenderCallback(() => {
    ++data.counter;
});

game.draw.drawText({ x: 8, y: 32, content: "Counter: {counter}", data });
```
 
 
## GameObjectFactory

- createObject (gameObjectId: any, overrideObject?: boolean): GameObject

## GameObjectInstanceFactory

- createInstance (gameObjectId: any): GameObject | undefined

## Random
- nextFloat (min?: number, max?: number): number
- next (min?: number, max?: number): number