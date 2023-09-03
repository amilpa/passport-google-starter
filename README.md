# Express Starter Files with Passport Google Authentication

This repository contains starter files for an Express.js web application that uses Passport.js and Google OAuth2.0 for authentication. It also includes simple middlewares for checking if a user is authenticated and security packages like Helmet and CORS setup.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/express-passport-google-auth.git`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add the following environment variables:
4. Start the server: `npm start`

## Usage

Once the server is running, you can access the application at `http://localhost:3000`. The application has two routes for authentication:

- `/auth/google`: A route for google authentication that you can access by a simple get request or the browser.
- `/auth/logout`: A route for logging out in the same method

To access the `/data` route, you must first authenticate with Google by clicking the login button on the home page.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
