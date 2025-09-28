const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to FrancoPass API 🚀");
});

// Users
app.post("/signup", (req, res) => res.json({ message: "User signed up" }));
app.post("/login", (req, res) => res.json({ message: "User logged in" }));

// Exam Prep
app.get("/exams", (req, res) =>
  res.json([{ id: 1, type: "DELF A1", duration: 60 }])
);

// Vocabulary
app.get("/vocab", (req, res) =>
  res.json([{ word: "Bonjour", translation: "Hello", category: "Basic" }])
);

// AI Help (dummy feedback)
app.post("/ai/feedback", (req, res) =>
  res.json({ feedback: "Good pronunciation, work on fluency." })
);

// Expert Resources
app.get("/resources", (req, res) =>
  res.json([{ title: "Exam Strategies", link: "video-url" }])
);

app.listen(3000, () => console.log("FrancoPass backend running on port 3000"));
