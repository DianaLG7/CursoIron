import { LitElement, html } from "../node_modules/lit-element/lit-element.js";
export class IntroLitelement extends LitElement {
  render() {
    return html`
        <p>Soy Intro LitElement</p>
        `;
  }

}
customElements.define('intro-litelement', IntroLitelement);