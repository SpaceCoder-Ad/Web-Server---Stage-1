# Web Server - Stage 1

This is a simple web server built using Node.js and Express as part of Stage 1 for the Backend Track. It features three routes that return static responses.

---

## **Technologies Used**

- **Language**: Node.js
- **Framework**: Express.js
- **Hosting Platforms**: Render, Vercel

---

## **Setup Instructions**

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (for running the server)
- [npm](https://www.npmjs.com/) (Node Package Manager)

---

### Steps to Set Up Locally

1. **Clone the Repository**  
   Clone this project to your local machine:
   ```bash
   git clone https://github.com/SpaceCoder-Ad/Web-Server---Stage-1.git
   cd Web-Server---Stage-1
   ```

2. **Install Dependencies**  
   Run the following command to install necessary dependencies:
   ```bash
   npm install express
   ```

3. **Start the Server**  
   To start the server locally, run:
   ```bash
   node server.js
   ```

4. **Access the Server**  
   Open your browser and visit the following URL:
   ```
   http://localhost:3000
   ```

---

## **Routes**

The server exposes the following routes:

- **`/name`**  
  Returns my full name as plain text.

- **`/hobby`**  
  Returns my favorite hobby in a JSON format. Example response:
  ```json
  {
    "hobby": "Reading books"
  }
  ```

- **`/dream`**  
  Returns a motivational message about my dream or goal in life as plain text.

---

## **How to Access the Deployed Server**

Once deployed, you can access the live server here:  
[Live Server URL](https://your-deployment-url.com)

---

## **Project Structure**

```
your-project-folder/
├── server.js         # Main server file
├── package-lock.json # 
├── package.json      # Project dependencies and scripts
├── README.md         # Project documentation
```

---

## **Contributing**

Feel free to fork the repository, make improvements, and submit pull requests.

---

## **Contact**

For any questions, feel free to reach out via email at:  
[adnanahmedabdu@gmail.com](mailto:adnanahmedabdu@gmail.com)
