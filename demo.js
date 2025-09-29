// JavaScript for Jharkhand Tourism Platform - Enhanced Version
// All functionality works without backend - uses predefined data

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Setup budget slider
    setupBudgetSlider();
    
    // Setup form submission
    setupTripForm();
    
    // Setup chatbot
    setupChatbot();
    setupEnhancedChatbot();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup scroll to top
    setupScrollToTop();
    
    // Setup navbar scroll effect
    setupNavbarScroll();
    
    // Setup intersection observer for animations
    setupScrollAnimations();
    
    // Setup data visualization
    setupDataVisualization();
    
    // Add sample questions to chatbot
    setTimeout(addSampleQuestions, 1000);
}

// Budget Slider Setup
function setupBudgetSlider() {
    const budgetSlider = document.getElementById('budget');
    const budgetValue = document.getElementById('budgetValue');
    
    if (budgetSlider && budgetValue) {
        budgetSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            budgetValue.textContent = `₹${value.toLocaleString()}`;
        });
    }
}

// Trip Form Setup
function setupTripForm() {
    const tripForm = document.getElementById('tripForm');
    const newSearchBtn = document.getElementById('newSearch');
    
    if (tripForm) {
        tripForm.addEventListener('submit', handleTripSubmission);
    }
    
    if (newSearchBtn) {
        newSearchBtn.addEventListener('click', resetForm);
    }
}

function handleTripSubmission(e) {
    e.preventDefault();
    
    // Get form data
    const formData = getFormData();
    
    // Validate form
    const errors = validateForm(formData);
    if (errors.length > 0) {
        showEnhancedError(errors.join(', '));
        return;
    }
    
    // Show loading state
    showLoadingState();
    
    // Simulate API call delay for demo
    setTimeout(() => {
        // Generate recommendations using local data
        const itinerary = generateItinerary(formData);
        
        hideLoadingState();
        
        if (itinerary) {
            displayItinerary(itinerary);
            scrollToResults();
            showSuccessNotification('Your personalized itinerary has been generated successfully!');
        } else {
            showEnhancedError('Failed to generate recommendations. Please try again.');
        }
    }, 1500); // 1.5 second delay to simulate API call
}

function getFormData() {
    const interests = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    const budget = parseInt(document.getElementById('budget').value);
    const duration = parseInt(document.getElementById('duration').value);
    const region = document.getElementById('region').value;
    
    return {
        interests: interests,
        budget: budget,
        duration: duration,
        region: region
    };
}

function generateItinerary(formData) {
    // Get recommended spots based on user preferences
    const recommendedSpots = getRecommendedSpots(formData);
    
    if (recommendedSpots.length === 0) {
        return null;
    }
    
    // Generate itinerary structure
    const itinerary = {
        days: [],
        total_cost: 0,
        accommodations: []
    };
    
    // Distribute spots across days
    const spotsPerDay = Math.ceil(recommendedSpots.length / formData.duration);
    
    for (let day = 0; day < formData.duration; day++) {
        const daySpots = recommendedSpots.slice(day * spotsPerDay, (day + 1) * spotsPerDay);
        
        const dayPlan = {
            day: day + 1,
            spots: daySpots.map(spot => ({
                name: spot.name,
                location: spot.location,
                description: spot.description,
                cost: spot.cost_per_person,
                duration: spot.duration_hours,
                best_time: spot.best_time_to_visit,
                eco_score: spot.eco_friendly_score
            })),
            estimated_cost: 0
        };
        
        // Calculate day cost
        dayPlan.estimated_cost = daySpots.reduce((total, spot) => total + spot.cost_per_person, 0);
        
        itinerary.days.push(dayPlan);
        itinerary.total_cost += dayPlan.estimated_cost;
    }
    
    // Add accommodations
    const accommodations = getRecommendedAccommodations(formData.duration, itinerary.spots, formData.budget);
    itinerary.accommodations = accommodations;
    itinerary.total_cost += accommodations.reduce((total, acc) => total + acc.price_per_night, 0);
    
    return itinerary;
}

function getRecommendedSpots(formData) {
    let spots = [...tourismData.touristSpots];
    
    // Filter by interests if specified
    if (formData.interests.length > 0) {
        spots = spots.filter(spot => 
            formData.interests.some(interest => 
                spot.category.toLowerCase().includes(interest.toLowerCase())
            )
        );
    }
    
    // Filter by region if specified
    if (formData.region) {
        spots = spots.filter(spot => 
            spot.location.toLowerCase().includes(formData.region.toLowerCase())
        );
    }
    
    // If no spots match criteria, use all spots
    if (spots.length === 0) {
        spots = [...tourismData.touristSpots];
    }
    
    // Sort by eco-friendly score and cost
    spots.sort((a, b) => {
        if (b.eco_friendly_score !== a.eco_friendly_score) {
            return b.eco_friendly_score - a.eco_friendly_score;
        }
        return a.cost_per_person - b.cost_per_person;
    });
    
    // Limit based on budget and duration
    const maxSpots = Math.min(spots.length, formData.duration * 2);
    return spots.slice(0, maxSpots);
}

function getRecommendedAccommodations(duration, selectedSpots = [], budget = 5000) {
    const accommodations = tourismData.accommodations;
    
    // If we have selected spots, find accommodations near them
    if (selectedSpots.length > 0) {
        // Create a map of attractions to their locations
        const attractionLocations = {};
        selectedSpots.forEach(spot => {
            attractionLocations[spot.name] = spot.location;
        });
        
        // Filter accommodations that are near selected attractions
        let nearbyAccommodations = accommodations.filter(acc => {
            return acc.near_attractions && acc.near_attractions.some(attraction => 
                selectedSpots.some(spot => spot.name === attraction)
            );
        });
        
        // If no specific nearby accommodations, filter by location
        if (nearbyAccommodations.length === 0) {
            const selectedLocations = [...new Set(selectedSpots.map(spot => spot.location))];
            nearbyAccommodations = accommodations.filter(acc => 
                selectedLocations.includes(acc.location)
            );
        }
        
        // Filter by budget (accommodation should be within 1/3 of daily budget)
        const dailyBudget = budget / Math.max(selectedSpots.length, 1);
        let budgetFiltered = nearbyAccommodations.filter(acc => acc.price_per_night <= dailyBudget);
        
        // If no accommodations within budget, show cheapest nearby options
        if (budgetFiltered.length === 0) {
            budgetFiltered = nearbyAccommodations.sort((a, b) => a.price_per_night - b.price_per_night);
        }
        
        // Group by location to get variety
        const locationGroups = {};
        budgetFiltered.forEach(acc => {
            if (!locationGroups[acc.location]) {
                locationGroups[acc.location] = [];
            }
            locationGroups[acc.location].push(acc);
        });
        
        // Select best from each location (up to 3 locations)
        const recommended = [];
        Object.keys(locationGroups).slice(0, 3).forEach(location => {
            const bestAccommodation = locationGroups[location].sort((a, b) => {
                // Prioritize by rating, then by eco-friendly status
                if (b.rating !== a.rating) return b.rating - a.rating;
                return b.eco_friendly - a.eco_friendly;
            })[0];
            recommended.push(bestAccommodation);
        });
        
        // If still no recommendations, add top-rated accommodations from any location
        if (recommended.length === 0) {
            const fallbackAccommodations = accommodations
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 3);
            recommended.push(...fallbackAccommodations);
        }
        
        return recommended.slice(0, 3); // Return maximum 3 recommendations
    }
    
    // Fallback: Get accommodations based on duration (original logic)
    const accommodations_subset = accommodations.slice(0, Math.min(duration, accommodations.length));
    return accommodations_subset.map(acc => ({
        name: acc.name,
        type: acc.type,
        location: acc.location,
        price_per_night: acc.price_per_night,
        rating: acc.rating,
        eco_friendly: acc.eco_friendly,
        near_attractions: acc.near_attractions,
        distance_from_attractions: acc.distance_from_attractions
    }));
}

function displayItinerary(itinerary) {
    const resultsSection = document.getElementById('results');
    const itineraryResults = document.getElementById('itineraryResults');
    
    // Clear previous results
    itineraryResults.innerHTML = '';
    
    // Display each day
    itinerary.days.forEach(day => {
        const dayCard = createDayCard(day);
        itineraryResults.appendChild(dayCard);
    });
    
    // Add cost summary
    const costSummary = createCostSummary(itinerary);
    itineraryResults.appendChild(costSummary);
    
    // Add accommodations
    if (itinerary.accommodations && itinerary.accommodations.length > 0) {
        const accommodationCard = createAccommodationCard(itinerary.accommodations);
        itineraryResults.appendChild(accommodationCard);
    }
    
    // Show results section
    resultsSection.style.display = 'block';
    resultsSection.classList.add('fade-in');
}

function createDayCard(day) {
    const dayCard = document.createElement('div');
    dayCard.className = 'col-lg-6 mb-4';
    
    dayCard.innerHTML = `
        <div class="itinerary-card slide-up">
            <div class="day-header">
                <h3>Day ${day.day}</h3>
                <p class="mb-0">Estimated Cost: ₹${day.estimated_cost.toLocaleString()}</p>
            </div>
            <div class="day-content">
                ${day.spots.map(spot => createSpotCard(spot)).join('')}
            </div>
        </div>
    `;
    
    return dayCard;
}

function createSpotCard(spot) {
    return `
        <div class="spot-card">
            <div class="spot-name">${spot.name}</div>
            <div class="spot-location">
                <i class="fas fa-map-marker-alt"></i> ${spot.location}
            </div>
            <div class="spot-description">${spot.description}</div>
            <div class="spot-details">
                <div class="detail-item">
                    <i class="fas fa-rupee-sign"></i>
                    <span>₹${spot.cost}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${spot.duration} hours</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${spot.best_time}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-leaf"></i>
                    <span class="eco-score">Eco Score: ${spot.eco_score}/10</span>
                </div>
            </div>
        </div>
    `;
}

function createCostSummary(itinerary) {
    const costSummary = document.createElement('div');
    costSummary.className = 'col-12 mb-4';
    
    costSummary.innerHTML = `
        <div class="cost-summary">
            <h4><i class="fas fa-calculator"></i> Total Estimated Cost</h4>
            <p class="total-cost">₹${itinerary.total_cost.toLocaleString()}</p>
            <p class="mb-0">This includes entrance fees, activities, and accommodation costs</p>
        </div>
    `;
    
    return costSummary;
}

function createAccommodationCard(accommodations) {
    const accommodationCard = document.createElement('div');
    accommodationCard.className = 'col-12 mb-4';
    
    const accommodationHTML = accommodations.map(acc => `
        <div class="card mb-3 accommodation-item">
            <div class="card-body">
                <div class="row align-items-start">
                    <div class="col-md-8">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title mb-0">${acc.name}</h5>
                            <div class="rating-badge">
                                <i class="fas fa-star text-warning"></i> ${acc.rating}
                            </div>
                        </div>
                        <p class="card-text text-muted mb-2">
                            <i class="fas fa-bed"></i> ${acc.type.charAt(0).toUpperCase() + acc.type.slice(1)} • 
                            <i class="fas fa-map-marker-alt"></i> ${acc.location}
                            ${acc.eco_friendly ? ' • <i class="fas fa-leaf text-success"></i> Eco-Friendly' : ''}
                        </p>
                        ${acc.near_attractions ? `
                            <div class="nearby-attractions mb-2">
                                <small class="text-primary fw-bold">
                                    <i class="fas fa-map-signs"></i> Near: ${acc.near_attractions.join(', ')}
                                </small>
                            </div>
                        ` : ''}
                        ${acc.distance_from_attractions ? `
                            <div class="distance-info">
                                <small class="text-info">
                                    <i class="fas fa-route"></i> ${acc.distance_from_attractions}
                                </small>
                            </div>
                        ` : ''}
                    </div>
                    <div class="col-md-4 text-md-end">
                        <div class="price-info mb-2">
                            <div class="h5 text-primary mb-0">₹${acc.price_per_night.toLocaleString()}/night</div>
                            <small class="text-muted">Starting from</small>
                        </div>
                        <div class="accommodation-badges">
                            ${acc.eco_friendly ? '<span class="badge bg-success me-1">Eco-Friendly</span>' : ''}
                            <span class="badge bg-${getAccommodationTypeColor(acc.type)}">${acc.type.charAt(0).toUpperCase() + acc.type.slice(1)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    accommodationCard.innerHTML = `
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h5 class="mb-0">
                    <i class="fas fa-bed"></i> Recommended Accommodations
                    <small class="ms-2 opacity-75">Near your selected attractions</small>
                </h5>
            </div>
            <div class="card-body">
                ${accommodationHTML}
                <div class="text-center mt-3">
                    <small class="text-muted">
                        <i class="fas fa-info-circle"></i> 
                        All accommodations are strategically located near your selected tourist attractions for convenience.
                    </small>
                </div>
            </div>
        </div>
    `;
    
    return accommodationCard;
}

function getAccommodationTypeColor(type) {
    const colors = {
        'hotel': 'primary',
        'resort': 'success',
        'homestay': 'warning'
    };
    return colors[type] || 'secondary';
}

// Chatbot Setup
function setupChatbot() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendMessage');
    const clearBtn = document.getElementById('clearChat');
    
    if (chatInput && sendBtn) {
        // Enable/disable send button based on input
        chatInput.addEventListener('input', function() {
            sendBtn.disabled = !this.value.trim();
        });
        
        sendBtn.addEventListener('click', sendChatMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !sendBtn.disabled) {
                sendChatMessage();
            }
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearChat);
    }
    
    
    // Setup help panel buttons
    setupHelpPanel();
}

async function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        // Get AI response
        const response = await getEnhancedChatbotResponse(message);
        
        // Hide typing indicator and show response
    setTimeout(() => {
        hideTypingIndicator();
        addMessageToChat(response, 'bot');
    }, 1000);
        
    } catch (error) {
        console.error('Error getting chatbot response:', error);
        setTimeout(() => {
            hideTypingIndicator();
            addMessageToChat('Sorry, I encountered an error. Please try again.', 'bot');
    }, 1000);
    }
}

// Enhanced AI Chatbot Integration
const AI_SERVER_URL = 'http://localhost:5000';

// Check if AI server is available
async function checkAIServer() {
    try {
        const response = await fetch(`${AI_SERVER_URL}/health`);
        const data = await response.json();
        return data.status === 'healthy';
    } catch (error) {
        console.log('AI Server not available, using fallback responses');
        return false;
    }
}

// Enhanced chatbot response with AI integration
async function getEnhancedChatbotResponse(message) {
    const isAIAvailable = await checkAIServer();
    
    if (isAIAvailable) {
        try {
            // Get tourism context from our data
            const tourismContext = getTourismContext(message);
            
            const response = await fetch(`${AI_SERVER_URL}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    context: tourismContext
                })
            });
            
            const data = await response.json();
            
            if (data.success && data.reply) {
                return data.reply;
            } else {
                throw new Error(data.error || 'No response from AI');
            }
        } catch (error) {
            console.error('AI Error:', error);
            // Fallback to local responses
            return getLocalChatbotResponse(message);
        }
    } else {
        // Use local responses if AI server is not available
        return getLocalChatbotResponse(message);
    }
}

// Get relevant tourism context for AI
function getTourismContext(message) {
    const lowerMessage = message.toLowerCase();
    let context = '';
    
    // Add relevant tourist spots
    const relevantSpots = tourismData.touristSpots.filter(spot => 
        lowerMessage.includes(spot.name.toLowerCase()) ||
        lowerMessage.includes(spot.location.toLowerCase()) ||
        lowerMessage.includes(spot.category.toLowerCase())
    );
    
    if (relevantSpots.length > 0) {
        context += `Relevant tourist spots: ${relevantSpots.map(spot => 
            `${spot.name} (${spot.location}) - ${spot.description}`
        ).join('; ')}. `;
    }
    
    // Add accommodation info if mentioned
    if (lowerMessage.includes('hotel') || lowerMessage.includes('accommodation') || lowerMessage.includes('stay')) {
        const accommodations = tourismData.accommodations.slice(0, 5);
        context += `Accommodation options: ${accommodations.map(acc => 
            `${acc.name} in ${acc.location} (₹${acc.price_per_night}/night)`
        ).join('; ')}. `;
    }
    
    return context;
}

// Local chatbot response (fallback)
function getLocalChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for keywords in the message
    for (const [keyword, response] of Object.entries(tourismData.chatbotResponses)) {
        if (lowerMessage.includes(keyword)) {
            return response;
        }
    }
    
    // Check FAQs for exact matches
    for (const faq of tourismData.faqs) {
        if (lowerMessage.includes(faq.question.toLowerCase()) || 
            faq.question.toLowerCase().includes(lowerMessage)) {
            return faq.answer;
        }
    }
    
    // Default responses
    const randomIndex = Math.floor(Math.random() * tourismData.defaultResponses.length);
    return tourismData.defaultResponses[randomIndex];
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const avatarIcon = sender === 'user' ? 'fas fa-user' : 'fas fa-robot';
    const senderName = sender === 'user' ? 'You' : 'Tourism Assistant';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="${avatarIcon}"></i>
        </div>
        <div class="message-content">
            <div class="message-header">
                <span class="sender-name">${senderName}</span>
                <span class="message-time">${currentTime}</span>
            </div>
            <div class="message-text">${message}</div>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';
    
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="message-header">
                <span class="sender-name">Tourism Assistant</span>
                <span class="message-time">typing...</span>
            </div>
            <div class="typing-indicator">
                <span>Thinking</span>
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Clear chat function
function clearChat() {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        chatMessages.innerHTML = `
            <div class="message bot-message">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <div class="message-header">
                        <span class="sender-name">AI Assistant</span>
                        <span class="message-time">Just now</span>
                    </div>
                    <div class="message-text">
                        Hello! I'm your AI assistant. I can help you with any topic - from general knowledge and science to travel planning, problem-solving, creative writing, and much more! What would you like to know?
                    </div>
                </div>
            </div>
        `;
    }
}


// Enhanced Chatbot Setup
function setupEnhancedChatbot() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendMessage');
    
    if (chatInput && sendBtn) {
        // Auto-resize textarea
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
            sendBtn.disabled = !this.value.trim();
        });
        
        // Add voice input capability
        if ('webkitSpeechRecognition' in window) {
            const voiceBtn = document.createElement('button');
            voiceBtn.className = 'btn btn-outline-secondary btn-sm me-2';
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            voiceBtn.title = 'Voice Input';
            
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';
            
            voiceBtn.addEventListener('click', function() {
                if (recognition.isListening) {
                    recognition.stop();
                    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
                } else {
                    recognition.start();
                    voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
                }
            });
            
            recognition.onresult = function(event) {
                const transcript = event.results[0][0].transcript;
                chatInput.value = transcript;
                chatInput.dispatchEvent(new Event('input'));
            };
            
            recognition.onend = function() {
                voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            };
            
            // Insert voice button before send button
            const inputGroup = chatInput.parentElement;
            inputGroup.insertBefore(voiceBtn, sendBtn);
        }
    }
}

// Setup help panel buttons
function setupHelpPanel() {
    // General topic buttons
    const topicBtns = document.querySelectorAll('[data-topic]');
    topicBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            const questions = {
                'science': 'Explain the latest developments in artificial intelligence',
                'history': 'Tell me about the history of ancient civilizations',
                'math': 'Help me understand calculus',
                'current-events': 'What are the latest news headlines?',
                'writing': 'Help me write a creative story',
                'coding': 'Explain how to build a web application',
                'advice': 'Give me advice on career development',
                'brainstorm': 'Help me brainstorm ideas for a new project'
            };
            
            if (questions[topic]) {
                document.getElementById('chatInput').value = questions[topic];
                sendChatMessage();
            }
        });
    });
    
    // Place buttons (tourism-related)
    const placeBtns = document.querySelectorAll('[data-place]');
    placeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const place = this.getAttribute('data-place');
            const questions = {
                'hundru': 'Tell me about Hundru Falls',
                'betla': 'What can I see at Betla National Park?',
                'netarhat': 'Tell me about Netarhat hill station',
                'deoghar': 'Tell me about Deoghar temple'
            };
            
            if (questions[place]) {
                document.getElementById('chatInput').value = questions[place];
                sendChatMessage();
            }
        });
    });
    
    // Question buttons (tourism-related)
    const questionBtns = document.querySelectorAll('[data-question]');
    questionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            const questions = {
                'best-time': 'What is the best time to visit Jharkhand?',
                'budget': 'How much should I budget for my trip?',
                'transport': 'How can I reach Jharkhand?',
                'safety': 'Is Jharkhand safe for tourists?'
            };
            
            if (questions[question]) {
                document.getElementById('chatInput').value = questions[question];
                sendChatMessage();
            }
        });
    });
}

// Data Visualization Setup
function setupDataVisualization() {
    // Wait for DOM to be ready
    setTimeout(() => {
        createCategoryChart();
        createBudgetChart();
        createEcoScoreChart();
        createRegionChart();
    }, 1000);
}

function createCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    // Count spots by category
    const categories = {};
    tourismData.touristSpots.forEach(spot => {
        categories[spot.category] = (categories[spot.category] || 0) + 1;
    });
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categories),
            datasets: [{
                data: Object.values(categories),
                backgroundColor: [
                    '#1e3a2a',
                    '#059669',
                    '#f59e0b',
                    '#dc2626',
                    '#6f42c1',
                    '#17a2b8'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function createBudgetChart() {
    const ctx = document.getElementById('budgetChart');
    if (!ctx) return;
    
    // Categorize spots by budget range
    const budgetRanges = {
        'Under ₹50': 0,
        '₹50-100': 0,
        '₹100-150': 0,
        'Above ₹150': 0
    };
    
    tourismData.touristSpots.forEach(spot => {
        if (spot.cost_per_person < 50) budgetRanges['Under ₹50']++;
        else if (spot.cost_per_person < 100) budgetRanges['₹50-100']++;
        else if (spot.cost_per_person < 150) budgetRanges['₹100-150']++;
        else budgetRanges['Above ₹150']++;
    });
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(budgetRanges),
            datasets: [{
                label: 'Number of Spots',
                data: Object.values(budgetRanges),
                backgroundColor: '#059669',
                borderColor: '#1e3a2a',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createEcoScoreChart() {
    const ctx = document.getElementById('ecoScoreChart');
    if (!ctx) return;
    
    // Count spots by eco score range
    const ecoRanges = {
        '6-7': 0,
        '7-8': 0,
        '8-9': 0,
        '9-10': 0
    };
    
    tourismData.touristSpots.forEach(spot => {
        if (spot.eco_friendly_score >= 6 && spot.eco_friendly_score < 7) ecoRanges['6-7']++;
        else if (spot.eco_friendly_score >= 7 && spot.eco_friendly_score < 8) ecoRanges['7-8']++;
        else if (spot.eco_friendly_score >= 8 && spot.eco_friendly_score < 9) ecoRanges['8-9']++;
        else if (spot.eco_friendly_score >= 9) ecoRanges['9-10']++;
    });
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(ecoRanges),
            datasets: [{
                label: 'Eco-Friendly Score',
                data: Object.values(ecoRanges),
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createRegionChart() {
    const ctx = document.getElementById('regionChart');
    if (!ctx) return;
    
    // Count spots by region
    const regions = {};
    tourismData.touristSpots.forEach(spot => {
        regions[spot.location] = (regions[spot.location] || 0) + 1;
    });
    
    // Sort by count and take top 8
    const sortedRegions = Object.entries(regions)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);
    
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: sortedRegions.map(item => item[0]),
            datasets: [{
                data: sortedRegions.map(item => item[1]),
                backgroundColor: [
                    '#1e3a2a',
                    '#059669',
                    '#f59e0b',
                    '#dc2626',
                    '#6f42c1',
                    '#17a2b8',
                    '#28a745',
                    '#ffc107'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Setup scroll animations using Intersection Observer
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, .section-header, .itinerary-card').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced form validation
function validateForm(formData) {
    const errors = [];
    
    if (formData.interests.length === 0) {
        errors.push('Please select at least one interest');
    }
    
    if (formData.budget < 1000) {
        errors.push('Minimum budget should be ₹1,000');
    }
    
    if (formData.duration < 1) {
        errors.push('Duration must be at least 1 day');
    }
    
    return errors;
}

// Enhanced error display
function showEnhancedError(message) {
    // Remove existing alerts
    document.querySelectorAll('.alert').forEach(alert => alert.remove());
    
    const errorAlert = document.createElement('div');
    errorAlert.className = 'alert alert-danger alert-dismissible fade show';
    errorAlert.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-exclamation-triangle me-2"></i>
            <div>
                <strong>Error:</strong> ${message}
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert at the top of the form
    const form = document.getElementById('tripForm');
    form.insertBefore(errorAlert, form.firstChild);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        errorAlert.remove();
    }, 5000);
    
    // Scroll to error
    errorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Enhanced success notification
function showSuccessNotification(message) {
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success alert-dismissible fade show position-fixed';
    successAlert.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    successAlert.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-check-circle me-2"></i>
            <div>
                <strong>Success:</strong> ${message}
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(successAlert);
    
    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        successAlert.remove();
    }, 3000);
}

function showLoadingState() {
    const submitBtn = document.querySelector('#tripForm button[type="submit"]');
    if (submitBtn) {
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Generating Recommendations...';
        submitBtn.disabled = true;
    }
}

function hideLoadingState() {
    const submitBtn = document.querySelector('#tripForm button[type="submit"]');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-search"></i> Get Recommendations';
        submitBtn.disabled = false;
    }
}

function showError(message) {
    // Create error alert
    const errorAlert = document.createElement('div');
    errorAlert.className = 'alert alert-danger alert-dismissible fade show';
    errorAlert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert at the top of the form
    const form = document.getElementById('tripForm');
    form.insertBefore(errorAlert, form.firstChild);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        errorAlert.remove();
    }, 5000);
}

function resetForm() {
    // Reset form
    document.getElementById('tripForm').reset();
    
    // Reset budget display
    const budgetValue = document.getElementById('budgetValue');
    if (budgetValue) {
        budgetValue.textContent = '₹10,000';
    }
    
    // Hide results
    const resultsSection = document.getElementById('results');
    resultsSection.style.display = 'none';
    
    // Scroll to form
    document.getElementById('recommend').scrollIntoView({ behavior: 'smooth' });
}

function scrollToResults() {
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// Scroll to top functionality
function setupScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
