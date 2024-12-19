
# Web compoment

Web Compoment: 
 - Web compoment are a set of web platform apis's that helps to create new HTML tags to use in web apps.
- Custom components build on web components standards will work on all modern browsers and with any javascript framework or library that works with HTML.

In short: 
 - It helps to create a custom HTML elements like div, span, header, footer.

There are 3 major things in web components:
### Custom Elements:
- A set of javascript apis that heps to define custom elements like: 
    `customElements.define("<element-name>", class/function);`
    `customElements.define("hello-world", HelloWorld);`

    \- is mandatory as it differentiate between default html tags and custom tags

### Shadow DOM:
 - A set of javascript apis that helps to attach an excapsulated Shadow DOM tree to an element. We can keep an element private and nobody will change anything from outside.

### HTML template
 `<template> and <slot> element`
 - It helps to write markup templates that are not displayed in the rendered page. 
 - We can use it multiple times.

### Steps to create custom component
    1. Create a class in which you add functionality.
    2. Register that custom element with customElements.define(___,___);
    3. If required, add Shadow DOM.
    4. If required, use template, slot
    5. Use custom element in your web page where you want to use.

### Example

*index.html*

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web component demo</title>
</head>
<body>
    <h1>Hello to custom elements</h1>
    <hello-world name="saurabh"></hello-world>
    <script type="module" src="./index.js"></script>
</body>
```
*index.js*
```
import "./CustomElements/HelloWorld.js";
```

*HelloWorld.js*
```
class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.textContent = "Hello to "+this.getAttribute("name");
    this.style.color = "green";
  }
}

customElements.define("hello-world", HelloWorld);

```

### Life cycle of web components






