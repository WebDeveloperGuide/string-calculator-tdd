# String Calculator TDD

A minimal TypeScript + Jest implementation of the String Calculator.

## Tech stack

- TypeScript (strict)
- Jest + ts-jest
- ESLint + Prettier

## Getting started

```bash
# install
npm install

# run tests (watch)
npm run test:watch

# run tests (once)
npm test

# build
npm run build

# lint & format
npm run lint
npm run format
```

## Supported requirements

- Empty input returns 0
- Single number returns its value
- Any number of comma-separated numbers
- Newline as a delimiter: "1\n2,3" → 6
- Custom delimiter line: "//;\n1;2" → 3
- Bracketed delimiter of any length: "//[***]\n1**_2_**3" → 6
- Multiple delimiters: "//[\*][%]\n1\*2%3" → 6
- Multiple multi-length delimiters: "//[\*\*\*][%%]\n1\*\*\*2%%3" → 6
- Negative numbers throw: "-1,2,-3" → Error("negative numbers not allowed -1,-3")
- Numbers > 1000 are ignored: "2,1001" → 2

## Usage (library)

```ts
import add from './src';

add(''); // 0
add('7'); // 7
add('1,2,3'); // 6
add('1\n2,3'); // 6
add('//;\n1;2'); // 3
add('//[***]\n1***2***3'); // 6
add('//[*][%]\n1*2%3'); // 6
add('2,1001'); // 2
```

## Project structure

```
string-calculator-tdd/
  ├─ src/
  │  ├─ index.ts
  │  └─ stringCalculator.ts
  ├─ __tests__/
  │  └─ stringCalculator.test.ts
  ├─ jest.config.js
  ├─ tsconfig.json
  ├─ package.json
  └─ README.md
```

## Notes on design

- The parser supports: default delimiters (comma/newline), a single custom delimiter, and multiple bracket-defined delimiters (any length).
- Negatives are collected and reported together for clear failures.
- Values greater than 1000 are filtered out before summing.

---
