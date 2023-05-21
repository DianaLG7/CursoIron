//Prueba
function nvocal(texto)
{
    let nvocal=0;
    let vocales=['a','A','e','E','i','I','o','O','u','U'];

    for(let i=0; i< texto.length; i++)
    {
        if(vocales.indexOf(texto[i])>=0)
        {
            ++ nvocal;
        }
    }
    return nvocal;
}       

console.log(nvocal('JavaScript'));
console.log(nvocal('Hola'));
console.log(nvocal('Adios'));
console.log(nvocal('Naranja'));