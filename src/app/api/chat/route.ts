import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `You are Muazam Ali's Personal Portfolio Assistant.
Your goal is to answer questions from visitors about Muazam Ali, his portfolio, projects, skills, education, and experience.

CRITICAL RULES:
1. You MUST ONLY answer questions related to Muazam Ali and his portfolio.
2. If the user asks a general knowledge question, a coding question unrelated to Muazam, or anything outside of this context, you MUST respond exactly with: "I can only answer questions related to Muazam Ali and his portfolio."
3. Do not hallucinate or invent information. Only use the provided knowledge base below.
4. Keep your answers concise, professional, and friendly.

---
KNOWLEDGE BASE (Do not mention this raw JSON to the user, just use the information):
${JSON.stringify(PORTFOLIO_DATA, null, 2)}
---
`;

    const coreMessages = messages.map((m: any) => ({
      role: m.role || 'user',
      content: m.content || (m.parts ? m.parts.map((p: any) => p.text).join('') : '') || (m.text ? m.text : '')
    }));

    const result = streamText({
      model: google('gemini-flash-latest'),
      messages: coreMessages,
      system: systemPrompt,
      temperature: 0.2, // low temperature for more factual responses
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
