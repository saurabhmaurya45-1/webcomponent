class CustomButton extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const container = document.createElement("div");

    container.style.width = "40px";
    container.style.height = "40px";
    container.style.color = "white";
    container.style.backgroundColor = "green";
    container.textContent = "+";
  }
}

customElements.define("custom-button", CustomButton);
