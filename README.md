# IP Address Tracker

A modern, responsive IP address tracking application built with React that allows users to search for IP addresses or domain names and visualize their geographical location on an interactive map.

## Features

- **IP/Domain Search**: Search for any IP address or domain name
- **Geolocation Data**: View detailed information including location, timezone, and ISP
- **Interactive Map**: Visualize IP locations using Leaflet maps
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Dynamic map and data updates based on search queries
- **Auto IP Detection**: Displays user's own IP address on initial load

## Technologies Used

- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Leaflet** - Open-source JavaScript library for interactive maps
- **React Leaflet** - React components for Leaflet maps
- **IPify API** - IP geolocation service

## Prerequisites

Before running this project, you'll need:

- Node.js (version 16 or higher)
- npm or yarn package manager
- IPify API key (free tier available at [ipify.org](https://geo.ipify.org/))

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ip-address-tracker.git
   cd ip-address-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your IPify API key:

   ```
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## API Configuration

This project uses the IPify API for IP geolocation data. To get your API key:

1. Visit [geo.ipify.org](https://geo.ipify.org/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add it to your `.env` file as `VITE_API_KEY`

## Project Structure

```
src/
├── components/
│   ├── App.jsx          # Main application component
│   ├── DetailsBar.jsx   # IP information display
│   ├── Map.jsx          # Interactive map component
│   ├── Navigation.jsx   # Search input component
│   └── Spinner.jsx      # Loading indicator
├── hooks/
│   └── useIpData.js     # Custom hook for API calls
├── assets/              # Static assets
└── main.jsx            # Application entry point
```

## Usage

1. **Initial Load**: The app automatically displays your current IP address and location
2. **Search**: Enter an IP address (e.g., `192.168.1.1`) or domain name (e.g., `google.com`) in the search bar
3. **View Results**: See the IP details in the information panel and location on the map
4. **Interactive Map**: Click and drag to explore, zoom in/out for better detail

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Challenge by [Frontend Mentor](https://www.frontendmentor.io)
- Map functionality powered by [Leaflet](https://leafletjs.com/)
- Geolocation data from [IPify](https://geo.ipify.org/)
