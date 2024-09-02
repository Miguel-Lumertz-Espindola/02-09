const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//LOGIN
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// SUCESSO
app.post('/sucesso', function(req, res) {
    // Aqui você pode adicionar lógica para validar o login
    res.sendFile(path.join(__dirname, 'public', 'sucesso.html'));
});

// YODA
app.get('/imagens/:nome', function(req, res) {
    const nomeImagem = req.params.nome;
    const caminhoImagem = path.join(__dirname, 'imagem', nomeImagem + '.jpg');
    
    res.sendFile(caminhoImagem, function(err) {
        if (err) {
            console.error('Erro ao enviar a imagem:', err);
            res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
        }
    });
});

// DOWNLOAD YODA
app.get('/down', function(req, res) {
    const filePath = path.join(__dirname, 'imagem', 'yoda.jpg');
    res.download(filePath);  
});

// ERRO
app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// SERVIDOR
app.listen(3000, function() {
    console.log("Servidor rodando em http://localhost:3000");
});
