require('dotenv').config();
const { OpenAI } = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function main() {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
        { role: 'user', content: 'Say this is a test' }
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log(response.choices[0].message.content)
}

main();