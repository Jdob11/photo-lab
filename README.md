# PhotoLabs

PhotoLabs is a web application for viewing and managing photos. It allows users to browse through a collection of photos, mark their favorites, and view detailed information about each photo.

## Introduction

PhotoLabs utilizes React for the frontend development, providing a dynamic and responsive user interface. The backend is built with Node.js and Express, providing an efficient server-side architecture to handle requests and manage data.

## Final Product

![Screenshot of Home Page](need github link)
![Screenshot of Photo Details Modal](need github link)
![Screenshot of Topic List](need github link)
![Screenshot of Favorites Notification](need github link)

## Project Information

This project was developed as part of a larger application, representing a key feature for users to interact with and explore a curated collection of photos. It was built to showcase proficiency in full-stack development and to provide an intuitive user experience.

## Note to Contributors

If you're considering contributing to this project or using it as a reference, please be aware that it was developed for demonstration purposes and may not encompass all production-ready features or optimizations. Contributions and feedback are welcome, but please keep in mind the context in which this project was created.

## File Structure
## Backend

The backend directory contains the server-side code for the application.

### Structure

- **src**: Contains the source code files.
  - **db**: Contains database-related files.
    - **schema**: Contains SQL schema files for different environments.
      - create.sql
      - development.sql
      - production.sql
      - test.sql
    - index.js: Main database initialization file.
  - **routes**: Contains route handlers for different endpoints.
    - **__tests__**: Contains test files for route handlers.
      - days.test.js
      - interviewers.test.js
      - photos.js
      - topics.js
    - application.js: Main application route handler.
    - environment.js: Environment configuration file.
    - index.js: Main route handler file.
    - setupTests.js: Test setup file.
- **public/images**: Directory for storing images used in the application.

### Files

- .env.example: Example environment variable configuration file.
- README.md: Documentation file (you're reading it!).
- package-lock.json: Auto-generated file for npm's dependency tree.
- package.json: File containing project metadata and dependencies.

## Frontend

The frontend directory contains the client-side code for the application.

### Structure

- **public**: Contains static assets used by the frontend.
  - *(photos here)*: Placeholder for actual photo files.
- **src**: Contains the source code files.
  - **assets**: Directory for storing static assets used by the frontend.
    - closeSymbol.svg: SVG icon used in the project.
  - **components**: Directory containing React components for the frontend.
  - **hooks**: Directory containing custom React hooks.
  - **mocks**: Directory containing mock data for testing.
  - **routes**: Directory containing React components for different routes.
  - **styles**: Directory containing SCSS files for styling React components.
- App.jsx: Main application component for the frontend.
- App.scss: SCSS file for styling the App component.
- index.css: CSS file for global styles.
- index.js: Entry point for the frontend application.
- setupTests.js: Setup file for frontend tests.
- .eslintrc.json: ESLint configuration file.
- .gitignore: File containing a list of files and directories to ignore in Git.
- jsconfig.json: Configuration file for JavaScript projects.
- package-lock.json: Auto-generated file for npm's dependency tree.


## Installation

1. Clone the repository:
   ```
   git clone https://github.com/username/photolabs.git
   ```

2. Navigate to the frontend and backend directories and install dependencies:
   ```
   cd photolabs/frontend/
   npm install
   ```


   ```
   cd photolabs/backend/
   npm install
   ```

3. follow the README within the backend/ folder to set up the backend server

4. Start the backend server ( from within 'photolabs/backend/' ):
   ```
   npm start
   ```

5. Start the frontend server ( from within 'photolabs/frontend/' ):
   ```
   npm start
   ```

6. Open your web browser and navigate to http://localhost:3000 to view the application ( starting the front end server should open the application in your default browser ).

## Dependencies

- [react](https://www.npmjs.com/package/react): JavaScript library for building user interfaces.
- [react-dom](https://www.npmjs.com/package/react-dom): Provides DOM-specific methods for React components.
- [react-scripts](https://www.npmjs.com/package/react-scripts): Configuration and scripts for Create React App.
- [sass](https://www.npmjs.com/package/sass): CSS extension language for styling components.

- [express](https://www.npmjs.com/package/express): Fast, minimalist web framework for Node.js.
- [pg](https://www.npmjs.com/package/pg): Non-blocking PostgreSQL client for Node.js.
- [socket.io](https://www.npmjs.com/package/socket.io): Library for real-time web applications.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.

## Dev Dependencies

- [jest](https://www.npmjs.com/package/jest): Delightful JavaScript Testing.
- [supertest](https://www.npmjs.com/package/supertest): SuperAgent driven library for testing HTTP servers.
- [nodemon](https://www.npmjs.com/package/nodemon): Monitor for any changes in your source and automatically restart your server.
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer): Provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.
  - Make sure to install the specific version required to match the version of react and react-dom in the project (18.2.0).

## Testing

Unit tests are included to ensure the functionality and reliability of the application.

To run tests:
```
npm test
```

## Contributors

- Jeff Dobson (https://github.com/Jdob11)

## Acknowledgments

This project includes code provided by [Lighthouse Labs](https://www.lighthouselabs.ca/).

## License

This project is licensed under the [MIT License](LICENSE).
