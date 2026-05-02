/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";
import { SYMPTOMS_A, SYMPTOMS_B } from "../types";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

// Gemma 4 model variants available via Gemini API:
//   "gemma-4-26b-a4b-it"  — 26B Mixture-of-Experts (fast, efficient) ✅ default
//   "gemma-4-31b-it"      — 31B Dense (highest accuracy)
const GEMMA_MODEL = "gemma-4-26b-a4b-it";

export async function parsePatientDescription(description: string) {
  const prompt = `
    Analyze the following description of a pregnant patient provided by a community health worker.
    Identify the gestational weeks, age, if it's her first pregnancy, history of complications, and any symptoms mentioned.
    
    Symptoms to look for (Group A): ${SYMPTOMS_A.map(s => s.label).join(', ')}
    Symptoms to look for (Group B): ${SYMPTOMS_B.map(s => s.label).join(', ')}

    Return a JSON object matching the following structure:
    {
      "gestationalWeeks": number | null,
      "age": number | null,
      "isFirstPregnancy": boolean | null,
      "historyOfComplications": boolean | null,
      "detectedSymptoms": string[] (IDs of symptoms from the provided lists),
      "gutConcern": boolean (if CHW sounds worried or uncertain)
    }

    Lists of symptom IDs:
    Group A IDs: ${SYMPTOMS_A.map(s => s.id).join(', ')}
    Group B IDs: ${SYMPTOMS_B.map(s => s.id).join(', ')}

    Description: "${description}"
  `;

  try {
    const response = await ai.models.generateContent({
      model: GEMMA_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            gestationalWeeks: { type: Type.NUMBER, nullable: true },
            age: { type: Type.NUMBER, nullable: true },
            isFirstPregnancy: { type: Type.BOOLEAN, nullable: true },
            historyOfComplications: { type: Type.BOOLEAN, nullable: true },
            detectedSymptoms: { type: Type.ARRAY, items: { type: Type.STRING } },
            gutConcern: { type: Type.BOOLEAN }
          },
          required: ["detectedSymptoms", "gutConcern"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error parsing description with Gemma 4:", error);
    return null;
  }
}
