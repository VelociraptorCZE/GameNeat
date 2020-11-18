# GameNeat

A simple and lightweight library made for easier game development in JavaScript on HTML5 canvas.

## NPM

```
npm i game-neat --save
```

## Create new game

```js
import Game from "game-neat";

const game = Game();
```

## Scene API

With Scene API you can manipulate with current Scene, so far there is only one Scene.

#### Scene methods

- setCanvas (element: string | Element): CanvasRenderingContext2D
- setBackground (options: BackgroundOptions): void
- startRender (): void
- stopRender (): void
- onRender (callback: Function): void

#### setCanvas(element: string | Element)

With this method you can specify your canvasContext element as a target for Scene rendering.
I recommend calling this method right after creating new game.

You can pass selector as a string or directly your canvasContext element.

Returns canvasContext context or throws TypeError exception.

```js
const game = Game();

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
const game = Game();

game.scene.setCanvas("#game");

game.scene.setBackground({
    backgroundUrl: "road.svg",
    verticalSpeed: 5,
    horizontalSpeed: 4,
    backgroundColor: "#000"
});

game.scene.startRender();
```

#### onRender ()

Empty method, which can be easily overridden, this method will be called every frame.

```js
game.scene.onRender = () => {
    console.log("Frame was just rendered");
};
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

Draws a text on canvas with specified position, content and possibly alongside dynamic content.

```js
game.draw.drawText({ x: 8, y: 32, content: "Static content" });
```

##### Dynamic content example 
 
```js
const data = { counter: 0 };

game.scene.onRender = () => {
    ++data.counter;
};

game.draw.drawText({ x: 8, y: 32, content: "Counter: {counter}", data });
```

#### drawRectangle (options: DrawRectangleOptions): object

Draws a rectangle with given coordinates.

```js
game.draw.drawRectangle({
    x1: 24,
    y1: 24,
    x2: 128,
    y2: 52,
    fill: true,
    fillColor: "#00f017"
});
```
 
## GameObjectFactory

- createObject (gameObjectId: any, overrideObject?: boolean): GameObject

GameObjectFactory contains only one method - createObject. 
This method creates an object which then can be instantiated, returns GameObject.

```js
const player = game.gameObjectFactory.createObject("player");
```

## GameObjectInstanceFactory

- createInstance (gameObjectId: any): GameObject | undefined

With GameObjectInstanceFactory you can create a new instance.

```js
const player = game.gameObjectFactory.createObject("player");
const playerInstance = game.gameObjectInstanceFactory.createInstance("player"); // or player.id
```

## GameObject API

- readonly isFreeXOnLeft: boolean
- readonly isFreeXOnRight: boolean
- readonly isFreeYOnBottom: boolean
- readonly isFreeYOnTop: boolean
- readonly isColliding: boolean
- setPosition (x: number, y: number): void
- setRelativePosition (x: number, y: number): void
- setSpriteDimensions (width: number, height: number)
- setSprite (imageUrl: string, spriteOptions?: SpriteOptions): HTMLImageElement
- setVerticalSpeed (speed: number): void
- setHorizontalSpeed (speed: number): void
- setSpeed (speed: number): void
- isCollidingWith (instance: GameObject | string): boolean
- onCollision (instance: GameObject): void
- onRender (instance: GameObject): void
- onClick (callback: Function): void
- onMouseMove (callback: Function): void
- onKey (key: string, callback: Function): void
- onKeyUp (key: string, callback: Function): void

#### setSprite (imageUrl: string, spriteOptions?: SpriteOptions)

Sets a sprite for your object alongside width and height accordingly to image size.
Sprite dimensions can be manipulated through spriteOptions.

```js
const player = game.gameObjectFactory.createObject("player");

// Object's width and height is same as image width and height
player.setSprite("player.svg");

// Sprite is resized to 80% size of the original image
player.setSprite("player.svg", { widthMultiplier: .8, heightMultiplier: .8 });
```

#### onKey (key: string, callback: Function)

OnKey has two parameters - key as a string, for example "w" and callback which will be called.

```js
const player = game.gameObjectFactory.createObject("player");
const playerInstance = game.gameObjectInstanceFactory.createInstance("player"); // or player.id

playerInstance.onKey("w", () => playerInstance.setRelativePosition(0, -3));
```

## GameObjectInstanceList

With GameObjectInstanceList you can manipulate with your instances.
It's possible to remove single instance with **destroy()** method, or **count()** all instances.
In **count()** or **findInstancesBy()** you can pass either GameObject id or GameObject itself.

- destroy (instance: GameObject): void
- count (gameObject: any | GameObject): number
- findInstancesBy (gameObject: any | GameObject): GameObjectInstanceList 

## Sound

- addSound (soundId: any, soundUrl: string): void
- playSound (soundId: any): void
- stopSound (soundId: any): void
- stopAllSounds (): void

## Random

- nextFloat (min?: number, max?: number): number
- next (min?: number, max?: number): number