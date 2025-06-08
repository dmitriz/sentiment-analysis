// Configuration for X Sentiment Analysis App
// Following tutorial by Mark Kashef - Real-time X Analysis App

const dotenv = require('dotenv');
dotenv.config();

// Constants following UPPER_SNAKE_CASE convention
const DEFAULT_PORT = 3000;
const DEFAULT_CORS_TIMEOUT = 30000;
const DEFAULT_RATE_LIMIT_WINDOW = 900000; // 15 minutes
const DEFAULT_RATE_LIMIT_MAX = 100;

// Main configuration object using snake_case
const app_config = {
  // Environment settings
  node_env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT) || DEFAULT_PORT,
  app_name: process.env.APP_NAME || 'X Sentiment Analysis App',
  
  // Supabase configuration
  supabase: {
    url: process.env.SUPABASE_URL,
    anon_key: process.env.SUPABASE_ANON_KEY,
    service_key: process.env.SUPABASE_SERVICE_KEY,
  },
  
  // Grok API configuration
  grok: {
    api_key: process.env.GROK_API_KEY,
    base_url: process.env.GROK_BASE_URL || 'https://api.x.ai/v1',
  },
  
  // n8n workflow configuration
  n8n: {
    webhook_url: process.env.N8N_WEBHOOK_URL,
    api_key: process.env.N8N_API_KEY,
  },
  
  // CORS and timeout settings
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    timeout: parseInt(process.env.CORS_TIMEOUT) || DEFAULT_CORS_TIMEOUT,
  },
  
  // Rate limiting configuration
  rate_limit: {
    window_ms: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || DEFAULT_RATE_LIMIT_WINDOW,
    max_requests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || DEFAULT_RATE_LIMIT_MAX,
  },
  
  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    file: process.env.LOG_FILE || 'logs/app.log',
  },
};

// Validation function to check required configuration
const validate_config = () => {
  const required_fields = [
    'supabase.url',
    'supabase.anon_key',
    'grok.api_key',
    'n8n.webhook_url'
  ];
  
  const missing_fields = required_fields.filter(field => {
    const keys = field.split('.');
    let value = app_config;
    
    for (const key of keys) {
      value = value[key];
      if (!value) return true;
    }
    
    return false;
  });
  
  if (missing_fields.length > 0) {
    throw new Error(`Missing required configuration fields: ${missing_fields.join(', ')}`);
  }
  
  return true;
};

// Export configuration and validation function
module.exports = {
  app_config,
  validate_config,
  // Export constants for use in other modules
  DEFAULT_PORT,
  DEFAULT_CORS_TIMEOUT,
  DEFAULT_RATE_LIMIT_WINDOW,
  DEFAULT_RATE_LIMIT_MAX,
};
