#!/usr/bin/env node

/**
 * Bundle all CSS files from components into a single styles.css
 * 
 * Usage: node scripts/bundle-styles.js
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../src/components');
const OUTPUT_FILE = path.join(__dirname, '../src/styles.css');

/**
 * Find all CSS files recursively
 */
function findCSSFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    return fileList;
  }

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findCSSFiles(filePath, fileList);
    } else if (file.endsWith('.css')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Bundle CSS files
 */
function bundleStyles() {
  console.log('🎨 Bundling CSS files...\n');

  const cssFiles = findCSSFiles(COMPONENTS_DIR);

  if (cssFiles.length === 0) {
    console.log('⚠ No CSS files found');
    // Create empty styles.css
    fs.writeFileSync(OUTPUT_FILE, '/* No component styles found */\n', 'utf8');
    return;
  }

  let bundledCSS = '/* Auto-generated styles bundle - DO NOT EDIT MANUALLY */\n\n';

  cssFiles.forEach(cssFile => {
    const relativePath = path.relative(COMPONENTS_DIR, cssFile);
    const content = fs.readFileSync(cssFile, 'utf8');

    bundledCSS += `/* ${relativePath} */\n`;
    bundledCSS += content;
    bundledCSS += '\n\n';

    console.log(`✓ Added: ${relativePath}`);
  });

  fs.writeFileSync(OUTPUT_FILE, bundledCSS, 'utf8');
  console.log(`\n✅ Styles bundled to: ${OUTPUT_FILE}`);

  // Append optional static overrides if present
  const EXTRAS_FILE = path.resolve(__dirname, '../src/styles.extras.css');
  if (fs.existsSync(EXTRAS_FILE)) {
    const extras = fs.readFileSync(EXTRAS_FILE, 'utf8');
    fs.appendFileSync(
      OUTPUT_FILE,
      '\n/* === Static overrides appended from styles.extras.css === */\n\n' + extras,
      'utf8'
    );
    console.log(`✓ Appended overrides: ${EXTRAS_FILE}`);
  }
}

// Run bundling
try {
  bundleStyles();
} catch (error) {
  console.error('❌ Style bundling failed:', error);
  process.exit(1);
}
