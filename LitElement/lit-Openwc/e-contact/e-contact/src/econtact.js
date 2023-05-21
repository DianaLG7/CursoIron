import { html, css, LitElement } from 'lit';

export class EContact extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--e-contact-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      contactos: { type:Array}
    };
  }

  constructor(){
    super();
    this.contactos=[
      {
        nombre:'Diana López',
        email: 'dianita17lp@gmail.com'
      },
      {
        nombre:'Hugo Sanchez',
        email:'user2_some_email@mail.com'
      },
      {
        nombre:'Jhon Doe',
        email:'user3_some_email@mail.com'
      }
    ]
   }

  render() {
    return html`
    <div>
      ${this.contactos.map(contact =>
        html`<my-contact
        nombre="${contact.nombre}"
        email="${contact.email}"></my-contact>`)}
    </div>
    `;
  }
}