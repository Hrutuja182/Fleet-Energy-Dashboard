# Fleet Energy Dashboard
# Overview:

The Fleet Energy Intelligence Dashboard is a modern React-based application designed to monitor and analyze fleet fuel consumption and emissions.

It helps stakeholders:

1.Track energy performance 
2.Compare ships 
3.Identify inefficiencies 
4.Get AI-driven recommendations

# problem statement
Fleet operators need a simple way to:

1.Monitor fuel usage
2.Reduce emissions
3.Identify inefficient ships

This dashboard provides a data-driven solution for better decision-making.

# Features:
1.KPI Cards (Fuel, Emissions)
2.Interactive Charts (Recharts)
3.Ship Filter (Dynamic Data)
3.Data Table with Highlights
4.AI Insight Recommendations
5.Fully Responsive UI

# Tech Stack
1.Frontend -- React
2.Build Tool--Vite
3.Styling--Tailwind CSS
4.Charts--Recharts
5.Language--JavaScript

# Configuration 
 1.Clone the repo
 # git clone https://github.com/your-username/fleet-energy-dashboard.git
 # cd fleet-energy-dashboard

 2️.Install dependencies
 # npm install
 # npm install -D tailwindcss@3 postcss autoprefixer
 # npx tailwindcss init -p

 3️.Run the project
 # npm run dev

# How I Built It
 1.Set up a React project using Vite
 2.Installed and configured Tailwind CSS for styling
 3.Created reusable components for modular architecture
 4.Used mock JSON data to simulate backend API
 5.Implemented filtering logic for dynamic UI updates
 6.Integrated charts using Recharts for data visualization
 7.Added AI insight logic to simulate intelligent recommendations
 8.Ensured responsive design for different screen sizes

# Key Implemention 
1. State Management

Used React useState to manage selected filters and update UI dynamically.

2. Data Filtering

Implemented conditional filtering based on selected ship:

const filteredData =
  selectedShip === "All"
    ? mockData
    : mockData.filter(d => d.ship === selectedShip);

3. AI Logic (Simulated)

const insight =
  totalFuel > threshold
    ? "High fuel consumption detected"
    : "Performance is optimal";

# Data Source

Currently uses mock data to simulate:
1.Ship-wise fuel consumption
2.Emissions data over time

Future improvement:
Replace with real API integration

# Future Improvements
1.API integration (Node.js / Python backend)
2.Authentication system (Login page)
3.Advanced filtering (date range, routes)
4.Real AI/ML model integration
5.Export reports (PDF/CSV)
6.Performance optimization

# GitHub Repository
 # https://github.com/Hrutuja182/Fleet-Energy-Dashboard


