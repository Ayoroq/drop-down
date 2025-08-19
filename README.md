# Dropdown Component

A lightweight, vanilla JavaScript dropdown component with no dependencies.

## Installation

```bash
npm install @your-username/dropdown-component
```

## Usage

### Basic Usage

```javascript
import { initDropdown } from '@your-username/dropdown-component';

// Initialize with default selectors
initDropdown();
```

### HTML Structure

```html
<div class="dropdown">
  <button class="dropdown-button">Click here</button>
  <div class="dropdown-content">
    <button class="dropdown-option">Option 1</button>
    <button class="dropdown-option">Option 2</button>
    <button class="dropdown-option">Option 3</button>
  </div>
</div>
```

### CSS Requirements

Your CSS must include a `.hidden` class:

```css
.hidden {
  display: none;
}
```

### Custom Selectors

```javascript
import { initDropdown } from '@your-username/dropdown-component';

// Use custom CSS selectors
initDropdown('.menu-btn', '.menu-content', '.menu-item');
```

### Multiple Dropdowns

```javascript
// Initialize multiple dropdowns with different selectors
initDropdown('.nav-dropdown-btn', '.nav-dropdown-content', '.nav-option');
initDropdown('.filter-btn', '.filter-content', '.filter-option');
```

## API

### `initDropdown(buttonSelector, contentSelector, optionSelector)`

**Parameters:**
- `buttonSelector` (string, optional): CSS selector for dropdown button. Default: `".dropdown-button"`
- `contentSelector` (string, optional): CSS selector for dropdown content. Default: `".dropdown-content"`
- `optionSelector` (string, optional): CSS selector for dropdown options. Default: `".dropdown-option"`

## Features

- Click to toggle dropdown
- Click option to close dropdown
- Click outside to close dropdown
- No dependencies
- Lightweight (~1KB)

## License

MIT