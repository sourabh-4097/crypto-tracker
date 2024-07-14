# crypto-tracker

This is mini-website to collect and display real-time crypto currency data.

The real time data for coin will be updated every 10 seconds

**backend**

## Setup

1. Install dependencies to `/backend` directory:
   ```sh
   npm install
   ```

2. Create a `.env` file and add secrets:
   ```
   MONGO_URI=mongodb+srv://crypto-tracker:crypto9091@mern.n1t5a.mongodb.net/?retryWrites=true&w=majority&appName=crypto-tracker
   LIVE_COIN_WATCH_API_KEY=9ca9a659-1bf0-438a-9607-c2c87efbcafe
   ```

3. Start the server ( backend will start on `http://localhost:3000` ):
   ```sh
   npm run dev
   ```

## Endpoints

- `GET /api/stocks/:symbol` - Fetch stock data for a specific symbol.
- `GET /api/stocks/latest/:symbol` - Fetch the latest 20 data entries for a specific symbol.
```

**frontend**
```md
# Frontend

## Setup

1. Install dependencies to frontend directory:
   ```sh
   npm install
   ```

2. Run the development server:
   ```sh
   npm run dev
   ```

## Usage

1. Open `http://localhost:3000` in your browser.
2. The table will display real-time data for the default stock symbol.
3. Use the dropdown button to change the stock symbol.
```
And that's pretty much all to set up and run the app
