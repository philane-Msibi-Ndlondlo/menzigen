
# MenziGen

This is a password generator package for your node app. Simple to understand and implement without hardship. 

## Requirements:

- NodeJS

---

## Install

`npm install menzigen --save`

---

# Usage

```js
    const passwordGenerator = require("menzigen"); // import the MenziGen package

    const passwordGen = new passwordGenerator(20); // Create the instance
    passwordGen.setLength(10); // Set the length
    passwordGen.include_symbols(false); // Set the if symbols should be included or not
    passwordGen.include_numbers(true); // Set the if numbers should be included or not
    passwordGen.include_uppercase(true); // Set the if uppercase letters should be included or not
    passwordGen.include_lowercase(false); // Set the if lowercase leeters should be included or not
    console.log(passwordGen.generate()); // generate the password
```
---
# Contribute

You are welcome to contribute, checkout the github repo