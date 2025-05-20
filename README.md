# 🛒 ShopIT - Full Stack E-commerce App

A full-stack e-commerce web application built with **React** on the frontend and **Django REST Framework** on the backend. The project includes essential features such as cart management, order processing, and JWT-based user authentication.

> ⚠️ This project is still under active development.

---

## 🚀 Features Implemented

- 🔐 JWT Authentication (Login & Logout)
- 📄 Product Details Page
- 🛒 Cart Management
- 💳 Checkout and Order Placement
- 📦 Order Summary
- 🔌 Fully Functional REST API (DRF)

---

## 🔧 Tech Stack

### 🖥 Backend
- Django
- Django REST Framework (DRF)
- SQLite (default DB)
- JWT Authentication
- `django-cors-headers` for cross-origin support

### 💻 Frontend
- React.js
- Axios (API requests)
- Bootstrap (styling)

---

## 🛠 Local Development Setup

### 🔹 Backend

```bash
cd ecommerce_backend
python -m venv env
source env/bin/activate  # on Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 🔹 Frontend

```bash
cd frontend
npm install
npm start
```

### Current Limitations
- No user registration yet
- No product listing/search
- No admin dashboard
- No deployment

### Future Features
- User Registration
- Payment Gateway Integration (e.g., Stripe, SSLCommerz)
- Product Search & Listing
- Admin Panel for Product Management


