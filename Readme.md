
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

Custom Element go into many lifecycle method from creating till destroying like:
- Element creation/initialization
- Element insertion into DOM
- Updation via event like click event or more
- Deletion from the DOM

### Methods
- constructor()
- connectedCallback()
- attributeChangedCallback(name,oldValue, newValue)
- adoptedCallback()
- disconnectedCallback()

### constructor()
- It is used for creating and initializing ES6 classes and is called when an instance of an element is called.
- It is used to initialize component state, setting up event listener or create instance of shadow DOM.
- We will call super() method in the 1st line inside constructor(). It inherits all the properties and ,methods of the class it extends.

### connectedCallback()
- It is called when the element is added to the DOM. We can set attribute, fetch resources, render templates and many more.

### disconnectedCallback()
- It is called when element is removed from the DOM. It is used to clean or free up resources like
  - unsubscribe events from DOM
  - stop interval timers
  - free resources that won't be garbage collected automatically

### attributeChangedCallback()
- It is called when attributes are added, removed, updated, or replaced. 
- We need to speficy which attribute will change in this method.

```
  static get observedAttribute(){
    return ["attr1","attr2"] // array of attribute
  }
```

```
attributeChangedCallback(name, oldValue, newValue){
  // do operation
  console.log(`${name}'s name changed from ${oldValue} to ${newValue}`);
}
```

### adoptedCallback()
- It is called when custom element is moved from one document to another one within document

```
adoptNode(element) method  
```
- It is used when we are dealing with iframe elements and each iframe has its own DOM.







