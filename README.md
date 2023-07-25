<h1> Enafood Delivery  </h1>

## Description

O Enafood Delivery é um projeto de exemplo para demonstrar a criação de uma API de pedidos de delivery de comida usando o NestJS, MongoDB.

## Motivações e Escolhas Técnicas
<h3>NestJS:</h3> Foi escolhido por ser um framework moderno e poderoso para a criação de APIs Node.js. Ele fornece uma arquitetura modular, fácil de escalar e com suporte para injeção de dependência.

<h3>Fastify:</h3> O Fastify foi utilizado como servidor web devido à sua alta performance e eficiência, tornando a API mais rápida e eficiente em termos de recursos.

<h3>MongoDB e Mongoose:</h3> Foi escolhido o MongoDB como banco de dados para armazenar os dados dos usuários e produtos, devido à sua flexibilidade e facilidade de integração com o NestJS. O Mongoose é uma biblioteca que fornece um esquema baseado em classes para modelar os documentos MongoDB, facilitando a validação e manipulação dos dados.

<h3>Swagger:</h3> O Swagger foi incorporado à API para fornecer uma documentação interativa e amigável dos endpoints disponíveis, facilitando o entendimento e teste da API por desenvolvedores e usuários.

<h3>Controllers e Services:</h3> A arquitetura foi organizada em controllers e services para separar as responsabilidades e facilitar a reutilização do código.


## Instalação

Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.
```
Clone o repositório do projeto: https://github.com/rodrigod10/enafood-delivery.git
```

Instale as dependências:

```bash
$ npm install
```

Antes de executar o projeto, é necessário configurar algumas variáveis de ambiente no arquivo </p>.ENV, localizado na raiz do projeto. Crie um arquivo .env e adicione as seguintes variáveis:

```
$ MONGO_URI=mongodb://localhost:27017/enafood-delivery
```
Certifique-se de ajustar a URI do MongoDB conforme sua configuração.

## Executando o servidor
Para executar o servidor, utilize o seguinte comando:

```bash
# development
$ npm run start

```

## Endpoints
GET /produtos: Obter todos os produtos cadastrados.

GET /produtos/:id: Obter um produto específico pelo seu ID.

POST /produtos: Adicionar um novo produto.

PUT /produtos/:id: Atualizar as informações de um produto existente.

DELETE /produtos/:id: Remover um produto pelo seu ID.

GET /usuarios: Obter todos os usuários cadastrados.

GET /usuarios/:id: Obter um usuário específico pelo seu ID.

POST /usuarios: Adicionar um novo usuário.

PUT /usuarios/:id: Atualizar as informações de um usuário existente.

DELETE /usuarios/:id: Remover um usuário pelo seu ID.

POST /carrinho/adicionar: Adicionar um produto ao carrinho de um usuário.

GET /carrinho/:usuarioId: Obter o carrinho de um usuário pelo seu ID.

DELETE /carrinho/:usuarioId/:produtoId: Remover um produto do carrinho de um usuário pelo seu ID.

## Melhorias Futuras
Corrigir bug de atualizar usuário
Corrigir a implementação para que o carrinho do usuário atualize junho com o carrinho
Implementar teste unitarios para os services utilizando JEST,
Implementar teste de Integração da Controller utilizando o SUPER TEST do JEST

## Melhorias Sugeridas
Para atender a faze 4 do Enafood Delivery:
  dividir em 3 micro-serviço uma para usuarios,produtos e carrinho, alem de aplicar algum designer pattener afim de melhorar sua escalabilidade 
  sugestão de pattener DDD (Domain-Driven Design) dividindo em aplicação onde teremos os serviços rest separados CRUD utilizando de DTO, class-validation e controller
  na camada de dominio teremos a logica utilizando-se de use-cases separados, para valer do principio de responsablidade unica e a camada de infra onde teremos os repositorys.
  não esquecendo de aplicar factorys para os usecases, alem de CIRCUIT BREAKER nos repositoris utilzando o Opposition
  Apartir dai aplicar arquitetura hexagonal usando-se de ports na camada de domino, criar sua factory, junto a factory do usecase na camada de infra e adapter para "subistuir" os repositorys
  se for um serviço que for prover o backend para mobile implementar lazyInstace e LazyResolve que fara um carregamento por modulos.
  implementar cache utilzando o cache-managen./
com essas melhoria a aplicação ficara robusta e bastante escalavio para atender a alta demanda do projeto.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo [MIT licensed](LICENSE). para obter mais detalhes.
