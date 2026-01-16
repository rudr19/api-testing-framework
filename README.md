[![Continuous Integration Status](https://github.com/rudr19/api-testing-framework/actions/workflows/ci.yml/badge.svg)](https://github.com/rudr19/api-testing-framework/actions)

# API Testing Framework (Modern Advanced Edition)

**Author:** Rudra
**Version:** 2.0.0
**License:** MIT

## Overview

This is a **modern, advanced REST API testing framework** built with Postman, featuring comprehensive testing capabilities including:

- ✅ **Performance & Load Testing** - Response time validation, throughput measurement, and performance benchmarking
- ✅ **Security Testing** - Security headers validation, vulnerability detection, and malicious payload testing
- ✅ **Contract Testing** - JSON schema validation and API contract compliance
- ✅ **Integration Workflows** - Complex multi-step test scenarios and endpoint equivalence testing
- ✅ **Multi-API Support** - Environment switching for testing multiple APIs and configurations
- ✅ **Comprehensive Reporting** - HTML and JSON report generation with detailed test analytics

The framework is designed as an enterprise-grade testing solution while maintaining simplicity and extensibility. It can be used to kickstart testing of any REST API with minimal configuration changes.

**Note:** This is an advanced implementation building upon the original structure. It includes comprehensive endpoint coverage, modern testing patterns, and production-ready CI/CD integration.

### What's New (v2.0)

- 🚀 **Performance metrics tracking** - Comprehensive response time and throughput monitoring
- 🔒 **Security validation** - Automated security header checks and vulnerability scanning
- 📊 **Advanced reporting** - HTML and JSON reports with historical trending
- 🔄 **Multi-environment support** - Easy switching between dev, staging, and production APIs
- 📦 **npm integration** - Standardized build and test scripts
- 🎯 **Contract-first testing** - OpenAPI/Swagger contract validation
- 🧪 **Expanded endpoint coverage** - Complete testing for all JSON Placeholder endpoints
- ⚡ **CI/CD optimization** - Faster, more efficient pipeline execution

## Why Postman for Modern API Testing?

While many teams have migrated to code-based frameworks, Postman remains valuable for:

1. **No-Code/Low-Code Approach** - Non-technical team members can contribute tests
2. **Rapid Test Development** - GUI-based test creation is faster for many scenarios
3. **Built-in Documentation** - Collections serve as living API documentation
4. **Visual Debugging** - Clear visualization of requests, responses, and test results
5. **Collaboration** - Teams can share and collaborate on collections easily
6. **Cost-Effective** - Free tier supports comprehensive testing for small to medium projects

However, this framework now integrates the best practices of modern testing frameworks, including:
- DRY (Don't Repeat Yourself) principles
- Separation of concerns
- Comprehensive reporting
- Performance monitoring
- Security validation
- Contract testing

## REST API

The framework includes comprehensive testing for the [JSON Placeholder](https://jsonplaceholder.typicode.com) API:

- **[/posts](https://jsonplaceholder.typicode.com/posts)** - 100 posts (FULLY IMPLEMENTED)
- **[/comments](https://jsonplaceholder.typicode.com/comments)** - 500 comments (FULLY IMPLEMENTED)
- **[/albums](https://jsonplaceholder.typicode.com/albums)** - 100 albums (FULLY IMPLEMENTED)
- **[/photos](https://jsonplaceholder.typicode.com/photos)** - 5000 photos (FULLY IMPLEMENTED)
- **[/todos](https://jsonplaceholder.typicode.com/todos)** - 200 todos (FULLY IMPLEMENTED)
- **[/users](https://jsonplaceholder.typicode.com/users)** - 10 users (FULLY IMPLEMENTED)

Resources are interconnected (e.g., posts have comments, albums have photos, users create posts).

## Files Overview

### Collections
- **JSON Placeholder.postman_collection.json** - Main collection with comprehensive functional tests
- **API Testing Framework - Performance.postman_collection.json** - Performance and load testing scenarios
- **API Testing Framework - Security.postman_collection.json** - Security vulnerability and compliance tests
- **API Testing Framework - Contracts.postman_collection.json** - API contract and schema validation
- **API Testing Framework - Multi-API.postman_collection.json** - Multi-endpoint integration tests

### Environments
- **JSON Placeholder Env.postman_environment.json** - Standard environment configuration (unchanged)
- **Multi-API.postman_environment.json** - Multi-API configuration with environment switching
- **Performance-Testing.postman_environment.json** - Performance testing parameters and thresholds
- **Security-Testing.postman_environment.json** - Security testing vectors and validation rules

### Configuration
- **package.json** - npm dependencies and test scripts
- **results/** - Test results and reports directory (auto-generated)

## Setup & Installation

### Prerequisites
- Node.js 14+ and npm
- Postman (Desktop or CLI via newman)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/rudr19/api-testing-framework.git
cd api-testing-framework

# Install dependencies
npm install

# Verify installation
npm test
```

## Running Tests

### Via npm Scripts (Recommended)

```bash
# Run all tests with default settings
npm test

# Run specific test suites
npm run test:json-placeholder      # Core functional tests
npm run test:performance            # Performance and load tests
npm run test:security               # Security compliance tests
npm run test:contracts              # Contract validation tests
npm run test:workflows              # Workflow integration tests
npm run test:all-apis               # Complete test suite

# Generate comprehensive HTML reports
npm run report

# Run CI pipeline
npm run test:ci
```

### Via Postman GUI

1. **Import Collections:**
   - Open Postman and click "Import"
   - Select the `.postman_collection.json` files

2. **Import Environments:**
   - Click "Environments" in left sidebar
   - Click "Import" and select `.postman_environment.json` files

3. **Select Environment:**
   - Ensure correct environment is selected in top-right dropdown

4. **Run Tests:**
   - Click the three dots next to collection name
   - Select "Run collection"
   - Choose test runner parameters

### Via Newman CLI

```bash
# Run with standard reporter
newman run "JSON Placeholder.postman_collection.json" \
  -e "JSON Placeholder Env.postman_environment.json"

# Run with HTML report
newman run "JSON Placeholder.postman_collection.json" \
  -e "JSON Placeholder Env.postman_environment.json" \
  --reporters htmlextra \
  --reporter-htmlextra-export results/report.html

# Run with specific iterations
newman run "JSON Placeholder.postman_collection.json" \
  -e "Performance-Testing.postman_environment.json" \
  --iteration-count 10
```

## Test Structure

### Hierarchy

Collections are organized hierarchically for maintainability:

```
Collection (Performance timeout test)
├── Endpoint Folder (Content-Type validation)
│   ├── Positive Tests (Schema + Response validation)
│   │   ├── 200 OK (Status code validation)
│   │   │   ├── All Resources
│   │   │   ├── Single Resource
│   │   │   ├── Filtered Resources
│   │   │   └── Paginated Resources
│   │   ├── 201 Created (for POST requests)
│   │   └── 204 No Content (for DELETE requests)
│   ├── Negative Tests (Error handling)
│   │   ├── 400 Bad Request
│   │   ├── 401 Unauthorized
│   │   ├── 403 Forbidden
│   │   ├── 404 Not Found
│   │   ├── 422 Unprocessable Entity
│   │   └── 500 Internal Server Error
│   └── Security Tests
│       ├── XSS Prevention
│       ├── SQL Injection Prevention
│       ├── Security Headers Validation
│       └── Rate Limiting
├── Performance Tests
│   ├── Response Time Benchmarks
│   ├── Throughput Tests
│   ├── Load Testing
│   └── Concurrent Request Handling
├── Contract Tests
│   └── OpenAPI/Swagger Compliance
└── Workflow Tests
    ├── Create-Read-Update-Delete Workflows
    └── Cross-Endpoint Integration Tests
```

### Test Layers

1. **Collection Level** - Response time validation
2. **Endpoint Level** - Content-Type and general structure
3. **Test Category** - Schema validation and response body verification
4. **Status Code** - HTTP status assertion
5. **Specific Request** - Expected response declaration

## Test Examples

### Functional Test (Positive)
```javascript
// Pre-request: Define expected response
pm.environment.set("expectedResponse", expectedData);

// Test: Validate response
pm.test("Response is correct", function() {
    pm.expect(pm.response.json()).to.eql(expectedResponse);
});
```

### Performance Test
```javascript
pm.test("Response time < 1000ms", function() {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("Throughput is adequate", function() {
    pm.expect(pm.response.responseTime).to.be.above(50);
});
```

### Security Test
```javascript
pm.test("Security headers present", function() {
    pm.expect(pm.response.headers.has("X-Content-Type-Options")).to.be.true;
    pm.expect(pm.response.headers.has("X-Frame-Options")).to.be.true;
});

pm.test("No XSS vulnerability", function() {
    const body = pm.response.text();
    pm.expect(body).to.not.include("<script>");
});
```

### Contract Test
```javascript
pm.test("Response matches OpenAPI schema", function() {
    pm.response.to.have.jsonSchema(schema);
});
```

## Variables

### Collection-Level Variables
| Variable | Value | Purpose |
|----------|-------|---------|
| `postsEndpoint` | `/posts` | Posts endpoint path |
| `commentsEndpoint` | `/comments` | Comments endpoint path |
| `albumsEndpoint` | `/albums` | Albums endpoint path |
| `photosEndpoint` | `/photos` | Photos endpoint path |
| `todosEndpoint` | `/todos` | Todos endpoint path |
| `usersEndpoint` | `/users` | Users endpoint path |

### Environment Variables
| Variable | Default | Configurable |
|----------|---------|--------------|
| `url` | https://jsonplaceholder.typicode.com | Yes |
| `responseTimeout` | 1000 | Yes |
| `maxResponseTime` | 2000 | Yes |
| `apiKey` | (empty) | Yes |
| `authToken` | (empty) | Yes |
| `environment` | development | Yes |

## CI/CD Pipeline

The project includes GitHub Actions workflow for automated testing:

### Triggers
- Push to `main` or `develop` branches
- Pull requests to `main` branch
- Scheduled daily runs

### Pipeline Steps
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Run all test suites
5. Generate reports
6. Upload artifacts
7. Send notifications

### Configuration
Edit `.github/workflows/ci.yml` to customize:
- Trigger conditions
- Node.js version
- Test suites to run
- Report generation
- Notification settings

## Performance Benchmarks

### Expected Response Times (JSON Placeholder)
- GET (all resources): < 1000ms
- GET (single resource): < 500ms
- POST: < 1000ms
- PUT/PATCH: < 1000ms
- DELETE: < 500ms

### Load Testing Baseline
- Concurrent requests: 10-50
- Sustained throughput: 100+ requests/sec
- Error rate: < 0.5%

## Security Considerations

### Tests Performed
- ✅ SQL Injection validation
- ✅ XSS prevention verification
- ✅ Security headers check
- ✅ CORS validation
- ✅ Authentication requirements
- ✅ Authorization boundaries
- ✅ Rate limiting compliance
- ✅ Input validation

### Production Deployment Checklist
- [ ] API keys and tokens removed/masked
- [ ] Sensitive data sanitized in logs
- [ ] All security tests passing
- [ ] Performance benchmarks met
- [ ] Error handling verified
- [ ] Documentation updated

## Extending the Framework

### Adding New Endpoints

1. **Create Folder Structure:**
   - Add folder for new endpoint under appropriate collection
   - Add Positive Tests and Negative Tests subfolders

2. **Define Variables:**
   - Add endpoint variable to collection
   - Add any configuration to environment files

3. **Write Tests:**
   - Define schema in pre-request script
   - Add schema validation test
   - Add response body validation test
   - Define expected responses

4. **Update Documentation:**
   - Add endpoint to this README
   - Document any special test requirements

### Adding Custom Metrics

```javascript
// In test script
pm.environment.set("customMetric", value);

// Post-test processing
const metrics = {
    responseTime: pm.response.responseTime,
    timestamp: new Date(),
    endpoint: pm.request.url.toString()
};
pm.environment.set("metrics", JSON.stringify(metrics));
```

### Integration with External Tools

```bash
# Export to JSON format for external processing
npm run test:json-placeholder -- --reporters json

# Export to CSV
newman run "collection.json" \
  --reporters csv \
  --reporter-csv-export results/test-results.csv

# Send to external monitoring
newman run "collection.json" \
  --reporters htmlextra \
  --reporter-htmlextra-export results/report.html \
  --reporter-htmlextra-export-format json
```

## Troubleshooting

### Common Issues

**Issue:** Tests fail with "Cannot find environment"
- **Solution:** Ensure environment file is imported and selected

**Issue:** Performance tests fail on slow network
- **Solution:** Adjust timeout values in Performance-Testing environment

**Issue:** CI/CD pipeline times out
- **Solution:** Split collection into smaller runs or increase timeout in ci.yml

**Issue:** Variable values not updating
- **Solution:** Check variable scope (global vs environment vs local)

### Debug Mode

Enable detailed logging:
```javascript
console.log("Request:", pm.request);
console.log("Response:", pm.response);
console.log("Environment:", pm.environment.toObject());
```

Run Newman with debug:
```bash
newman run "collection.json" -e "environment.json" --verbose
```

## Best Practices

1. **DRY Principle** - Define tests at folder level, not per request
2. **Clear Naming** - Use descriptive names for requests and tests
3. **Variable Usage** - Centralize configuration in environments
4. **Error Handling** - Test both success and failure scenarios
5. **Documentation** - Update README when adding new tests
6. **Version Control** - Track collection changes in git
7. **Regular Review** - Periodically review and update test data
8. **Performance Monitoring** - Track response times over time
9. **Security Audits** - Run security tests regularly
10. **CI/CD Integration** - Automate test runs on every push

## Reporting & Analytics

### Report Types

- **CLI Report** - Summary output in terminal
- **HTML Report** - Detailed interactive report (htmlextra)
- **JSON Report** - Machine-readable results for integration
- **CSV Report** - Spreadsheet-compatible results

### Report Generation

```bash
# Generate comprehensive report
npm run report

# Custom report location
newman run "collection.json" \
  --reporters htmlextra \
  --reporter-htmlextra-export "reports/$(date +%Y-%m-%d_%H-%M-%S).html"
```

### Metrics Tracked

- Total tests run
- Pass/fail count
- Response times (min/avg/max)
- Throughput (requests/sec)
- Error rates
- Test execution time
- Endpoint performance
- Security violations
- Contract mismatches

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support & Community

- **Issues:** Report bugs and request features on GitHub
- **Discussions:** Join our community forum
- **Documentation:** See the [Wiki](https://github.com/rudr19/api-testing-framework/wiki)

## Changelog

### v2.0.0 (2026-01-16)
- Complete rewrite with modern testing patterns
- Added performance testing suite
- Added security testing suite
- Added contract validation
- Multi-API environment support
- npm integration
- GitHub Actions CI/CD
- Comprehensive reporting
- Full endpoint coverage

### v1.0.0 (Original)
- Basic Postman collection
- Posts endpoint testing
- Simple workflow tests

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built upon the original API Testing with Postman framework
- Inspired by modern testing frameworks and best practices
- JSON Placeholder API for testing sandbox
- Postman community for excellent tools and documentation

---

**Author:** Rudra
**Last Updated:** 2026-01-16
**Repository:** https://github.com/rudr19/api-testing-framework
