import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SkillSpring Backend</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f9f9f9;
            padding: 2rem;
            color: #333;
          }
          h1 {
            color: #2c3e50;
          }
          a {
            color: #007acc;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to SkillSpring Backend</h1>
        <p>✅ If you're seeing this message, the backend is successfully running.</p>

        <p>🚧 Frontend is currently under development.</p>

        <p>🔗 View the frontend repository here: 
          <a href="https://github.com/Ujjwalprajapati16/SkillSpring" target="_blank">
            SkillSpring GitHub Repo
          </a>
        </p>

        <br />
        <h2>👨‍💻 Contributors</h2>
        <ul>
          <li>
            <a href="https://github.com/Ujjwalprajapati16" target="_blank">Ujjwal Prajapati</a>
          </li>
          <li>
            <a href="https://github.com/Neetesh-Lodhi" target="_blank">Neetesh Lodhi</a>
          </li>
        </ul>
      </body>
    </html>
  `);
});

export default router;
