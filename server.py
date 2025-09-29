from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)  # Allow requests from frontend

# Set your OpenAI API key from environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/")
def serve_demo():
    return send_from_directory('.', 'demo.html')

@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No JSON data received", "success": False}), 400
            
        user_message = data.get("message", "")
        if not user_message:
            return jsonify({"error": "No message provided", "success": False}), 400
        
        # Get tourism context from the request if provided
        tourism_context = data.get("context", "")
        
        # Create system prompt for Jharkhand tourism assistant
        system_prompt = """You are Jharkhand Tourism AI Assistant, an expert on tourism in Jharkhand, India. 
        
        You help visitors with:
        - Tourist attractions and destinations in Jharkhand
        - Travel planning and itineraries for Jharkhand
        - Local culture and traditions of Jharkhand
        - Transportation and accommodation in Jharkhand
        - Budget planning for Jharkhand trips
        - Best times to visit Jharkhand
        - Safety and travel tips for Jharkhand
        
        Always provide helpful, accurate, and friendly responses about Jharkhand tourism. 
        If you don't know something specific about Jharkhand, say so politely and suggest general travel advice.
        
        Keep responses concise but informative. Use emojis occasionally to make responses more engaging."""
        
        # Add context if provided (can be tourism-related or general)
        if tourism_context:
            system_prompt += f"\n\nAdditional context: {tourism_context}"
        
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_message}
                ],
                max_tokens=500,
                temperature=0.7
            )
            
            reply = response.choices[0].message.content
            return jsonify({"reply": reply, "success": True})
            
        except Exception as api_error:
            print(f"OpenAI API Error: {str(api_error)}")
            # Fallback response when API is unavailable
            fallback_responses = {
                "jharkhand": "Jharkhand is a beautiful state in eastern India known for its rich tribal culture, waterfalls, and wildlife sanctuaries. Popular destinations include Ranchi, Jamshedpur, and Hazaribagh. The state offers amazing eco-tourism opportunities! 🌿",
                "tourism": "Jharkhand offers diverse tourism experiences including wildlife safaris, tribal culture, waterfalls, and historical sites. Best time to visit is October to March. 🏞️",
                "attractions": "Top attractions in Jharkhand include Betla National Park, Hundru Falls, Dassam Falls, Netarhat, and the tribal villages. Each offers unique experiences! 🦌",
                "travel": "Jharkhand is well-connected by road, rail, and air. Ranchi has an airport, and major cities are accessible by train. Local transport includes buses and taxis. 🚗"
            }
            
            # Simple keyword matching for fallback
            message_lower = user_message.lower()
            for keyword, response in fallback_responses.items():
                if keyword in message_lower:
                    return jsonify({"reply": response, "success": True})
            
            # Default fallback
            return jsonify({
                "reply": "I'm currently experiencing technical difficulties with the AI service. However, I can tell you that Jharkhand is a wonderful destination for tourism with beautiful landscapes, rich culture, and amazing wildlife! Please try again later or contact our support team. 😊", 
                "success": True
            })
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e), "success": False}), 500

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy", "message": "Jharkhand Tourism AI Server is running"})

if __name__ == "__main__":
    print("Starting Jharkhand Tourism AI Server...")
    print("Make sure to set your OPENAI_API_KEY environment variable")
    app.run(debug=True, port=5000)