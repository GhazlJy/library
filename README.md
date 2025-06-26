# React Library Application

A simple React application that displays a list of books using the Open Library API. The app consists of two main screens:

- **List Screen**: Displays a collection of books with title, author, and cover image.
- **Details Screen**: Shows detailed information about a selected book, including description, page count, authors, and cover image.

---

## Technologies Used

- React with Hooks (`useState`, `useEffect`, `useContext`)
- React Router for client-side routing
- Fetch API for data retrieval from Open Library API
- CSS for styling and layout

---






## Project Structur

library/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── css/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md




---

🛠️ Getting Started
✅ Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher recommended)

npm (comes with Node.js)

📦 Installation
Clone the repository:



git clone git clone https://github.com/GhazlJy/library.git
Navigate to the project folder:



cd my-library
Install the dependencies:



npm install
🚀 Run the Development Server
To start the application in development mode, run:



The app will be available at:
http://localhost:3000
---

## Features

- Clear separation of UI and business logic using React Context API
- Graceful handling of loading states and error scenarios during data fetching
- Seamless navigation between list and detail views using React Router
- Responsive and user-friendly interface design

---

## Contribution Guidelines

- Fork the repository and create a new branch for your feature or bug fix:  
`git checkout -b feature/your-feature`

- Make your changes with clear and concise commit messages
- Test your changes thoroughly
- Submit a pull request with a detailed description of your changes

---


## API Endpoints

- Fetch list of books:  
`https://openlibrary.org/subjects/love.json?limit=10`

- Fetch book details:  
`https://openlibrary.org/works/{work_key}.json`

---


## Project photos

![home](https://github.com/user-attachments/assets/3344c9ed-4f48-4d88-be33-4c7941295a92)


![more](https://github.com/user-attachments/assets/0698e816-dd6f-4de9-a1e3-35edfcd5c2ff)


