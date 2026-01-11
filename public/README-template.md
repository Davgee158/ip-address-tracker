# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview

# IP Address Tracker 🌍

A responsive web application that allows users to search for any IP address or domain name and view key network information alongside its geographic location on an interactive map.

🔗 **Live Demo:** https://ip-address-tracker-phi-eight.vercel.app/  
📁 **Source Code:** https://github.com/Davgee158/ip-address-tracker

---

## 📌 Features

- Search by **IP address** or **domain name**
- Displays key information:
  - IP Address
  - Location (city, region, country)
  - Timezone
  - ISP
- Interactive map showing the resolved location
- Fully responsive design (mobile, tablet, desktop)
- Graceful loading state while fetching data
- Error handling for invalid inputs

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Maps:** Leaflet.js
- **API:** IP geolocation API
- **Deployment:** Vercel

---

## 🧠 How It Works

1. The user enters an IP address or domain name.
2. The application resolves the input to a single IP address.
3. Location and network metadata are fetched from the API.
4. The map updates to show the geographic position of the resolved IP.
5. UI components update simultaneously using shared state.

---

## 📱 Responsive Design

- Mobile-first layout
- Custom height handling for devices with taller viewports (e.g. tablets)
- Optimized background images for mobile and desktop

---

