const path = require('path');
const ejs = require('ejs');
const parser = require('body-parser');
const express = require('express');

const application = express();
application.engine('html', ejs.renderFile);
application.set('view engine', 'html');
application.set('view engine', 'ejs');
application.use('/public', express.static(path.join(__dirname, 'public')));
application.use(express.static('./public'))
application.set('views', path.join(__dirname, 'views'));

application.use(parser.json());
application.use(parser.urlencoded({extended: false}));

// Rotas:
application.get('/', (request, response) => {
    response.redirect('/web-projects.html')
})

application.get('/cadastrar', (request, response) => {
    response.redirect('/cadastrar-index.html')
})

application.post('/cadastrar', (request, response) => {
    const user_name = request.body.user_name
    const user_email = request.body.user_email
    const object = {user_name, user_email}
    users.push(object)
    response.render('resposta', object)
})


application.post('/login', (request, response) => {
    response.redirect('/login')
})

application.get('/criar-post', (request, response) => {
    response.render('criar-post-form')
})

let posts = []
application.post('/post-criado', (request, response) => {
    const object = {
        titulo: request.body.artTitle,
        resumo: request.body.resumo,
        conteudo: request.body.conteudo,
    }
    posts.push(object)
    console.log(posts)
    response.render('posts-criados', { objects: posts } )
})

application.get('/login', (request, response) => {
    response.rediopen .user_namerect('/login-index.html')
})

const selectedPort = 8080
const impriveServerIsOn = console.log('Server is ON!')

application.listen(selectedPort, impriveServerIsOn);