# Appointment API

This project is a simple Node.js application that provides an API for logging appointment details. It allows users to create appointments by sending a POST request with the date, month, and title of the appointment.

## Project Structure

```
appointment-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── appointments.js    # Defines routes for the appointment API
│   └── controllers
│       └── appointmentsController.js  # Logic for handling appointment requests
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd appointment-api
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running the API

1. Start the server:

   ```
   npm start
   ```

2. The API will be running on `http://localhost:3000`.

### API Endpoints

- **POST /appointments**
  - Request body:
    ```json
    {
      "date": "2023-10-01",
      "month": "October",
      "title": "Doctor Appointment"
    }
    ```
  - Response:
    - Success: `201 Created` with the appointment details.
    - Error: `400 Bad Request` if the request is invalid.

### Testing with Postman

1. Open Postman.
2. Set the request type to POST.
3. Enter the URL: `http://localhost:3000/appointments`.
4. In the Body tab, select `raw` and choose `JSON` from the dropdown.
5. Enter the appointment details in JSON format.
6. Click `Send` to log the appointment.

## License

This project is licensed under the MIT License.