Soccer Jersey Catalog Development Todo List
Setup

[ ] Clone GitHub template (React, Shadcn, Tailwind).
[ ] Initialize project with npm install.
[ ] Set up React Router for /catalog, /product/:id, /admin.

Supabase Setup

[ ] Create Supabase project.
[ ] Set up tables: products (id, name, price, description, images), faq (id, question, answer)
[ ] Enable Storage for product image uploads.
[ ] Add Supabase client to React app (@supabase/supabase-js).

Frontend

[ ] Build Header: Catalog, Contact, FAQ links, search bar (client-side filter).
[ ] Create Catalog Page: Grid of product cards (image, name, price) from Supabase.
[ ] Develop Product Page: Display photos, price, description.
[ ] Style with Tailwind; use Shadcn for components (cards, forms, tables).
[ ] Integrate 21st.dev assets; optimize images (WebP, lazy-load).

Admin Panel

[ ] Create /admin route with login (Supabase Auth).
[ ] Build CRUD for products: Table (list), forms (add/edit), delete button.
[ ] Add FAQ editor: List question-answer pairs, add/edit/delete.
[ ] Add Contact editor: Form to update details.
[ ] Validate forms and handle errors.

Testing

[ ] Test responsiveness (mobile, desktop).
[ ] Verify CRUD operations and image uploads.
[ ] Ensure search and navigation work smoothly.

Deployment

[ ] Build React app (npm run build).
[ ] Configure hosting with client's domain.
[ ] Deploy backend (Supabase hosted).

