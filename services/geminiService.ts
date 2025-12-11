import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

const getApiKey = () => {
  try {
    // process.env.API_KEY will be replaced by the string value during Vite build
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

const apiKey = getApiKey();
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (message: string, history: {role: 'user'|'model', text: string}[] = []) => {
  if (!apiKey || !ai) {
    return "I'm unable to connect to the AI service right now. The API key might be missing.";
  }

  try {
    // Construct the conversation history for context
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the AI right now. Please try again later.";
  }
};