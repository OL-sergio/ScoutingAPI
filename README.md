# 🏕️ ScoutingAPI

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![SQL Server](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Project Description

ScoutingAPI is a comprehensive RESTful API designed for managing scouting organizations. The application provides a robust backend system for handling scout members, staff, activities, and user authentication with secure JWT-based authorization.

### 🎯 Project Objectives

- **Scout Management**: Complete CRUD operations for scout member registration and management
- **Staff Administration**: Efficient staff member management system
- **Activity Coordination**: Comprehensive activity planning and tracking
- **Secure Authentication**: JWT-based user authentication and authorization
- **Data Security**: Encrypted password storage using bcrypt
- **Cross-Origin Support**: CORS-enabled API for web and mobile applications

## 🏗️ Project Structure

```
ScoutingAPI/
├── 📁 src/
│   ├── 📁 config/
│   │   └── 📄 database.js          # Database connection configuration
│   ├── 📁 controllers/
│   │   ├── 📄 activities.controllers.js    # Activities business logic
│   │   ├── 📄 autenticacao.controllers.js  # Authentication logic
│   │   ├── 📄 scout.controller.js          # Scout management logic
│   │   └── 📄 staff.countroller.js         # Staff management logic
│   ├── 📁 routes/
│   │   ├── 📄 activities.routes.js         # Activities API endpoints
│   │   ├── 📄 autenticacao.routes.js       # Authentication endpoints
│   │   ├── 📄 scout.routes.js              # Scout API endpoints
│   │   ├── 📄 staff.routes.js              # Staff API endpoints
│   │   └── 📄 index.js                     # Main routes index
│   └── 📄 app.js                   # Express application setup
├── 📄 server.js                    # Application entry point
├── 📄 package.json                 # Project dependencies and scripts
├── 📄 .env                         # Environment variables
└── 📄 README.md                    # Project documentation
```

## 🔧 Technologies and Frameworks

### Core Technologies
- **![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) Node.js**: JavaScript runtime environment
- **![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white) Express.js**: Fast, unopinionated web framework for Node.js
- **![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) JavaScript**: Primary programming language

### Database
- **![SQL Server](https://img.shields.io/badge/-SQL%20Server-CC2927?style=flat-square&logo=microsoft-sql-server&logoColor=white) Microsoft SQL Server**: Relational database management system
- **![mssql](https://img.shields.io/badge/-mssql-336791?style=flat-square) mssql**: SQL Server driver for Node.js

### Security & Authentication
- **![JWT](https://img.shields.io/badge/-JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white) JSON Web Tokens (JWT)**: Secure token-based authentication
- **![bcrypt](https://img.shields.io/badge/-bcrypt-FF6B35?style=flat-square) bcrypt**: Password hashing library

### Additional Libraries
- **![CORS](https://img.shields.io/badge/-CORS-4285F4?style=flat-square) cors**: Cross-Origin Resource Sharing middleware
- **![dotenv](https://img.shields.io/badge/-dotenv-ECD53F?style=flat-square) dotenv-safe**: Environment variable management
- **![UUID](https://img.shields.io/badge/-UUID-009688?style=flat-square) uuid**: Unique identifier generation

## 📚 Class Functionality Documentation

### 🔐 Authentication Controller (`autenticacao.controllers.js`)

**Purpose**: Manages user authentication, registration, and JWT token generation.

**Key Methods**:
- `listAllUsers()`: Retrieves all registered users from the database
- `register()`: Creates new user accounts with encrypted passwords
- `login()`: Authenticates users and generates JWT tokens

**Features**:
- Password encryption using bcrypt (salt rounds: 5)
- JWT token generation with 10-minute expiration
- SQL injection protection through parameterized queries
- User validation and error handling

### 👨‍👩‍👧‍👦 Scout Controller (`scout.controller.js`)

**Purpose**: Handles complete CRUD operations for scout member management.

**Key Methods**:
- `listarTodosScouts()`: Fetches all scout members with formatted dates
- `listarScoutId()`: Retrieves specific scout by ID
- `criarScout()`: Creates new scout member records
- `apagarScoutId()`: Deletes scout members by ID

**Data Fields**:
- Name, Birthdate, Country, Email, Phone, Creation Date

### 🎯 Activities Controller (`activities.controllers.js`)

**Purpose**: Manages scouting activities and event coordination.

**Key Methods**:
- `listAllActivities()`: Retrieves all activities with location and date information
- `createActivities()`: Creates new scouting activities

**Data Fields**:
- Name, Start Date, Address, City, Country, Email, Phone, Creation Date

### 👥 Staff Controller (`staff.countroller.js`)

**Purpose**: Administers staff member information and management.

**Key Methods**:
- `listarTodoStaff()`: Lists all staff members
- `criarStaff()`: Adds new staff members
- `apagarStaffId()`: Removes staff members by ID

**Data Fields**:
- Name, Birthdate, Country, Email, Phone, Creation Date

### ⚙️ Database Configuration (`database.js`)

**Purpose**: Centralized database connection configuration.

**Configuration**:
- Server: localhost:1433
- Database: ScoutingDatabase
- Authentication: SQL Server Authentication
- Security: Encrypted connections with trusted certificates

## 🛣️ API Endpoints

### Authentication Endpoints (`/user/`)
```http
GET    /user/listUsers      # List all users
POST   /user/register       # Register new user
POST   /user/login          # User authentication
```

### Scout Management (`/api/`)
```http
GET    /api/GetScout        # Get all scouts
GET    /api/GetScoutId      # Get scout by ID
POST   /api/PostScout       # Create new scout
DELETE /api/scout/:id       # Delete scout by ID
```

### Activities Management (`/api/`)
```http
GET    /api/viewActivities    # View all activities
POST   /api/createActivities  # Create new activity
```

### Staff Management (`/api/`)
```http
GET    /api/GetStaff        # Get all staff
POST   /api/PostStaff       # Create new staff
DELETE /api/staff/:id       # Delete staff by ID
```

## 🚀 Installation and Setup

### Prerequisites
- **Node.js** (v14+ recommended)
- **Microsoft SQL Server** (LocalDB or full installation)
- **npm** package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/OL-sergio/ScoutingAPI.git
cd ScoutingAPI
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Database Setup
1. Install SQL Server or SQL Server Express
2. Create a database named `ScoutingDatabase`
3. Create the required tables:

```sql
-- Users table for authentication
CREATE TABLE USERS (
    id INT IDENTITY(1,1) PRIMARY KEY,
    USERNAME NVARCHAR(50) NOT NULL UNIQUE,
    PASSWORD NVARCHAR(255) NOT NULL,
    EMAIL NVARCHAR(100) NOT NULL,
    BIRTHDATE DATE,
    NATIONALITY NVARCHAR(50),
    CREATION_DATE DATE DEFAULT GETDATE()
);

-- Scout members table
CREATE TABLE SCOUT (
    id INT IDENTITY(1,1) PRIMARY KEY,
    NAME NVARCHAR(100) NOT NULL,
    BIRTHDATE DATE,
    COUNTRY NVARCHAR(50),
    EMAIL NVARCHAR(100),
    PHONE NVARCHAR(20),
    CREATION_DATE DATE DEFAULT GETDATE()
);

-- Activities table
CREATE TABLE ACTIVITIES (
    idACTIVITIES INT IDENTITY(1,1) PRIMARY KEY,
    NAME NVARCHAR(100) NOT NULL,
    START_DATE DATE,
    ADDRESS NVARCHAR(200),
    CITY NVARCHAR(50),
    COUNTRY NVARCHAR(50),
    EMAIL NVARCHAR(100),
    PHONE NVARCHAR(20),
    CREATION_DATE DATE DEFAULT GETDATE()
);

-- Staff table
CREATE TABLE STAFF (
    id INT IDENTITY(1,1) PRIMARY KEY,
    NAME NVARCHAR(100) NOT NULL,
    BIRTHDATE DATE,
    COUNTRY NVARCHAR(50),
    EMAIL NVARCHAR(100),
    PHONE NVARCHAR(20),
    CREATION_DATE DATE DEFAULT GETDATE()
);
```

### Step 4: Environment Configuration
Create a `.env` file in the root directory:
```env
SEGREDO_API=your_jwt_secret_key_here
```

### Step 5: Database Connection Configuration
Update `src/config/database.js` with your SQL Server credentials:
```javascript
module.exports = {
    password: 'your_password',
    database: 'ScoutingDatabase',
    user: 'your_username',
    server: 'localhost', // or your server address
    port: 1433,
    options: {
        trustServerCertificate: true,
        encrypt: true,
        enableArithAbort: true
    }
};
```

## ▶️ Running the Application

### Development Mode
```bash
npm start
```

The API will be available at `http://localhost:3000`

### Testing the API
Use tools like Postman, Insomnia, or curl to test the endpoints:

```bash
# Test the API health
curl http://localhost:3000/api/GetScout

# Register a new user
curl -X POST http://localhost:3000/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "USERNAME": "testuser",
    "PASSWORD": "password123",
    "EMAIL": "test@example.com",
    "BIRTHDATE": "1990-01-01",
    "NATIONALITY": "Portuguese",
    "CREATION_DATE": "2024-01-01"
  }'

# Login
curl -X POST http://localhost:3000/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "USERNAME": "testuser",
    "PASSWORD": "password123"
  }'
```

## 🔧 Configuration for GitHub

### GitHub Actions Setup
Create `.github/workflows/ci.yml` for continuous integration:
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      sqlserver:
        image: mcr.microsoft.com/mssql/server:2019-latest
        env:
          SA_PASSWORD: ${{ secrets.SA_PASSWORD }}
          ACCEPT_EULA: Y
        ports:
          - 1433:1433
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm install
      
    - name: Run tests
      run: npm test
```

## 📱 Android Studio Integration

### For Android Development
1. Use this API as the backend for your Android scouting application
2. Configure your Android app to connect to the API:

```java
// Example Android configuration
public class ApiConfig {
    public static final String BASE_URL = "http://localhost:3000/";
    public static final String API_URL = BASE_URL + "api/";
    public static final String USER_URL = BASE_URL + "user/";
}
```

3. Implement authentication with JWT tokens
4. Create models matching the API response structures

## 🚀 Deployment

### Heroku Deployment
```bash
# Install Heroku CLI and login
heroku login

# Create Heroku app
heroku create your-scouting-api

# Set environment variables
heroku config:set SEGREDO_API=your_jwt_secret

# Deploy
git push heroku main
```

### Environment Variables for Production
- `SEGREDO_API`: JWT secret key
- `NODE_ENV`: production
- Database connection strings as required by your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the GitHub repository.

---

**Built with ❤️ for the Scouting Community**