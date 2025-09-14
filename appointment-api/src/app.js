const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;


app.use(cors()); 
app.use(express.json()); 

//empty array
let appointments = [];

//routes
app.post('/api/appointments', (req, res) => {
    console.log("request body:", req.body);

    const { date, month, title } = req.body;
    if (!date || !month || !title) {
        return res.status(400).json({ message: 'Date, month, and title are required.' });
    }

    const appointment = {
        id: appointments.length + 1,
        date,
        month,
        title
    };
    appointments.push(appointment);
    console.log(`Appointment Created:`, appointment);

    res.status(201).json({ message: 'Appointment successfull', appointment });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
