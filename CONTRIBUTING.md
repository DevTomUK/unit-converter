# Contributing to Unit Converter

Thank you for helping make this project better! Contributing is easy, even if you're new to open source.

## Adding a New Unit Category

### 1. Fork the Repository

Click the **Fork** button on GitHub to create your own copy of the project.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/unit-converter.git
cd unit-converter
npm install
```

This clones the repo to your PC, navigates to the directory, and installs dependencies.

---

### 3. Choose What to Add

#### Option A: New Category (e.g., volume, pressure, speed)

**Reference:** Check out `/src/category/example.ts` for a template.

1. Create a new `.ts` file in `/src/category/` (e.g., `volume.ts`)
```bash
   cp src/category/example.ts src/category/volume.ts
```

2. Edit the file and define your units following the template structure

3. Create a test file in `/src/tests/volume.test.js`

#### Option B: Add Units to Existing Category (e.g., add Fahrenheit to temperature)

1. Edit the existing category file in `/src/category/` (e.g., `temperature.ts`)
2. Add your new unit to the object, following the current structure
3. Add tests in `/src/tests/temperature.test.js`

---

### 4. Write Tests

Add at least 3 test cases in your test file. Reference existing tests in `/src/tests/` for examples.

**Example:**
```javascript
const convert = require('../../dist/index.js').default

describe('Volume Conversions', () => {
  test('liters to ml', () => {
    const result = convert.liter(1).to.ml()
    expect(result).toBe(1000)
  })
})
```

---

### 5. Update README.md

Add your new units to the **Supported Units** section, following the current format.

---

### 6. Build & Test

```bash
npm run build
npm test
```

All tests must pass before opening a PR.

---

### 7. Commit & Push

```bash
git add .
git commit -m "Add volume conversions (liter, ml, gallon)"
git push origin your-branch-name
```

---

### 8. Open a Pull Request

Go to the original repository and click **New Pull Request**. Describe what you added and wait for review!

---

## Guidelines

✅ **Do:**
- Pick logical base units (e.g., meters for length, kilograms for mass)
- Write accurate conversion formulas
- Add tests for all new units
- Keep code consistent with existing files

❌ **Don't:**
- Edit `src/index.ts` (we handle imports)
- Modify existing units (add new ones instead)
- Skip tests

---

## Questions?

Open an issue on GitHub or check out existing PRs to see how others contributed!