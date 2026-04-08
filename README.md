<div align="center">
  <img src="https://raw.githubusercontent.com/abhishekkr3003/talent-IQ/main/frontend/src/assets/logo.png" alt="TalentIQ Logo" width="120" style="border-radius: 20px" onError="this.style.display='none'" />
  <h1 style="border-bottom: none; margin-top: 10px;">TalentIQ Platform</h1>
  <p><strong>The ultimate, open-source AI career copilot and engineering toolkit.</strong></p>
  
  <p align="center">
    <a href="#features">Features</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#demo">Demo</a> •
    <a href="#installation">Installation</a> •
    <a href="#environment-variables">Env Setup</a>
  </p>
</div>

<br/>

**TalentIQ** is a bleeding-edge platform designed to drastically improve software engineering interview preparation. Equipped with an instantaneous Llama-70B backend, native Web Speech APIs, and dynamic DSA problem generation, TalentIQ brings FAANG-tier mock interviews directly to your laptop—completely locally optimized and API-efficient.

---

## ✨ Features

- 🎙️ **Voice AI Interview Simulation:** Native browser MediaRecorders capture your raw WebM audio, firing it into **Groq Whisper** for millisecond-latency transcriptions. It strictly enforces a 60-second "Thinking Time" countdown to simulate high-pressure tech interviews.
- 🤯 **Groq Llama-3.3-70B Intelligence:** We completely migrated away from slow OpenAI tiers and utilized Groq's LPU-powered Llama for zero-delay, hyper-contextual follow-up questions explicitly tailored to your resume.
- ⚡ **Dynamic LeetCode Sync:** A high-performance background daemon directly taps into LeetCode's canonical GraphQL endpoints to sink random DSA problems into your MongoDB database, meaning you'll never run out of coding challenges.
- 📊 **Skills Radar Dashboard:** Every attempt at a problem feeds an algorithm that scores your proficiency and generates a beautifully animated Spider Radar chart plotting your strengths against standard FAANG technical topics.
- 🚀 **Automated Job & Tech Newsletters:** Every day, a Node `cron` dispatcher crawls the **Adzuna API** for fresh software developer roles and **Dev.to** for trending AI articles, bundling them into an aesthetic localized HTML email and securely delivering them via Nodemailer.
- 🎨 **High-Performance Dark Interface:** The frontend relies on native CSS and React optimizations. Custom aesthetics, glass-morphism panels, and framer-fluid states.

## 🏗️ Architecture

- **Frontend:** React 18, Vite, React Router, Chart.js, HTML5 Web Speech APIs (`SpeechSynthesis`, `MediaRecorder`).
- **Backend:** Node.js, Express, MongoDB & Mongoose.
- **AI Infrastructure:** Groq SDK (`llama-3.3-70b-versatile`, `whisper-large-v3-turbo`).
- **File System:** Multer stream caching securely optimized for OS Temporary Directories (Railway/Cloud compatible) with custom `ENETUNREACH` IPv4 protections.
- **External Webhooks:** LeetCode GraphQL, Adzuna Open API.

---

## 🛠️ Installation

### 1. Clone & Install Dependencies
First, clone the repository and install both frontend and backend dependencies.
```bash
git clone https://github.com/your-username/talent-iq.git
cd talent-iq

# Install Backend
cd backend
npm install

# Install Frontend
cd ../frontend
npm install
```

### 2. Standard Environment Keys
In your `backend` directory, create a `.env` file referencing the precise architecture below. You will need an active Groq API Key and an Adzuna Application Account (both are entirely free).

```env
# SERVER & DB
PORT=5000
MONGODB_URI=your_mongodb_cluster_url

# AUTHENTICATION
CLERK_SECRET_KEY=your_clerk_secret

# AI PLATFORM
GROQ_API_KEY=your_groq_api_key

# JOB BOARD AGGREGATOR
ADZUNA_APP_ID=your_adzuna_app_id
ADZUNA_APP_KEY=your_adzuna_app_key

# DAILY NEWSLETTER (GMAIL/APP PASSWORDS)
EMAIL_USER=your_dev_email@gmail.com
EMAIL_PASS=your_app_specific_secure_password

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

## 🎧 The Voice Interview Loop (How to use)
1. **Resume Parse:** Upload your raw PDF resume to the Dashboard. The AI extracts skills and projects instantly.
2. **Setup Phase:** Enter the Practice module. The frontend instantly invokes `window.speechSynthesis` to vocalize your generated question natively.
3. **The 1-Minute Rule:** You have 60 seconds of silent thinking time visually enforced.
4. **Recording:** When time runs out, a pulsing red indicator signifies `MediaRecorder` hook engagement. Speak naturally.
5. **Evaluation:** Clicking Submit strips the `audio/webm` blob, pushes it to your backend OS disk temporarily safely via `multer`, routes to `Groq Whisper V3` for audio decoding, hits `Llama-70B`, clears the temp file for security, and returns your 1-1 interview score.

## 🛡️ License
Built strictly for open-source technical elevation. 
> [!NOTE] 
> This app heavily utilizes Browser native dependencies. Recommended use on Google Chrome or Edge. Ensure you accept microphone pop-ups safely over valid localhost or standard `https` hosts.
