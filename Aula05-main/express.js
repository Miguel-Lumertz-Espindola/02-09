const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/site", express.static('./views/teste.html'));

app.get("/site", function(req, res){
    res.redirect("/site");
})

app.get("/imagem", function(req, res){
//    res.send("Ola pessoal");
    res.send(`
        <form action="/" method="POST">
            Nome: <input name="nome"></input>
            <button>Enviar</button>
        </form>
    `)
});

app.post("/", function(req, res){
    console.log(req.body); 
    res.send("O nome digitado foi: " + req.body.nome);           
});

// Rota para tratar páginas não encontradas (404)
app.get('*', (req, res) => {
    res.status(404).send('Página não encontrada!');
  });


app.listen(3000, function(){
    console.log("APP rodando em http://localhost:3000");
});