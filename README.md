# Design Token Tailwind Config Creator

Take your design system into the Tailwind utility class age. Uses Style Dictionary design tokens to create a valid `tailwind.config.js` file.

## Uses

- [Style Dictionary 3.0](https://amzn.github.io/style-dictionary/#/)
  - JSON5 syntax for color example
- [Prettier](https://prettier.io/)
- [Lodash](https://lodash.com/)

## Installation

`yarn`

## Build

`yarn build`

## Capabilities

1.0 ships with being able to process colors, font family, font weight and font size tokens.

## Example fold structure

```
tokens
└── color
	└── base.json5
	└── font.json5
└── font
	└── family.json5
	└── size.json5
	└── weight.json5
```

## Change log

### 1.0.3

- Core colors now distinguished from other colors in project
- Clearer naming in `tailwind.template`
- Replaced `.forEach()` with `.map()` functions for unaltered variables
