# Node.Js Backend API

This project is a secure web application that leverages modern authentication and authorization techniques to protect user data and manage access. The application is built with a focus on security and scalability, using technologies like JWT, bcrypt, and SQLite.

## Key Features

- **Authentication & Authorization**: Utilizes JSON Web Tokens (JWT) to handle user authentication and authorization, ensuring that only authorized users can access specific resources.
- **Password Encryption**: Uses bcrypt to securely hash and store user passwords, providing a robust defense against brute-force attacks.
- **Database Management**: SQLite is used as the database engine for storing user data and other application information. The application establishes and manages a connection to the SQLite database efficiently.
- **PM2 for Process Management**: PM2 is employed to manage and scale multiple instances of the application, ensuring high availability and performance under load.
- **Automated Builds**: A `build.bat` script is provided to automate the creation of production-ready builds, simplifying the deployment process.

This project is designed to be a secure and scalable solution for managing user access and protecting sensitive data.

## Getting Started

Follow the steps below to set up and run the application on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) version 16.15.0** (ensure you have Node.js installed)
- [PM2](https://pm2.keymetrics.io/) (optional, for managing multiple instances)

### Installation

1. **Download the Code**

   - Clone the repository or download the ZIP file from GitHub.

2. **Open the Downloaded Folder**

   - Navigate to the directory where you downloaded the project files.

3. **Install Dependencies**

   - Open a command prompt (cmd) in the project directory.
   - Run the following command to install all the required npm packages:
     ```bash
     npm install
     ```

### Running the Application

1. **Start the Application**

   - After installing the dependencies, start the application by running:
     ```bash
     node index.js
     ```

### Building the Application

1. **Create a Build**

   - To build the application, run the following command in the command prompt:
     ```bash
     build.bat
     ```

### Running Multiple Instances

1. **Using PM2**

   - To run multiple instances of the application, you can use [PM2](https://pm2.keymetrics.io/docs/usage/process-management/).

   - **Start Application with PM2**
     ```bash
     pm2 start ecosystem.config.js
     ```

   - **Stop Running Instances**
     ```bash
     pm2 stop MyService
     ```

   - **Delete Instances**
     ```bash
     pm2 delete MyService
     ```

   - For more information about PM2, visit the official [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/process-management/).

---
