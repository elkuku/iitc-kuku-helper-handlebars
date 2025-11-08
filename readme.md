# IITC Helper Plugin: Handlebars

This is a helper plugin for [IITC](https://iitc.app).

It integrates the template engine [Handlebars](https://handlebarsjs.com/).

It is meant to be used by other plugins as a "helper".

## Installation

Go to the [latest release]() page and download the `user.js` file.

## Usage

```typescript
const handlebars = window.plugin.HelperHandlebars

if (!handlebars) {
    console.warn('Handlebars helper not found')
    return
}

const templateString = 'Hello {{name}}!'

const template = handlebars.compile(templateString)

const data = {name: 'World'}

console.log(template(data))

// Hello World!
```

You can register your own helper function using `registerHelper()`.

----

Made with: [IITC Plugin Kit](https://github.com/McBen/IITCPluginKit)