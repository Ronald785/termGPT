## 🤖 TermGPT - Chat com OpenAI via Terminal

Este projeto é um chatbot interativo que roda no terminal e utiliza a API da OpenAI com o modelo GPT-4. Ideal para testes rápidos, protótipos ou estudos sobre integração com LLMs.

### 📦 Tecnologias

-   Node.js
-   [openai](https://github.com/openai/openai-node)
-   dotenv
-   readline

---

### 🚀 Como rodar o projeto

#### 1. Clone o repositório

```bash
git clone https://github.com/ronald785/termGPT
cd termGPT
```

#### 2. Instale as dependências

```bash
npm install
```

#### 3. Configure a variável de ambiente

Crie um arquivo `.env` na raiz do projeto com sua chave da OpenAI:

```
OPENAI_API_KEY=sua-chave-aqui
```

#### 4. Execute o chatbot

```bash
npm start
```

---

### 💬 Como usar

-   Digite qualquer pergunta ou comando no terminal.
-   O modelo responderá diretamente no terminal.
-   Digite `sair` para encerrar o programa.

---

### 🧠 Exemplo de interação

```bash
Você: Qual a capital da França?
Aguarde a resposta...

OpenAI: A capital da França é Paris.
```

---

### 🛠️ Personalização

-   Altere o modelo utilizado na função `openai.chat.completions.create()`, se quiser testar outros disponíveis.
-   O histórico da conversa é mantido na memória (não persiste após o encerramento do programa).

---

### 📄 Licença

Este projeto está sob a [licença MIT](LICENSE).

---

## Ronald Almeida

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/Ronald785)](https://github.com/Ronald785)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/ronald785/)](https://www.linkedin.com/in/ronald785/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:ronaldmateus785@gmail.com)](mailto:ronaldmateus785@gmail.com)
