// Main entry point for X Sentiment Analysis App
// Following Mark Kashef's tutorial implementation

const express = require('express');
const cors = require('cors');
const { app_config, validate_config } = require('./config/app_config');

// Initialize Express app
const app = express();

// Middleware setup using arrow functions and snake_case
const setup_middleware = () => {
  // CORS configuration to handle timeout errors mentioned in tutorial
  app.use(cors({
    origin: app_config.cors.origin,
    credentials: true,
    optionsSuccessStatus: 200,
  }));
  
  // Body parsing middleware
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));
  
  // Request timeout handling (important for n8n integration)
  app.use((req, res, next) => {
    req.setTimeout(app_config.cors.timeout);
    res.setTimeout(app_config.cors.timeout);
    next();
  });
};

// Health check endpoint
const setup_health_check = () => {
  app.get('/health', (req, res) => {
    res.json({
      status: 'healthy',
      app_name: app_config.app_name,
      timestamp: new Date().toISOString(),
      environment: app_config.node_env,
    });
  });
};

// API routes setup (to be implemented following tutorial steps)
const setup_routes = () => {
  // Main analysis endpoint (will connect to n8n workflow)
  app.post('/api/analyze', async (req, res) => {
    try {
      // Placeholder for n8n workflow integration
      res.json({
        message: 'Analysis endpoint ready - n8n integration pending',
        received_data: req.body,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Analysis failed',
        details: error.message,
      });
    }
  });
  
  // Metadata routing endpoint (mentioned in tutorial at 07:18)
  app.post('/api/route-metadata', async (req, res) => {
    try {
      const { category, tool_selection, query } = req.body;
      
      // Placeholder for metadata routing logic
      res.json({
        message: 'Metadata routing ready',
        routing_info: {
          category,
          tool_selection,
          query,
          routed_to: 'pulse_agent', // Will be dynamic based on tutorial implementation
        },
      });
    } catch (error) {
      res.status(500).json({
        error: 'Metadata routing failed',
        details: error.message,
      });
    }
  });
};

// Error handling middleware
const setup_error_handling = () => {
  // 404 handler
  app.use((req, res) => {
    res.status(404).json({
      error: 'Endpoint not found',
      path: req.path,
      method: req.method,
    });
  });
  
  // Global error handler
  app.use((error, req, res, next) => {
    console.error('Application error:', error);
    
    res.status(500).json({
      error: 'Internal server error',
      message: app_config.node_env === 'development' ? error.message : 'Something went wrong',
    });
  });
};

// Server startup function
const start_server = () => {
  try {
    // Validate configuration before starting
    validate_config();
    
    // Setup application components
    setup_middleware();
    setup_health_check();
    setup_routes();
    setup_error_handling();
    
    // Start listening
    app.listen(app_config.port, () => {
      console.log(`🚀 ${app_config.app_name} running on port ${app_config.port}`);
      console.log(`📝 Environment: ${app_config.node_env}`);
      console.log(`🏥 Health check: http://localhost:${app_config.port}/health`);
      console.log(`📚 Following tutorial by Mark Kashef - Real-time X Analysis App`);
    });
    
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

// Start the application if this file is run directly
if (require.main === module) {
  start_server();
}

// Export for testing purposes
module.exports = {
  app,
  start_server,
  setup_middleware,
  setup_routes,
};
