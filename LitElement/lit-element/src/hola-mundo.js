import {LitElement,html} from 'lit-element'; 
export class HolaMundo extends LitElement{
    render(){
        return html`
        <p>Mola mundo</p>
        `;
    }
}

customElements.define('hola-mundo', HolaMundo);