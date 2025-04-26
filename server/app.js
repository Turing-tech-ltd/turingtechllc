import express from 'express';
import dotenv from "dotenv";
import cors from "cors"
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { Client } from 'pg';

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
        const result = await client.query('SELECT id, experience_level FROM experience_level');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch skills required
app.get('/skills', async (req, res) => {
    try {
        const result = await client.query('SELECT id, skills_required FROM skills');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch duration
app.get('/duration', async (req, res) => {
    try {
        const result = await client.query('SELECT id, duration FROM duration');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch duration
app.get('/qualification', async (req, res) => {
    try {
        const result = await client.query('SELECT id, qualification FROM qualification');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch country
app.get('/country', async (req, res) => {
    try {
        const result = await client.query('SELECT id, country_name FROM country');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch programs
app.get('/program', async (req, res) => {
    try {
        const result = await client.query('SELECT id, programs FROM program');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch referral_source
app.get('/referral', async (req, res) => {
    try {
        const result = await client.query('SELECT id, referral_source FROM referral_source');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch user_type
app.get('/level', async (req, res) => {
    try {
        const result = await client.query('SELECT id, user_type FROM user_type');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch language
app.get('/language', async (req, res) => {
    try {
        const result = await client.query('SELECT id, language FROM preferred_language');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch proficiency
app.get('/proficiency', async (req, res) => {
    try {
        const result = await client.query('SELECT id, proficiency_level FROM proficiency_level');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Fetch skills
app.get('/techskills', async (req, res) => {
    try {
        const result = await client.query('SELECT id, skill FROM job_skill');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching referral sources:', err);
        res.status(500).json({ error: 'Server error' });
    }
});


// Submission of company forms
app.post('/company-form', async (req, res) => {
    try {
        // Extract form data object from the request body
        const {
            first_name,
            last_name,
            email,
            company_name,
            job_title,
            skills_required,
            other_skills,
            duration,
            other_duration,
            experience_level,
            comment
        } = req.body;

        // SQL query to insert data into the placement table
        const query = `
            INSERT INTO placement_test 
                (first_name, last_name, email, company_name, job_title, skills_required, other_skills, duration, other_duration, experience_level, comment)
            VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        `;

        // Parameterized query values
        const values = [
            first_name,
            last_name,
            email,
            company_name,
            job_title,
            skills_required,
            other_skills,
            duration,
            other_duration,
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

// Submission of training form
app.post('/training-form', async (req, res) => {
    try {
        // Extract form data object from the request body
        const {
            first_name,
            last_name,
            email,
            phone_number,
            qualification_id,
            country_id,
            program_id,
            referral_source_id,
            user_type_id,
            comments
        } = req.body;

        // SQL query to insert data into the placement table
        const query = `
            INSERT INTO training_application_test 
                (first_name, last_name, email, phone_number, qualification_id, country_id, program_id, referral_source_id, user_type_id, comments)
            VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        `;

        // Parameterized query values
        const values = [
            first_name,
            last_name,
            email,
            phone_number,
            qualification_id,
            country_id,
            program_id,
            referral_source_id,
            user_type_id,
            comments
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

// Submission of remote placement form
app.post('/remote-form', async (req, res) => {
    try {
        // Extract form data object from the request body
        const {
            first_name,
            last_name,
            email,
            language_id,
            proficiency_id,
            skills_id,
            linkedin_profile
        } = req.body;

        // SQL query to insert data into the placement table
        const query = `
            INSERT INTO remote_test 
                (first_name, last_name, email, language_id, proficiency_id, skills_id, linkedin_profile)
            VALUES 
                ($1, $2, $3, $4, $5, $6, $7)
        `;

        // Parameterized query values
        const values = [
            first_name,
            last_name,
            email,
            language_id,
            proficiency_id,
            skills_id,
            linkedin_profile
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
});