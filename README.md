# React JS Resume Website

This project generates the resume seen on my personal website [andrewmelvin.dev](https://andrewmelvin.dev/)

This code has been adapted from the react-resume-template project: [https://github.com/tbakerx/react-resume-template](https://github.com/tbakerx/react-resume-template)

Technologies used:
* React
* Tailwind CSS
* Typescript
* Node.js
* Yarn
* EmailJS integration

## Prerequisites

* **Git:** Ensure Git is installed on your Windows machine. [Download Git](https://gitforwindows.org/)
* **Node.js:** Runs server-side JavaScript to test and build the website. [Download Node](https://nodejs.org/en/download/)
* **Yarn:** The package manager used to install dependencies and run test/build scripts. [Download Yarn](https://yarnpkg.com/getting-started/install)
* **EmailJS:** The service used to send email from the contact form. [Setup EmailJS](https://www.emailjs.com/)

## Getting Started

## Setup

1. **Clone the repository:**
   * Open Git Bash.
   * Navigate to the directory where you want to store the project.
   * Clone the repository: `git clone git@github.com:andrewmelvin-dev/react-resume-andrewmelvin.git`

2. **Navigate to the project directory:**
   * `cd react-resume-andrewmelvin`

3. **Install required packages:**
   * `yarn install`

4. **Integrate with EmailJS:**
   * Modify the `src\components\Sections\Contact\ContactForm.tsx` file and on lines 40, 41 and 47 add the service ID, template ID, and public key from EmailJS.

## Local testing

Run the following command to test the website locally:
`yarn dev`

## Build the website for remote hosting

Run the following command to build the website:
`yarn build`

The built website will be output to the `out` directory. The contents of this directory can then be copied to a hosting location, such as an Amazon S3 bucket.
