<a id="readme-top" name="readmetop"></a>

<br />
<div align="center">

  <h3 align="center">Twitter Backend</h3>

  <p align="center">
    A simplified Twitter-like backend system implemented using Node.js and MongoDB.
    <br />
    <br />
    <a href="https://github.com/yourusername/twitter-backend">View Demo</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contact-information">Contact Information</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a simplified backend for a Twitter-like application, using Node.js and MongoDB. It includes essential features like user registration, user login, posting tweets, and fetching user timelines.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JSON Web Tokens (JWT)](https://jwt.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To set up and run this project locally, follow these steps.

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/twitter-backend.git
   cd twitter-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a .env file in the root directory with the following content:
   ```sh
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   ```
4. Start MongoDB Server.
5. Start the application:
   ```sh
   npm start
   ```
   <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Dependencies

- Express.js: Web framework for Node.js
- Mongoose: MongoDB object modeling tool
- Bcrypt.js: Library for hashing passwords
- JSON Web Token (JWT): For user authentication
- Body-Parser: Middleware to parse request bodies
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

To test the API endpoints, you can use Postman or a similar tool.

### API Endpoints:

### 1. User Registration

**POST** `/api/users/register`

Request Body:

```json
{
  "username": "example",
  "password": "password123"
}
```

### 2. User Login

**POST** `/api/users/login`

Request Body:

```json
{
  "username": "example",
  "password": "password123"
}
```

Respose: token

### 3. Post a Tweet

**POST** `/api/tweets`

Request Body:

```json
{
  "text": "Hello World!"
}
```

Note: Requires authentication (JWT in x-auth-token header)

### 4. Fetch User Timeline

**GET** `/api/users/:userId/timeline`

Query Parameters: cursor (optional), limit (optional)

Requires authentication (JWT in x-auth-token header)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing

You can use Postman or a similar tool to test the API endpoints.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Issues and Troubleshooting

### 1. MongoDB Connection Error:

- Ensure MongoDB server is running.
- Check the MONGO_URI in the .env file.

### 2. Authentication Errors:

- Ensure JWT token is provided in the x-auth-token header for protected routes.
- Verify the JWT_SECRET in the .env file.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact Information

For any queries or assistance during the evaluation, please contact:

- Name: Sasank Sah
- Email: sah.sasank12@gmail.com
- LinkedIn: https://www.linkedin.com/in/sanky-tech

<p align="right">(<a href="#readme-top">back to top</a>)</p>
