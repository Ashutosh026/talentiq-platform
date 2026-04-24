<!-- INTRO UI -->
<div align="center">
  <h1 style="border-bottom: none; margin-top: 10px;">TalentIQ Platform 🚀</h1>
  <p><strong>The ultimate, open-source AI career copilot and engineering toolkit.</strong></p>
  
  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-voice-ai-pipeline">Voice AI Pipeline</a> •
    <a href="#%EF%B8%8F-architecture-stack">Architecture</a> •
    <a href="#%EF%B8%8F-quick-start-guide">Quick Start</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/Groq-f55a3c?style=for-the-badge&logo=groq&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </p>
</div>

<br/>

> **Welcome to the TalentIQ Platform!** This repository contains bleeding-edge features built to drastically improve software engineering interview preparation. Equipped with an instantaneous Llama-3.3-70B backend, native Web Speech APIs, live code execution, and dynamic LeetCode generation, TalentIQ brings FAANG-tier mock interviews directly to your laptop—completely optimized and highly performant.

---

## ✨ Features

### 🎙️ The Voice-AI Mock Interviewer
Built completely natively onto the browser to provide zero-latency voice interactions.
- **The 60-Second Rule:** A strictly enforced 1-minute countdown precisely mimics FAANG structural interviews where candidates are expected to stay quiet, think, and compose themselves.
- **Native OS Audio Injection:** It accesses your hardware microphone, streams raw `audio/webm` blobs to the backend using `FormData`, dynamically forces a `.wav` rewrite for `multer`, and passes it securely to **Groq Whisper-Large-V3** for military-grade transcription accuracy.
- **AI Feedback & Evaluation:** The system intelligently parses your resume against your performance and evaluates your strengths and weaknesses in real-time.

### ⚡ Dynamic LeetCode Fetch Daemon
Why hard-code algorithms when we can scrape them live? 
- A high-performance Node `cron` dispatcher natively interfaces with LeetCode's main enterprise **GraphQL API**.
- It leverages a randomized mathematical offset (`Math.floor(Math.random() * 2000)`) to automatically fetch and sync **10 brand-new, entirely random problems globally every single day!**

### 📊 Animated Radar Analytics
Every DSA attempt and AI practice session feeds an algorithm that scores your proficiency. TalentIQ generates beautifully animated Spider Radar charts plotting your strengths against standard FAANG technical topics.

### 🚀 Daily AI News & Tech Jobs Dispatcher
Stay ahead of the curve automatically. Every day, the backend crawls the **Adzuna API** for fresh software developer roles and **Dev.to** for trending AI articles. These are bundled into an aesthetically localized HTML email and securely delivered via Nodemailer. *(We natively force an `IPv4` Node downgrade internally to bypass tricky Cloud `ENETUNREACH` restrictions!)*

### 💻 Live Remote Code Execution
Integrates the **OneCompiler API** directly inside an interactive, dynamic layout to allow users to write, compile, and run code in 7+ languages strictly within their browser.

---

## 🏗️ Architecture Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | React 18, Vite, TailwindCSS, React Router, Chart.js, Clerk (Auth) |
| **Backend** | Node.js, Express, Native Cron Daemon, Mongoose |
| **Database** | MongoDB Atlas |
| **AI Infrastructure** | Groq SDK (`llama-3.3-70b-versatile`, `whisper-large-v3`), Web Speech API, Gemini |
| **External Integrations** | LeetCode GraphQL, Adzuna Open API, Dev.to, Nodemailer |
| **Deployment** | Vercel (Frontend), Railway (Backend) |

---

## 🛠️ Quick Start Guide

### 1. Clone & Install Dependencies
First, clone the repository and install both frontend and backend dependencies.
```bash
git clone https://github.com/Ashutosh026/talentiq-platform.git
cd talentiq-platform/talent-IQ-master

# Install Backend
cd backend
npm install

# Install Frontend
cd ../frontend
npm install
```

### 2. Configure Environment Variables
You'll need a set of keys to spin up all the external microservices (Clerk, MongoDB, Groq, App APIs, etc). Create a `.env` file in **both** the backend and frontend directories as shown below. 

**Backend `.env`** (`backend/.env`)
```env
PORT=3000
NODE_ENV=development
DB_URL=your_mongodb_cluster_url

# AI PLATFORM
GEMINI_API_KEY=your_gemini_key

# AUTHENTICATION
# Setup a Clerk dev/prod environment and grab your keys. 
CLERK_SECRET_KEY=your_clerk_secret

# The URL where your frontend will be hosted or running locally
CLIENT_URL=http://localhost:5173
```

**Frontend `.env`** (`frontend/.env`)
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3000/api
VITE_ONECOMPILER_API_KEY=your_onecompiler_api_key
```

### 3. Spin Up the Platform
Run the frontend and backend simultaneously to start development.
```bash
# Terminal 1: Spin up the core APIs
cd backend
npm run dev

# Terminal 2: Initialize UI
cd frontend
npm run dev
```
Navigate to [`http://localhost:5173`](http://localhost:5173). 

---

## 🛡️ Best Practices
> [!IMPORTANT] 
> This app heavily utilizes Browser native dependencies. **Recommended use on Google Chrome or Edge.** Ensure you accept all microphone pop-ups safely over valid localhost or standard `https` hosts.

<div align="center">
  <br/>
  <sub>Built with ❤️ by the open-source community.</sub>
</div>
