import "dotenv/config";
import readline from "readline";
import OpenAI from "openai";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const conversationHistory = [];

async function generateContentWithOpenAI(prompt, history) {
    try {
        const messages = history.map((msg) => ({
            role: msg.role,
            content: msg.text,
        }));

        messages.push({
            role: "user",
            content: prompt,
        });

        const response = await openai.chat.completions.create({
            model: "gpt-4.1-nano-2025-04-14",
            messages: messages,
        });

        const reply = response.choices[0].message.content;
        return reply;
    } catch (error) {
        console.error("Erro ao chamar a API OpenAI:", error);
        return "Ocorreu um erro ao processar sua solicitação.";
    }
}

function askQuestion(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function startChat() {
    console.log('Chat com OpenAI iniciado. Digite "sair" para encerrar.');

    while (true) {
        const prompt = await askQuestion("\nVocê: ");

        if (prompt.toLowerCase() === "sair") {
            console.log("\nChat encerrado.");
            rl.close();
            break;
        }

        console.log("\nAguarde a resposta...");
        const response = await generateContentWithOpenAI(prompt, conversationHistory);
        console.log("\nOpenAI:", response);

        conversationHistory.push({ role: "user", text: prompt });
        conversationHistory.push({ role: "assistant", text: response });
    }
}

startChat();
