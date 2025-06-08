# Tutorial Implementation: Real-Time X Analysis App

**FOLLOWING TUTORIAL BY:** Mark Kashef  
**PUBLISHED:** June 6, 2025  
**VIDEO URL:** https://www.youtube.com/watch?v=7NIN0KNcVdM&si=bbMitYMgQWnoNpqB  

## Tutorial Overview

Building a real-time X (formerly Twitter) analysis app with the following architecture:
- **Frontend:** Bolt.new
- **Backend:** Supabase (data routing & edge functions)
- **Automation:** n8n workflows
- **Data Source:** Grok's Live Search API

## Key Features

- Interactive real-time sentiment analysis
- Live trending memes detection
- Tech leader insights tracking
- Citation-rich responses with direct links to X posts
- Metadata routing for improved AI agent accuracy

## Architecture Components

| Component | Purpose/Function |
|-----------|------------------|
| Bolt.new | Front-end UI for user interaction |
| Supabase | Backend data routing and edge function optimization |
| n8n | Workflow automation and integration with Grok API |
| Grok Live Search API | Real-time data retrieval from X (Twitter) |
| Pulse Agent | AI-driven analysis and response generation |

## Implementation Progress

### Phase 1: Project Setup ✅
- [x] Created project documentation
- [x] Set up basic project structure
- [ ] Initialize package.json
- [ ] Set up environment configuration

### Phase 2: Backend Setup (Supabase)
- [ ] Create Supabase project
- [ ] Configure database schema
- [ ] Set up edge functions for CORS handling
- [ ] Configure environment variables

### Phase 3: n8n Workflow Setup
- [ ] Research Grok Live Search API documentation
- [ ] Generate cURL requests using Perplexity
- [ ] Import cURL into n8n workflows
- [ ] Create Pulse Agent with proper prompt engineering
- [ ] Configure citation requirements and forbidden phrases

### Phase 4: Frontend Development (Bolt.new)
- [ ] Create user interface for question input
- [ ] Implement metadata routing system
- [ ] Optimize through meta-prompting
- [ ] Handle CORS timeout errors

### Phase 5: Integration & Testing
- [ ] Connect all components
- [ ] Test real-time analysis functionality
- [ ] Verify citation linking
- [ ] Performance optimization

## Key Technical Challenges from Tutorial

1. **CORS Timeout Errors:** Resolved by optimizing Bolt.new's edge functions with Supabase
2. **API Research:** Using Perplexity to research and generate cURL requests for Grok API
3. **Prompt Engineering:** Fine-tuning Pulse agent for reliable data source selection
4. **Metadata Routing:** Sending category and tool selection data to guide AI workflow

## Coding Conventions for This Project

Following the user's specified conventions:
- Use snake_case for variables and functions
- Avoid classes and TypeScript
- Use UPPER_SNAKE_CASE for constants
- Use arrow notation for functions
- Focus on functional programming patterns

## Timeline Markers from Tutorial Video

- **00:00** – Introduction to the real-time X analysis app
- **00:47** – Interactive alert system demo
- **01:40** – Community sentiment analysis results
- **02:42** – Tech leader opinion tracking
- **03:39** – Architecture overview (Bolt.new + Supabase + n8n)
- **04:38** – Researching Grok Live Search API documentation
- **05:59** – UI and Supabase integration
- **07:18** – Metadata routing for tool selection
- **08:46** – Solving CORS timeout errors
- **10:13** – Using Perplexity to generate cURL requests
- **11:38** – Importing cURL into n8n workflows
- **13:45** – Prompt engineering for the Pulse agent
- **15:28** – Citation requirements and forbidden phrases
- **16:21** – Bolt.new optimization through meta-prompting
- **16:44** – Resources and community access

## Notes

This tutorial focuses on building no-code AI workflows and leveraging real-time social media analytics, suitable for both developers and non-technical users.
