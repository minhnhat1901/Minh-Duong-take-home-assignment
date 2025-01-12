# Instruction on how to run the code locally

## Step 1: Install Software Needed

1. Install **VS Code** (highly recommended)
   - Download the installer from [here](https://code.visualstudio.com/download)
   - Run the installer and follow the instructions.

2. Install **Git** (if not available)
   - Download the installer from [here](https://git-scm.com/downloads)
   - Run the installer and follow the instructions.

3. Check if you have **Node.js** installed
   - Run this command in your terminal: `node -v` or `node --version`
       - If it shows a version number, i.e, `v18.17.1` then continue to the next step.
       - If it shows an error, you need to install **Node.js**. You can download it from [here](https://nodejs.org/en/download/). Please choose the option based on your operating system.
       - Check `npm -v` or `npm --version` to see if your device encounters any issue.

**Note:** For Windows users, you may encounter an issue where `npm` is not recognized as a command. Here is some options you can do:
- If you are using **PowerShell**, you can run the following command to fix the issue:
```shell
Set-ExecutionPolicy Unrestricted -Scope Process
```
- If you don't want to run the command above, you can change the terminal to **Command Prompt**. When you look on the right side of the terminal, there is a dropdown menu next to `+` where you can select the terminal you want to use. 

## Step 2: Clone the Repository
   - Open your terminal and run the following command: 
```bash
git clone https://github.com/minhnhat1901/Minh-Duong-take-home-assignment.git
```

## Step 3: Navigate to the Repository
   - Access the repository by running the following command:
```bash
cd Minh-Duong-take-home-assignment/financial-data-app
```

## Step 4: Install Dependencies
   - Run the following command in your terminal: `npm install`

## Step 5: Start the App
   - Run the following command in your terminal: `npm start`
   - The app will open in your default browser. If it doesn't, you can access it by typing `http://localhost:3000/` in your browser.

# GitHub Pages
You can also view the app on GitHub Pages. Click [here](https://minhnhat1901.github.io/Minh-Duong-take-home-assignment/) to view the app.