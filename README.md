# Tutorial Implementation: Real-Time X Analysis App

This project follows Mark Kashef's tutorial for building a real-time X (formerly Twitter) analysis app.

## 🎯 Tutorial Source

**Creator:** Mark Kashef  
**Published:** June 6, 2025  
**Video:** [Real-Time X Analysis App Tutorial](https://www.youtube.com/watch?v=7NIN0KNcVdM&si=bbMitYMgQWnoNpqB)

## 🏗️ Architecture

- **Frontend:** Bolt.new (UI for user interaction)
- **Backend:** Supabase (data routing & edge functions)
- **Automation:** n8n workflows
- **Data Source:** Grok's Live Search API
- **AI Agent:** Custom Pulse agent for analysis

## ✨ Features

- Real-time sentiment analysis from X posts
- Live trending memes detection
- Tech leader insights tracking
- Citation-rich responses with direct links
- Metadata routing for improved AI accuracy

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys and configuration
   ```

3. **Run setup script:**
   ```bash
   npm run setup
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
sentiment-analysis/
├── src/
│   ├── config/           # Configuration files
│   ├── services/         # API and service integrations
│   ├── utils/            # Utility functions
│   ├── workflows/        # n8n workflow definitions
│   └── index.js          # Main application entry
├── docs/                 # Documentation
├── scripts/              # Setup and utility scripts
└── TUTORIAL_IMPLEMENTATION.md  # Detailed tutorial tracking
```

## 🔧 Configuration

Key environment variables needed:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Supabase anonymous key
- `GROK_API_KEY` - Grok Live Search API key
- `N8N_WEBHOOK_URL` - n8n webhook endpoint

## 🎯 Implementation Status

See [TUTORIAL_IMPLEMENTATION.md](./TUTORIAL_IMPLEMENTATION.md) for detailed progress tracking.

## 🤝 Contributing

This project is following a specific tutorial implementation. Any modifications should be clearly documented as deviations from the original tutorial approach.

## 📝 License

MIT License - See LICENSE file for details.
