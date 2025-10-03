# @synergysg/ui-components

Internal React component library built on Ant Design and Next.js for Synergy SG projects. Components now ship with static CSS classes, so Tailwind in the consumer is optional.

## Installation

```bash
npm install @synergysg/ui-components
# or
yarn add @synergysg/ui-components
# or
pnpm add @synergysg/ui-components
```

## Peer Dependencies

This package requires the following peer dependencies to be installed in your project:

```json
{
  "react": "^18.2.0 || ^19.0.0",
  "react-dom": "^18.2.0 || ^19.0.0",
  "antd": "^5.18.0",
  "next": "^14.0.0 || ^15.0.0"
}
```

## Exports and Naming Convention

All public components are exported with the `OS` prefix for consistency:

```ts
import {
  OSBadge,
  OSModalWrapper,
  OSTable,
  OSTableLoading,
  OSPagination,
  OSCollapse,
  OSDropdownButton,
  OSInput,
  OSInputPassword,
  OSInputSearch,
  OSDatePicker,
  OSDateRangePicker,
  OSTimePicker,
  OSTimePickerRange,
  OSTextArea,
  OSSelect,
  OSSelectSearch,
  OSCascader,
  OSInputNumber,
  OSSpinner,
  OSSegmented,
  OSResponsiveModalDrawer,
  OSEmptyCircle,
  OSXBannerInfo,
  OSCascaderFilter,
  cn,
} from '@synergysg/ui-components';
```

Types are also aliased with `OS` when applicable (e.g., `OSBadgeProps`).

## Quick Usage Examples

```tsx
import '@synergysg/ui-components/styles.css';
import 'antd/dist/reset.css';
import { OSBadge, OSInput, OSDropdownButton } from '@synergysg/ui-components';

export default function Example() {
  return (
    <div className="p-4">
      <OSBadge type="green">Active</OSBadge>
      <div className="mt-4">
        <OSInput placeholder="Search..." />
      </div>
    </div>
  );
}
```

## Styling & Themes

- Design tokens are shipped via CSS variables and included when you import `@synergysg/ui-components/styles.css`.
- Components use static CSS classnames (no Tailwind dependency in consumer). A Tailwind preset remains available for teams that want to align tokens/utilities, but it is optional.
- CSS is marked as side-effectful to avoid tree-shaking.

## Setup

### 1. Import Styles

Import the component styles in your app's root layout or main entry file:

```tsx
// app/layout.tsx (Next.js App Router)
import '@synergysg/ui-components/styles.css';
import 'antd/dist/reset.css'; // Ant Design styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**Important:** The `styles.css` import includes:
- Design system CSS variables (theme)
- Component-specific styles
- Supports both light and dark mode via `[data-theme="dark"]`

### 2. Configure Tailwind CSS (Optional)

Tailwind is no longer required by the consumer app for component styling. If your app uses Tailwind and you want token alignment and utilities, you can still use our preset.

**Option A: Use the Tailwind Preset**

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('@synergysg/ui-components/tailwind.preset')
  ],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Include the component library (only if you use Tailwind utilities alongside components)
    './node_modules/@synergysg/ui-components/dist/**/*.{js,mjs}',
  ],
  // Your custom config here
};
```

**Option B: Manual Configuration**

If you already have the design system tokens in your project:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Include the component library
    './node_modules/@synergysg/ui-components/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      colors: {
        // Your existing design tokens
        // The components use CSS variables, so Tailwind just needs
        // to know about the class names
      },
    },
  },
};
```

### 3. Dark Mode Support (Optional)

The package includes dark mode support. To enable it, add the `data-theme` attribute:

```tsx
// Toggle dark mode
<html data-theme="dark">
  {/* Your app */}
</html>

// Or dynamically
<html data-theme={isDark ? 'dark' : 'light'}>
  {/* Your app */}
</html>
```

### 4. TypeScript Configuration

If using TypeScript, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Usage

### Basic Example

```tsx
import '@synergysg/ui-components/styles.css';
import 'antd/dist/reset.css';
import { OSBadge, OSModalWrapper, cn } from '@synergysg/ui-components';

export default function MyComponent() {
  return (
    <div>
      <OSBadge type="green">Active</OSBadge>

      <OSModalWrapper
        open
        titleText="Hello"
        onCancel={() => console.log('close')}
      >
        Content here
      </OSModalWrapper>
    </div>
  );
}
```

### Using the `cn` Utility

The `cn` utility combines `clsx` and `tailwind-merge` for conditional and conflict-free class names:

```tsx
import { cn } from '@synergysg/ui-components';

function Button({ className, isActive }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded',
        isActive && 'bg-blue-500 text-white',
        className
      )}
    >
      Click me
    </button>
  );
}
```

## Available Components

- **OSBadge**
- **OSModalWrapper**
- **OSTable**, **OSTableLoading**, **OSPagination**
- **OSCollapse**
- **OSDropdownButton**
- **OSInput**, **OSInputPassword**, **OSInputSearch**, **OSDatePicker**, **OSDateRangePicker**, **OSTimePicker**, **OSTimePickerRange**, **OSTextArea**, **OSSelect**, **OSSelectSearch**, **OSCascader**, **OSInputNumber**
- **OSSpinner**
- **OSSegmented**
- **OSResponsiveModalDrawer**
- **OSEmptyCircle**
- **OSXCascaderFilter**
- **OSXBannerInfo**

## Development

### Building the Package

```bash
npm run build
```

### Development Mode (Watch)

```bash
npm run dev
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Publishing

This is a private package. To publish to npm as a restricted (private) package:

1. Ensure you're authenticated with npm and have org access
2. Bump version using SemVer (see Versioning below)
3. Publish:

```bash
npm publish --access restricted
```

The `prepublishOnly` script will automatically build the package before publishing.

### npm auth for private scope

Create or update an `.npmrc` (user-level or project-level):

```ini
@synergysg:registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

Login locally (if not using a token):

```bash
npm login
```

### Publishing to GitHub Packages (alternative)

If you prefer GitHub Packages, update `publishConfig.registry` in `package.json` and `.npmrc`:

```json
{
  "publishConfig": {
    "access": "restricted",
    "registry": "https://npm.pkg.github.com/"
  }
}
```

```
@synergysg:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then `npm publish`.

## Versioning

We follow SemVer:

- Patch (x.y.Z): bug fixes, no API changes
- Minor (x.Y.z): new features, backwards compatible
- Major (X.y.z): breaking changes

For the recent static CSS migration, bump at least a minor version (e.g., 1.1.0) since behavior changed for consumers (reduced Tailwind requirement) but APIs remained intact.

Convenient commands:

```bash
# choose one
npm version patch -m "chore(release): %s"
npm version minor -m "chore(release): %s"
npm version major -m "chore(release): %s"

npm publish --access restricted
```

## Consumer Setup Changes (Post-migration)

- Import styles once in your app root:

```tsx
import '@synergysg/ui-components/styles.css';
import 'antd/dist/reset.css';
```

- Tailwind config is optional. If you already use Tailwind, you can keep the preset/content includes. If you do not use Tailwind, no additional setup is required.

## Design Tokens

Components read their colors from CSS variables (see `src/theme.css`). Importing `@synergysg/ui-components/styles.css` loads these variables automatically. If you want only tokens (no component CSS), import `@synergysg/ui-components/theme.css` instead.

## License

UNLICENSED - Internal use only for Synergy SG projects.

## Support

For issues or questions, contact the Synergy SG development team.
