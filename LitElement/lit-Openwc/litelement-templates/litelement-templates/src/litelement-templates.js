import { html, css, LitElement } from 'lit';

export class LitelementTemplates extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--litelement-templates-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },      
      myString:{type: String},
      myArray:{type: Array},
      myBool:{type: Boolean}
    };
  }

  constructor() {
    super();
    this.title = 'Lit-Element: Templates';
    this.counter = 5;
    this.myString='Hola Mundo';
    this.myArray=['an','array','of','test','data'];
    this.myBool=true;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <hr>
      <p>array loops and conditionals.</p>
      <p>${this.myString}</p>
      <ul>
        ${this.myArray.map(i=>html`<li>${i}</li>`)}
      </ul>
      ${this.myBool?
      html`<p>Render some HTML if myBool is true</p>`:
      html`<p>Render some other HTML if myBool is false</p>`}
    `;
  }
}