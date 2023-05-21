import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class LitelementTemplates extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--litelement-templates-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Lit-Element: Templates';
  @property({ type: Number }) counter = 5;
  @property({ type: String }) myString = 'Hola Mundo';
  @property({ type: Array }) myArray=['an','array','of','test','data'];
  @property({ type: Boolean }) myBool=true;

  __increment() {
    this.counter += 1;
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