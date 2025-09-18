# Installation

To get this documentation site up and running on your local machine, follow these steps.

## Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)) installed.

## Steps

1.  **Clone the repository:**
    ::: tip
    ```bash
    git clone https://github.com/cloudbypriyank/DocuFlow
    cd DocuFlow
    ```
    :::

2.  **Install dependencies:**

    Open your terminal in the project root and run:
    ::: tip
    ```bash
    npm install
    ```
    Or if you are using yarn:
    ```bash
    yarn install
    ```
    :::


3.  **Run the development server:**

    To start the local development server, run the following command:
    ::: tip
    ```bash
    npm run docs:dev
    ```
    :::

    This will start a hot-reloading development server, and you can view your documentation at `http://localhost:5173`.