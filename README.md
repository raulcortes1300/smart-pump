# React + TypeScript + Vite

# Coding Challenge Project

This project was developed as a coding challenge. Due to personal constraints, I wasn’t able to fully complete all the requirements, but the project has reached a viable MVP stage with some core functionality implemented. I am working to add more features today, so if possible, a review tomorrow will showcase a more complete version of the project.

## Requirements

### Implemented Features

1. **Login with Email and Password**: Users can log in with their email and password.
2. **Show User Details After Login**: After logging in, user details are displayed on the main page.
3. **Use lowdb for Data Persistence**: User data is managed with [lowdb](https://github.com/typicode/lowdb).
4. **Fully Responsive UI**: The UI is responsive and works well across various device sizes.

### In Progress

I am currently working to implement some of the following features:

- Restrict access to valid users.
- Authorized users can view their account balance.
- Allow users to update their details.

**Note**: If you could delay the review until tomorrow, I would be able to complete more functionality and deliver a better product.

## Bonus Requirements

While time constraints have limited my progress on the bonus features, the following points are planned for future improvement:

- **Unit Tests**: API testing to ensure data handling is accurate and secure.
- **Functional Tests**: UI testing to validate the user interface and functionality.

## Getting Started

To run the project locally, please follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. **Install dependencies:** In the project’s root folder (where package.json is located), run:

```bash
npm install
```

3. **Run the frontend:**
   Run the frontend:

```bash
npm run dev
```

By default, the frontend will run on http://localhost:5173. If your ports are configured differently, the console will show the actual URL.

4. **Run the server:** Open a new terminal in the root folder and run:

```bash
node server/index.js
```

The server will be accessible at http://localhost:3000.
Now, you can navigate through the app!

Thank you for the opportunity, and I look forward to your feedback!
