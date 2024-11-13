API FalaAgro
Esta é a API do projeto FalaAgro, que fornece serviços de gerenciamento de usuários e notícias. A API foi desenvolvida usando o framework Fastify e oferece endpoints para realizar operações de CRUD (criar, ler, atualizar e excluir) para usuários e notícias.

Requisitos
Node.js 14.x ou superior
npm ou yarn
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/caiohbda/Api-FalaAgro.git
cd Api-FalaAgro
Instale as dependências:

bash
Copiar código
npm install
ou, se estiver usando o Yarn:

bash
Copiar código
yarn install
(Opcional) Crie um arquivo .env para definir variáveis de ambiente necessárias, como o banco de dados.

Inicie o servidor:

bash
Copiar código
npm run start:dev
ou, se estiver usando o Yarn:

bash
Copiar código
yarn start:dev
Endpoints
Usuários
POST /users
Cria um novo usuário.

Corpo da requisição:

json
Copiar código
{
  "fullName": "Nome do Usuário",
  "username": "nomeusuario",
  "email": "email@dominio.com",
  "phoneNumber": "(81) 98335-3586",
  "isActive": true
}
Resposta:

json
Copiar código
{
  "id": "uuid-do-usuario",
  "fullName": "Nome do Usuário",
  "username": "nomeusuario",
  "email": "email@dominio.com",
  "phoneNumber": "(81) 98335-3586",
  "isActive": true
}
GET /users
Obtém uma lista de usuários.

Resposta:

json
Copiar código
[
  {
    "id": "uuid-do-usuario",
    "fullName": "Nome do Usuário",
    "username": "nomeusuario",
    "email": "email@dominio.com",
    "phoneNumber": "(81) 98335-3586",
    "isActive": true
  },
  ...
]
PUT /users/upgrade/{id}
Atualiza as informações de um usuário.

Corpo da requisição:

json
Copiar código
{
  "fullName": "Novo Nome",
  "username": "novonomeusuario",
  "email": "novoemail@dominio.com",
  "phoneNumber": "(81) 98765-4321",
  "isActive": false
}
Resposta:

json
Copiar código
{
  "id": "uuid-do-usuario",
  "fullName": "Novo Nome",
  "username": "novonomeusuario",
  "email": "novoemail@dominio.com",
  "phoneNumber": "(81) 98765-4321",
  "isActive": false
}
DELETE /users/delete/{id}
Deleta um usuário.

Resposta:

json
Copiar código
{
  "message": "Usuário deletado com sucesso."
}
Notícias
POST /posts/{id}
Cria uma nova notícia.

Corpo da requisição:

json
Copiar código
{
  "title": "Título da Notícia",
  "content": "Conteúdo detalhado da notícia.",
  "state": "PE",
  "city": "Recife",
  "image": "url-da-imagem.jpg"
}
Resposta:

json
Copiar código
{
  "id": "uuid-da-noticia",
  "title": "Título da Notícia",
  "content": "Conteúdo detalhado da notícia.",
  "state": "PE",
  "city": "Recife",
  "image": "url-da-imagem.jpg"
}
GET /posts
Obtém uma lista de notícias, com filtros por text, city, state, skip, take.

Parâmetros de consulta:

text: Filtro de texto para pesquisar notícias.
city: Filtro pela cidade.
state: Filtro pelo estado.
skip: Número de registros a serem pulados (para paginação).
take: Número de registros a serem retornados.
Resposta:

json
Copiar código
[
  {
    "id": "uuid-da-noticia",
    "title": "Título da Notícia",
    "content": "Conteúdo da notícia.",
    "state": "PE",
    "city": "Recife",
    "image": "url-da-imagem.jpg"
  },
  ...
]
