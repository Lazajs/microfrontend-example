class Mf2 extends HTMLElement {
  constructor() { 
    super()
  }

  connectedCallback() {
    this.innerHTML = `<h1>Microfrontend 2</h1>
                      <p>This is Microfrontend 2 content. edited from here ! xd mf-2.js</p>`;
  }
}

console.log('mf-2.js loaded')

customElements.define('mf-2', Mf2);