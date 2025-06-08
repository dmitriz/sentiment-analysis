# TaskMaster Integration Guide

## Setup Instructions

TaskMaster is designed to be installed globally via MCP (Model Control Protocol), not as a local dependency.

### 1. MCP Configuration

Add this configuration to your editor's MCP config file:

**For Cursor:** `~/.cursor/mcp.json` or `<project>/.cursor/mcp.json`
**For VS Code:** `<project>/.vscode/mcp.json`

#### Cursor/Windsurf Configuration:
```json
{
  "mcpServers": {
    "taskmaster-ai": {
      "command": "npx",
      "args": ["-y", "--package=task-master-ai", "task-master-ai"],
      "env": {
        "ANTHROPIC_API_KEY": "YOUR_ANTHROPIC_API_KEY_HERE",
        "PERPLEXITY_API_KEY": "YOUR_PERPLEXITY_API_KEY_HERE",
        "OPENAI_API_KEY": "YOUR_OPENAI_KEY_HERE",
        "GOOGLE_API_KEY": "YOUR_GOOGLE_KEY_HERE",
        "XAI_API_KEY": "YOUR_XAI_KEY_HERE"
      }
    }
  }
}
```

#### VS Code Configuration:
```json
{
  "servers": {
    "taskmaster-ai": {
      "command": "npx",
      "args": ["-y", "--package=task-master-ai", "task-master-ai"],
      "env": {
        "ANTHROPIC_API_KEY": "YOUR_ANTHROPIC_API_KEY_HERE",
        "PERPLEXITY_API_KEY": "YOUR_PERPLEXITY_API_KEY_HERE",
        "OPENAI_API_KEY": "YOUR_OPENAI_KEY_HERE",
        "GOOGLE_API_KEY": "YOUR_GOOGLE_KEY_HERE",
        "XAI_API_KEY": "YOUR_XAI_KEY_HERE"
      },
      "type": "stdio"
    }
  }
}
```

### 2. Enable TaskMaster (Cursor only)

1. Open Cursor Settings (Ctrl+Shift+J)
2. Click on MCP tab on the left
3. Enable task-master-ai with the toggle

### 3. Initialize TaskMaster

In your editor's AI chat pane, say:
```
Initialize taskmaster-ai in my project
```

### 4. Basic Usage

Once initialized, you can use TaskMaster commands like:
- `Create a task to implement basic HTML form`
- `List all tasks`
- `Mark task as completed`
- `Update task priority`

## Integration with Our Project

TaskMaster will help us manage the implementation of our X Sentiment Analysis MVP by:

1. **Task Tracking**: Breaking down MVP into manageable tasks
2. **Progress Monitoring**: Tracking completion of tests → implementation
3. **Documentation**: Keeping track of what's done vs what's planned
4. **Context Management**: Maintaining focus on MVP scope

## Next Steps

1. Set up MCP configuration in your editor
2. Initialize TaskMaster in this project
3. Create initial MVP tasks:
   - Set up basic HTML form
   - Implement /analyze endpoint
   - Configure n8n webhook connection
   - Test Grok API integration
   - Create end-to-end test

---

**Note**: TaskMaster is a global tool, not a project dependency. Do not add it to package.json.
