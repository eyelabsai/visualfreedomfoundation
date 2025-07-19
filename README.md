# Visual Freedom Foundation

A modern web application built with Next.js, ready for WordPress content migration and enhanced with authentication features.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## 📋 WordPress Migration Steps

### Option 1: WordPress Export (Recommended)
1. Go to your WordPress admin → Tools → Export
2. Choose "All content" and download the XML file
3. Place the XML file in the `data/` folder
4. Run the migration script: `npm run migrate-wordpress`

### Option 2: Manual Content Entry
1. Copy your website content into the `content/` folder
2. Update the components in `components/` to match your design
3. Modify `pages/` to match your site structure

### Option 3: URL-Based Migration
1. Share your website URL
2. I'll help you recreate the design and structure
3. You can then add your content

## 🗄️ Database Setup

This project includes Prisma for database management:

1. **Initialize database:**
   ```bash
   npx prisma init
   ```

2. **After setting up your schema:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## 🔐 Authentication

The project is pre-configured with NextAuth.js for user authentication. Features include:
- User registration and login
- JWT token management
- Protected routes
- Session management

## 📁 Project Structure

```
├── components/          # Reusable UI components
├── pages/              # Next.js pages and API routes
├── content/            # Static content (blog posts, pages)
├── data/               # WordPress export files
├── prisma/             # Database schema and migrations
├── public/             # Static assets
└── styles/             # CSS and styling
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run migrate-wordpress` - Import WordPress content

## 📝 Next Steps

1. **Import your WordPress content** using one of the methods above
2. **Customize the design** to match your current website
3. **Set up your database** for user authentication
4. **Add your login/registration system**
5. **Deploy to your preferred hosting platform**

## 🤝 Need Help?

If you need assistance with:
- WordPress content migration
- Design customization
- Database setup
- Authentication implementation

Just let me know and I'll help you through the process! 