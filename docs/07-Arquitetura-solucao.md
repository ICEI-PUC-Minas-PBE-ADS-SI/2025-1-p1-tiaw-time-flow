Arquitetura da solução

Estrutura da SoluçãoA solução é dividida em três principais camadas:

Interface do Usuário (Frontend):

Tela de cadastro de atividades;

Tela de visualização dos cronômetros;

Timer circular animado via SVG;

Integração com JSON Server para persistência dos dados.

Serviço de Dados (Backend Simulado):

JSON Server com endpoints REST (GET, POST, PUT, DELETE);

Banco de dados simulado via arquivo db.json.

Ambiente de Hospedagem:

Hospedado no GitHub Pages para frontend;

JSON Server rodando localmente ou via ferramenta como Repl.it ou Glitch para testes.

Funcionalidades

Funcionalidade 1 - Ativar e desativar as notificações

Permite ao usuário ativar e desativar as notificações.

Estrutura de dados: NotificaçõesInstruções: Acessar a tela de notificações > Clicar em "Lembrete de Tarefas"Tela:



Funcionalidade 2 - Metas

Permite adicionar e editar metas.

Estrutura de dados: MetasInstruções: Tela de Metas > Botão de adicionar metas (+)Tela:



Funcionalidade 3 - Criação de temporizador

Permite acessar a página de criação de temporizador.

Estrutura de dados: Criação de temporizadorInstruções: Tela de Cronômetro > Botão "+"Tela:



Funcionalidade 4 - Exibição de temporizador

Exibe cronômetro criado e permite iniciar, pausar e excluir.

Estrutura de dados: Exibir temporizadorTela:



Funcionalidade 5 - Gráfico de produtividade diária

Permite acessar gráfico com produtividade do dia.

Estrutura de dados: Gráfico ProdutividadeInstruções: Planejamento diário > Rolar até o finalTela:



Funcionalidade 6 - Adicionar tarefa semanal

Permite adicionar tarefas com dia da semana.

Estrutura de dados: Adicionar tarefa semanalTela:



Funcionalidade 7 - Adicionar tarefa diária

Permite adicionar tarefas para o dia atual.

Estrutura de dados: Adicionar tarefa diáriaTela:



Funcionalidade 8 - Cadastro/Login usuário

Login ou cadastro de novo usuário.

Estrutura de dados: Login, CadastroTela:

 

Funcionalidade 9 - Alterar foto do Perfil

Permite alterar a foto do perfil.

Estrutura de dados: Alterar fotoTela:



Funcionalidade 10 - Avaliação do app

Permite avaliar o aplicativo com nota e comentário.

Estrutura de dados: Avaliar appTela:



Funcionalidade 11 - Escolher som ou música ambiente

Permite selecionar som ambiente e notificações.

Estrutura de dados: Sons e músicaTela:



Estruturas de dados

Todos os exemplos estão formatados em JSON.

{
  "usuario": {
    "id": 1,
    "nome": "João Silva",
    "notificacoes": {
      "lembretesDeTarefas": true,
      "alertasDeCalendario": true
    }
  }
}

{
  "id": 104,
  "titulo": "Nova Meta",
  "concluidas": 0,
  "total": 3
}

{
  "nome": "Nome da Atividade",
  "cor": "Cor da Atividade",
  "tempo": "HH:MM",
  "segundosTotais": 3600,
  "decorrido": 0
}

{
  "nome": "Nome da Atidade",
  "cor": "Cor Escolhida",
  "tempo": "HH:MM",
  "segundosTotais": 7200,
  "decorrido": 0,
  "ativo": false
}

[
  {
    "nome": "Estudar",
    "tempo": "1h 30min",
    "cor": "#FF5733"
  },
  {
    "nome": "Exercícios",
    "tempo": "2h",
    "cor": "#4287f5"
  }
]

{
  "semana": "2025-06-09",
  "tarefas": [
    {
      "dia": "2025-06-09",
      "horaInicio": "12:00",
      "horaFim": null,
      "descricao": "estudar",
      "concluida": false
    },
    {
      "dia": "2025-06-09",
      "horaInicio": "15:00",
      "horaFim": "21:00",
      "descricao": "trabalhar",
      "concluida": false
    }
  ]
}

{
  "data": "2025-06-08",
  "tarefas": [
    {
      "horaInicio": "08:00",
      "horaFim": "09:30",
      "descricao": "Aula de Natação",
      "concluida": true
    },
    {
      "horaInicio": "10:00",
      "horaFim": "11:00",
      "descricao": "Leitura",
      "concluida": false
    },
    {
      "horaInicio": "12:40",
      "horaFim": "20:40",
      "descricao": "Trabalho",
      "concluida": false
    }
  ]
}

{
  "email": "usuario@exemplo.com",
  "senha": "minhaSenha123"
}

{
  "nome": "João Silva",
  "email": "joao@exemplo.com",
  "senha": "senhaForte123",
  "confirmarSenha": "senhaForte123"
}

{
  "usuarioId": 1,
  "fotoPerfil": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}

{
  "usuarioId": 1,
  "avaliacao": 5,
  "comentario": "Aplicativo excelente! Interface intuitiva e fácil de usar.",
  "data": "2025-06-08T14:32:00Z"
}

{
  "musicaAmbiente": {
    "selecionado": "Sons da Natureza",
    "opcoes": ["Sons da Natureza", "Nenhum"]
  },
  "somNotification": {
    "selecionado": "Clássico",
    "opcoes": ["Clássico", "Silencioso"]
  }
}

{
  "id": "eed55b91-45be-4f2c-81bc-7686135503f9",
  "email": "admin@abc.com",
  "login": "admin",
  "nome": "Administrador do Sistema",
  "senha": "123"
}

Módulos e APIs

Nenhuma API externa foi utilizada.

Recursos visuais utilizados

Hospedagem

A aplicação foi hospedada por meio do serviço Vercel, uma plataforma de deploy contínuo.

Após o desenvolvimento:

O repositório foi conectado à Vercel via GitHub;

Cada push na branch main gera um novo build automático;

CI/CD garantido sem necessidade de servidor manual;

Link gerado para compartilhamento, testes e uso real.

