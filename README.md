🤖 AI Resume Scanner & Interview Preparation Platform

**Analyze your resume. Identify opportunities. Prepare for interviews with AI.**

An AI-powered web application that helps job seekers evaluate their resumes and prepare for technical and behavioral interviews using Google's Gemini API.

<!-- Replace this section with your actual GitHub repository URL and deployed demo URL when available. -->

<!-- Optional: Add project badges here after verifying the relevant details. -->

## 📸 Screenshots

<!-- Save your screenshots in a root-level folder named screenshots. -->

| Login Page | Resume Upload |
|---|---|
| Add your login screenshot here | Add your upload screenshot here |

| Resume Analysis | Interview Preparation |
|---|---|
| Add your analysis screenshot here | Add your interview results screenshot here |

## ✨ Features

- 🔐 **User Authentication** — User registration and login with JWT-based authentication.
- 📄 **Resume Upload** — Upload resumes for processing, subject to the formats supported by the application.
- 🤖 **AI-Powered Insights** — Use the Gemini API to generate relevant resume and interview insights.
- 🎯 **Resume Match Score** — Present a match score when supported by the application's analysis workflow.
- 💻 **Interview Questions** — Generate technical and behavioral questions to support interview preparation.
- 📊 **Structured Results** — Organize generated insights into a readable format.
- 🌐 **Full-Stack Architecture** — React frontend connected to a Node.js and Express backend.

*Note: The features above should reflect the functionality implemented in your current version. Update this list if any feature is not yet working.*

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| Vite | Frontend development and build tooling |
| SCSS | Styling |
| Node.js | JavaScript runtime |
| Express.js | Backend API |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| JWT | Authentication |
| Google Gemini API | AI-powered functionality |
| Axios | HTTP requests |

## 📁 Project Structure

```text
interview-ai-yt/
├── Backend/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   └── vite.config.js
├── screenshots/
├── .gitignore
└── README.md
```

*The structure above is illustrative. Keep the actual files and folders in your repository; adjust this tree to match them.*

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- A MongoDB database or MongoDB Atlas connection
- A Google Gemini API key, if required by the enabled AI features

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd interview-ai-yt
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your repository's actual HTTPS URL.

### 2. Configure the backend

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` folder and add the environment variables required by the application:

```env
GOOGLE_GENAI_API_KEY=your_gemini_api_key
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
```

Use your own credentials. Never commit your actual `.env` file or share its contents publicly.

Start the backend:

```bash
npm run dev
```

Keep this terminal running.

### 3. Configure the frontend

Open a second terminal from the project root:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL printed by Vite in the terminal, usually `http://localhost:5173`.

### 4. Verify the application

- Confirm that the backend starts and connects to MongoDB.
- Register or log in to the application.
- Test the resume upload workflow.
- Verify that AI-generated results appear as expected.

If the frontend requires additional environment variables or a specific backend URL, configure them according to the project's code.

## 🔒 Security

- Never upload API keys, database credentials, or JWT secrets.
- Keep environment variables on the backend wherever possible.
- Use a strong, randomly generated JWT secret.
- Validate uploaded files on the server.
- Configure CORS and cookies appropriately before deployment.
- Rotate any credentials that have been exposed.

## 🚀 Future Improvements

- More detailed resume feedback and skill-gap analysis
- Job-description-based resume evaluation
- Saved analysis history for users
- Personalized interview preparation plans
- Improved upload progress and error handling
- Automated testing and continuous integration
- Production deployment with secure configuration

## 🌍 Live Demo

**Coming soon.**

Once the application is deployed, replace this section with the real frontend URL and, optionally, a demo video.

## 👨‍💻 Author

Kushal Sharma

- GitHub: https://github.com/ks3968339-source
- LinkedIn: www.linkedin.com/in/kushal-sharma-737a09375

---

⭐ If you find this project useful, consider giving the repository a star.
