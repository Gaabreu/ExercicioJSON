const fs = require('fs');
const comandos = require('./comandos')
const comando = process.argv[2]; 
const nome = process.argv[3]; 
const email = process.argv[4];
const arquivo = 'cadastros.json';

let cadastros = {};

// let comandos = {
//     'salvar' : salvar,
//     'buscar': buscar,
//     'buscar-todos': buscarTodos
// }

fs.readFile(arquivo, (erro, dados) => {
        if(!erro){
            let dadosString = dados.toString();
            cadastros = JSON.parse(dadosString);
        }    
        if(!comandos[comando]){
            console.log('Tá na disney! Não tem esse comando.');
            return;
        }

        comandos[comando](cadastros, nome, email);
    
});




// console.log(comando);
// console.log(nome);
// console.log(email);