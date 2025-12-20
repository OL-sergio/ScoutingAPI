# ScoutingAPI

## Overview
ScoutingAPI is a RESTful API designed to manage a variety of resources for scouting activities. The API provides functionality for managing staff, scouts, activities, and user authentication. This project is built using Node.js and Express.js and interfaces with a Microsoft SQL Server database for data persistence.

## Features
- **Staff Management**: Add, view, and delete staff members.
- **Scout Management**: Add, view, and delete scouts.
- **Activity Management**: Create and list scouting activities.
- **Authentication**: User registration and login system with JWT-based authentication.

## File Structure
- **src/app.js**: Main entry point for the API.
- **src/config/database.js**: Configuration file for database connection.
- **src/routes/**: API routes, including:
  - **staff.routes.js**: Routes for staff management.
  - **scout.routes.js**: Routes for scout management.
  - **autenticacao.routes.js**: Routes for user authentication.
  - **activities.routes.js**: Routes for activity management.
- **src/controllers/**: Business logic for each module, including:
  - **staff.controller.js**: Handles actions related to staff records.
  - **scout.controller.js**: Handles actions related to scouts.
  - **autenticacao.controller.js**: Manages user registration and login.
  - **activities.controllers.js**: Handles the creation and listing of activities.

## API Endpoints
### Staff
- `GET /api/GetStaff`: Retrieve all staff records.
- `POST /api/PostStaff`: Add a new staff member.
- `DELETE /staff/:id`: Delete a staff member by ID.

### Scouts
- `GET /api/GetScout`: Retrieve all scout records.
- `GET /api/GetScoutId`: Retrieve a scout by ID.
- `POST /api/PostScout`: Add a new scout.
- `DELETE /scout/:id`: Delete a scout by ID.

### Activities
- `GET /api/viewActivities`: Retrieve all activities.
- `POST /api/createActivities`: Create a new activity.

### Authentication
- `GET /user/users`: Retrieve all user records.
- `POST /user/register`: Register a new user.
- `POST /user/login`: Login and receive a JWT token.

## Setup and Installation
### Prerequisites
- Node.js
- Microsoft SQL Server
- Express.js

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/OL-sergio/ScoutingAPI.git
   cd ScoutingAPI
