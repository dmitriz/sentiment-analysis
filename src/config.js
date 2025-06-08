// Minimal Application Configuration
// Following user coding conventions: snake_case, functional programming

require('dotenv').config();

const get_env_var = (name, default_value = null, required = false) => {
  const value = process.env[name] || default_value;
  
  if (required && !value) {
    throw new Error(`Required environment variable ${name} is not set`);
  }
  
  return value;
};

const validate_config = (config) => {
  // Only warn about missing optional keys
  if (!config.grok_api_key) {
    console.warn('Warning: GROK_API_KEY not set - API calls will fail');
  }
  
  if (!config.n8n_webhook_url) {
    console.warn('Warning: N8N_WEBHOOK_URL not set - workflow automation disabled');
  }
  
  return config;
};

// Export minimal configuration
const config = {
  // Server settings
  port: parseInt(get_env_var('APP_PORT', '3000')),
  node_env: get_env_var('NODE_ENV', 'development'),
  
  // Required API keys (will warn if missing)
  grok_api_key: get_env_var('GROK_API_KEY'),
  n8n_webhook_url: get_env_var('N8N_WEBHOOK_URL'),
  
  // Optional Supabase (commented out - uncomment if needed)
  // supabase_url: get_env_var('SUPABASE_PROJECT_URL'),
  // supabase_anon_key: get_env_var('SUPABASE_ANON_KEY'),
  
  // Helper functions
  is_development: () => config.node_env === 'development',
  is_production: () => config.node_env === 'production'
};

// Validate on module load
validate_config(config);

module.exports = config;
