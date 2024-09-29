# Playwright E2E Test Suite

 Overview

This repository contains automated end-to-end tests for the Redmine project using Playwright. The test suite covers various scenarios of the user login and delete account;

# Before running the tests, ensure the following tools are installed:

    - Node.js (latest version);
    - Playwright - The testing framework used in this project;
    - Git - For cloning this repository;

# INSTALATION:

1.Clone the repository to your local machine:
   git clone https://github.com/Gymnast1992/Redmine-Playwright.git ;

2.Navigate to the project directory:
   cd Redmine-Playwright (project name);

3.Install the required Node.js dependencies:
   npm install

4.Install Playwright browsers:
   npx playwright install


# RUN ALL TESTS:
   npx playwright test ;

# RUN A SPECIFIC TEST FILE:
   npx playwright test test/specs/filename ;


# To run the tests with a specific browser, use:
   npx playwright test --project=chromium
   
   Other supported browsers:

    -chromium
    -firefox
    -webkit

# Generate and View Test Reports:
   npx playwright show-report








