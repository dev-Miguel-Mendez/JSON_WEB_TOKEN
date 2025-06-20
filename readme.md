# Express Startup example.



### Install dependencies:

``` npm i ```


### Run with Docker Compose (recommended if you have Docker)

``` docker compose up --build ```

### Run the server locally (requires Node.js installed):

``` npm run dev ```


### Run the tests:

``` npm run test ```


### Environment Configuration Overview
A "bootstrap.js" file is loaded automatically on startup to manage environment variables using dotenv.

config/shared.env holds variables common to all environments.

config/{environment}.env is loaded based on process.env.ENVIRONMENT, which is set by the script in package.json (e.g., npm run dev_local sets ENVIRONMENT=dev).

This setup keeps configuration modular and avoids duplication.



### API Documentation:

[API Documentation](http://localhost......)