# HideNSeek Web Component

A simple and interactive web component that reveals hidden content with a spoiler effect. The component is built using Lit, TypeScript, and Web Components standards.

## Features

- **Interactive Spoiler**: Hide and reveal content using a mouse hover effect.
- **Smooth Transitions**: Fade-in and fade-out animations for both the background dots and the content.
- **Customizable**: Easily adjustable behavior and styles.

## Demo

You can try the component by adding it to an HTML file and viewing it in your browser.

```html
<head>
  <script type="module" src="./hide-n-seek/hide-n-seek.view.ts"></script>
</head>

<h2>Hover over to reveal content</h2>
<hide-n-seek>
  <p>This is the hidden content that will be revealed when hovered.</p>
</hide-n-seek>
```

## Usage

1. **Add the custom element to your HTML**: You can use the `<hide-n-seek>` tag to wrap the content you want to be hidden initially.
2. **Hover to reveal**: When you hover over the `<hide-n-seek>` element, the content inside will fade into view.

```html
<hide-n-seek>
  <p>This is the hidden content!</p>
</hide-n-seek>
```

## Customization

You can customize the behavior of the `HideNSeek` component through the following properties:

- `delay` (in milliseconds): The delay before the content is revealed or hidden (default: 300ms).
- `isShowing`: A boolean property that determines whether the content is visible (default: `false`).

For example:

```html
<hide-n-seek .delay="500">
  <p>This content appears after a delay of 500ms of mouse enter.</p>
</hide-n-seek>
```

## Development

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hide-n-seek.git
   cd hide-n-seek
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000` to view the component in action.
