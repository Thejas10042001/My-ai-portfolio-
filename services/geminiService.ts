import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string, history: {role: 'user'|'model', text: string}[] = []) => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    // Construct the conversation history for context
    // We map our simplified history to the Gemini format if needed, 
    // but here we will just use a fresh generateContent call with system instruction for simplicity in this stateless example,
    // or use a chat session if we want multi-turn persistence within the component.
    // Let's use a chat session for better flow.

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
