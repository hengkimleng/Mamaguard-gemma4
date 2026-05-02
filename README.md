<div align="center">

# 🤱 MamaGuard

### AI-Powered Maternal Triage for Community Health Workers

**Saving mothers' lives — one assessment at a time.**

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Built with Gemma 4](https://img.shields.io/badge/AI-Gemma%204%2026B%20MoE-orange.svg)](https://ai.google.dev/gemma/docs/core)
[![Thinking Mode](https://img.shields.io/badge/Gemma%204-Thinking%20Mode%20%E2%9C%85-yellow.svg)](https://ai.google.dev/gemma/docs/core/gemma_on_gemini_api)
[![Stack](https://img.shields.io/badge/stack-React%20%7C%20TypeScript%20%7C%20Vite-61DAFB.svg)](#tech-stack)
[![Languages](https://img.shields.io/badge/language-English%20%7C%20%E1%9E%81%E1%9F%92%E1%9E%98%E1%9F%82%E1%9E%9A-green.svg)](#features)
[![Live Demo](https://img.shields.io/badge/demo-Live%20on%20Vercel-black.svg)](https://mama-guard-gemma4.vercel.app)

**[🚀 Live Demo](https://mama-guard-gemma4.vercel.app)** · **[📋 Kaggle Submission](https://www.kaggle.com/competitions/gemma-4-good-hackathon)**

</div>

---

## 🌍 The Problem

Every year, **thousands of mothers in Southeast Asia die from preventable pregnancy complications** — pre-eclampsia, hemorrhage, infection — not because treatment doesn't exist, but because danger signs go unrecognized too late.

Community health workers (CHWs) are often the **first and only** point of contact for pregnant women in rural Cambodia. But they face a critical gap: they lack the clinical tools to quickly identify which patients need urgent hospital referral versus routine monitoring.

**MamaGuard bridges that gap — powered by Google's Gemma 4.**

---

## 💡 What is MamaGuard?

MamaGuard is a **bilingual AI triage assistant** designed for community health workers. It helps CHWs rapidly assess the risk level of pregnant patients — no medical degree required.

A health worker simply **describes a patient in plain language**:

> *"25-year-old woman, 32 weeks pregnant, her first pregnancy, complaining of a severe headache that won't go away and blurred vision, and her hands look swollen."*

MamaGuard's AI — powered by **Gemma 4 (26B MoE)** with **Thinking Mode enabled** — reads the description, reasons step-by-step through WHO clinical guidelines, and instantly outputs a clear triage decision:

- 🔴 **HIGH RISK** — Refer to hospital immediately
- 🟡 **MONITOR** — Observe closely, escalate if worsens
- 🟢 **ROUTINE** — Continue standard antenatal care

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧠 **Gemma 4 Thinking Mode** | Watch Gemma 4 reason step-by-step through WHO guidelines in real time |
| 💬 **AI Narrative Input** | Describe a patient in natural language — Gemma 4 extracts all clinical data |
| 📋 **Clinical Form Mode** | Manual structured input for CHWs who prefer a checklist |
| 🚦 **3-Level Risk Triage** | HIGH / MONITOR / ROUTINE with clear WHO-aligned action steps |
| 🌐 **Bilingual** | Full support for **English** and **ខ្មែរ (Khmer)** — Gemma 4's native multilingual support |
| ⚡ **Instant Results** | Real-time triage with transparent AI reasoning |
| 📱 **Mobile-Friendly** | Works on any smartphone — no app install needed |
| 🔓 **Open Source** | Apache 2.0 — same license as Gemma 4 itself |

---

## 🧠 Gemma 4 Thinking Mode

MamaGuard uniquely exposes **Gemma 4's internal reasoning chain** to the health worker. When analyzing a patient description, the model thinks out loud:

```
🧠 Gemma 4 Thinking Process  [WHO Guidelines Applied]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Patient: 25 years old, 32 weeks pregnant, primigravida.
Reported symptoms: severe headache, blurred vision, facial/hand swelling.

Checking Group A danger signs:
→ Severe headache: YES ✓
→ Blurred/changed vision: YES ✓
→ Swelling (pre-eclampsia indicator): present

WHO assessment: Consistent with severe pre-eclampsia.
Two Group A danger signs confirmed → IMMEDIATE REFERRAL required.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Result: 🔴 HIGH RISK
```

This transparency builds **trust** with health workers and **proves** the AI applies evidence-based medical logic — not just keyword matching.

---

## 🔬 How It Works

```
CHW types patient description in plain language
              ↓
  Gemma 4 (gemma-4-26b-a4b-it) + Thinking Mode
  ├── Reasons through WHO maternal guidelines
  ├── Extracts: gestational age, maternal age,
  │   first pregnancy, history, symptoms (Group A & B)
  └── Exposes reasoning chain in real time
              ↓
  Evidence-based risk algorithm
  ├── Group A symptoms     → 🔴 HIGH RISK
  ├── Group B + factors    → 🔴 HIGH RISK
  ├── Group B alone        → 🟡 MONITOR
  └── No symptoms          → 🟢 ROUTINE
              ↓
  Clear triage result + actionable next steps
```

### Clinical Risk Logic

**🔴 Group A — Danger Signs** (any present → HIGH RISK, immediate referral):
Heavy bleeding, severe headache, blurred vision, convulsions, difficulty breathing, high fever >38°C, severe abdominal pain, no fetal movement 12h+ after 28 weeks, premature fluid leaking

**🟡 Group B — Warning Signs** (→ MONITOR):
Mild headache, swollen hands/face/feet, dizziness, reduced fetal movement, burning urination, severe vomiting, pale eyelids/palms (anemia)

**Smart Escalation Rules:**
- History of complications + any Group B → 🔴 HIGH RISK
- Maternal age <16 or >40 + Group B → 🔴 HIGH RISK
- No fetal movement after 28 weeks → 🔴 HIGH RISK
- CHW gut concern flagged → 🟡 MONITOR minimum

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Google AI Studio API key ([get one free](https://aistudio.google.com/apikey))

### Installation

```bash
# Clone the repository
git clone https://github.com/hengkimleng/Mamaguard-gemma4.git
cd Mamaguard-gemma4

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Add your key to .env:
# VITE_GEMINI_API_KEY=your_key_here

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — or try it instantly at **[mama-guard-gemma4.vercel.app](https://mama-guard-gemma4.vercel.app)**

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Motion (Framer Motion) |
| **AI Model** | Gemma 4 `gemma-4-26b-a4b-it` (MoE 26B) |
| **AI Feature** | Thinking Mode (`thinkingBudget: 1024 tokens`) |
| **AI SDK** | `@google/genai` (Google GenAI SDK) |
| **AI Platform** | Google AI Studio (Gemini API) |
| **Deployment** | Vercel (globally distributed) |

---

## 📁 Project Structure

```
MamaGuard/
├── src/
│   ├── App.tsx                    # Main app, UI & state
│   ├── components/
│   │   ├── RiskCard.tsx           # Triage result display
│   │   └── ThinkingPanel.tsx      # Gemma 4 thinking visualization ✨
│   ├── services/
│   │   └── geminiService.ts       # Gemma 4 + thinking mode integration
│   ├── lib/
│   │   └── assessmentLogic.ts     # WHO-aligned clinical risk algorithm
│   ├── constants/
│   │   └── translations.ts        # English & Khmer strings
│   └── types.ts                   # TypeScript types & symptom data
└── package.json
```

---

## 🎯 Why Gemma 4?

| Capability | How MamaGuard Uses It |
|---|---|
| **Thinking Mode** | Shows reasoning through WHO triage guidelines |
| **Multilingual (140+ languages)** | Native Khmer support for Cambodian CHWs |
| **Structured JSON output** | Reliable symptom extraction from free text |
| **26B MoE efficiency** | Fast inference, low cost for NGO deployment |
| **Apache 2.0 license** | Open for humanitarian organizations to self-host |

---

## 🎯 Impact & Vision

**Target users:** Community health workers, midwives, village health volunteers in rural Cambodia

**Why it matters:**
- Maternal mortality in Cambodia: ~150 per 100,000 live births — most preventable
- CHWs often work without hospital access or specialist support
- Faster triage = faster referrals = lives saved

**Roadmap:**
- [ ] Offline mode — Gemma 4 E2B via LiteRT-LM on Android
- [ ] Voice input — Gemma 4 native audio for low-literacy CHWs
- [ ] SMS hospital referral alerts
- [ ] Health district monitoring dashboard
- [ ] Expand to Lao, Burmese, Vietnamese

---

## 🏆 Hackathon

Built for the **[Gemma 4 Good Hackathon](https://www.kaggle.com/competitions/gemma-4-good-hackathon)** — Kaggle × Google DeepMind

- **Theme:** Health and Sciences + Digital Equity
- **Prize Pool:** $200,000 USD
- **Deadline:** May 18, 2026

---

## 📄 License

Apache 2.0 — the same open license as Gemma 4 itself.

---

<div align="center">

**MamaGuard** — Because every mother deserves to make it home.

🔗 [Live Demo](https://mama-guard-gemma4.vercel.app) · 💻 [GitHub](https://github.com/hengkimleng/Mamaguard-gemma4) · 🤖 Powered by Gemma 4 × Google AI Studio

</div>