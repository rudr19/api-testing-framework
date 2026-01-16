#!/usr/bin/env node

/**
 * Postman Collection Validator
 * Validates Postman collection files for syntax and structure
 * Author: Rudra
 */

const fs = require('fs');
const path = require('path');

const collectionFiles = [
  'JSON Placeholder.postman_collection.json'
];

const environmentFiles = [
  'JSON Placeholder Env.postman_environment.json',
  'Multi-API.postman_environment.json',
  'Performance-Testing.postman_environment.json',
  'Security-Testing.postman_environment.json'
];

let errors = 0;
let warnings = 0;
let successes = 0;

function validateJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    return { valid: true, error: null };
  } catch (err) {
    return { valid: false, error: err.message };
  }
}

function validateCollection(filePath) {
  const result = validateJSON(filePath);
  if (!result.valid) {
    console.error(`[ERROR] Collection ${filePath}: Invalid JSON - ${result.error}`);
    errors++;
    return false;
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Check for required fields
    if (!data.info) {
      console.warn(`[WARN] Collection ${filePath}: Missing 'info' field`);
      warnings++;
    }

    if (!data.item || !Array.isArray(data.item)) {
      console.warn(`[WARN] Collection ${filePath}: Missing or invalid 'item' array`);
      warnings++;
    }

    // Check for author info
    if (!data.info.author || data.info.author === 'mathare') {
      console.warn(`[WARN] Collection ${filePath}: Author not updated to Rudra`);
      warnings++;
    }

    console.log(`[OK] Collection ${filePath}: Valid`);
    successes++;
    return true;
  } catch (err) {
    console.error(`[ERROR] Collection ${filePath}: Validation error - ${err.message}`);
    errors++;
    return false;
  }
}

function validateEnvironment(filePath) {
  const result = validateJSON(filePath);
  if (!result.valid) {
    console.error(`[ERROR] Environment ${filePath}: Invalid JSON - ${result.error}`);
    errors++;
    return false;
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Check for required fields
    if (!data.values || !Array.isArray(data.values)) {
      console.warn(`[WARN] Environment ${filePath}: Missing or invalid 'values' array`);
      warnings++;
    }

    console.log(`[OK] Environment ${filePath}: Valid`);
    successes++;
    return true;
  } catch (err) {
    console.error(`[ERROR] Environment ${filePath}: Validation error - ${err.message}`);
    errors++;
    return false;
  }
}

console.log('Validating Postman Collections and Environments...\n');

// Validate collections
console.log('Collections:');
collectionFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    validateCollection(filePath);
  } else {
    console.warn(`[WARN] Collection ${file}: File not found`);
    warnings++;
  }
});

console.log('\nEnvironments:');
environmentFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    validateEnvironment(filePath);
  } else {
    console.warn(`[WARN] Environment ${file}: File not found`);
    warnings++;
  }
});

console.log('\nValidation Summary:');
console.log(`   Passed: ${successes}`);
console.log(`   Warnings: ${warnings}`);
console.log(`   Errors: ${errors}`);

process.exit(errors > 0 ? 1 : 0);
