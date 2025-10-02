#!/usr/bin/env node

/**
 * Migration script to copy components from source repo and transform imports
 * 
 * Usage: node scripts/migrate-components.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SOURCE_DIR = '/Users/galih/Documents/work/onesolution-web/src/components/Reusable';
const TARGET_DIR = path.join(__dirname, '../src/components');

// Components to migrate (add/remove as needed)
const COMPONENTS_TO_MIGRATE = [
  'Badge',
  'Modal',
  'Table',
  'Pagination',
  'Collapse',
  'Dropdown',
  'Input',
  'Spinner',
  'FileUploader',
  'Segmented',
  'ResponsiveModalDrawer',
  'RichTextEditor',
  'TiptapEditor',
  'Banner',
  'BottomSheet',
  'CascaderFilter',
  'CompactTable',
  'DynamicDataDisplay',
  'Error',
  'GithubTab',
  'OSXBreadcrumbs',
  'OSXDashboardNavbar',
  'OSXEmptyCircle',
  'OSXFieldWrapper',
  'OSXNotfound',
  'OSXSuspense',
  'SectionHeader',
  'SortIcon',
];

// Files to copy individually (not in folders)
const STANDALONE_FILES = [
  'OutsideClickWrapper.tsx',
];

/**
 * Transform import statements in file content
 */
function transformImports(content, componentName) {
  let transformed = content;

  // Replace @/ imports with relative imports
  // This is a simplified version - you may need to adjust based on actual import patterns
  transformed = transformed.replace(
    /@\/components\/Reusable\//g,
    '../'
  );

  transformed = transformed.replace(
    /@\/components\//g,
    '../../'
  );

  transformed = transformed.replace(
    /@\/lib\//g,
    '../../utils/'
  );

  transformed = transformed.replace(
    /@\/utils\//g,
    '../../utils/'
  );

  transformed = transformed.replace(
    /@\/hooks\//g,
    '../../hooks/'
  );

  // Handle Next.js Image imports - keep as is since Next.js is a peer dependency
  // transformed = transformed.replace(
  //   /from ['"]next\/image['"]/g,
  //   "from 'next/image'"
  // );

  // Add "use client" directive at the top if not present
  if (!transformed.includes('"use client"') && !transformed.includes("'use client'")) {
    // Find the first non-comment, non-empty line
    const lines = transformed.split('\n');
    let insertIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && !line.startsWith('//') && !line.startsWith('/*') && !line.startsWith('*')) {
        insertIndex = i;
        break;
      }
    }
    
    lines.splice(insertIndex, 0, '"use client";', '');
    transformed = lines.join('\n');
  }

  return transformed;
}

/**
 * Copy a file and transform its content
 */
function copyAndTransformFile(sourcePath, targetPath, componentName) {
  try {
    const content = fs.readFileSync(sourcePath, 'utf8');
    const transformed = transformImports(content, componentName);
    
    // Ensure target directory exists
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.writeFileSync(targetPath, transformed, 'utf8');
    console.log(`✓ Copied: ${path.basename(sourcePath)} -> ${targetPath}`);
  } catch (error) {
    console.error(`✗ Error copying ${sourcePath}:`, error.message);
  }
}

/**
 * Copy a directory recursively
 */
function copyDirectory(sourceDir, targetDir, componentName) {
  if (!fs.existsSync(sourceDir)) {
    console.warn(`⚠ Source directory not found: ${sourceDir}`);
    return;
  }

  const items = fs.readdirSync(sourceDir);
  
  items.forEach(item => {
    const sourcePath = path.join(sourceDir, item);
    const targetPath = path.join(targetDir, item);
    const stat = fs.statSync(sourcePath);
    
    if (stat.isDirectory()) {
      copyDirectory(sourcePath, targetPath, componentName);
    } else if (stat.isFile()) {
      copyAndTransformFile(sourcePath, targetPath, componentName);
    }
  });
}

/**
 * Main migration function
 */
function migrateComponents() {
  console.log('🚀 Starting component migration...\n');
  
  // Ensure target directory exists
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  // Migrate component directories
  COMPONENTS_TO_MIGRATE.forEach(componentName => {
    console.log(`\nMigrating ${componentName}...`);
    const sourceDir = path.join(SOURCE_DIR, componentName);
    const targetDir = path.join(TARGET_DIR, componentName);
    
    copyDirectory(sourceDir, targetDir, componentName);
  });

  // Migrate standalone files
  console.log('\nMigrating standalone files...');
  STANDALONE_FILES.forEach(fileName => {
    const sourcePath = path.join(SOURCE_DIR, fileName);
    const targetPath = path.join(TARGET_DIR, fileName);
    
    if (fs.existsSync(sourcePath)) {
      copyAndTransformFile(sourcePath, targetPath, fileName);
    } else {
      console.warn(`⚠ Standalone file not found: ${sourcePath}`);
    }
  });

  console.log('\n✅ Migration completed!');
  console.log('\n📝 Next steps:');
  console.log('1. Review the migrated components in src/components/');
  console.log('2. Fix any remaining import issues manually');
  console.log('3. Update src/index.ts to export the components');
  console.log('4. Run "npm run type-check" to verify TypeScript');
  console.log('5. Run "npm run build" to build the package');
}

// Run migration
try {
  migrateComponents();
} catch (error) {
  console.error('❌ Migration failed:', error);
  process.exit(1);
}
