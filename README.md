# 🌍 Wanderlust

Wanderlust is a full-stack travel booking web application where users can explore destinations, view detailed listings, and manage their trip bookings — all through a clean, modern interface.

Live demo: _add your deployment link here_

---

## ✨ Features

- 🔐 **Authentication** — Secure sign-up/sign-in (including social login) powered by Better Auth
- 🏝️ **Destination Listings** — Browse travel destinations with rich detail pages
- 📅 **Booking Management** — Create, view, and cancel bookings
- 🖼️ **Responsive UI** — Airbnb-style layout with a sticky booking card and clean two-column grid
- 🔔 **Toast Notifications** — Instant feedback on user actions via `react-hot-toast`
- 🎨 **Modern Design System** — Built with HeroUI v3 and Tailwind CSS v4

---

## 🛠️ Tech Stack

| Layer          | Technology                                  |
|----------------|----------------------------------------------|
| Framework      | [Next.js](https://nextjs.org/) (App Router)   |
| UI Library     | [HeroUI v3](https://www.heroui.com/)          |
| Styling        | Tailwind CSS v4                               |
| Authentication | [Better Auth](https://www.better-auth.com/) + MongoDB Adapter |
| Database       | MongoDB                                       |
| Icons          | react-icons, @gravity-ui/icons                |
| Notifications  | react-hot-toast                               |
| Linting        | ESLint 9                                      |

---

## 📁 Project Structure

```
Wanderlust/
├── public/              # Static assets (images, icons, etc.)
├── src/                 # Application source code
│   ├── app/             # Next.js App Router pages & layouts
│   ├── components/      # Reusable UI components
│   └── lib/              # Utilities, auth config, DB connection
├── .gitignore
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
├── eslint.config.mjs
├── jsconfig.json
├── package.json
└── README.md
```

> Note: adjust the structure above if your actual `src/` folder differs.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (recommended: latest LTS)
- A MongoDB Atlas cluster (or local MongoDB instance)

### 1. Clone the repository

```bash
git clone https://github.com/mahdirafi/Wanderlust.git
cd Wanderlust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Social login providers (if used)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> ⚠️ Never commit `.env.local` to version control. Rotate any credentials that get exposed accidentally.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

| Command         | Description                       |
|-----------------|------------------------------------|
| `npm run dev`   | Start the development server       |
| `npm run build` | Build the app for production       |
| `npm run start` | Start the production server        |
| `npm run lint`  | Run ESLint checks                  |

---

## 🗺️ Roadmap

- [ ] Payment integration
- [ ] User reviews & ratings
- [ ] Admin dashboard for managing listings
- [ ] Search & filter by destination, price, and date
- [ ] Wishlist / saved destinations

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is currently unlicensed. Add a license (e.g. MIT) if you plan to open it up for external contributions.

---

## 👤 Author

**MD Mahdi** ([@mahdirafi](https://github.com/mahdirafi))

Built as part of a full-stack development learning journey — MERN stack, Next.js, and modern auth patterns.
