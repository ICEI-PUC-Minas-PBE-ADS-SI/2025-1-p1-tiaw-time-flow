# 📚 Arquitetura da Solução

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

## ✅ Funcionalidades

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

## 🧩 Estruturas de Dados

### Notificações

```json
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
