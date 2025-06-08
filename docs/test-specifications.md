# Test Specifications
# X Sentiment Analysis - MVP Testing Strategy

**Following**: Documentation → Tests → Implementation methodology  
**Focus**: MVP only - raw question → raw response flow

---

## 🎯 MVP Test Categories (Essential Only)

### 1. End-to-End Integration Test

#### Complete Flow Test
```javascript
// Test: verify_complete_mvp_flow
// Steps:
//   1. Submit question via HTML form
//   2. Frontend sends POST to /analyze
//   3. Backend forwards to n8n webhook
//   4. n8n calls Grok API
//   5. Raw response returned to user
// Expected: Working data flow, raw JSON displayed
```

### 2. API Integration Tests (Core MVP)

#### Backend API Test
```javascript
// Test: verify_backend_api_endpoint
// Purpose: Test POST /analyze endpoint
// Input: {"question": "React sentiment"}
// Expected: Response forwarded to n8n, status 200
```

#### n8n Webhook Test
```javascript
// Test: verify_n8n_webhook_receives_data
// Purpose: Confirm n8n receives question from backend
// Expected: n8n workflow triggered successfully
```

#### Grok API Connection Test
```javascript
// Test: verify_grok_api_call_from_n8n
// Purpose: Ensure n8n can call Grok Live Search API
// Expected: Valid response from Grok API (any format)
```

### 3. Basic Error Handling Tests

#### API Failure Test
```javascript
// Test: handle_grok_api_failure
// Scenario: Grok API returns error
// Expected: Error message shown to user, no crash
```

#### Network Timeout Test
```javascript
// Test: handle_network_timeout
// Scenario: Request takes too long
// Expected: Timeout message displayed after 60 seconds
```

---

## MVP Test Data Requirements

### Sample Questions (Keep Simple)
```javascript
const MVP_TEST_QUESTIONS = [
  "React sentiment",
  "Python vs JavaScript", 
  "AI coding tools"
];
```

### Expected MVP Response Structure (Raw)
```javascript
// Accept whatever Grok returns - no specific structure required
// Just verify it's valid JSON and not empty
const MVP_RESPONSE_VALIDATION = {
  is_valid_json: true,
  is_not_empty: true,
  contains_data: true  // Any data is fine
};
```

## MVP Environment Setup

### Prerequisites (Minimal)
```bash
# Only required for MVP
GROK_API_KEY=your_actual_key
N8N_WEBHOOK_URL=your_actual_webhook
```

### Mock Data (If Needed)
```javascript
// Simple mock for testing without real API
const MOCK_GROK_RESPONSE = {
  status: "success",
  data: "any valid response"
};
```

## MVP Acceptance Criteria

### Test Coverage (Minimal)
- **End-to-end flow**: 1 complete integration test
- **API calls**: Basic connectivity tests  
- **Error handling**: Basic failure scenarios

### Quality Gates (MVP)
- End-to-end test passes
- API connectivity confirmed
- Basic error handling works
- No crashes on happy path

---

## 🚀 Future Test Categories (Post-MVP)

### Performance Tests (Phase 2)
- Response time optimization
- Concurrent user testing
- Load testing

### Data Quality Tests (Phase 3)
- Tweet relevance verification
- Sentiment analysis accuracy
- Citation validation

### UI/UX Tests (Phase 4)
- Form validation
- Results formatting
- Error message clarity

### Security Tests (Phase 5)
- Input sanitization
- API key protection
- Rate limiting

---

**Next Phase**: Implement these minimal tests first, then add more comprehensive testing in future phases.
