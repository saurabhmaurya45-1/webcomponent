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
