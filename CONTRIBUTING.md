# Contributing

Thanks for contributing!

## Adding a New Unit Category

### 1. Fork the repository
---

### 2. Clone your fork

```typescript
git clone https://github.com/YOUR_USERNAME/unit-converter.git
cd unit-converter
npm install
```
- *This will clone the repo to your own PC, change to the unit-converter directory, then install the required dependencies to the project*

### 3. Choose a conversion technique to add:

###### Check out /src/example.ts for a walkthrough on how to structure these files:

##### - New category - (e.g. length, mass, temperature, volume, etc)
 - Create a new .ts file in /src/category/ with the category type
 - Create a test file in /src/tests/
---

##### - Add to a categories conversions - (e.g. L -> usGallon)
 - Edit a current *category*.ts file by adding a new unit in the object (please follow the current structure)
 - Add a couple tests for your new unit in /src/tests/*category*

---

### 4. Update the README.md:
 - Add your changes to the Supported Units section of README.md (please follow the current structure)

### 5. Build the project:
 ```typescript
 npm run build
```

### 6.  Run tests:
 ```typescript
 npm test
```


### 7. Commit and push your changes

```typescript
git add .
git commit -m "Add volume conversions"
git push
```

### 8. Open a Pull Request on GitHub
---
## Guidelines

* Use logical base units
* Add tests for your conversions
* Keep conversions accurate

That's it!
