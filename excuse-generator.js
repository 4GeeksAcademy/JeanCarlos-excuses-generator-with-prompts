const who = ["Mi perro", "Mi abuela", "El cartero", "Mi profesor"];
const action = ["se comio", "se cayo", "perdio", "rompio"];
const what = ["mi tarea", "mi celular", "el autobus", "las llaves de la casa"];
const when = ["hoy", "ayer", "esta manana", "anoche"];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
console.log(excuse);
