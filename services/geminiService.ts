
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

// Fix: Directly use process.env.API_KEY for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const sendMessageToGemini = async (message: string, history: {role: 'user'|'model', text: string}[] = []) => {
  if (!process.env.API_KEY) {
    return "I'm unable to connect to the AI service right now. The API key might be missing.";
  }

  try {
    // Fix: Updated model to 'gemini-3-flash-preview' for basic text tasks
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
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

    // Fix: Using .text property directly (not as a method)
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the AI right now. Please try again later.";
  }
};
