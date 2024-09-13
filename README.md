# Micro-Service-Passion-Manga

This project is a microservice in Node.js, using Express, designed to handle CRUD operations (Create, Read, Update, Delete) for images. These images will be used for the Passion Manga project. The microservice uses MongoDB Atlas for data management and Multer for image uploads.

### Features

- Create an image: Upload and store an image on the server, with its metadata saved in MongoDB.

- Read all images: Retrieve a list of all stored images.

- Read a specific image: Retrieve the information of a specific image by its ID.

- Update an image: Modify the information of an existing image.

- Delete an image: Remove an image from the server and the database.

### Prerequisites

- Node.JS (v14 or higher)
- MongoDB Atlas (or another MongoDB instance)

### Installation

### Step 1: Clone the repository

```
git clone https://github.com/DWWM-23526/Micro-Service-Passion-Manga.git
```

```
cd Micro-Service-Passion-Manga
```

### Step 2: Install dependencies

Make sure Node is installed, then run the following command to install project dependencies:

```
npm install
```

### Step 3: Configure environment variables

Remove '.exe' of .env.exe file at the root of the project and add your own data into this file:

### Step 4: Start the server

```
nodemon server
```

# Usage

### Endpoints

- POST /api/images : Creates a new image. Use a multipart/form-data form to upload the image with the image field and the title with the title field.

- GET /api/images : Retrieves all images.

- GET /api/images/:id : Retrieves a specific image by its ID.

- PUT /api/images/:id : Updates an existing image. You can send a new image and/or update the title.

- DELETE /api/images/:id : Deletes a specific image by its ID.

#

Thank you for using our microservice !
