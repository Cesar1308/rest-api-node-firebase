//definindo as importações
const express = require('espress')
const cors = require('cors')
const firebase = require('firebase')

/**inserindo as informações de confirmação de conexão 
 * com firebase
 */
const firebaseConfig= {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket:'',
    messagingSenderId:'',
    appId:''
}

//inicilaizando Firebase
//firebase.inicializeApp(firebaseConfig)

/**instanciando nosso app como sendo
 * pertencente a classe express
 */
const app = express()

/**habilitando a utilização de JSOPN no 
 * corpo da requisição
 */
app.use(express.json())

/**
 * habilitando o cors
 */
app.use(cors())


/**criando a nossa primeira rota para teste */
app.get('/api',(req, res) => {
    //enviando uma resposta para requisição
    res.status(200).send({
        msg: 'Hello World'
    })
} ) 

//definindo a porta onde o servidor estará ouvindo

app.listen(3000, () => {
    consoli.log('REST API rodando em  http://localhost:3000')
})