# Index tool
Table Block for the [Editor.js](https://editorjs.io).

## Installation

### Install via NPM or Yarn

Get the package

```shell
npm i YOUR_PACKAGE_NAME
```
Include module in your application

```typescript
import YOUR_PACKAGE_CLASS from 'YOUR_PACKAGE_NAME';
```

## Usage
Add a new Tool to the `tools` property of the Editor.js initial config.

```typescript
const editor = EditorJS({
  ...
  
  tools: {
    ...
    YOUR_PACKAGE_NAME: {
      class: YOUR_PACKAGE_CLASS,
    }
  }
  
  ...
});
```

Or init Table Tool with additional settings

```typescript
const editor = EditorJS({
  ...
  
  tools: {
    ...
    YOUR_PACKAGE_NAME: {
      class: YOUR_PACKAGE_CLASS,
      config: {
        
      },
    },
  },
  
  ...
});
```

## Config Params

| Field              | Type     | Description                              |
| ------------------ | -------- | ---------------------------------------- |
| field               | `type` | description   |


## Output data
This Tool returns `data` with following format

| Field     | Type         | Description                               |
| --------- | ------------ | ----------------------------------------- |
| field   | `type` | description |

```json
{
    "type" : "YOUR_TOOL_NAME",
    "data": {
        
    }
}
```
## i18n
```typescript
const i18n = {
    messages: {
        tools: {
            YOUR_TOOL_NAME: {
                YOUR_KEY: 'YOUR_TRANSLATION',
            }
        }
    }
}
```

# Theme
Since this library bundle some css for both of light and dark.
If you want to apply dark theme, you can set `dark` class to the parent element of the editor.
```html
<div id="editorjs" class="dark"></div>
```

## License
This project is licensed under the MIT License 
