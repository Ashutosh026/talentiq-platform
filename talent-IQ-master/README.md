<!-- INTRO UI -->
<div align="center">
  <img src="https://raw.githubusercontent.com/abhishekkr3003/talent-IQ/main/frontend/src/assets/logo.png" alt="TalentIQ Logo" width="120" style="border-radius: 20px" onError="this.style.display='none'" />
  <h1 style="border-bottom: none; margin-top: 10px;">TalentIQ Platform (newui)</h1>
  <p><strong>The ultimate, open-source AI career copilot and engineering toolkit.</strong></p>
  
  <p align="center">
    <a href="#features">Features</a> •
    <a href="#voice-ai-pipeline">Voice AI Pipeline</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#installation">Installation</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/Groq-f55a3c?style=for-the-badge&logo=groq&logoColor=white" />
</p>
</div>

<br/>

> **Welcome to the `newui` branch!** This branch contains bleeding-edge features built to drastically improve software engineering interview preparation. Equipped with an instantaneous Llama-3.3-70B backend, native Web Speech APIs, and dynamic LeetCode generation, TalentIQ brings FAANG-tier mock interviews directly to your laptop—completely locally optimized.

---

## ✨ Interactive Features

### 🎙️ The Voice-AI Mock Interviewer
Built completely natively onto the browser to provide zero-latency voice interactions.
1. **The 60-Second Rule:** A strictly enforced 1-minute countdown precisely mimics FAANG structural interviews where candidates are expected to stay quiet, think, and compose themselves.
2. **Native OS Audio Injection:** It accesses your hardware microphone, streams raw `audio/webm` blobs to the backend using `FormData`, dynamically forces a `.wav` rewrite for `multer`, and passes it securely to **Groq Whisper-Large-V3** for military-grade transcription accuracy.

### ⚡ Dynamic LeetCode Fetch Daemon
Why hard-code algorithms when we can scrape them live? 
- A high-performance Node `cron` dispatcher hits LeetCode's main enterprise **GraphQL API**.
- It leverages a randomized mathematical offset (`Math.floor(Math.random() * 2000)`) so you fetch 10 brand-new, entirely random problems globally every single day!

### 📊 Animated Radar Analytics
Every DSA attempt feeds an algorithm that scores your proficiency and generates beautifully animated Spider Radar charts plotting your strengths against standard FAANG technical topics.

### 🚀 Daily AI News Dispatcher
Every day, the backend crawls the **Adzuna API** for fresh software developer roles and **Dev.to** for trending AI articles, bundling them into an aesthetic localized HTML email and securely delivering them via Nodemailer. We natively force an `IPv4` Node downgrade internally to bypass tricky Cloud `ENETUNREACH` restrictions!

---

## 🏗️ Architecture Stack

<details>
<summary><strong>Click to expand Tech Stack</strong></summary>

- **Frontend:** React 18, Vite, React Router, Chart.js, HTML5 Web Speech APIs (`SpeechSynthesis`, `MediaRecorder`).
- **Backend:** Node.js, Express, MongoDB & Mongoose.
- **AI Infrastructure:** Groq SDK (`llama-3.3-70b-versatile`, `whisper-large-v3-turbo`).
- **External Webhooks:** LeetCode GraphQL, Adzuna Open API.
</details>

---

## 🛠️ Rapid Setup Instructions

### 1. Clone & Install Dependencies
First, clone the repository and install both frontend and backend dependencies.
```bash
git clone https://github.com/Ashutosh026/talentiq-platform.git
cd talentiq-platform
git checkout newui

cd talent-IQ-master/backend
npm install

cd ../frontend
npm install
```

### 2. Configure Environmental Variables
In your `backend` directory, create a `.env` file referencing the precise architecture below. You will need an active Groq API Key and an Adzuna Application Account (both are entirely free).

```env
# SERVER & DB
PORT=5000
MONGODB_URI=your_mongodb_cluster_url

# AUTHENTICATION
CLERK_SECRET_KEY=your_clerk_secret

# AI PLATFORM
GROQ_API_KEY=your_groq_api_key

# FETCH ENGINE
FETCH_LIMIT=10
RATE_DELAY_MS=3000
```

### 3. Spin up the cluster
Run the frontend and backend simultaneously to start development.
```bash
# Terminal 1: Spin up the core APIs
cd backend
npm run dev

# Terminal 2: Initialize UI
cd frontend
npm run dev
```
Navigate to `http://localhost:5173`. 

---

## 🛡️ Best Practices
> [!NOTE] 
> This app heavily utilizes Browser native dependencies. Recommended use on Google Chrome or Edge. Ensure you accept microphone pop-ups safely over valid localhost or standard `https` hosts.
