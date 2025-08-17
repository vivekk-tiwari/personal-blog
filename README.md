# Vivek's Personal Website

A modern, minimalist personal website and blog built with Next.js, featuring a clean design, left sidebar navigation, and integration with Substack RSS feeds.

## ✨ Features

### 🎨 **Modern Design**
- **Clean, minimalist aesthetic** with plenty of whitespace
- **Left sidebar navigation** for easy access to all pages
- **Responsive design** that works on all devices
- **Inter font** for modern typography
- **Tailwind CSS** for consistent styling

### 📱 **Navigation & Layout**
- **Fixed left sidebar** with Home, About, Blog, and Contact links
- **Active page highlighting** for current section
- **Mobile-responsive** with hamburger menu
- **Smooth transitions** and hover effects

### 📝 **Blog Integration**
- **Substack RSS feed integration** for automatic blog updates
- **Dynamic post fetching** from `vivektiwari1.substack.com`
- **Real-time content** that updates as you publish new posts
- **Clean post cards** with titles, dates, and summaries

### 📧 **Contact & Subscription**
- **Contact form** with name, email, subject, and message fields
- **Substack newsletter subscription** forms on homepage and blog
- **Professional styling** with modern form elements
- **Responsive form layouts** for all screen sizes

### 🎯 **Pages**
- **Homepage**: Welcome message with subscription form
- **About**: Personal information and background
- **Blog**: Dynamic posts from Substack with subscription form
- **Contact**: Contact form and information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Icons**: Custom website icon
- **RSS Parsing**: rss-parser
- **Deployment**: Ready for Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
personal-blog/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Main layout with sidebar
│   │   ├── page.tsx            # Homepage
│   │   ├── about/page.js       # About page
│   │   ├── blog/page.js        # Blog page with Substack integration
│   │   ├── contact/page.js     # Contact page
│   │   └── globals.css         # Global styles and typography
│   ├── components/
│   │   └── Navbar.js           # Left sidebar navigation
│   └── lib/
│       └── substack.js         # Substack RSS feed functions
├── public/
│   └── website.png             # Custom website icon
└── package.json
```

## 🔧 Configuration

### Substack Integration
The blog automatically fetches posts from your Substack RSS feed. Update the URL in `src/lib/substack.js` if needed:

```javascript
export async function getSubstackPosts(substackUrl = 'https://vivektiwari1.substack.com/feed')
```

### Customization
- **Colors**: Update Tailwind classes throughout components
- **Typography**: Modify `src/app/globals.css` for font changes
- **Content**: Edit page content in respective page files
- **Navigation**: Update links in `src/components/Navbar.js`

## 🎨 Design System

### Colors
- **Primary**: Black (`#000000`) for buttons and emphasis
- **Background**: White (`#ffffff`) for main content
- **Text**: Dark gray (`#111827`) for headings, medium gray (`#4B5563`) for body
- **Accents**: Light gray (`#F3F4F6`) for backgrounds

### Typography
- **Font Family**: Inter (300, 400, 500, 600, 700, 800 weights)
- **Headings**: Large, bold with tight spacing
- **Body Text**: 18px with generous line height (1.7)
- **Spacing**: Consistent margins and padding throughout

### Components
- **Buttons**: Rounded corners (`rounded-lg`), hover effects with scale and shadow
- **Cards**: Subtle shadows, rounded corners, hover transitions
- **Forms**: Clean inputs with focus states, rounded styling
- **Navigation**: Fixed sidebar with active states and hover effects

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation with expanded content
- **Tablet**: Responsive grid layouts and adjusted spacing
- **Mobile**: Collapsible navigation menu, stacked layouts
- **Breakpoints**: Tailwind's responsive prefixes (`md:`, `lg:`)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **AWS Amplify**: Full Next.js support
- **Custom Server**: Standard Node.js deployment

## 🔄 RSS Feed Integration

The website automatically fetches and displays your Substack posts:

- **Real-time updates** when you publish new content
- **Automatic post sorting** by publication date
- **Image extraction** from post content (when available)
- **Direct links** to original Substack articles

## 📝 Customization Guide

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.js` file with your content
3. Update the navigation in `src/components/Navbar.js`

### Modifying Styles
1. **Global styles**: Edit `src/app/globals.css`
2. **Component styles**: Update Tailwind classes in component files
3. **Layout changes**: Modify `src/app/layout.tsx`

### Updating Content
1. **Static content**: Edit page files directly
2. **Dynamic content**: Update Substack posts (blog updates automatically)
3. **Navigation**: Modify the `navItems` array in `Navbar.js`

## 🤝 Contributing

This is a personal website project, but if you have suggestions or find issues:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is personal and not licensed for public use.

## 🙏 Acknowledgments

- **Next.js** for the amazing framework
- **Tailwind CSS** for the utility-first styling
- **Inter font** for beautiful typography
- **Substack** for the RSS feed integration

---

**Built with ❤️ by Vivek**

*Last updated: December 2024*
