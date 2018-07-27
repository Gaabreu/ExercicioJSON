const fs = require('fs');
const arquivo = 'cadastros.json';

exports.salvar = function(cadastros, nomeRecebido, emailRecebido){
    if(!nomeRecebido || !emailRecebido){
        console.log("Digite o nome ou o email, cacilda");
        return;
    }else{
        cadastros[nomeRecebido] = emailRecebido;
        
        let dados = JSON.stringify(cadastros);
        
        fs.writeFile(arquivo, dados, (erro) => {
            if(erro){
                console.log('Deu ruim');
            }else{
                console.log('Gravei o arquivo');
            }
        });
    }
}

exports.buscar = function(cadastros,nomeRecebido){
    console.log(cadastros[nomeRecebido])
}
exports['buscar-todos'] = function(cadastros){
    console.log(cadastros);
}