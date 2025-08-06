<samp>

# Tech Challenge 02 - Pós Tech FIAP - FSDT/2025 - Grupo 33
<p>💾 Segundo desafio da pós graduação em desenvolvimento full-stack <a href="https://postech.fiap.com.br/curso/full-stack-development">@FIAP</a></p> 
<details>
  <summary><samp>Descrição do Desafio</samp></summary>
  <br>
Tech Challenge é o projeto da fase que englobará os conhecimentos
obtidos em todas as disciplinas da fase.

## O problema
Atualmente, a maioria de professores e professoras da rede pública de
educação não têm plataformas onde postar suas aulas e transmitir conhecimento
para alunos e alunas de forma prática, centralizada e tecnológica.
Para solucionar esse problema, nós utilizamos os conhecimentos
adquiridos na última fase para auxiliar a nossa comunidade com a criação de
uma aplicação de blogging dinâmico, utilizando a plataforma OutSystems. A
plataforma foi um sucesso e, agora, nossa aplicação escalará para um panorama
nacional. Portanto, precisaremos refatorar nosso Back-end, utilizando a
plataforma de desenvolvimento node.js, e precisaremos persistir esses dados
em um banco de dados, seja ele SQL ou NoSQL, conforme a decisão do grupo.
 
## Requisitos funcionais:
Os seguintes endpoints REST serão implementados para a aplicação de
blogging:
- GET /posts - Lista de Posts:<br>
▪ Este endpoint permitirá aos alunos visualizarem uma lista de
todos os posts disponíveis na página principal.
- GET /posts/:id - Leitura de Posts:<br>
▪ Ao acessar este endpoint com um ID específico de post, os
alunos poderão ler o conteúdo completo desse post.
- POST /posts - Criação de Postagens:<br>
▪ Permite que docentes criem novas postagens. Este
endpoint aceitará dados como título, conteúdo e autor no
corpo da requisição.
- PUT /posts/:id - Edição de Postagens:<br>
▪ Usado para editar uma postagem existente. Professores
deverão fornecer o ID do post que desejam editar e os novos
dados no corpo da requisição.
- GET /posts - Listagem de Todas as Postagens:<br>
▪ Este endpoint permitirá que professores vejam todas as
postagens criadas, facilitando a gestão do conteúdo.
- DELETE /posts/:id - Exclusão de Postagens:<br>
▪ Permite que docentes excluam uma postagem específica,
usando o ID do post como parâmetro.
- GET /posts/search - Busca de Posts:<br>
▪ Este endpoint permitirá a busca de posts por palavraschave. Os usuários poderão passar uma query string com o
termo de busca e o sistema retornará uma lista de posts que
contêm esse termo no título ou conteúdo.
   
## Requisitos técnicos:
- Back-end em Node.js:<br>
▪ Implementação do servidor usando Node.js. <br>
▪ Utilização de frameworks como Express para roteamento e
middleware.<br>
- Persistência de Dados:<br>
▪ Utilização de um sistema de banco de dados (por exemplo,
MongoDB, PostgreSQL).<br>
▪ Implementação de modelos de dados adequados para as
postagens.<br>
- Containerização com Docker:<br>
▪ Desenvolvimento e implantação usando contêineres Docker
para garantir consistência entre ambientes de
desenvolvimento e produção.<br>
- Automação com GitHub Actions:<br>
▪ Configuração de workflows de CI/CD para automação de
testes e deploy.
- Documentação:<br>
▪ Documentação técnica detalhada do projeto, incluindo setup
inicial, arquitetura da aplicação e guia de uso das APIs.
- Cobertura de Testes:<br>
▪ O projeto deve garantir que pelo menos 20% do código seja
coberto por testes unitários. Essa medida é essencial para
assegurar a qualidade e a estabilidade do código,
especialmente em funções críticas como criação, edição e
exclusão de postagens.
 
## Entrega
- Código-Fonte: repositório GitHub com o código do projeto,
incluindo Dockerfiles e scripts de CI/CD.
- Apresentação Gravada: demonstração em vídeo do
funcionamento da aplicação, incluindo detalhes técnicos de
implementação.
- Documentação: documento descrevendo a arquitetura do
sistema, uso da aplicação e relato de experiências e desafios
enfrentados pela equipe durante o desenvolvimento, esta
documentação deve ser entregue em arquivo de texto da
preferência do grupo ou no readme do github.
</details>

## Membros do Grupo 33:
<a href="https://github.com/natashalisboa">Natasha Lisboa</a> | 
<a href="https://github.com/lmagueta">Lucas Magueta</a>
</samp>

## Portal Múltipla Escolha
Este repositório contém o back-end do **Portal Múltipla Escolha**, uma plataforma em desenvolvimento que visa enfrentar o desafio da escassez de ferramentas eficazes para a publicação e o compartilhamento centralizado de conteúdos educacionais de forma acessível e organizada.

## 🧱 Arquitetura
A aplicação adota uma arquitetura baseada em microsserviços, estruturada no padrão MVC (Model-View-Controller). Essa abordagem favorece a escalabilidade, organização e manutenção do sistema.
### Tecnologias
- **Back-end**: Node.js com Express.js para construção da API RESTful.
- **Banco de Dados**: PostgreSQL (produção).
- **Containerização**: Docker para garantir consistência entre os ambientes.
- **CI/CD**: GitHub Actions para automação de testes e deploy contínuo.
- **ORM**: TypeORM.
- **Autenticação**: JWT (JSON Web Tokens).
### **Funcionalidades**
- Busca de Postagens por palavras-chave.
- **Usuários:** Cadastro, busca, atualização, autenticação via JWT, exclusão e listagem.
- **Aulas/Postagens:** Criação, leitura, atualização e exclusão (CRUD completo).
### **Camadas da Arquitetura**
- **`Camada de Apresentação`:** Gerencia as requisições HTTP por meio do Express.js, controlando as rotas da aplicação.
- **`Camada de Serviço`:** Contém a lógica de negócios, responsável por processar os dados e orquestrar as regras da aplicação.
- **`Camada de Persistência`:** Utiliza o TypeORM para interações com o banco de dados.
- **`Banco de Dados`:** PostgreSQL.

## ⚙️ **Setup Inicial**
### **Pré-requisitos**
- **Node.js**: versão 20 ou superior;
- **Docker e Docker Compose** (para containerização): Para utilizar a aplicação em contêineres, é necessário ter o Docker instalado. Você pode fazer o download [neste link](https://www.docker.com/get-started). O Docker Compose, utilizado para orquestrar os serviços, normalmente já é incluído na instalação padrão do Docker.
- **Git**.

## 📦 **Passo a Passo**

1. Clonando o repositório:
   ```bash
   git clone https://github.com/natashalisboa/fiap-tech-challenge-02.git
   cd fiap-tech-challenge-02
   ```
2. Instalando as dependências:
   ```bash
   npm install
   ```
3. Configurando e iniciando o ambiente com Docker:
   ```bash
   docker-compose up --build
   ```
4. Iniciando o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   O servidor estará disponível em `http://localhost:3000`.

## Guia de Uso das APIs

### Endpoints de Usuário

#### Logar
- **Método**: POST
- **Endpoint**: `/usuario/signin`
- **Corpo da Requisição**:
```json
{
    "email": "teste6@gmail.com",
    "senha": "23245"
}
```

#### Criar Usuário
- **Método**: POST
- **Endpoint**: `/usuario`
- **Corpo da Requisição**:
```json
  {
    "nome": "teste 1",
    "email": "teste@gmail.com",
    "senha": "21345",
    "cargo": {
        "cargoId": 1,
        "tipo": "PROFESSOR"
    }
}
```

#### Obter Usuário por ID
- **Método**: GET
- **Endpoint**: `/usuario/:id`
- **Parâmetros**: `id` (ID do usuário)

#### Obter Todos os Usuários
- **Método**: GET
- **Endpoint**: `/usuario?page=1&limit=10`
- **QueryParams**:
  - `page`: Número da página (opcional)
  - `limit`: Quantidade máxima de objetos por página (opcional)

#### Atualizar Usuário
- **Método**: PUT
- **Endpoint**: `/usuario/:userId`
- **Parâmetros**: `userId`
- **Corpo da Requisição**:
```json
  {
    "nome": "teste update",
    "email": "teste2@gmail.com",
    "senha": "21345",
    "cargo": {
        "cargoId": 1,
        "tipo": "PROFESSOR"
    }
}
```

#### Deletar Usuário
- **Método**: DELETE
- **Endpoint**: `/usuario/:id`
- **Parâmetros**: `userId` (ID do usuário)

### Endpoints de Posts

#### Criar Post
- **Método**: POST
- **Endpoint**: `/posts`
- **Corpo da Requisição**:
```json
{
    "titulo": "post inclusion",
    "conteudo": "lorem ipsum",
    "disciplinaId": {
        "disciplinaId": 1,
        "nome": ""
    },
    "autorId": {
        "userId": 1,
        "nome": "",
        "email": "",
        "senha": "",
        "cargo": {
            "cargoId": 1,
            "tipo": ""
        }
    }
}
```

#### Obter Post por ID
- **Método**: GET
- **Endpoint**: `/posts/:postId`
- **Parâmetros**: `postId` (ID do post)

#### Obter Todos os Posts
- **Método**: GET
- **Endpoint**: `/posts?page=1&limit=10`
- **QueryParams**:
  - `page`: Número da página (opcional)
  - `limit`: Quantidade máxima de objetos por página (opcional)

#### Buscar Posts
- **Método**: GET
- **Endpoint**: `/posts/search/:search`
- **Parâmetros**:
  - `search`: Termo de busca (obrigatório)

#### Atualizar Post
- **Método**: PUT
- **Endpoint**: `/posts/:postId`
- **Parâmetros**: `postId` (ID do post)
- **Corpo da Requisição**:
```json
{
    "titulo": "post update",
    "conteudo": "lorem ipsum",
    "disciplinaId": {
        "disciplinaId": 1,
        "nome": ""
    },
    "autorId": {
        "userId": 1,
        "nome": "",
        "email": "",
        "senha": "",
        "cargo": {
            "cargoId": 1,
            "tipo": ""
        }
    }
}
```
#### Deletar Post
- **Método**: DELETE
- **Endpoint**: `/posts/:postId`
- **Parâmetros**: `postId` (ID do post)

## ✅ Testes
Para executar os testes unitários, utilize o comando:

```bash
npm test
```

## **Breve Demonstração**
[Vídeo](https://youtu.be/Gn1n7ciEXmo)

## **Desafios e Conclusão**
Ao longo do desenvolvimento do projeto, nossa equipe enfrentou diversos desafios técnicos que, embora exigentes, se transformaram em valiosas oportunidades de aprendizado. Como a tecnologia utilizada era nova para nós, foi necessário ir além do conteúdo apresentado em aula, explorando materiais complementares para consolidar os conceitos e aprofundar o entendimento. 
Um dos principais obstáculos foi estruturar a aplicação de forma escalável e de fácil manutenção — algo essencial para garantir a longevidade e evolução do projeto.
Nesta segunda fase do desafio, conseguimos aplicar de maneira prática os conhecimentos adquiridos, com destaque para o desenvolvimento de APIs, implementação de autenticação, testes unitários e adoção de boas práticas de programação.
Estamos orgulhosos dos avanços conquistados até aqui. A experiência foi bastante hands-on, e seguimos motivados para continuar aprimorando o **Portal Múltipla Escolha** nas próximas etapas do projeto.
