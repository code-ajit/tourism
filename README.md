# Jharkhand Tourism AI Chatbot

A smart tourism platform for Jharkhand with an AI-powered chatbot that helps visitors plan their trips and get information about tourist destinations.

## Features

- 🏔️ **Smart Trip Planner**: Personalized itinerary generation based on interests, budget, and duration
- 🤖 **AI Chatbot**: GPT-4 powered assistant for answering tourism queries
- 📊 **Data Visualization**: Interactive charts showing tourism statistics
- 📱 **Responsive Design**: Works on all devices
- ♿ **Accessibility**: Screen reader friendly with proper ARIA labels
- 🎨 **Modern UI**: Beautiful animations and smooth transitions

## Quick Start

### Option 1: Basic Version (No AI)
1. Open `demo.html` in your browser
2. The chatbot will use predefined responses

### Option 2: AI-Powered Version
1. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Set up OpenAI API key**:
   - Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a `.env` file:
     ```
     OPENAI_API_KEY=your_actual_api_key_here
     ```

3. **Start the AI server**:
   ```bash
   python server.py
   ```

4. **Open the website**:
   - Open `demo.html` in your browser
   - The chatbot will now use GPT-4 for intelligent responses

## File Structure

```
├── demo.html          # Main website
├── demo.js            # Frontend JavaScript
├── data.js            # Tourism data
├── server.py          # AI backend server
├── requirements.txt   # Python dependencies
└── setup.sh          # Setup script (Linux/Mac)
```

## API Endpoints

- `GET /health` - Check server status
- `POST /chat` - Send message to AI chatbot

## Tourism Data

The platform includes comprehensive data about:
- 33+ tourist spots across Jharkhand
- Accommodation options with pricing
- Regional distribution and categories
- Eco-friendly scores and ratings
- Budget ranges and recommendations

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Python Flask
- **AI**: OpenAI GPT-4 API
- **Charts**: Chart.js
- **UI Framework**: Bootstrap 5.3
- **Icons**: Font Awesome 6.4

## Hackathon Ready

This project is perfect for hackathons because:
- ✅ No complex setup required
- ✅ Works offline (basic version)
- ✅ AI integration available
- ✅ Professional UI/UX
- ✅ Comprehensive tourism data
- ✅ Mobile responsive
- ✅ Accessibility compliant

## Demo Scenarios

1. **Trip Planning**: "Plan a 3-day trip to Ranchi with nature focus"
2. **Attraction Info**: "Tell me about Hundru Falls"
3. **Budget Planning**: "What's the cost for a 2-day trip?"
4. **Accommodation**: "Suggest hotels near Betla National Park"
5. **General Info**: "What's the best time to visit Jharkhand?"

## Troubleshooting

- **CORS Errors**: Make sure the Python server is running
- **API Errors**: Check your OpenAI API key in `.env` file
- **Loading Issues**: Refresh the page or check browser console

## License

This project is created for educational and hackathon purposes.