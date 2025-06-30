Arquitetura da solução
Estrutura da Solução
A solução é dividida em três principais camadas:

Interface do Usuário (Frontend):

Tela de cadastro de atividades
Tela de visualização dos cronômetros
Timer circular animado via SVG
Integração com JSON Server para persistência dos dados
Serviço de Dados (Backend Simulado):

JSON Server com endpoints REST (GET, POST, PUT, DELETE)
Banco de dados simulado via arquivo db.json
Ambiente de Hospedagem:

Hospedado no GitHub Pages para frontend
JSON Server rodando localmente ou via ferramenta como Repl.it ou Glitch para testes
Funcionalidades
Funcionalidade 1 - Ativar e desativar as notificações
Funcionalidade que permite ao usuário ativar e desativar as notificações

Estrutura de dados: Notificações
Instruções de acesso:
Acessar a tela de notificações
Clicar no botão de Lembrete de Tarefas
Aguardar resultado
Tela da funcionalidade:
Tela de funcionalidade

Funcionalidade 2 - Metas
Funcionalidade que permite ao usuário adicionar e editar metas

Estrutura de dados: Metas
Instruções de acesso:
Acessar a tela de Metas
Clicar no botão de adicionar metas (simbolo de +)
Aguardar resultado
Tela da funcionalidade:
Tela de funcionalidade

Funcionalidade 3 - Criação de temporizador
Funcionalidade que permite ao usuário acessar a página de criação de temporizador para cronômetro

Estrutura de dados: criação de temporizador
Instruções de acesso:
Acessar a tela de Cronômetro
Clicar no botão com simbolo de +
Tela da funcionalidade:
Tela de funcionalidade

Funcionalidade 4 - Exibição de temporizador
Funcionalidade que exibe cronômetro criado e permite iniciar, pausar e excluir o tempo registrado em uma atividade.

Estrutura de dados: Exibir temporizador
Instruções de acesso:
Acessar a tela cronômetro (O temporizador deve ser criado primeiro no icone "+")
Aguardar a exibição do cronômetro
Tela da funcionalidade:
Tela de funcionalidade

Funcionalidade 5 - Gráfico de produtividade diária
Funcionalidade que permite ao usuário acessar a página de criação de temporizador para cronômetro

Estrutura de dados: Gráfico Produtividade
Instruções de acesso:
Acessar a tela inicial
Clicar em planejamento diário
Rolar a tela até o final
Tela da funcionalidade:
Tela de funcionalidade

Funcionalidade 6 - Adicionar tarefa semanal
Funcionalidade permitir que o usuário adicione tarefas em sua lista semanal, pondendo escolher o dia da semana em que vai adicionar ou exlcuir a tarefa

Estrutura de dados: Adicionar tarefa semanal
Instruções de acesso:
Acessar a tela principal
Clicar em planejamento semanal
Tela da funcionalidade:
Tela de funcionalidade

Funcionalidade 7 - Adicionar tarefa diária
Funcionalidade permitir que o usuário adicione tarefas para o dia atual

Estrutura de dados: Adicionar tarefa diária
Instruções de acesso:
Acessar a tela principal
Clicar em planejamento diário
Tela da funcionalidade:
Tela de funcionalidade

Funcionalidade 8 - Cadastro/Login usuário
Funcionalidade permitir que o usuário logar no aplicativo caso já tenha uma conta, se não tiver poderar fazer o cadastro

Estrutura de dados: Login
Instruções de acesso:
Acessar a tela inicial de login
Efeturar login (A conta precisa estar cadastrada)
Tela da funcionalidade:
Tela de funcionalidade

Estrutura de dados: Cadastro
Instruções de acesso:
Acessar a tela inicial de login
Clicar em cadastro na parte inferior da tela
Tela da funcionalidade:
Tela de funcionalidade

Funcionalidade 9 - Alterar foto do Perfil
Funcionalidade permitir que o usuário altere sua foto de perfil

Estrutura de dados: Alterar foto
Instruções de acesso:
Acessar a tela principal
Clicar no icone de perfil de usuario
Clicar na sua foto
Tela da funcionalidade:
Tela de funcionalidade

Funcionalidade 10 - Avaliação do app
Funcionalidade permitir que o usuário avalie o app

Estrutura de dados: Avaliar app
Instruções de acesso:
Acessar a tela principal
Clicar no icone de perfil de usuario
Ir até "Avalie o aplicativo" é clicar nele
Tela da funcionalidade:
Tela de funcionalidade

Funcionalidade 11 - Escolher som ou música ambiente
Funcionalidade permitir que o usuário escolha uma música de fundo para usar e altere o som das notificações

Estrutura de dados: Sons e música
Instruções de acesso:
Acessar a tela principal
Clicar no icone de perfil de usuario
Ir até "Música ambiente" é clicar nele
Tela da funcionalidade:
Tela de funcionalidade

Estruturas de dados
Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.

Estrutura de dados - Notificações
