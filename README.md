# Instruction on how to run the code locally
## Step 1: Clone the repository
- Access the repository on GitHub and click on the code button to get the URL.
- Open your terminal and run the following command: git clone `<URL>`

## Step 2: Check if you have ***Node.js*** installed
- Run this command in your terminal: `node -v` or `node --version`
    - If it shows a version number, i.e, `v18.17.1` then continue to the next step.
    - If it shows an error, you need to install Node.js. You can download it from [here](https://nodejs.org/en/download/). Please choose the option based on your operating system.

## Step 3: Create a React App
- Run these commands in terminal:
```bash
npx create-react-app financial-data-app
cd finanaical-data-app
```

## Step 4: Install Tailwind CSS
- Run this command in terminal:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## Step 5: Install Live Server
This will help you to run the app locally via browser. If you use VS Code, you can install the extension called `Live Server` and run the app from there.

