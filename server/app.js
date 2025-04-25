import express from 'express';
import dotenv from "dotenv";
import cors from "cors"
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pkg from 'pg';
const { Client } = pkg;

dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3355;
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'placement_db',
    password: 'Polymer@47',
    port: 5432, // PostgreSQL port
});


// connect database
client.connect()
    .then(() => console.log("Database is connected"))
    .catch((err) => console.error("Database connection error:", err));

// Parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve static files like HTML, CSS, JS
app.use(express.static('../public'));

// Serve the frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Fetch experience level
app.get('/experience', async (req, res) => {
    try {
        const result = await client.query('SELECT id, experience_level FROM test_level');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});


// Submission of forms
app.post('/submit', async (req, res) => {
    try {
        // Extract form data object from the request body
        const {
            first_name,
            last_name,
            email,
            company_name,
            job_title,
            experience_level,
            comment
        } = req.body;

        // SQL query to insert data into the turing_applications table
        const query = `
            INSERT INTO placement_test 
                (first_name, last_name, email, company_name, job_title, experience_level, comment)
            VALUES 
                ($1, $2, $3, $4, $5, $6, $7)
        `;

        // Parameterized query values
        const values = [
            first_name,
            last_name,
            email,
            company_name,
            job_title,
            experience_level,
            comment
        ];

        // Execute the query
        await client.query(query, values);

        // Send success response
        res.sendFile(path.join(__dirname, "../public/submit.html"));
    } catch (err) {
        console.error('Error submitting form:', err);
        res.status(500).json({ error: 'Server error while submitting the form' });
    }
});



app.listen(`${port}`, () => {
    console.log(`server is ready for request at ${port}`);
})