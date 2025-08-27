# 🛍️ Shopsy - Modern E-Commerce Platform

<div align="center">

![Shopsy Logo](https://img.shields.io/badge/Shopsy-E--Commerce-blue?style=for-the-badge&logo=shopping-cart)

**A full-stack, modern e-commerce platform built with the MERN stack**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=flat&logo=mongodb)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.19.2-000000?style=flat&logo=express)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-ISC-green?style=flat)](LICENSE)

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [💡 Request Feature](#)

</div>

---

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [📱 User Guide](#-user-guide)
- [👨‍💻 Developer Guide](#-developer-guide)
- [🔧 API Documentation](#-api-documentation)
- [🎨 UI Components](#-ui-components)
- [🔒 Security](#-security)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Overview

**Shopsy** is a comprehensive, full-stack e-commerce platform designed for modern online retail. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it provides a seamless shopping experience for customers and powerful management tools for administrators.

### 🎯 Key Highlights

- **🔐 Secure Authentication** - JWT-based auth with role-based access control
- **💳 Payment Integration** - PayPal payment gateway with secure transactions
- **📱 Responsive Design** - Mobile-first approach with modern UI/UX
- **⚡ High Performance** - Optimized with Vite, Redux Toolkit, and efficient APIs
- **🖼️ Image Management** - Cloudinary integration for optimized image storage
- **📊 Admin Dashboard** - Comprehensive management tools for products, orders, and analytics
- **🔍 Advanced Search** - Smart product filtering and search capabilities
- **⭐ Review System** - Customer reviews and ratings for products

---

## ✨ Features

### 🛒 Customer Experience

<details>
<summary><strong>🔐 Authentication & User Management</strong></summary>

- **Secure Registration & Login** - Email-based authentication with password hashing
- **JWT Token Management** - Secure, stateless authentication with HTTP-only cookies
- **Role-Based Access Control** - Separate user and admin roles with protected routes
- **Profile Management** - Update personal information and manage account settings
- **Password Security** - bcryptjs encryption for secure password storage

</details>

<details>
<summary><strong>🛍️ Product Catalog & Shopping</strong></summary>

- **Product Browsing** - Intuitive category-based navigation
  - Categories: Men, Women, Kids, Accessories, Footwear
  - Brands: Nike, Adidas, Puma, Levi's, Zara, H&M
- **Advanced Filtering** - Filter by price, brand, category, and ratings
- **Smart Search** - Real-time search with autocomplete suggestions
- **Product Details** - High-quality images, detailed descriptions, and specifications
- **Inventory Management** - Real-time stock tracking and availability
- **Price Management** - Support for regular and sale pricing

</details>

<details>
<summary><strong>🛒 Shopping Cart & Checkout</strong></summary>

- **Dynamic Cart Management** - Add, update, and remove items with real-time updates
- **Quantity Controls** - Easy quantity adjustment with stock validation
- **Multiple Addresses** - Save and manage multiple shipping addresses
- **Secure Checkout** - Streamlined checkout process with address selection
- **Order Summary** - Clear breakdown of items, taxes, and total costs

</details>

<details>
<summary><strong>💳 Payment & Orders</strong></summary>

- **PayPal Integration** - Secure payment processing with PayPal REST SDK
- **Payment Verification** - Robust payment confirmation and error handling
- **Order Tracking** - Real-time order status updates and history
- **Order Management** - View past orders, track shipments, and download invoices
- **Payment Success/Failure Handling** - Comprehensive payment flow management

</details>

<details>
<summary><strong>⭐ Reviews & Ratings</strong></summary>

- **Product Reviews** - Write and read detailed product reviews
- **Star Ratings** - 5-star rating system with average calculations
- **Review Moderation** - User-generated content with quality controls
- **Review Analytics** - Average ratings displayed on product listings

</details>

### 👨‍💼 Admin Management

<details>
<summary><strong>📊 Dashboard & Analytics</strong></summary>

- **Sales Overview** - Real-time sales metrics and performance indicators
- **Order Analytics** - Track order volumes, status distribution, and trends
- **Product Performance** - Monitor best-selling products and inventory levels
- **User Analytics** - Customer registration and engagement metrics

</details>

<details>
<summary><strong>📦 Product Management</strong></summary>

- **Product CRUD Operations** - Create, read, update, and delete products
- **Image Upload** - Cloudinary integration for optimized image storage
- **Inventory Tracking** - Real-time stock management and low-stock alerts
- **Category Management** - Organize products by categories and brands
- **Bulk Operations** - Efficient management of multiple products
- **SEO Optimization** - Product descriptions and metadata management

</details>

<details>
<summary><strong>📋 Order Management</strong></summary>

- **Order Processing** - View and manage all customer orders
- **Status Updates** - Update order status (Pending, Processing, Shipped, Delivered)
- **Order Details** - Comprehensive order information and customer details
- **Shipping Management** - Track shipments and update delivery status
- **Order Analytics** - Generate reports and analyze order patterns

</details>

<details>
<summary><strong>🎨 Feature Management</strong></summary>

- **Homepage Banners** - Manage promotional banners and featured content
- **Feature Toggles** - Enable/disable platform features dynamically
- **Content Management** - Update promotional content and announcements

</details>

---

## 🛠️ Tech Stack

### 🎨 Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | Modern UI library with hooks and functional components |
| **Vite** | 5.4.1 | Lightning-fast build tool and development server |
| **Redux Toolkit** | 2.2.7 | Predictable state management with modern Redux patterns |
| **React Router DOM** | 6.26.1 | Declarative routing for single-page applications |
| **Tailwind CSS** | 3.4.10 | Utility-first CSS framework for rapid UI development |
| **Radix UI** | Latest | Accessible, unstyled UI primitives |
| **Lucide React** | 0.429.0 | Beautiful, customizable SVG icons |
| **Axios** | 1.7.4 | Promise-based HTTP client for API requests |

### ⚙️ Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | Latest | JavaScript runtime for server-side development |
| **Express.js** | 4.19.2 | Fast, unopinionated web framework |
| **MongoDB** | Latest | NoSQL database for flexible data storage |
| **Mongoose** | 8.5.3 | Elegant MongoDB object modeling |
| **JWT** | 9.0.2 | JSON Web Tokens for secure authentication |
| **bcryptjs** | 2.4.3 | Password hashing and encryption |
| **Multer** | 1.4.5 | Middleware for handling file uploads |
| **Cloudinary** | 2.4.0 | Cloud-based image and video management |
| **PayPal REST SDK** | 1.8.1 | PayPal payment integration |

### 🛠️ Development Tools

| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting and style enforcement |
| **PostCSS** | CSS processing and optimization |
| **Nodemon** | Development server with auto-restart |
| **CORS** | Cross-origin resource sharing configuration |
| **Cookie Parser** | HTTP cookie parsing middleware |
| **Dotenv** | Environment variable management |

---

## 🏗️ Architecture

### 📁 Project Structure

```
shopsy-ecommerce/
├── 📁 client/                          # React Frontend Application
│   ├── 📁 public/                      # Static assets
│   │   └── vite.svg                    # Vite logo
│   ├── 📁 src/
│   │   ├── 📁 components/              # Reusable UI Components
│   │   │   ├── 📁 admin-view/          # Admin-specific components
│   │   │   │   ├── header.jsx          # Admin header with navigation
│   │   │   │   ├── sidebar.jsx         # Admin sidebar menu
│   │   │   │   ├── layout.jsx          # Admin layout wrapper
│   │   │   │   ├── product-tile.jsx    # Product card for admin
│   │   │   │   ├── orders.jsx          # Order management component
│   │   │   │   ├── order-details.jsx   # Detailed order view
│   │   │   │   └── image-upload.jsx    # Image upload component
│   │   │   ├── 📁 auth/                # Authentication components
│   │   │   │   └── layout.jsx          # Auth page layout
│   │   │   ├── 📁 common/              # Shared components
│   │   │   │   ├── check-auth.jsx      # Authentication guard
│   │   │   │   ├── form.jsx            # Reusable form component
│   │   │   │   └── star-rating.jsx     # Star rating component
│   │   │   ├── 📁 shopping-view/       # Customer-facing components
│   │   │   │   ├── header.jsx          # Shopping header with cart
│   │   │   │   ├── layout.jsx          # Shopping layout wrapper
│   │   │   │   ├── product-tile.jsx    # Product card for customers
│   │   │   │   ├── product-details.jsx # Product detail modal
│   │   │   │   ├── cart-wrapper.jsx    # Shopping cart sidebar
│   │   │   │   ├── cart-items-content.jsx # Cart items display
│   │   │   │   ├── filter.jsx          # Product filtering sidebar
│   │   │   │   ├── address.jsx         # Address management
│   │   │   │   ├── address-card.jsx    # Address display card
│   │   │   │   ├── orders.jsx          # Customer order history
│   │   │   │   └── order-details.jsx   # Customer order details
│   │   │   └── 📁 ui/                  # Base UI components (Radix UI)
│   │   │       ├── button.jsx          # Button component
│   │   │       ├── input.jsx           # Input field component
│   │   │       ├── card.jsx            # Card component
│   │   │       ├── dialog.jsx          # Modal dialog component
│   │   │       ├── dropdown-menu.jsx   # Dropdown menu component
│   │   │       ├── select.jsx          # Select dropdown component
│   │   │       ├── toast.jsx           # Toast notification component
│   │   │       └── [other-ui-components]
│   │   ├── 📁 pages/                   # Page Components
│   │   │   ├── 📁 admin-view/          # Admin pages
│   │   │   │   ├── dashboard.jsx       # Admin dashboard
│   │   │   │   ├── products.jsx        # Product management
│   │   │   │   ├── orders.jsx          # Order management
│   │   │   │   └── features.jsx        # Feature management
│   │   │   ├── 📁 auth/                # Authentication pages
│   │   │   │   ├── login.jsx           # Login page
│   │   │   │   └── register.jsx        # Registration page
│   │   │   ├── 📁 shopping-view/       # Customer pages
│   │   │   │   ├── home.jsx            # Homepage with banners
│   │   │   │   ├── listing.jsx         # Product listing page
│   │   │   │   ├── checkout.jsx        # Checkout page
│   │   │   │   ├── account.jsx         # User account page
│   │   │   │   ├── search.jsx          # Search results page
│   │   │   │   ├── paypal-return.jsx   # PayPal return handler
│   │   │   │   └── payment-success.jsx # Payment success page
│   │   │   ├── 📁 not-found/           # 404 error page
│   │   │   └── 📁 unauth-page/         # Unauthorized access page
│   │   ├── 📁 store/                   # Redux Store Configuration
│   │   │   ├── store.js                # Main store configuration
│   │   │   ├── 📁 auth-slice/          # Authentication state
│   │   │   ├── 📁 admin/               # Admin-specific state
│   │   │   │   ├── 📁 products-slice/  # Admin product management
│   │   │   │   └── 📁 order-slice/     # Admin order management
│   │   │   ├── 📁 shop/                # Shopping-specific state
│   │   │   │   ├── 📁 products-slice/  # Product catalog state
│   │   │   │   ├── 📁 cart-slice/      # Shopping cart state
│   │   │   │   ├── 📁 address-slice/   # Address management state
│   │   │   │   ├── 📁 order-slice/     # Customer order state
│   │   │   │   ├── 📁 review-slice/    # Product review state
│   │   │   │   └── 📁 search-slice/    # Search functionality state
│   │   │   └── 📁 common-slice/        # Shared application state
│   │   ├── 📁 config/                  # Configuration files
│   │   │   └── index.js                # API endpoints and constants
│   │   ├── 📁 lib/                     # Utility libraries
│   │   │   └── utils.js                # Helper functions
│   │   ├── 📁 assets/                  # Static assets
│   │   │   ├── banner-1.webp           # Homepage banners
│   │   │   ├── banner-2.webp
│   │   │   ├── banner-3.webp
│   │   │   └── account.jpg             # Default account image
│   │   ├── App.jsx                     # Main application component
│   │   ├── main.jsx                    # Application entry point
│   │   ├── App.css                     # Global styles
│   │   └── index.css                   # Tailwind CSS imports
│   ├── .env                            # Environment variables
│   ├── package.json                    # Frontend dependencies
│   ├── vite.config.js                  # Vite configuration
│   ├── tailwind.config.js              # Tailwind CSS configuration
│   ├── components.json                 # Shadcn/ui configuration
│   └── vercel.json                     # Vercel deployment config
├── 📁 server/                          # Node.js Backend Application
│   ├── 📁 controllers/                 # Route Controllers
│   │   ├── 📁 admin/                   # Admin controllers
│   │   │   ├── products-controller.js  # Admin product management
│   │   │   └── order-controller.js     # Admin order management
│   │   ├── 📁 auth/                    # Authentication controllers
│   │   │   └── auth-controller.js      # Login, register, auth check
│   │   ├── 📁 shop/                    # Shopping controllers
│   │   │   ├── products-controller.js  # Product catalog
│   │   │   ├── cart-controller.js      # Shopping cart operations
│   │   │   ├── address-controller.js   # Address management
│   │   │   ├── order-controller.js     # Order processing
│   │   │   ├── search-controller.js    # Product search
│   │   │   └── product-review-controller.js # Review system
│   │   └── 📁 common/                  # Shared controllers
│   │       └── feature-controller.js   # Feature management
│   ├── 📁 models/                      # MongoDB Models
│   │   ├── User.js                     # User schema
│   │   ├── Product.js                  # Product schema
│   │   ├── Cart.js                     # Shopping cart schema
│   │   ├── Order.js                    # Order schema
│   │   ├── Address.js                  # Address schema
│   │   ├── Review.js                   # Product review schema
│   │   └── Feature.js                  # Feature management schema
│   ├── 📁 routes/                      # API Routes
│   │   ├── 📁 admin/                   # Admin routes
│   │   │   ├── products-routes.js      # Admin product routes
│   │   │   └── order-routes.js         # Admin order routes
│   │   ├── 📁 auth/                    # Authentication routes
│   │   │   └── auth-routes.js          # Auth endpoints
│   │   ├── 📁 shop/                    # Shopping routes
│   │   │   ├── products-routes.js      # Product catalog routes
│   │   │   ├── cart-routes.js          # Cart management routes
│   │   │   ├── address-routes.js       # Address routes
│   │   │   ├── order-routes.js         # Order processing routes
│   │   │   ├── search-routes.js        # Search routes
│   │   │   └── review-routes.js        # Review routes
│   │   └── 📁 common/                  # Shared routes
│   │       └── feature-routes.js       # Feature routes
│   ├── 📁 helpers/                     # Utility Functions
│   │   ├── cloudinary.js               # Image upload helper
│   │   └── paypal.js                   # PayPal integration helper
│   ├── server.js                       # Main server file
│   ├── package.json                    # Backend dependencies
│   └── .gitignore                      # Git ignore rules
├── README.md                           # Project documentation
└── .gitignore                          # Root git ignore
```

### 🔄 Data Flow Architecture

```mermaid
graph TB
    A[Client Browser] --> B[React Frontend]
    B --> C[Redux Store]
    B --> D[Express.js API]
    D --> E[MongoDB Database]
    D --> F[Cloudinary]
    D --> G[PayPal API]
    
    subgraph "Frontend Layer"
        B
        C
    end
    
    subgraph "Backend Layer"
        D
        H[JWT Middleware]
        I[CORS Middleware]
    end
    
    subgraph "Data Layer"
        E
        F
        G
    end
```

---

## 🚀 Quick Start

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)
- **PayPal Developer Account** - [Sign up](https://developer.paypal.com/)
- **Cloudinary Account** - [Sign up](https://cloudinary.com/)

### ⚡ Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nEgiAbhi1809/e-commerce-website.git
   cd mern-ecommerce-2024-master
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

### 🔧 Environment Configuration

#### Backend Environment (.env in server folder)
```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/shopsy_ecommerce
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/shopsy_ecommerce

# Server Configuration
PORT=5000
CLIENT_URL=http://localhost:5173

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_complex

# PayPal Configuration
CLIENT_ID=your_paypal_client_id_from_developer_dashboard
CLIENT_SECRET=your_paypal_client_secret_from_developer_dashboard

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

#### Frontend Environment (.env in client folder)
```env
# Backend API URL
VITE_BACKEND_URI=http://localhost:5000
```

### 🚀 Running the Application

1. **Start MongoDB Service**
   ```bash
   # If using local MongoDB
   mongod
   
   # If using MongoDB Atlas, ensure your connection string is correct
   ```

2. **Start the Backend Server**
   ```bash
   cd server
   npm run dev
   ```
   ✅ Server will run on `http://localhost:5000`

3. **Start the Frontend Development Server**
   ```bash
   cd client
   npm run dev
   ```
   ✅ Client will run on `http://localhost:5173`

4. **Access the Application**
   - **Customer Interface**: `http://localhost:5173/shop/home`
   - **Admin Interface**: `http://localhost:5173/admin/dashboard`
   - **API Documentation**: `http://localhost:5000/api`

### 🎯 First Steps

1. **Create Admin Account**: Register a new user and manually change the role to "admin" in MongoDB
2. **Add Products**: Use the admin panel to add your first products
3. **Test Shopping Flow**: Create a customer account and test the complete shopping experience
4. **Configure Payment**: Set up PayPal sandbox for testing payments

---

## 📱 User Guide

### 🛍️ For Customers

#### 🔐 Getting Started
1. **Registration**: Click "Sign Up" and create your account with email and password
2. **Login**: Use your credentials to access your account
3. **Profile Setup**: Add your personal information and shipping addresses

#### 🛒 Shopping Experience

<details>
<summary><strong>🔍 Browsing Products</strong></summary>

- **Homepage**: View featured products and promotional banners
- **Categories**: Navigate through Men, Women, Kids, Accessories, and Footwear
- **Brands**: Filter by popular brands like Nike, Adidas, Puma, Levi's, Zara, H&M
- **Search**: Use the search bar for specific products
- **Filters**: Apply price range, brand, and category filters
- **Sorting**: Sort by price (low to high, high to low) or by name

</details>

<details>
<summary><strong>🛒 Shopping Cart</strong></summary>

- **Add to Cart**: Click the "Add to Cart" button on any product
- **View Cart**: Click the cart icon to see your items
- **Update Quantity**: Use +/- buttons to adjust item quantities
- **Remove Items**: Click the remove button to delete items
- **Cart Persistence**: Your cart is saved even after logout

</details>

<details>
<summary><strong>💳 Checkout Process</strong></summary>

1. **Review Cart**: Verify all items and quantities
2. **Shipping Address**: Select or add a new shipping address
3. **Payment Method**: Choose PayPal as your payment method
4. **Order Review**: Review your order summary
5. **Payment**: Complete payment through PayPal
6. **Confirmation**: Receive order confirmation and tracking information

</details>

<details>
<summary><strong>📦 Order Management</strong></summary>

- **Order History**: View all your past orders in the account section
- **Order Status**: Track your order status (Pending, Processing, Shipped, Delivered)
- **Order Details**: View detailed information about each order
- **Reorder**: Easily reorder items from previous purchases

</details>

<details>
<summary><strong>⭐ Reviews & Ratings</strong></summary>

- **Write Reviews**: Share your experience with products you've purchased
- **Rate Products**: Give star ratings from 1 to 5
- **Read Reviews**: Check other customers' reviews before purchasing
- **Review Guidelines**: Follow community guidelines for helpful reviews

</details>

### 👨‍💼 For Administrators

#### 📊 Dashboard Overview
- **Sales Metrics**: View total sales, orders, and revenue
- **Recent Orders**: Monitor latest customer orders
- **Product Performance**: Track best-selling products
- **User Analytics**: Monitor customer registration and activity

#### 📦 Product Management

<details>
<summary><strong>➕ Adding Products</strong></summary>

1. Navigate to **Admin > Products**
2. Click **"Add New Product"**
3. Fill in product details:
   - **Title**: Product name
   - **Description**: Detailed product description
   - **Category**: Select from available categories
   - **Brand**: Choose the brand
   - **Price**: Set regular price
   - **Sale Price**: Optional discounted price
   - **Stock**: Available quantity
4. **Upload Image**: Add product image via Cloudinary
5. **Save Product**: Click save to add to catalog

</details>

<details>
<summary><strong>✏️ Editing Products</strong></summary>

1. Go to **Products** page
2. Find the product to edit
3. Click **"Edit"** button
4. Update any field as needed
5. **Save Changes** to update the product

</details>

<details>
<summary><strong>🗑️ Managing Inventory</strong></summary>

- **Stock Tracking**: Monitor stock levels for all products
- **Low Stock Alerts**: Get notified when products are running low
- **Bulk Updates**: Update multiple products at once
- **Product Status**: Enable/disable products as needed

</details>

#### 📋 Order Management

<details>
<summary><strong>📦 Processing Orders</strong></summary>

1. Navigate to **Admin > Orders**
2. View all customer orders with status
3. Click on any order to view details
4. Update order status:
   - **Pending**: Order received, awaiting processing
   - **Processing**: Order is being prepared
   - **Shipped**: Order has been dispatched
   - **Delivered**: Order has reached customer
5. Add tracking information if available

</details>

#### 🎨 Feature Management
- **Homepage Banners**: Upload and manage promotional banners
- **Featured Products**: Highlight specific products on homepage
- **Announcements**: Add important notices for customers

---

## 👨‍💻 Developer Guide

### 🏗️ Architecture Overview

Shopsy follows a modern, scalable architecture pattern:

- **Frontend**: React SPA with Redux for state management
- **Backend**: RESTful API built with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based with HTTP-only cookies
- **File Storage**: Cloudinary for image management
- **Payments**: PayPal REST SDK integration

### 🔧 Development Setup

#### 🛠️ Prerequisites for Development
```bash
# Check Node.js version
node --version  # Should be v16+

# Check npm version
npm --version

# Install global development tools (optional)
npm install -g nodemon
npm install -g concurrently
```


