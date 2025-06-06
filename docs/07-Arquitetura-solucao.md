# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

Pré-requisitos
- Projeto construído em HTML, CSS e JavaScript.
- Backend com JSON Server para simular uma API RESTful.
- Interface responsiva inspirada em Material Design.
- Editor de código: Visual Studio Code.
- Testes de API realizados com Postman.

Estrutura da Solução
A solução é dividida em três principais camadas:
1. Interface do Usuário (Frontend):
- Tela de cadastro de atividades;
- Tela de visualização dos cronômetros;
- Timer circular animado via SVG;
- Integração com JSON Server para persistência dos dados.

2. Serviço de Dados (Backend Simulado):
- JSON Server com endpoints REST (GET, POST, PUT, DELETE);
- Banco de dados simulado via arquivo db.json.

3. Ambiente de Hospedagem:
- Hospedado no GitHub Pages para frontend;
- JSON Server rodando localmente ou via ferramenta como Repl.it ou Glitch para testes.



## Funcionalidades

##### Funcionalidade 1 -  Ativar e desativar as notificações

Funcionalidade que permite ao usuário ativar e desativar as notificações

* **Estrutura de dados:** [Contatos](#estrutura-de-dados---contatos)
* **Instruções de acesso:**
  * Acessar a tela de notificações
  * Clicar no botão de Lembrete de Tarefas
  * Aguardar resultado
* **Tela da funcionalidade**:

![Tela de funcionalidade](images/exemplo-funcionalidade.png)



### Estruturas de dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info.

##### Estrutura de dados - Contatos

Contatos da aplicação

```json
  {
    "id": 1,
    "nome": "Leanne Graham",
    "cidade": "Belo Horizonte",
    "categoria": "amigos",
    "email": "Sincere@april.biz",
    "telefone": "1-770-736-8031",
    "website": "hildegard.org"
  }
  
```

##### Estrutura de dados - Usuários  ⚠️ EXEMPLO ⚠️

Registro dos usuários do sistema utilizados para login e para o perfil do sistema.

```json
  {
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    email: "admin@abc.com",
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    login: "admin",
    nome: "Administrador do Sistema",
    senha: "123"
  }
```

> ⚠️ **APAGUE ESTA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente as estruturas de dados utilizadas na solução tanto para dados utilizados na essência da aplicação, quanto outras estruturas que foram criadas para algum tipo de configuração.
>
> Nomeie a estrutura, coloque uma descrição sucinta e apresente um exemplo em formato JSON.
>
> **Orientações:**
>
> * [JSON Introduction](https://www.w3schools.com/js/js_json_intro.asp)
> * [Trabalhando com JSON - Aprendendo desenvolvimento web | MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)

### Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução.

**Images**:

* Unsplash - [https://unsplash.com/](https://unsplash.com/) ⚠️ EXEMPLO ⚠️

**Fonts:**

* Icons Font Face - [https://fontawesome.com/](https://fontawesome.com/) ⚠️ EXEMPLO ⚠️

**Scripts:**

* jQuery - [http://www.jquery.com/](http://www.jquery.com/) ⚠️ EXEMPLO ⚠️
* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/) ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESTA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente os módulos e APIs utilizados no desenvolvimento da solução. Inclua itens como: (1) frameworks, bibliotecas, módulos, etc. utilizados no desenvolvimento da solução; (2) APIs utilizadas para acesso a dados, serviços, etc.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foram realizados.

> **Links úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando seu site no Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
