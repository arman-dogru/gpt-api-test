require('dotenv').config();
const { OpenAI } = require('openai-api');
const readline = require('readline');
const openai = new OpenAI(process.env.OPENAI_API_KEY);
async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter your message: ', async (message) => {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content: message }
            ]
        });

        console.log(response.choices[0].message.content);
        rl.close();
    });
}

main();