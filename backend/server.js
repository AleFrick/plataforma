const express = require('express');
const app = express();
const cors = require('cors')
const port = 3003

app.use(cors())


app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}..`)
});


app.get('/diploma/:codigo', (req, res) => {
    let retorno = false
    let codValido = [
        '123456',
        '123789',
        '456789',
        '456123',
        '789456',
        '789123'
    ]
    let nomes = [
        'Carlos',
        'Maria',
        'Pedro',
        'Luana',
        'Thais',
        'Lucas'
    ]
    let idade = [
        '23',
        '41',
        '61',
        '12',
        '32',
        '39'
    ]
    
    let ie = [
        'UFAC',
        'UFT',
        'UNIJUI',
        'UNIPAMPA',
        'UNICRUZ',
        'UNISC'
    ]

    let obj = {
            'nome':'',
            'idade':'',
            'cod_diploma':'',
            'IE':'',
            'POS':''
    }
    
    retorno = false
    for (let i in codValido){
        if(req.params.codigo === codValido[i]){
            retorno = true
            obj.nome = nomes[i]
            obj.idade = idade[i]
            obj.cod_diploma=codValido[i]
            obj.POS = i
            obj.ie = ie[i]
        }
    }
    
    res.status(200).send({retorno:retorno, dados:obj})
});