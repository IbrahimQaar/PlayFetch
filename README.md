# 🐾 PlayFetch

PlayFetch is a full-stack dog playdate scheduling platform that enables owners to discover compatible dogs, filter by personality and location, and manage structured play sessions through a unified dashboard.

The system is designed around behavioral compatibility, location-aware discovery, and structured scheduling to support safe, real-world social interactions.

---

## 📸 Screenshots

<img width="1511" height="861" alt="Image" src="https://github.com/user-attachments/assets/dd748ce6-b224-486d-b003-64ada8ddcdc3" />

<img width="1509" height="860" alt="Image" src="https://github.com/user-attachments/assets/e12130c3-dfe6-4f46-9f95-cf3555c63592" />

<img width="1512" height="862" alt="Image" src="https://github.com/user-attachments/assets/c882bf95-d16d-48a3-90a2-c2349e455d41" />

<img width="1512" height="863" alt="Image" src="https://github.com/user-attachments/assets/d2b9f6b1-2e98-4ec8-b57e-4da32428d038" />

<img width="1511" height="862" alt="Image" src="https://github.com/user-attachments/assets/5aed2e12-cd19-4ac2-ac74-a6a300c2ddd1" />

---

## ✨ Features

* Secure user registration and authentication
* Dog profile creation with breed, age, and behavioral attributes
* Personality and play-style based compatibility filtering
* Location-based discovery of nearby playdates
* Advanced search filtering by personality and geographic region
* Structured scheduling and management of play sessions
* Playdate status tracking (pending, confirmed, canceled)
* Responsive design optimized for desktop and mobile devices

---

## 🛠 Tech Stack

| Layer    | Technology       | Responsibility                              |
| -------- | ---------------- | ------------------------------------------- |
| Frontend | React            | Component-based UI architecture             |
| Frontend | HTML5            | Semantic structure                          |
| Frontend | CSS3             | Responsive layout and visual styling        |
| Frontend | JavaScript (ES6) | Client-side logic and state management      |
| Backend  | Java             | Core domain and business logic              |
| Backend  | Spring Boot      | REST API, routing, and server configuration |
| Database | PostgreSQL       | Relational data persistence                 |
| Tooling  | Git & GitHub     | Version control and project management      |

---

## 🏗 Architecture

PlayFetch follows a layered full-stack architecture:

* React frontend consuming RESTful APIs
* Spring Boot backend handling business rules and validation
* PostgreSQL for structured relational data storage
* Clear separation between presentation, service, and data layers

The system emphasizes maintainability, modular design, and clean separation of concerns.

---

## 🚀 Running the Application

```bash
git remote add origin https://github.com/IbrahimQaar/PlayFetch.git
```

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

Configure PostgreSQL credentials in `application.properties` before starting the backend.

---

## 👨‍💻 Author

**Ibrahim Qaar**
Full-Stack Java & React Developer

-
