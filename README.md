# Build Full-ECommerce By Next.js 13+, App Router, Server Components and Actions

|                |                                                        |
| -------------- | ------------------------------------------------------ |
| Tech           | Nextjs 13+, Server Components & Actions, Route Handler |
| UI             | Tailwind, DaisyUI, Chart.js                            |
| Database       | MongoDB, Mongoose                                      |
| Payment        | PayPal, Stripe                                         |
| Deployment     | Github, Vercel, MongoDB Atlas                          |
| Authentication | Auth.js, Google Auth                                   |
| Others         | Cloudinary, Zustand, SWR                               |

## Resources

- Demo Website :  https://kopia.vercel.app/
- Source Code   :  https://github.com/sandaji/mauzo

## What you will learn

- NextJS basics like setting up project, creating pages and data fetching
- NextJS advanced topics like app router, server component & actions, image optimization,
- Tailwind CSS and DaisyUI framework to build responsive website using custom theme, animation and carousel
- ReactJS including decomposing components, state management with Zustand and data fetching using swr
- Auth.js package to authenticate customers and admin users
- MongoDB and Mongoose to save and retrieve data like products, orders and users
- PayPal developer api to make online payment
- Deploy web applications on servers like Vercel and Netlify

## Run Locally

1. Clone repo

   ```shell
    $ git clone git@github.com:sandaji/mauzo.git
    $ cd mauzo
   ```

2. Create .env File

   - duplicate .env.example and rename it to .env

3. Setup MongoDB

   - Local MongoDB
     - Install it from [here](https://www.mongodb.com/try/download/community)
     - In .env file update MONGODB_URI=mongodb://localhost/mauzo
   - OR Atlas Cloud MongoDB
     - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
     - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

4. Install and Run

   ```shell
     npm install
     npm run dev
   ```

5. Seed Data

   - Run this on browser: http://localhost:3000/api/seed
   - It returns admin email and password and 6 sample products

6. Admin Login

   - Run http://localhost:3000/signin
   - Enter admin email "admin@example.com" and password "123456" and click Signin
