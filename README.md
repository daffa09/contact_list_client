<!-- portfolio -->
<!-- slug: contact-list-client -->
<!-- title: Contact List Client -->
<!-- description: Vue.js contact management application with RESTful API integration -->
<!-- image: https://github.com/user-attachments/assets/placeholder-contact-list -->
<!-- tags: vue, javascript, vite, contact-management, rest-api -->

# Contact List Client

A modern contact management application built with Vue.js and Vite, featuring a clean interface for managing personal or professional contacts. This client-side application integrates seamlessly with a RESTful API backend for complete CRUD operations.

## 📋 Overview

Contact List Client is a frontend application that provides an intuitive interface for managing contacts. Built with Vue.js 3 and powered by Vite for lightning-fast development, this application demonstrates modern frontend development practices and API integration patterns.

## ✨ Features

- **Complete Contact Management**
  - Add new contacts with detailed information
  - View all contacts in an organized list
  - Update existing contact details
  - Delete contacts with confirmation

- **Modern User Interface**
  - Clean and responsive design
  - Smooth transitions and animations
  - Mobile-friendly layout
  - Intuitive user experience

- **Real-time Data**
  - Instant updates via API integration
  - Optimistic UI updates
  - Error handling and user feedback

- **Search and Filter**
  - Quick contact search functionality
  - Filter contacts by categories
  - Sort contacts alphabetically

## 🛠️ Technologies Used

- **Vue.js 3**: Progressive JavaScript framework
- **Vite**: Next-generation frontend tooling
- **JavaScript (ES6+)**: Modern JavaScript features
- **Axios/Fetch**: HTTP client for API requests
- **Vue Router**: Client-side routing
- **Composables**: Vue 3 composition API patterns

## 📁 Project Structure

```
contact_list_client/
├── src/
│   ├── components/         # Vue components
│   │   ├── ContactList.vue
│   │   ├── ContactForm.vue
│   │   └── ContactItem.vue
│   ├── views/             # Page views
│   ├── router/            # Route configurations
│   ├── services/          # API service layer
│   ├── composables/       # Reusable composition functions
│   ├── assets/            # Static assets
│   ├── App.vue           # Root component
│   └── main.js           # Application entry point
├── public/               # Public static files
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 🔗 Backend Requirements

**Important**: This client application requires a backend server to function properly.

The backend API server is available at: [contact_list_server](https://github.com/daffa09/contact_list_server)

Make sure the server is running before starting the client application.

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- Backend server running (see link above)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd contact_list_client
   ```

2. **Install dependencies**
   
   Standard installation:
   ```bash
   npm install
   ```
   
   If you encounter peer dependency issues:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure API Endpoint**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```
   
   Adjust the URL to match your backend server address.

4. **Start the backend server**
   
   Follow the instructions in the [backend repository](https://github.com/daffa09/contact_list_server) to start the API server.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```
   
   (Port may vary - check the console output)

## 💻 Usage Guide

### Adding a Contact

1. Click the "Add Contact" button
2. Fill in the contact form:
   - Name (required)
   - Email
   - Phone number
   - Address
   - Additional notes
3. Click "Save" to create the contact

### Viewing Contacts

- All contacts are displayed in the main list view
- Each contact card shows essential information
- Click on a contact to view full details

### Editing a Contact

1. Click the "Edit" button on a contact card
2. Modify the desired fields in the form
3. Click "Update" to save changes
4. Changes are immediately reflected in the list

### Deleting a Contact

1. Click the "Delete" button on a contact card
2. Confirm the deletion in the popup dialog
3. Contact is removed from the list

### Searching Contacts

- Use the search bar at the top
- Type name, email, or phone number
- Results update in real-time as you type

## 🔧 Development

### Available Scripts

```bash
# Start development server with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

### Project Configuration

Edit `vite.config.js` to customize:
- Build options
- Development server settings
- Plugin configurations
- Path aliases

## 📡 API Integration

### API Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/contacts` | Fetch all contacts |
| GET | `/api/contacts/:id` | Fetch single contact |
| POST | `/api/contacts` | Create new contact |
| PUT | `/api/contacts/:id` | Update contact |
| DELETE | `/api/contacts/:id` | Delete contact |

### Example API Service

```javascript
// src/services/contactService.js
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const contactService = {
  getAllContacts: () => axios.get(`${API_URL}/contacts`),
  getContact: (id) => axios.get(`${API_URL}/contacts/${id}`),
  createContact: (data) => axios.post(`${API_URL}/contacts`, data),
  updateContact: (id, data) => axios.put(`${API_URL}/contacts/${id}`, data),
  deleteContact: (id) => axios.delete(`${API_URL}/contacts/${id}`)
}
```

## 🎨 Customization

### Styling

The application uses scoped styles in Vue components. To customize:

1. Edit component-specific styles in `.vue` files
2. Modify global styles in `src/assets/main.css`
3. Configure theme variables

### Adding Features

Popular extensions:
- Contact categories/groups
- Import/export contacts
- Contact avatars
- Advanced search filters
- Bulk operations
- Contact sharing

## 🐛 Troubleshooting

### Common Issues

1. **Cannot connect to API**
   - Verify backend server is running
   - Check API URL in `.env` file
   - Ensure CORS is properly configured on backend

2. **npm install errors**
   - Try `npm install --legacy-peer-deps`
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and `package-lock.json`, then reinstall

3. **Port already in use**
   - Change port in `vite.config.js`:
   ```javascript
   export default {
     server: {
       port: 3001
     }
   }
   ```

4. **Hot reload not working**
   - Restart development server
   - Check file watcher limits (Linux)
   - Verify Vite configuration

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deployment Options

- **Vercel**: Automatic deployment from Git
- **Netlify**: Drag-and-drop or Git integration
- **GitHub Pages**: Static hosting
- **AWS S3**: With CloudFront CDN
- **Any static hosting**: Serve the `dist/` folder

### Environment Variables for Production

Update `.env.production`:
```env
VITE_API_URL=https://your-production-api.com/api
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is open source and available for educational and commercial use.

## 🔗 Related Projects

- Backend API: [contact_list_server](https://github.com/daffa09/contact_list_server)

---

Built with ❤️ using Vue.js and Vite
