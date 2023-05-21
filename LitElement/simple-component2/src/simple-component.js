import { LitElement,css, html } from 'lit';
import {map} from 'lit/directives/map.js';
import {range} from 'lit/directives/range.js';
export class SimpleComponent extends LitElement {
  static styles = css`
    :host {
      color: black;
    }
    :host {
      display: block;
      width: 400px;
      height: 400px;
    }
    #board {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
      border: 2px solid #404040;
      box-sizing: border-box;
      height: 100%;
    }
    #board > div {
      padding: 2px;
    }
    .black {
      color: #ddd;
      background: black;
    }
    .white {
      color: gray;
      background: white;
    }
  `;
  static properties = {
    holamundo: {type:String},
    items: {state: true},
    names: {state: true},
    friends: {state: true},
    pets: {state: true},
    includePets: {state: true},
    things: {state: true},
  };
_deleteThing(index) {
    this.things = this.things.filter((_, i) => i !== index);
  }
  constructor() {
    super();
    // Declare reactive properties
    this.holamundo = ' 1) Hello World';
    this.items = new Set(['Apple', 'Banana', 'Grape', 'Orange', 'Lime']);  //2
    this.things = ['Raindrops on roses',
      'Whiskers on kittens','Bright copper kettles', //3 manejo de eventos en listas
      'Warm woolen mittens', ];
    this.names = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross']; //4
    this.friends = ['Harry', 'Ron', 'Hermione'];
    this.pets = [
      {name: 'Hedwig', species: 'Owl'},
      {name: 'Scabbers', species: 'Rat'},
      {name: 'Crookshanks', species: 'Cat'},
    ];
    this.includePets = true; //5
  }
  render() {
    const listItems = [];
    // TODO: populate templates with items to render.
    this.friends.forEach((friend) => {
      listItems.push(html`<li>${friend}</li>`);
    });
    if (this.includePets) {
      this.pets.forEach((pet) => {
        listItems.push(html`<li>${pet.name} (${pet.species})</li>`);
      });
    }
    return html`
      <p>${this.holamundo}</p> 
      <h1> 2) Rendering lists with Lit</h1>
      <p>Lit has built-in support for any iterables!</p>
      <h2>Array</h2>
      <p>
        ${['✨', '🔥', '❤️']}
      </p>
      <h2>Set</h2>
      <p>
        ${new Set(['A', 'B', 'C'])}
      </p>
      <h2>Generator</h2>
      <p>
        ${(function* () {
          for (let i = 1; i < 4; i++) yield i;
        })()}
      </p>
      <p> 3) My unique fruits</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
      <p> 4) A list of names that include the letter "e"</p>
      <ul>
        ${this.names
        .filter((name) => name.match(/e/i))
        .map((name) => html`<li>${name}</li>`)}
      </ul>
      <button @click=${() => this._togglePetVisibility()}>
        ${this.includePets ? 'Hide' : 'Show'} pets
      </button>
      <p>5) My magical friends</p>
      <ul>
        ${listItems}
      </ul>
      <p>6) Let's play a game!</p>
      <div id="board">
        < ${map(range(8), (row) => map(range(8), (col) => html`
          <div class="${getColor(row, col)}">${getLabel(row, col)}</div>
        `))}
      </div>
      <p>7) A few of my favorite things</p>
      <ul>
        ${map(
          this.things,
          (thing, index) => html`
            <li>
              ${thing}
               <button @click=${() => this._deleteThing(index)}>Delete</button>
            </li>
          `
        )}
      </ul>
    `;
  }
  _togglePetVisibility() {
    this.includePets = !this.includePets;
  }
}
customElements.define('simple-component', SimpleComponent);
const getColor = (row, col) => ((row + col) % 2 ? 'white' : 'black');
const getLabel = (row, col) => `${String.fromCharCode(65 + col)}${8 - row}`;