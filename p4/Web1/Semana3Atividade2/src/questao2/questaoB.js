const itens = ["Guarabira", "Belém", "Sapé"];

const listaHTML = `<ol>\n` +
  itens.map(item => `  <li>${item}</li>`).join('\n') +
  `\n</ol>`;

console.log(listaHTML);