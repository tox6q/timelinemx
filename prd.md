Soccer Jersey Catalog Website
Overview
A simple catalog website for selling soccer jerseys, featuring a minimal design with scalability in mind. Built with React, Shadcn, Tailwind, and Supabase for backend. Hosted on the client's domain.
Features

Header Navigation: Catalog, Contact, FAQ, and a search bar for jersey names.
Catalog Page: Grid of product cards (image, name, price) linking to product pages.
Product Page: Displays jersey photos, price, and description.
Admin Panel: Accessible at /admin with login. Allows CRUD operations for products, and editing Contact and FAQ content.
Search: Client-side filtering by jersey name.

Tech Stack

Frontend: React, Shadcn, Tailwind CSS
Backend: Supabase (database, auth, storage for product images)
Assets: Sourced from 21st.dev, optimized for performance
Routing: React Router for pages (/catalog, /product/:id, /admin)

Admin Functionality

Authentication: Auth is inside the code. Only one account with a password
Product Management: Add, edit, remove jerseys (name, price, description, images).
Content Management: Edit FAQ (question-answer pairs) and Contact details.
UI: Shadcn components for forms, tables, and modals.

Scalability

Structured for future e-commerce features (cart, checkout).
Supabase supports growing catalog and bulk operations.
SEO-ready with clean URLs and meta tags.

Notes

Responsive design for mobile and desktop.
Backend prioritizes simplicity with Supabase for quick setup.

