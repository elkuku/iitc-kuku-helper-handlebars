# IITC Helper Plugin: Handlebars

This is a helper plugin for [IITC](https://iitc.app) that integrates the template engine [Handlebars](https://handlebarsjs.com/).

It is meant to be used by other plugins as a "helper" and does not do anything on its own.

## Installation

Install it from the [Community plugins page](https://iitc.app/community_plugins#helper-handlebars-by-elkuku).

## Usage

```typescript
const handlebars = window.plugin.HelperHandlebars

const templateString = 'Hello {{name}}!'

const template = handlebars.compile(templateString)

const data = {name: 'World'}

console.log(template(data))

// Hello World!
```

## Implemented Methods

### `compile`

Compiles a template so it can be executed immediately. ([docu](https://handlebarsjs.com/api-reference/compilation.html#handlebars-compile-template-options))

### `registerHelper`
Registers helpers accessible by any template in the environment. ([docu](https://handlebarsjs.com/api-reference/runtime.html#handlebars-registerhelper-name-helper))

----

For mor informnation read [the guide](https://handlebarsjs.com/guide/).

If you are missing some functionality, please open [an issue](https://github.com/elkuku/iitc-kuku-helper-handlebars/issues).

----

Made with :heart: and the [IITC Plugin Kit](https://github.com/McBen/IITCPluginKit)
