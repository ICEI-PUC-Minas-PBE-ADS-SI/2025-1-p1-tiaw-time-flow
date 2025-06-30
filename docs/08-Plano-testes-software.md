# Plano de testes de software

<span style="color:red">Pré-requisitos: <a href="03-Product-design.md"> Especificação do projeto</a></span>, <a href="05-Projeto-interface.md"> Projeto de interface</a>

O plano de testes de software é gerado a partir da especificação do sistema e consiste em casos de teste que deverão ser executados quando a implementação estiver parcial ou totalmente pronta. Apresente os cenários de teste utilizados na realização dos testes da sua aplicação. Escolha cenários de teste que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico, o grupo deve detalhar quais funcionalidades foram avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Não deixe de enumerar os casos de teste de forma sequencial e garantir que o(s) requisito(s) associado(s) a cada um deles esteja(m) correto(s) — de acordo com o que foi definido na <a href="03-Product-design.md">Especificação do projeto</a>.


| **Caso de teste**  | **CT-001 – Cadastrar perfil**  |
|:---: |:---: |
| Requisito associado | RF-01 - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que estes consigam criar e gerenciar seu perfil. |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o aplicativo <br> - Clicar em "Criar conta" <br> - Preencher os campos obrigatórios (e-mail, nome, senha, confirmação de senha) <br> - Clicar em "Registrar" |
| Critério de êxito | - O cadastro foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Christian Fernandes Herculano Alberto |

<br>

| **Caso de teste**  | **CT-002 – Efetuar login**  |
|:---: |:---: |
| Requisito associado | RF-02 - A aplicação deve possuir opção de fazer login, sendo o login o endereço de e-mail. |
| Objetivo do teste | Verificar se o usuário consegue realizar login. |
| Passos | - Acessar o aplicativo <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" |
| Critério de êxito | - O login foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Christian Fernandes Herculano Alberto |


| **Caso de teste**  | **CT-003 – Adicionar Tarefa**  |
|:---: |:---: |
| Requisito associado | RF-03 - A aplicação deve possuir opção de adicionar tarefa, que vai ser vinculado com o login do usuário |
| Objetivo do teste | Verificar se o usuário consegue adicionar tarefa. |
| Passos | - Acessar o aplicativo <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" <br>  - Esperar o carregamento da tela inicial <br> - Clicar em adicionar tarefas |
| Critério de êxito | - A tarefa foi adicionada com sucesso. |
| Responsável pela elaboração do caso de teste | Christian Fernandes Herculano Alberto |

| **Caso de teste**  | **CT-004 – Adicionar Tarefa**  |
|:---: |:---: |
| Requisito associado | RF-04 - A aplicação deve possuir opção de adicionar tarefa, que vai ser vinculado com o login do usuário |
| Objetivo do teste | Verificar se o usuário consegue adicionar tarefa. |
| Passos | - Acessar o aplicativo <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" <br>  - Esperar o carregamento da tela inicial <br> - Clicar em adicionar tarefas |
| Critério de êxito | - A tarefa foi adicionada com sucesso. |
| Responsável pela elaboração do caso de teste | Gustavo RIbeiro Pena |

| **Caso de teste**  | **CT-005 – Planejamento Diário e semanal**  |
|:---: |:---: |
| Requisito associado | RF-05 - A aplicação deve possuir opção de planejamento semanal e diário, no qual os dados serão de acordo com o login do usuário |
| Objetivo do teste | Verificar se o usuário consegue alterar entre planejamento diário e semanal. |
| Passos | - Acessar o aplicativo <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" <br>  - Esperar o carregamento da tela inicial <br> - Clicar em planejamento diário ou planejamento semanal |
| Critério de êxito | - Mudança das telas entre planejamento diário e semanal. |
| Responsável pela elaboração do caso de teste | Caio Moraes da Silva e Gustavo Ribeiro Pena |

| **Caso de teste**  | **CT-006 – Tela de cronômetro**  |
|:---: |:---: |
| Requisito associado | RF-06 - A aplicação deve possuir opção de cronômetro |
| Objetivo do teste | Verificar se o usuário consegue acessar e iniciar o cronômetro de determinada tarefa. |
| Passos | - Acessar o aplicativo <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" <br>  - Esperar o carregamento da tela inicial <br> - Clicar em cronômetro |
| Critério de êxito | - Mudança da tela inicial para a tela do cronômetro. |
| Responsável pela elaboração do caso de teste | Caio Moraes da Silva |

| **Caso de teste**  | **CT-007 – Tela de metas**  |
|:---: |:---: |
| Requisito associado | RF-07 - A aplicação deve possuir opção de metas |
| Objetivo do teste | Verificar se o usuário consegue acessar e iniciar as metas criadas. |
| Passos | - Acessar o aplicativo <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" <br>  - Esperar o carregamento da tela inicial <br> - Clicar em metas |
| Critério de êxito | - Mudança da tela inicial para a tela de metas. |
| Responsável pela elaboração do caso de teste | Vitor Cesar Arruda Xavier |

| **Caso de teste**  | **CT-008 – Carrossel**  |
|:---: |:---: |
| Requisito associado | RF-08 - A aplicação deve exibir um carrossel das tarefas |
| Objetivo do teste | Verificar se o carrossel é exibido corretamente de acordo com as tarefas criadas. |
| Passos | - Acessar o aplicativo <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" <br>  - Esperar o carregamento da tela inicial <br> - Adicionar alguma tarefa <br> - Verificar a exbição do carrossel de acordo com as tarefas criadas. |
| Critério de êxito | - Exibição do carrossel. |
| Responsável pela elaboração do caso de teste | Geovanna Duarte |

| **Caso de teste**  | **CT-009 – Gráfico de produtividade**  |
|:---: |:---: |
| Requisito associado | RF-09 - A aplicação deve exibir um carrossel das tarefas |
| Objetivo do teste | Verificar se o gráfico de produtividade é exibido corretamente de acordo com as tarefas concluídas. |
| Passos | - Acessar o aplicativo <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" <br>  - Esperar o carregamento da tela inicial <br> - Adicionar alguma tarefa <br> - Marcar a tarefa como concluída <br> - Verificar o gráfico de produtividade  |
| Critério de êxito | - Exibição do gráfico de produtividade. |
| Responsável pela elaboração do caso de teste | Caio Moraes da Silva  |











 
> **Links úteis**:
> - [IBM - criação e geração de planos de teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e técnicas de testes ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de software: conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e geração de planos de teste de software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de teste para JavaScript](https://geekflare.com/javascript-unit-testing/)
