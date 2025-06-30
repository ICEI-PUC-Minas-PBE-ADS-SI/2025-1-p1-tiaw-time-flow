#  Arquitetura da Solução

## Estrutura da Solução

A aplicação é dividida em três principais camadas:

1. **Interface do Usuário (Frontend)**
   - Tela de cadastro de atividades
   - Tela de visualização dos cronômetros
   - Timer circular animado via SVG
   - Integração com JSON Server para persistência dos dados

2. **Serviço de Dados (Backend Simulado)**
   - JSON Server com endpoints REST (GET, POST, PUT, DELETE)
   - Banco de dados simulado via arquivo `db.json`

3. **Ambiente de Hospedagem**
   - Frontend hospedado no GitHub Pages
   - JSON Server rodando localmente ou via Repl.it/Glitch para testes

---

##  Funcionalidades

### Funcionalidade 1 - Ativar e desativar notificações

- **Estrutura de dados:** [Notificações](#estrutura-de-dados---notificações)
- **Instruções:**
  1. Acessar a tela de notificações
  2. Clicar no botão "Lembrete de Tarefas"
  3. Aguardar resultado

<img src="images/notificacoes.png" width="400"/>

---

### Funcionalidade 2 - Metas

- **Estrutura de dados:** [Metas](#estrutura-de-dados---metas)
- **Instruções:**
  1. Acessar a tela de Metas
  2. Clicar no botão de adicionar metas (+)

<img src="images/metas.png" width="400"/>

---

### Funcionalidade 3 - Criação de temporizador

- **Estrutura de dados:** [Criação de temporizador](#estrutura-de-dados---criação-de-temporizador)
- **Instruções:**
  1. Acessar a tela de Cronômetro
  2. Clicar no botão "+"

<img src="images/CriarTemporizador.png" width="400"/>

---

### Funcionalidade 4 - Exibição de temporizador

- **Estrutura de dados:** [Exibir temporizador](#estrutura-de-dados---exibir-temporizador)
- **Instruções:**
  1. Criar o temporizador
  2. Acessar a tela de cronômetro

<img src="images/ExibeCronometro.png" width="400"/>

---

### Funcionalidade 5 - Gráfico de produtividade diária

- **Estrutura de dados:** [Gráfico Produtividade](#estrutura-de-dados---gráfico-produtividade)
- **Instruções:**
  1. Acessar a tela inicial
  2. Clicar em "Planejamento Diário"
  3. Rolar a tela até o fim

<img src="images/Produtividade.png" width="400"/>

---

### Funcionalidade 6 - Adicionar tarefa semanal

- **Estrutura de dados:** [Tarefa semanal](#estrutura-de-dados---adicionar-tarefa-semanal)
- **Instruções:**
  1. Acessar tela principal
  2. Clicar em "Planejamento Semanal"

<img src="images/tarefasemanal.png" width="400"/>

---

### Funcionalidade 7 - Adicionar tarefa diária

- **Estrutura de dados:** [Tarefa diária](#estrutura-de-dados---adicionar-tarefa-diária)
- **Instruções:**
  1. Acessar tela principal
  2. Clicar em "Planejamento Diário"

<img src="images/tarefadiaria.png" width="400"/>

---

### Funcionalidade 8 - Cadastro/Login de usuário

- **Estrutura de dados:** [Login](#estrutura-de-dados---login) / [Cadastro](#estrutura-de-dados---cadastro)
- **Instruções:**
  - Login: acessar a tela e entrar com a conta cadastrada
  - Cadastro: clicar em "Cadastro" na parte inferior

<img src="images/Telalogin.png" width="400"/>
<img src="images/cadastro.png" width="400"/>

---

### Funcionalidade 9 - Alterar foto do perfil

- **Estrutura de dados:** [Alterar foto](#estrutura-de-dados---alterar-foto)
- **Instruções:**
  1. Acessar tela principal
  2. Clicar no ícone de perfil
  3. Clicar na foto

<img src="images/usuario.png" width="400"/>

---

### Funcionalidade 10 - Avaliação do app

- **Estrutura de dados:** [Avaliar app](#estrutura-de-dados---avaliar-app)
- **Instruções:**
  1. Ir ao perfil
  2. Selecionar "Avalie o aplicativo"

<img src="images/avaliacao.png" width="400"/>

---

### Funcionalidade 11 - Escolher som ou música ambiente

- **Estrutura de dados:** [Sons e música](#estrutura-de-dados---sons-e-música)
- **Instruções:**
  1. Acessar perfil
  2. Selecionar "Música ambiente"

<img src="images/Sons_e_Musica.png" width="400"/>

---

##  Estruturas de Dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info.

##### Estrutura de dados - Notificações

Configurações de notificação do usuário, como lembretes de tarefas e alertas de calendário.

json
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

##### Estrutura de dados - Metas

Registro de metas criadas pelo usuário com contador de progresso

json

{
  "id": 104,
  "titulo": "Nova Meta",
  "concluidas": 0,
  "total": 3
}

##### Estrutura de dados - Criação de temporizador

Dados enviados ao criar um novo temporizador personalizado.

json

{
  "nome": "Nome da Atividade",
  "cor": "Cor da Atividade",
  "tempo": "HH:MM",
  "segundosTotais": 3600,
  "decorrido": 0
}


##### Estrutura de dados - Exibir temporizador

Dados utilizados para renderizar temporizadores ativos e pausados na tela.

json
 {
  "nome": "Nome da Atidade",
  "cor": "Cor Escolhida",             
  "tempo": "HH:MM",            
  "segundosTotais": 7200,       
  "decorrido": 0,         
  "ativo": false                
}

##### Estrutura de dados - Gráfico Produtividade

Dados utilizados para montar um gráfico com o tempo investido em cada atividade.

json
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

##### Estrutura de dados - Adicionar tarefa semanal

Tarefas registradas para a semana selecionada, organizadas por data.

json
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

##### Estrutura de dados - Adicionar tarefa diária

Tarefas registradas para o dia atual, com horários e status de conclusão.

json
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

##### Estrutura de dados - Login

Credenciais do usuário utilizadas para autenticação no sistema.

json
{
  "email": "usuario@exemplo.com",
  "senha": "minhaSenha123"
}

##### Estrutura de dados - Cadastro

Dados necessários para criar uma nova conta de usuário.

json
{
  "nome": "João Silva",
  "email": "joao@exemplo.com",
  "senha": "senhaForte123",
  "confirmarSenha": "senhaForte123"
}

##### Estrutura de dados - Alterar foto

Atualiza a imagem de perfil do usuário.

json
{
  "usuarioId": 1,
  "fotoPerfil": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}

##### Estrutura de dados - Avaliar app

Registra a avaliação do usuário sobre o aplicativo com nota, comentário e data.

json
{
  "usuarioId": 1,
  "avaliacao": 5,
  "comentario": "Aplicativo excelente! Interface intuitiva e fácil de usar.",
  "data": "2025-06-08T14:32:00Z"
}

##### Estrutura de dados - Sons e música

Preferências do usuário quanto ao som ambiente e sons de notificação.

json
{
  "musicaAmbiente": {
    "selecionado": "Sons da Natureza",
    "opcoes": [
      "Sons da Natureza",
      "Nenhum"
    ]
  },
  "somNotification": {
    "selecionado": "Clássico",
    "opcoes": [
    "Clássico",
    "Silencioso"
    ]
  }
}

---

##  Módulos e APIs

Nenhuma API externa foi utilizada.

### Imagens utilizadas

<img src="images/alvo.png" width="100"/>
<img src="images/avatarpadrao.png" width="100"/>
<img src="images/cronometro.png" width="100"/>
<img src="images/fundo.png" width="100"/>
<img src="images/Logo-time.png" width="100"/>
<img src="images/seta-esquerda.png" width="100"/>

---

## 🚀 Hospedagem

A aplicação foi hospedada na **Vercel**, com integração direta ao GitHub. A cada _push_ na branch `main`, a plataforma realiza:

- Build automático
- Deploy contínuo (CI/CD)
- Geração de URL acessível

Essa estratégia garante que a aplicação esteja **sempre atualizada**, sem necessidade de configuração manual de servidores.
