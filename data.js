// Tourism Data for Jharkhand - Standalone Demo
// All data is predefined in JavaScript for demo purposes
// Data curated based on Wikipedia and official tourism sources

const tourismData = {
    // Tourist Spots Data - Accurate region-wise and interest-based categorization
    touristSpots: [
        // RANCHI DISTRICT - Capital Region
        {
            id: 1,
            name: "Hundru Falls",
            category: "nature",
            location: "Ranchi",
            description: "One of the tallest waterfalls in Jharkhand at 320 feet, surrounded by dense forests and rocky terrain. Perfect for nature photography and adventure enthusiasts.",
            cost_per_person: 60,
            best_time_to_visit: "October to March",
            duration_hours: 4,
            latitude: 23.3441,
            longitude: 85.3096,
            eco_friendly_score: 9
        },
        {
            id: 2,
            name: "Dassam Falls",
            category: "nature",
            location: "Ranchi",
            description: "Stunning waterfall cascading from 144 feet height near Taimara village. Known for its ten streams creating a spectacular natural wonder.",
            cost_per_person: 50,
            best_time_to_visit: "October to March",
            duration_hours: 3,
            latitude: 23.3441,
            longitude: 85.3096,
            eco_friendly_score: 8
        },
        {
            id: 3,
            name: "Jonha Falls",
            category: "nature",
            location: "Ranchi",
            description: "Also known as Gautamdhara, this beautiful waterfall is surrounded by lush green forests and offers a peaceful retreat.",
            cost_per_person: 45,
            best_time_to_visit: "October to March",
            duration_hours: 3,
            latitude: 23.3441,
            longitude: 85.3096,
            eco_friendly_score: 8
        },
        {
            id: 4,
            name: "Jagannath Temple",
            category: "religious",
            location: "Ranchi",
            description: "Ancient temple dedicated to Lord Jagannath with exquisite architectural style. Famous for the annual Rath Yatra festival.",
            cost_per_person: 20,
            best_time_to_visit: "All year (Best during Rath Yatra)",
            duration_hours: 2,
            latitude: 23.3441,
            longitude: 85.3096,
            eco_friendly_score: 6
        },
        {
            id: 5,
            name: "Rock Garden",
            category: "nature",
            location: "Ranchi",
            description: "Artistic garden constructed from rocks and plants, offering picturesque views and a peaceful environment for visitors.",
            cost_per_person: 30,
            best_time_to_visit: "All year",
            duration_hours: 2,
            latitude: 23.3441,
            longitude: 85.3096,
            eco_friendly_score: 8
        },
        {
            id: 6,
            name: "Tagore Hill",
            category: "culture",
            location: "Ranchi",
            description: "Scenic hill dedicated to poet Rabindranath Tagore, providing tranquil surroundings and panoramic views of Ranchi city.",
            cost_per_person: 25,
            best_time_to_visit: "All year",
            duration_hours: 3,
            latitude: 23.3441,
            longitude: 85.3096,
            eco_friendly_score: 8
        },
        {
            id: 7,
            name: "Kanke Dam",
            category: "nature",
            location: "Ranchi",
            description: "Artificial water reservoir known for its picturesque views and recreational activities like boating and fishing.",
            cost_per_person: 40,
            best_time_to_visit: "October to March",
            duration_hours: 3,
            latitude: 23.3441,
            longitude: 85.3096,
            eco_friendly_score: 7
        },
        {
            id: 8,
            name: "Deer Park",
            category: "wildlife",
            location: "Ranchi",
            description: "Tranquil park featuring a variety of deer species, perfect for family outings and nature walks.",
            cost_per_person: 35,
            best_time_to_visit: "All year",
            duration_hours: 2,
            latitude: 23.3441,
            longitude: 85.3096,
            eco_friendly_score: 9
        },

        // EAST SINGHBHUM (JAMSHEDPUR) DISTRICT
        {
            id: 9,
            name: "Dalma Wildlife Sanctuary",
            category: "wildlife",
            location: "Jamshedpur",
            description: "Renowned for its elephant population and offers trekking routes through dense forests with rich biodiversity.",
            cost_per_person: 80,
            best_time_to_visit: "November to March",
            duration_hours: 5,
            latitude: 22.8,
            longitude: 86.2,
            eco_friendly_score: 9
        },
        {
            id: 10,
            name: "Tata Steel Zoological Park",
            category: "wildlife",
            location: "Jamshedpur",
            description: "Situated beside Jubilee Park, this zoo offers variety of flora and fauna in conditions close to their natural habitat.",
            cost_per_person: 50,
            best_time_to_visit: "All year",
            duration_hours: 3,
            latitude: 22.8,
            longitude: 86.2,
            eco_friendly_score: 7
        },
        {
            id: 11,
            name: "Dimna Lake",
            category: "nature",
            location: "Jamshedpur",
            description: "Artificial reservoir surrounded by hills, ideal for boating, relaxation, and nature photography.",
            cost_per_person: 60,
            best_time_to_visit: "October to March",
            duration_hours: 3,
            latitude: 22.8,
            longitude: 86.2,
            eco_friendly_score: 8
        },

        // DEOGHAR DISTRICT - Religious Tourism Hub
        {
            id: 12,
            name: "Baba Baidyanath Temple",
            category: "religious",
            location: "Deoghar",
            description: "One of the twelve Jyotirlingas in India, this temple is a significant pilgrimage site with remarkable architecture.",
            cost_per_person: 30,
            best_time_to_visit: "All year (Peak during Shravan)",
            duration_hours: 3,
            latitude: 24.4833,
            longitude: 86.7,
            eco_friendly_score: 6
        },
        {
            id: 13,
            name: "Trikut Pahar",
            category: "adventure",
            location: "Deoghar",
            description: "Mountain peak offering trekking opportunities and a ropeway ride with panoramic views of the surrounding landscape.",
            cost_per_person: 80,
            best_time_to_visit: "October to March",
            duration_hours: 4,
            latitude: 24.4833,
            longitude: 86.7,
            eco_friendly_score: 8
        },
        {
            id: 14,
            name: "Naulakha Mandir",
            category: "religious",
            location: "Deoghar",
            description: "Temple with architecture inspired by Belur Math, known for its spiritual significance and beautiful design.",
            cost_per_person: 25,
            best_time_to_visit: "All year",
            duration_hours: 2,
            latitude: 24.4833,
            longitude: 86.7,
            eco_friendly_score: 6
        },

        // LATEHAR DISTRICT - Wildlife & Nature
        {
            id: 15,
            name: "Betla National Park",
            category: "wildlife",
            location: "Latehar",
            description: "One of India's first tiger reserves with rich biodiversity including tigers, elephants, and various wildlife species.",
            cost_per_person: 120,
            best_time_to_visit: "November to March",
            duration_hours: 8,
            latitude: 23.9,
            longitude: 84.0,
            eco_friendly_score: 10
        },
        {
            id: 16,
            name: "Netarhat",
            category: "nature",
            location: "Latehar",
            description: "Known as 'Queen of Chotanagpur', this hill station offers stunning sunrise/sunset views and pleasant weather.",
            cost_per_person: 80,
            best_time_to_visit: "October to May",
            duration_hours: 5,
            latitude: 23.4833,
            longitude: 84.2667,
            eco_friendly_score: 9
        },
        {
            id: 17,
            name: "Lodh Falls",
            category: "nature",
            location: "Latehar",
            description: "The highest waterfall in Jharkhand, a majestic sight especially during the monsoon season.",
            cost_per_person: 80,
            best_time_to_visit: "July to September",
            duration_hours: 4,
            latitude: 23.4833,
            longitude: 84.2667,
            eco_friendly_score: 9
        },

        // PALAMU DISTRICT - Heritage & Wildlife
        {
            id: 18,
            name: "Palamau Tiger Reserve",
            category: "wildlife",
            location: "Palamu",
            description: "Vast reserve known for its tiger population and rich flora and fauna, offering thrilling safari experiences.",
            cost_per_person: 100,
            best_time_to_visit: "November to March",
            duration_hours: 6,
            latitude: 23.9,
            longitude: 84.0,
            eco_friendly_score: 10
        },
        {
            id: 19,
            name: "Palamau Fort",
            category: "heritage",
            location: "Palamu",
            description: "Historic fort with rich history dating back to medieval times, offering insights into the region's past.",
            cost_per_person: 30,
            best_time_to_visit: "October to March",
            duration_hours: 3,
            latitude: 23.9,
            longitude: 84.0,
            eco_friendly_score: 7
        },

        // HAZARIBAGH DISTRICT - Wildlife & Nature
        {
            id: 20,
            name: "Hazaribagh National Park",
            category: "wildlife",
            location: "Hazaribagh",
            description: "Wildlife sanctuary known for its diverse flora and fauna, including various bird species and wildlife.",
            cost_per_person: 70,
            best_time_to_visit: "November to March",
            duration_hours: 5,
            latitude: 24.0,
            longitude: 85.35,
            eco_friendly_score: 9
        },
        {
            id: 21,
            name: "Canary Hill",
            category: "nature",
            location: "Hazaribagh",
            description: "Offers panoramic views of Hazaribagh town and surrounding landscapes, perfect for photography and relaxation.",
            cost_per_person: 40,
            best_time_to_visit: "All year",
            duration_hours: 3,
            latitude: 24.0,
            longitude: 85.35,
            eco_friendly_score: 8
        },
        {
            id: 22,
            name: "Hazaribagh Jheel",
            category: "nature",
            location: "Hazaribagh",
            description: "A serene lake ideal for relaxation, boating, and bird watching in a peaceful natural setting.",
            cost_per_person: 50,
            best_time_to_visit: "October to March",
            duration_hours: 3,
            latitude: 24.0,
            longitude: 85.35,
            eco_friendly_score: 8
        },

        // GIRIDIH DISTRICT - Adventure & Religious
        {
            id: 23,
            name: "Parasnath Hills",
            category: "adventure",
            location: "Giridih",
            description: "Sacred hills for Jains, offering trekking opportunities and spiritual experiences with panoramic views.",
            cost_per_person: 100,
            best_time_to_visit: "October to March",
            duration_hours: 6,
            latitude: 23.9667,
            longitude: 86.1333,
            eco_friendly_score: 8
        },
        {
            id: 24,
            name: "Shikharji Temple",
            category: "religious",
            location: "Giridih",
            description: "Major pilgrimage site for Jains, located at the summit of Parasnath Hills with spiritual significance.",
            cost_per_person: 50,
            best_time_to_visit: "October to March",
            duration_hours: 4,
            latitude: 23.9667,
            longitude: 86.1333,
            eco_friendly_score: 7
        },

        // RAMGARH DISTRICT - Religious & Nature
        {
            id: 25,
            name: "Rajrappa Temple",
            category: "religious",
            location: "Ramgarh",
            description: "Dedicated to Goddess Chhinnamasta, known for its unique stone carvings and scenic location at river confluence.",
            cost_per_person: 40,
            best_time_to_visit: "All year",
            duration_hours: 2,
            latitude: 23.65,
            longitude: 85.7,
            eco_friendly_score: 7
        },

        // DHANBAD DISTRICT - Nature & Urban
        {
            id: 26,
            name: "Maithon Dam",
            category: "nature",
            location: "Dhanbad",
            description: "Scenic dam known for its beautiful surroundings and serves as a popular spot for boating and picnics.",
            cost_per_person: 50,
            best_time_to_visit: "October to March",
            duration_hours: 3,
            latitude: 23.7,
            longitude: 86.8,
            eco_friendly_score: 7
        },
        {
            id: 27,
            name: "Topchanchi Lake",
            category: "nature",
            location: "Dhanbad",
            description: "A serene spot ideal for picnics and relaxation, surrounded by natural beauty and peaceful environment.",
            cost_per_person: 40,
            best_time_to_visit: "October to March",
            duration_hours: 3,
            latitude: 23.7,
            longitude: 86.8,
            eco_friendly_score: 8
        },

        // BOKARO DISTRICT - Urban & Nature
        {
            id: 28,
            name: "Jawaharlal Nehru Biological Park",
            category: "wildlife",
            location: "Bokaro",
            description: "A well-maintained zoo with diverse species, offering educational experiences and wildlife viewing.",
            cost_per_person: 60,
            best_time_to_visit: "All year",
            duration_hours: 3,
            latitude: 23.67,
            longitude: 86.15,
            eco_friendly_score: 7
        },
        {
            id: 29,
            name: "City Park",
            category: "nature",
            location: "Bokaro",
            description: "Large park with an artificial lake, perfect for family outings, jogging, and recreational activities.",
            cost_per_person: 30,
            best_time_to_visit: "All year",
            duration_hours: 2,
            latitude: 23.67,
            longitude: 86.15,
            eco_friendly_score: 8
        },

        // EAST SINGHBHUM (GHATSHILA) - Nature & Adventure
        {
            id: 30,
            name: "Dharagiri Falls",
            category: "nature",
            location: "Ghatshila",
            description: "A 25-foot waterfall, especially magnificent during monsoon season, surrounded by lush greenery.",
            cost_per_person: 45,
            best_time_to_visit: "July to September",
            duration_hours: 3,
            latitude: 22.6,
            longitude: 86.5,
            eco_friendly_score: 8
        },
        {
            id: 31,
            name: "Burudih Lake",
            category: "nature",
            location: "Ghatshila",
            description: "Offers scenic boating opportunities and peaceful surroundings for relaxation and nature appreciation.",
            cost_per_person: 50,
            best_time_to_visit: "October to March",
            duration_hours: 3,
            latitude: 22.6,
            longitude: 86.5,
            eco_friendly_score: 8
        },

        // CULTURAL EXPERIENCES (Various Locations)
        {
            id: 32,
            name: "Tribal Culture Village",
            category: "culture",
            location: "Ranchi",
            description: "Experience authentic tribal culture, traditional dances, handicrafts, and local cuisine of Jharkhand's indigenous communities.",
            cost_per_person: 150,
            best_time_to_visit: "All year",
            duration_hours: 4,
            latitude: 23.3441,
            longitude: 85.3096,
            eco_friendly_score: 10
        },
        {
            id: 33,
            name: "Chhau Dance Performance",
            category: "culture",
            location: "Seraikela",
            description: "Experience the traditional Chhau dance, a UNESCO Intangible Cultural Heritage, performed by local artists.",
            cost_per_person: 100,
            best_time_to_visit: "March to April (Chaitra Parva)",
            duration_hours: 2,
            latitude: 22.7,
            longitude: 86.0,
            eco_friendly_score: 9
        }
    ],

    // Accommodations Data - Location-specific and accurate based on research
    accommodations: [
        // RANCHI DISTRICT - Near Waterfalls and City Attractions
        {
            id: 1,
            name: "Hotel Capitol Hill",
            type: "hotel",
            location: "Ranchi",
            price_per_night: 1800,
            rating: 4.3,
            eco_friendly: false,
            near_attractions: ["Hundru Falls", "Dassam Falls", "Jonha Falls"],
            distance_from_attractions: "2-5 km from major waterfalls"
        },
        {
            id: 2,
            name: "Green Acres Resort",
            type: "resort",
            location: "Ranchi",
            price_per_night: 2200,
            rating: 4.4,
            eco_friendly: true,
            near_attractions: ["Rock Garden", "Kanke Dam"],
            distance_from_attractions: "1-3 km from city attractions"
        },
        {
            id: 3,
            name: "Hotel Radisson Blu",
            type: "hotel",
            location: "Ranchi",
            price_per_night: 3500,
            rating: 4.6,
            eco_friendly: false,
            near_attractions: ["Jagannath Temple", "Tagore Hill"],
            distance_from_attractions: "1-2 km from city center"
        },
        {
            id: 4,
            name: "Budget Inn Ranchi",
            type: "hotel",
            location: "Ranchi",
            price_per_night: 1200,
            rating: 3.9,
            eco_friendly: false,
            near_attractions: ["Deer Park", "Rock Garden"],
            distance_from_attractions: "1-4 km from attractions"
        },
        
        // EAST SINGHBHUM (JAMSHEDPUR) DISTRICT - Near Wildlife Attractions
        {
            id: 5,
            name: "The Sonnet Jamshedpur",
            type: "hotel",
            location: "Jamshedpur",
            price_per_night: 2800,
            rating: 4.5,
            eco_friendly: false,
            near_attractions: ["Tata Steel Zoological Park", "Dimna Lake"],
            distance_from_attractions: "0.8 km from zoo, 2 km from lake"
        },
        {
            id: 6,
            name: "Vivanta Jamshedpur Golmuri",
            type: "hotel",
            location: "Jamshedpur",
            price_per_night: 4200,
            rating: 4.7,
            eco_friendly: false,
            near_attractions: ["Tata Steel Zoological Park", "Dalma Wildlife Sanctuary"],
            distance_from_attractions: "3.7 km from zoo, 15 km from sanctuary"
        },
        {
            id: 7,
            name: "Hotel Ganga Regency",
            type: "hotel",
            location: "Jamshedpur",
            price_per_night: 1400,
            rating: 4.1,
            eco_friendly: false,
            near_attractions: ["Tata Steel Zoological Park"],
            distance_from_attractions: "1 km from zoo"
        },
        {
            id: 8,
            name: "The Alcor Hotel",
            type: "hotel",
            location: "Jamshedpur",
            price_per_night: 3200,
            rating: 4.4,
            eco_friendly: false,
            near_attractions: ["Tata Steel Zoological Park", "Dimna Lake"],
            distance_from_attractions: "2.5 km from zoo, 3 km from lake"
        },
        
        // DEOGHAR DISTRICT - Near Religious Sites
        {
            id: 9,
            name: "Baidyanath Dham Hotel",
            type: "hotel",
            location: "Deoghar",
            price_per_night: 1200,
            rating: 3.8,
            eco_friendly: false,
            near_attractions: ["Baba Baidyanath Temple", "Naulakha Mandir"],
            distance_from_attractions: "0.5 km from temple"
        },
        {
            id: 10,
            name: "Pilgrim Lodge",
            type: "hotel",
            location: "Deoghar",
            price_per_night: 800,
            rating: 3.6,
            eco_friendly: false,
            near_attractions: ["Baba Baidyanath Temple"],
            distance_from_attractions: "0.3 km from temple"
        },
        {
            id: 11,
            name: "Hotel Shree Vatika",
            type: "hotel",
            location: "Deoghar",
            price_per_night: 1500,
            rating: 4.0,
            eco_friendly: false,
            near_attractions: ["Baba Baidyanath Temple", "Trikut Pahar"],
            distance_from_attractions: "1 km from temple, 10 km from hills"
        },
        
        // LATEHAR DISTRICT - Near Wildlife and Hill Station
        {
            id: 12,
            name: "Netarhat Hill Resort",
            type: "resort",
            location: "Latehar",
            price_per_night: 2500,
            rating: 4.5,
            eco_friendly: true,
            near_attractions: ["Netarhat", "Betla National Park"],
            distance_from_attractions: "In Netarhat, 45 km from Betla"
        },
        {
            id: 13,
            name: "Betla Jungle Lodge",
            type: "resort",
            location: "Latehar",
            price_per_night: 1800,
            rating: 4.1,
            eco_friendly: true,
            near_attractions: ["Betla National Park", "Lodh Falls"],
            distance_from_attractions: "Inside Betla National Park"
        },
        {
            id: 14,
            name: "Wildlife Resort Palamu",
            type: "resort",
            location: "Latehar",
            price_per_night: 2000,
            rating: 4.2,
            eco_friendly: true,
            near_attractions: ["Betla National Park", "Palamau Tiger Reserve"],
            distance_from_attractions: "5 km from Betla, 15 km from Palamau"
        },
        
        // HAZARIBAGH DISTRICT - Near Wildlife Sanctuary
        {
            id: 15,
            name: "Hazaribagh Jungle Resort",
            type: "resort",
            location: "Hazaribagh",
            price_per_night: 2000,
            rating: 4.3,
            eco_friendly: true,
            near_attractions: ["Hazaribagh National Park", "Canary Hill"],
            distance_from_attractions: "2 km from park, 1 km from hill"
        },
        {
            id: 16,
            name: "Hotel Hill View",
            type: "hotel",
            location: "Hazaribagh",
            price_per_night: 1600,
            rating: 4.0,
            eco_friendly: false,
            near_attractions: ["Canary Hill", "Hazaribagh Jheel"],
            distance_from_attractions: "0.5 km from hill, 2 km from lake"
        },
        
        // PALAMU DISTRICT - Near Wildlife and Heritage
        {
            id: 17,
            name: "Wildlife Safari Camp",
            type: "resort",
            location: "Palamu",
            price_per_night: 2200,
            rating: 4.4,
            eco_friendly: true,
            near_attractions: ["Palamau Tiger Reserve", "Palamau Fort"],
            distance_from_attractions: "Inside tiger reserve"
        },
        
        // GIRIDIH DISTRICT - Near Adventure Sites
        {
            id: 18,
            name: "Parasnath Hills Resort",
            type: "resort",
            location: "Giridih",
            price_per_night: 1900,
            rating: 4.2,
            eco_friendly: true,
            near_attractions: ["Parasnath Hills", "Shikharji Temple"],
            distance_from_attractions: "At base of Parasnath Hills"
        },
        
        // DHANBAD DISTRICT - Near Nature Attractions
        {
            id: 19,
            name: "Maithon Dam Resort",
            type: "resort",
            location: "Dhanbad",
            price_per_night: 1500,
            rating: 4.0,
            eco_friendly: false,
            near_attractions: ["Maithon Dam", "Topchanchi Lake"],
            distance_from_attractions: "On Maithon Dam, 20 km from lake"
        },
        
        // BOKARO DISTRICT - Near Wildlife
        {
            id: 20,
            name: "Bokaro Steel City Hotel",
            type: "hotel",
            location: "Bokaro",
            price_per_night: 1300,
            rating: 3.9,
            eco_friendly: false,
            near_attractions: ["Jawaharlal Nehru Biological Park"],
            distance_from_attractions: "3 km from biological park"
        },
        
        // RAMGARH DISTRICT - Near Religious Sites
        {
            id: 21,
            name: "Rajrappa Temple Lodge",
            type: "hotel",
            location: "Ramgarh",
            price_per_night: 1100,
            rating: 3.7,
            eco_friendly: false,
            near_attractions: ["Rajrappa Temple"],
            distance_from_attractions: "1 km from temple"
        },
        
        // EAST SINGHBHUM (GHATSHILA) - Near Nature
        {
            id: 22,
            name: "Ghatshila Nature Resort",
            type: "resort",
            location: "Ghatshila",
            price_per_night: 1700,
            rating: 4.1,
            eco_friendly: true,
            near_attractions: ["Dharagiri Falls", "Burudih Lake"],
            distance_from_attractions: "2 km from falls, 5 km from lake"
        },
        
        // CULTURAL HOMESTAYS - Authentic Experiences
        {
            id: 23,
            name: "Tribal Heritage Homestay",
            type: "homestay",
            location: "Ranchi",
            price_per_night: 900,
            rating: 4.0,
            eco_friendly: true,
            near_attractions: ["Tribal Culture Village", "Tagore Hill"],
            distance_from_attractions: "In tribal village area"
        },
        {
            id: 24,
            name: "Traditional Village Stay",
            type: "homestay",
            location: "Latehar",
            price_per_night: 700,
            rating: 3.8,
            eco_friendly: true,
            near_attractions: ["Betla National Park"],
            distance_from_attractions: "Near tribal villages around Betla"
        },
        {
            id: 25,
            name: "Chhau Dance Village Stay",
            type: "homestay",
            location: "Seraikela",
            price_per_night: 800,
            rating: 3.9,
            eco_friendly: true,
            near_attractions: ["Chhau Dance Performance"],
            distance_from_attractions: "In Seraikela village"
        }
    ],

    // FAQ Data for Chatbot - Enhanced with accurate information
    faqs: [
        {
            question: "What is the best time to visit Jharkhand?",
            answer: "The best time to visit Jharkhand is from October to March when the weather is pleasant (15-25°C). Summers (April-June) can be hot (35-40°C), and monsoon (July-September) brings heavy rainfall. Winter is ideal for wildlife safaris and sightseeing.",
            category: "weather"
        },
        {
            question: "How much does it cost to visit Jharkhand?",
            answer: "Jharkhand is very budget-friendly for tourists. Budget travelers can expect ₹800-1500 per day, mid-range travelers ₹2000-3500 per day, while luxury travelers might spend ₹5000+ per day including accommodation, food, and activities.",
            category: "cost"
        },
        {
            question: "Is Jharkhand safe for tourists?",
            answer: "Jharkhand is generally safe for tourists. It's advisable to travel during daylight hours, especially in remote areas. Urban areas like Ranchi, Jamshedpur, and Deoghar are very safe. Follow standard travel precautions.",
            category: "safety"
        },
        {
            question: "What are the main tourist attractions in Jharkhand?",
            answer: "Top attractions include Hundru Falls, Dassam Falls, Betla National Park, Netarhat hill station, Jagannath Temple, Baidyanath Temple, Dalma Wildlife Sanctuary, and Parasnath Hills. Each region offers unique experiences.",
            category: "attractions"
        },
        {
            question: "What is the local cuisine of Jharkhand?",
            answer: "Local cuisine includes litti-chokha (wheat balls with mashed vegetables), thekua (sweet snack), handia (traditional rice beer), and various tribal delicacies. Try local restaurants and street food for authentic flavors.",
            category: "food"
        },
        {
            question: "How to reach Jharkhand?",
            answer: "Jharkhand has excellent connectivity. Ranchi has an international airport with flights from major cities. The state has a well-connected railway network. Road connectivity is good via National Highways.",
            category: "transport"
        },
        {
            question: "What adventure activities are available?",
            answer: "Jharkhand offers trekking in Parasnath Hills, wildlife safaris in Betla and Palamau Tiger Reserves, rock climbing, boating in various dams and lakes, and nature walks in national parks.",
            category: "adventure"
        },
        {
            question: "Tell me about tribal culture",
            answer: "Jharkhand has over 30 indigenous tribes including Santhal, Munda, Oraon, and Ho. Experience traditional dances like Chhau, folk music, handicrafts, and festivals like Sarhul, Karma, and Tusu.",
            category: "culture"
        },
        {
            question: "What wildlife can I see in Jharkhand?",
            answer: "Jharkhand has tigers, elephants, leopards, bears, various deer species, and over 250 bird species. Best wildlife viewing is in Betla National Park, Palamau Tiger Reserve, and Dalma Wildlife Sanctuary.",
            category: "wildlife"
        },
        {
            question: "Are there any heritage sites?",
            answer: "Yes! Jharkhand has ancient temples like Baidyanath (Jyotirlinga), historical forts like Palamau Fort, tribal villages, and archaeological sites. The state has rich cultural heritage dating back centuries.",
            category: "heritage"
        },
        {
            question: "What festivals are celebrated in Jharkhand?",
            answer: "Major festivals include Sarhul (tribal New Year), Karma (tree worship), Tusu (harvest festival), Diwali, Holi, and Durga Puja. Each tribe has unique festivals with traditional music and dance.",
            category: "festivals"
        },
        {
            question: "What is the climate like in Jharkhand?",
            answer: "Jharkhand has a subtropical climate with three distinct seasons: summer (March-June, hot and dry), monsoon (July-September, heavy rainfall), and winter (October-February, cool and pleasant).",
            category: "climate"
        }
    ],

    // Chatbot Keywords and Responses - Enhanced with accurate information
    chatbotResponses: {
        'weather': "The best time to visit Jharkhand is from October to March when the weather is pleasant (15-25°C). Summers (April-June) can be hot (35-40°C), and monsoon (July-September) brings heavy rainfall.",
        'best time': "The ideal time to visit Jharkhand is during winter (October to March) when the weather is cool and pleasant for sightseeing. This is also the best time for wildlife safaris.",
        'cost': "Jharkhand is very budget-friendly for tourists. Budget travelers can expect ₹800-1500 per day, mid-range travelers ₹2000-3500 per day, while luxury travelers might spend ₹5000+ per day.",
        'safety': "Jharkhand is generally safe for tourists. Urban areas like Ranchi, Jamshedpur, and Deoghar are very safe. It's advisable to travel during daylight hours in remote areas.",
        'transport': "Jharkhand has excellent connectivity. Ranchi has an international airport, well-connected railway network, and good road connectivity via National Highways.",
        'food': "Jharkhand offers delicious local cuisine including litti-chokha (wheat balls with mashed vegetables), thekua (sweet snack), handia (traditional rice beer), and tribal delicacies.",
        'culture': "Jharkhand has over 30 indigenous tribes including Santhal, Munda, Oraon, and Ho. Experience traditional dances like Chhau, folk music, handicrafts, and festivals.",
        'nature': "Jharkhand is blessed with beautiful waterfalls like Hundru, Dassam, and Jonha Falls, national parks like Betla and Hazaribagh, and hill stations like Netarhat.",
        'adventure': "Jharkhand offers trekking in Parasnath Hills, wildlife safaris in Betla and Palamau Tiger Reserves, rock climbing, boating, and nature walks in national parks.",
        'heritage': "The state has rich historical heritage including ancient temples like Baidyanath (Jyotirlinga), historical forts like Palamau Fort, and tribal villages.",
        'wildlife': "Jharkhand has tigers, elephants, leopards, bears, and over 250 bird species. Best viewing is in Betla National Park, Palamau Tiger Reserve, and Dalma Wildlife Sanctuary.",
        'religious': "Jharkhand has many important religious sites including Baba Baidyanath Temple (Jyotirlinga), Jagannath Temple, Rajrappa Temple, and various other temples.",
        'budget': "Jharkhand is very budget-friendly. You can find good accommodations starting from ₹800 per night, meals for ₹100-300 per person, and activities for ₹50-200 per person.",
        'climate': "Jharkhand has a subtropical climate with three distinct seasons: summer (March-June, hot and dry), monsoon (July-September, heavy rainfall), and winter (October-February, cool).",
        'language': "Hindi is widely spoken, but the state also has regional languages like Santhali, Mundari, and Ho. English is understood in tourist areas and major cities.",
        'festivals': "Jharkhand celebrates various festivals including Sarhul (tribal New Year), Karma (tree worship), Tusu (harvest festival), along with major Hindu festivals like Diwali and Holi.",
        'waterfalls': "Jharkhand has several beautiful waterfalls including Hundru Falls (320 ft), Dassam Falls (144 ft), Jonha Falls, Lodh Falls (highest), and Panchghagh Falls.",
        'national parks': "Jharkhand has several protected areas including Betla National Park (tiger reserve), Hazaribagh National Park, and Dalma Wildlife Sanctuary (elephant sanctuary).",
        'hill stations': "Netarhat is known as the 'Queen of Chotanagpur' and offers stunning sunrise/sunset views. It's the most popular hill station in Jharkhand.",
        'tribal': "Jharkhand has over 30 indigenous tribes with unique cultures, traditions, and festivals. You can experience authentic tribal life in various villages and cultural centers."
    },

    // Default responses for chatbot
    defaultResponses: [
        "I'd be happy to help you with information about Jharkhand tourism. Could you be more specific about what you'd like to know?",
        "Jharkhand has so much to offer! Please let me know if you need information about specific places, activities, or travel tips.",
        "Feel free to ask me about weather, costs, transportation, safety, food, culture, or any specific tourist spots in Jharkhand!",
        "I can help you with travel planning, local recommendations, and general information about visiting Jharkhand. What would you like to know?"
    ]
};

// Sample questions for quick access
const sampleQuestions = [
    "What is the best time to visit Jharkhand?",
    "How much does it cost to visit Jharkhand?",
    "Is Jharkhand safe for tourists?",
    "What are the main tourist attractions?",
    "What is the local cuisine like?",
    "How to reach Jharkhand?",
    "Tell me about tribal culture",
    "What adventure activities are available?",
    "Which waterfalls are famous in Jharkhand?",
    "What wildlife can I see in Jharkhand?",
    "Tell me about religious places",
    "What are the best hill stations?"
];
