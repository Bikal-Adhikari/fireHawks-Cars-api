# Server API

## Overview

This is a RESTful API built using Node.js and Express.js, with Firebase serving as the database. The API provides endpoints for CRUD operations.

## Features

- **CRUD Operations:** Create, Read, Update, and Delete operations for resources.
- **Real-time Data:** Real-time data synchronization with Firebase Realtime Database.

## Requirements

- Node.js (version 14.x or higher)
- Firebase account

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Bikal-Adhikari/fireHawks-Cars-api.git
   cd fireHawks-Cars-api
   ```

2. **Install Dependencies:**

```bash
npm install
```

3. **Set Up Firebase**

- Go to the [Firebase Console](https://console.firebase.google.com/).
- Create a new Firebase project.
- Add Firebase to your Node.js app:
  - Generate a new Firebase Admin SDK key from **Project Settings** > **Service Accounts** > **Generate New Private Key**.
  - Save the JSON file and add it to your project directory.
- Set up Firebase Realtime Database in your Firebase Console.

4. **Configure Environment Variables**
   Create a .env file in the root of your project and add the following environment variables:
   E.g. FIREBASE_ADMIN_SDK_KEY=path/to/your/firebase-adminsdk-key.json
   FIREBASE_DATABASE_URL=https://your-database-name.firebaseio.com
   PORT=3000

5. **Run the Server**

```bash
npm start
```

6. **Contributing**
   Feel free to submit issues, feature requests, or pull requests. Please ensure that your contributions adhere to the project's coding standards and include appropriate tests.

7. **License**
   This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
