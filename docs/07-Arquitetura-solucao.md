# 🧠 Aplicativo de Produtividade

## 🏗 Arquitetura da Solução

A solução é dividida em **três principais camadas**:

### 1. 🎨 Interface do Usuário (Frontend)
- Tela de cadastro de atividades;
- Tela de visualização dos cronômetros;
- Timer circular animado via SVG;
- Integração com JSON Server para persistência dos dados.

### 2. 🗂 Serviço de Dados (Backend Simulado)
- JSON Server com endpoints REST (`GET`, `POST`, `PUT`, `DELETE`);
- Banco de dados simulado via arquivo `db.json`.

### 3. ☁️ Ambiente de Hospedagem
- Hospedado no **GitHub Pages** (frontend);
- JSON Server rodando localmente ou via **Repl.it / Glitch** para testes.

---

## 🚀 Funcionalidades

### ✅ Funcionalidade 1 – Ativar e desativar notificações
Permite ativar/desativar lembretes.

🔗 Estrutura de dados: [`Notificações`](#estrutura-de-dados---notificações)  
🧭 Instruções: Tela de notificações → Botão "Lembrete de Tarefas"

![Notificações](images/notificacoes.png)

---

### ✅ Funcionalidade 2 – Metas
Adicionar e editar metas pessoais.

🔗 Estrutura de dados: [`Metas`](#estrutura-de-dados---metas)  
🧭 Instruções: Tela de Metas → Botão "+"

![Metas](images/metas.png)

---

### ✅ Funcionalidade 3 – Criação de temporizador
Crie um cronômetro personalizado.

🔗 Estrutura de dados: [`Criação de temporizador`](#estrutura-de-dados---criação-de-temporizador)  
🧭 Instruções: Tela de Cronômetro → Botão "+"

![Criar Temporizador](images/CriarTemporizador.png)

---

### ✅ Funcionalidade 4 – Exibição de temporizador
Inicie, pause ou exclua cronômetros.

🔗 Estrutura de dados: [`Exibir temporizador`](#estrutura-de-dados---exibir-temporizador)

![Exibir Cronômetro](images/ExibeCronometro.png)

---

### ✅ Funcionalidade 5 – Gráfico de produtividade diária
Visualize sua produtividade por atividade.

🔗 Estrutura de dados: [`Gráfico Produtividade`](#estrutura-de-dados---gráfico-produtividade)  
🧭 Instruções: Planejamento diário → Final da página

![Produtividade](images/Produtividade.png)

---

### ✅ Funcionalidade 6 – Adicionar tarefa semanal
Adicione/exclua tarefas em dias específicos da semana.

🔗 Estrutura de dados: [`Adicionar tarefa semanal`](#estrutura-de-dados---adicionar-tarefa-semanal)

![Tarefa semanal](images/tarefasemanal.png)

---

### ✅ Funcionalidade 7 – Adicionar tarefa diária
Adicione tarefas específicas para o dia atual.

🔗 Estrutura de dados: [`Adicionar tarefa diária`](#estrutura-de-dados---adicionar-tarefa-diária)

![Tarefa diária](images/tarefadiaria.png)

---

### ✅ Funcionalidade 8 – Cadastro/Login de usuário
Permite logar ou cadastrar uma nova conta.

🔗 Estrutura de dados: [`Login`](#estrutura-de-dados---login), [`Cadastro`](#estrutura-de-dados---cadastro)

![Login](images/Telalogin.png)  
![Cadastro](images/cadastro.png)

---

### ✅ Funcionalidade 9 – Alterar foto de perfil
Usuário pode trocar sua imagem.

🔗 Estrutura de dados: [`Alterar foto`](#estrutura-de-dados---alterar-foto)

![Foto de usuário](images/usuario.png)

---

### ✅ Funcionalidade 10 – Avaliação do app
Permite deixar nota e comentário sobre o app.

🔗 Estrutura de dados: [`Avaliar app`](#estrutura-de-dados---avaliar-app)

![Avaliação](images/avaliacao.png)

---

### ✅ Funcionalidade 11 – Sons e música ambiente
Permite selecionar música ambiente e sons de notificação.

🔗 Estrutura de dados: [`Sons e música`](#estrutura-de-dados---sons-e-música)

![Música](images/Sons_e_Musica.png)

---

## 🧩 Estruturas de Dados

Cada funcionalidade utiliza uma estrutura de dados específica. Abaixo estão exemplos em JSON:

<details>
<summary><b>📌 Notificações</b></summary>

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
