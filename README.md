# Author Portal - Multi-Tenant SaaS Platform

A comprehensive multi-tenant SaaS platform for authors and content creators, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Multi-Tenant Architecture
- **Tenant Management**: Each subscriber gets their own isolated workspace
- **Subdomain Support**: Automatic subdomain assignment (e.g., `company.authorportal.com`)
- **Custom Domain Support**: Option to use custom domains
- **Role-Based Access**: Super Admin, SaaS Admin, Tenant Admin, and Tenant User roles

### Authentication & User Management
- **Multi-Level Login**: Separate login flows for different user types
- **Tenant-Specific Authentication**: Users authenticate within their tenant context
- **User Registration**: Configurable user registration per tenant
- **Session Management**: Secure session handling with configurable timeouts

### Writing & Content Management
- **Rich Text Editor**: Advanced Tiptap editor with full formatting capabilities
- **Project Management**: Organize writing projects with progress tracking
- **Notes System**: Comprehensive note-taking with tags and categories
- **Writing Studio**: Distraction-free writing environment with focus mode

### Tenant Configuration
- **Portal Settings**: Customize portal name, timezone, language, currency
- **Website Builder**: Optional website creation on tenant subdomain
- **Branding**: Custom logos, colors, and CSS styling
- **Security Settings**: Password policies, 2FA, session controls
- **Notification Preferences**: Email, push, and SMS notification settings

### Admin Dashboard
- **SaaS Administration**: Manage all tenants from central dashboard
- **Subscription Management**: Track plans, billing, and usage
- **Analytics**: Revenue tracking, user growth, and platform metrics
- **Tenant Oversight**: Monitor tenant activity and resource usage

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Rich Text Editor**: Tiptap
- **State Management**: React Context API
- **Authentication**: Custom JWT-based auth system

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/author-portal-v1.git
cd author-portal-v1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── admin/             # SaaS admin dashboard
│   ├── login/             # Authentication pages
│   ├── register/          # User registration
│   ├── project/           # Project management
│   ├── settings/          # Tenant settings
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── editor/           # Rich text editor
│   ├── layout/           # Layout components
│   ├── notes/            # Notes system
│   └── ui/               # shadcn/ui components
├── contexts/             # React contexts
├── types/                # TypeScript type definitions
└── lib/                  # Utility functions
```

## 🔐 Authentication Flow

### Super Admin
- Platform-wide administration
- Tenant management and oversight
- System configuration

### SaaS Admin
- Multi-tenant dashboard
- Subscription management
- Analytics and reporting

### Tenant Admin
- Tenant-specific administration
- User management within tenant
- Portal configuration

### Tenant User
- Access to writing tools
- Project and content management
- Personal settings

## 🌐 Multi-Tenant Features

### Subdomain Routing
Each tenant gets their own subdomain:
- `tenant1.authorportal.com`
- `tenant2.authorportal.com`

### Custom Domains
Tenants can configure custom domains:
- `www.company.com` → `company.authorportal.com`

### Isolated Data
- Complete data isolation between tenants
- Tenant-specific configurations
- Independent user bases

## ⚙️ Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Tenant Settings
Each tenant can configure:
- Portal branding and appearance
- User registration policies
- Security settings
- Website publishing options
- Notification preferences

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Static Export
```bash
npm run build
```

The app is configured for static export and can be deployed to any static hosting service.

## 📱 Responsive Design

The platform is fully responsive and includes:
- Desktop-optimized layouts
- Mobile-friendly interfaces
- Touch-friendly interactions
- Progressive web app features

## 🎨 Customization

### Theming
- Light/dark mode support
- Custom color schemes per tenant
- Configurable UI components

### Branding
- Custom logos and favicons
- Tenant-specific styling
- White-label options

## 🔧 Development

### Code Structure
- TypeScript for type safety
- Modular component architecture
- Clean separation of concerns
- Comprehensive error handling

### Best Practices
- Responsive design patterns
- Accessibility compliance
- Performance optimization
- Security best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact: support@authorportal.com

## 🗺️ Roadmap

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real-time collaboration
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Third-party integrations
- [ ] Advanced publishing tools
- [ ] Multi-language support
- [ ] API documentation

---

Built with ❤️ for authors and content creators worldwide.