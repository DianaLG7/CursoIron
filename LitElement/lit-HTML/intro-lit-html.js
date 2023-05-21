//HTML - Targged Template String
//Render - Volcar el html generado con los template strings
import {html,render} from"./node_modules/lit-html/lit-html.js";

//Render recibe dos parametros
//templateResult : el resultado de obtener y generar un template
//nodo dom : donde volcar el html generado

const cadena=">>>>>>Contenido dinámico<<<<<<";
/* Version 1
const objectTemplateResult = html`<h2>Contenido estático (template) + ${cadena} </h2>;*/

//Version 2 -> funcion dinamica (parametro)
const templateHolder=(paramString) => html`<h2>Contenido estático (template) + ${paramString} </h2>`;
const objectTemplateResult = templateHolder(cadena);

//render -> sustituye todo lo del body
//render(objetoTemplateResult, elementoEnDom);

render( templateHolder(cadena), document.getElementById('container1'));
render( templateHolder('Cooonteeeneeedooor 2'), document.getElementById('container2'));