class Mf1 extends HTMLElement {
  constructor() { 
    super()
  }

  connectedCallback() {
    this.innerHTML = `<h1>Microfrontend 1</h1>
                      <p>This is Microfrontend 1 content.</p>`;
  }
}


console.log('mf-1.js loaded')

customElements.define('mf-1', Mf1);