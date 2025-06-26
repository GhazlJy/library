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

/src
/components
- List.jsx # Books list screen
- Details.jsx # Book details screen
/context
- AppContext.jsx # Application state and data fetching logic
/css
- List.css # Styles for the list screen
- Details.css # Styles for the details screen
index.jsx # Application entry point


---

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:

git clone <repository-url>

css


2. Navigate to the project directory and install dependencies:

npm install

markdown


3. Start the development server:

npm start

yaml


4. Open your browser and visit `http://localhost:3000`

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


