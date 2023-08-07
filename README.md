# Cypress UI Test Automation

![Cypress Logo](https://www.cypress.io/images/layouts/navbar-brand.svg)

Welcome to the **UI Test Automation** project repository. This repository contains a collection of UI tests written using the Cypress testing framework to ensure the quality and reliability of your web application.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)


## About

This project aims to demonstrate how to write and execute end-to-end UI tests using the Cypress testing framework. UI tests play a crucial role in identifying and preventing regressions, ensuring that your web application functions correctly across different scenarios and user interactions.

## Getting Started

Follow these instructions to set up the project and start running UI tests on your local machine.

### Prerequisites

Before you begin, ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (Recommended version: LTS)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/AliakseiK/cypress-ui-test-automation.git

2. Navigate to the project directory:

    ```bash
    cd cypress-ui-test-automation
   
3. Install the project dependencies:

    ```bash
    npm install

### Usage
This test framework uses ReportPortal as reporting tool. You need to update configuration in cypress.config.js file:

    endpoint: '{REPORT_PROTAL_ENDPOINT}',
    apiKey: '{REPORT_PROTAL_API_KEY}',
    launch: '{REPORT_PROTAL_EXECUTION_NAME}',
    project: '{REPORT_PROTAL_PROJECT_NAME}',
    description: '',
    attributes: []

To run the Cypress UI tests, use the following command:

    npx cypress install

This command will launch the Cypress Test Runner, allowing you to interactively run and debug your UI tests in various browsers.

You can find the test scripts in the cypress/integration directory. Feel free to modify and extend these scripts to match your application's UI testing requirements.

