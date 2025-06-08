// Setup script for X Sentiment Analysis App
// Helps initialize the project following Mark Kashef's tutorial

const fs = require('fs');
const path = require('path');

// Constants for setup process
const REQUIRED_DIRS = ['logs', 'docs/api', 'src/workflows/exports'];
const ENV_FILE = '.env';
const ENV_EXAMPLE = '.env.example';

// Setup function using arrow notation and snake_case
const create_required_directories = () => {
  console.log('📁 Creating required directories...');
  
  REQUIRED_DIRS.forEach(dir => {
    const full_path = path.join(process.cwd(), dir);
    
    if (!fs.existsSync(full_path)) {
      fs.mkdirSync(full_path, { recursive: true });
      console.log(`✅ Created: ${dir}`);
    } else {
      console.log(`📂 Already exists: ${dir}`);
    }
  });
};

// Environment file setup
const setup_environment_file = () => {
  console.log('\n🔧 Setting up environment configuration...');
  
  const env_path = path.join(process.cwd(), ENV_FILE);
  const env_example_path = path.join(process.cwd(), ENV_EXAMPLE);
  
  if (!fs.existsSync(env_path)) {
    if (fs.existsSync(env_example_path)) {
      fs.copyFileSync(env_example_path, env_path);
      console.log(`✅ Created ${ENV_FILE} from ${ENV_EXAMPLE}`);
      console.log('🔑 Please edit .env file with your actual API keys and configuration');
    } else {
      console.log(`❌ ${ENV_EXAMPLE} not found. Cannot create environment file.`);
    }
  } else {
    console.log(`📄 ${ENV_FILE} already exists`);
  }
};

// Create initial documentation files
const create_documentation_files = () => {
  console.log('\n📚 Creating documentation files...');
  
  const api_docs_content = `# API Documentation

## Tutorial Implementation Progress

This API follows Mark Kashef's tutorial for building a real-time X analysis app.

### Endpoints

#### Health Check
- **GET** \`/health\`
- Returns application status and basic info

#### Analysis Endpoint
- **POST** \`/api/analyze\`
- Main endpoint for sentiment analysis
- **Status:** 🚧 Pending n8n integration

#### Metadata Routing
- **POST** \`/api/route-metadata\`
- Handles tool selection and category routing
- **Status:** 🚧 Pending implementation

### Tutorial Reference Points

- **00:00** – Introduction to the real-time X analysis app
- **03:39** – Architecture overview (Bolt.new + Supabase + n8n)
- **07:18** – Metadata routing for tool selection
- **08:46** – Solving CORS timeout errors

### Next Steps

1. Set up Supabase project and configure edge functions
2. Research Grok Live Search API documentation
3. Create n8n workflows for Pulse agent
4. Implement frontend with Bolt.new
`;
  
  const api_docs_path = path.join(process.cwd(), 'docs', 'api', 'README.md');
  
  if (!fs.existsSync(api_docs_path)) {
    fs.writeFileSync(api_docs_path, api_docs_content);
    console.log('✅ Created API documentation');
  } else {
    console.log('📄 API documentation already exists');
  }
};

// Check for required dependencies
const check_dependencies = () => {
  console.log('\n📦 Checking dependencies...');
  
  const package_json_path = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(package_json_path)) {
    console.log('❌ package.json not found. Run this script from project root.');
    return false;
  }
  
  try {
    const package_data = JSON.parse(fs.readFileSync(package_json_path, 'utf8'));
    const dependencies = Object.keys(package_data.dependencies || {});
    
    console.log(`✅ Found ${dependencies.length} dependencies in package.json`);
    console.log('📝 Key dependencies for tutorial:');
    console.log('   - @supabase/supabase-js (for backend)');
    console.log('   - axios (for API calls)');
    console.log('   - express (for server)');
    console.log('   - cors (for CORS handling)');
    
    return true;
  } catch (error) {
    console.log('❌ Error reading package.json:', error.message);
    return false;
  }
};

// Main setup function
const run_setup = async () => {
  console.log('🚀 Setting up X Sentiment Analysis App');
  console.log('📺 Following Mark Kashef\'s tutorial implementation\n');
  
  try {
    // Run setup steps
    create_required_directories();
    setup_environment_file();
    create_documentation_files();
    
    const deps_ok = check_dependencies();
    
    console.log('\n🎯 Setup Summary:');
    console.log('✅ Directory structure created');
    console.log('✅ Environment configuration ready');
    console.log('✅ Documentation initialized');
    console.log(deps_ok ? '✅ Dependencies checked' : '⚠️  Dependency issues detected');
    
    console.log('\n📋 Next Steps:');
    console.log('1. Edit .env file with your API keys');
    console.log('2. Run "npm install" if you haven\'t already');
    console.log('3. Run "npm run dev" to start development server');
    console.log('4. Follow tutorial steps in TUTORIAL_IMPLEMENTATION.md');
    
    console.log('\n🔗 Tutorial Reference:');
    console.log('Video: https://www.youtube.com/watch?v=7NIN0KNcVdM&si=bbMitYMgQWnoNpqB');
    console.log('Creator: Mark Kashef');
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
};

// Run setup if this script is executed directly
if (require.main === module) {
  run_setup();
}

module.exports = {
  run_setup,
  create_required_directories,
  setup_environment_file,
  create_documentation_files,
  check_dependencies,
};
