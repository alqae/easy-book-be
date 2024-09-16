-- Companies
INSERT INTO public.users (id, "firstName", "lastName", city, country, "phoneNumber", email, "password", description, address, verify_email_at, "role", status, "createdAt", "updatedAt", avatar_id) VALUES
    (1, 'Alice', 'Smith', 'Vosketap’', 'Armenia', '555-1234', 'alice.smith@techserv.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Providing IT and tech support services for small to medium businesses.', '123 Main St, Vosketap’, Armenia', '2024-09-16 10:15:30', 'business', 'active', '2024-09-16 10:00:00', '2024-09-16 10:15:30', NULL),
    (2, 'John', 'Doe', 'Vosketap’', 'Armenia', '555-5678', 'john.doe@constructionco.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Providing high-quality construction and renovation services for residential and commercial projects.', '456 Elm St, Vosketap’, Armenia', '2024-09-16 11:30:00', 'business', 'active', '2024-09-16 11:00:00', '2024-09-16 11:30:00', NULL),
    (3, 'Emma', 'Johnson', 'Vosketap’', 'Armenia', '416-9876', 'emma.johnson@marketingsolutions.ca', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Offering digital marketing services including SEO, social media management, and content creation.', '789 Maple Ave, Vosketap’, Armenia', '2024-09-16 12:45:00', 'business', 'active', '2024-09-16 12:30:00', '2024-09-16 12:45:00', NULL),
    (4, 'Michael', 'Brown', 'Vosketap’', 'Armenia', '020-1234-5678', 'michael.brown@legalconsult.co.uk', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Providing legal consultation and services for corporate and individual clients.', '321 Baker St, Vosketap’, Armenia', '2024-09-16 14:00:00', 'business', 'active', '2024-09-16 13:30:00', '2024-09-16 14:00:00', NULL),
    (5, 'Sophia', 'Williams', 'Vosketap’', 'Armenia', '02-9876-5432', 'sophia.williams@fitnesspro.com.au', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Running a fitness center offering personal training, group fitness classes, and nutrition guidance.', '123 Harbour St, Vosketap’, Armenia', '2024-09-16 15:15:00', 'business', 'active', '2024-09-16 14:45:00', '2024-09-16 15:15:00', NULL),
    (6, 'David', 'Miller', 'Vosketap’', 'Armenia', '030-9876-1234', 'david.miller@webdevpro.de', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Providing web development and design services, specializing in e-commerce and custom websites.', '789 Alexanderplatz, Vosketap’, Armenia', '2024-09-16 16:00:00', 'business', 'active', '2024-09-16 15:30:00', '2024-09-16 16:00:00', NULL),
    (7, 'Lucas', 'Taylor', 'Vosketap’', 'Armenia', '321-123-4567', 'lucas.taylor@eventplanning.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Providing event planning and coordination services for weddings, corporate events, and more.', '123 Event St, Vosketap’, Armenia', '2024-09-16 09:30:00', 'business', 'active', '2024-09-16 09:00:00', '2024-09-16 09:30:00', NULL),
    (8, 'Olivia', 'Martinez', 'Vosketap’', 'Armenia', '555-9876', 'olivia.martinez@graphicdesign.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Providing professional graphic design services, specializing in branding, web design, and print media.', '456 Design Ave, Vosketap’, Armenia', '2024-09-16 10:45:00', 'business', 'active', '2024-09-16 10:15:00', '2024-09-16 10:45:00', NULL),
    (9, 'James', 'Anderson', 'Vosketap’', 'Armenia', '555-5432', 'james.anderson@finconsult.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Offering financial consulting services for startups and SMEs.', '789 Finance St, Vosketap’, Armenia', '2024-09-16 11:00:00', 'business', 'active', '2024-09-16 10:30:00', '2024-09-16 11:00:00', NULL),
    (10, 'Mia', 'Davis', 'Vosketap’', 'Armenia', '555-8765', 'mia.davis@bakerydelights.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Running a bakery that offers custom cakes, pastries, and catering for events.', '321 Sweet St, Vosketap’, Armenia', '2024-09-16 12:15:00', 'business', 'active', '2024-09-16 11:45:00', '2024-09-16 12:15:00', NULL),
    (11, 'Liam', 'Harris', 'Vosketap’', 'Armenia', '555-0001', 'liam.harris@photographypro.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Professional photographer offering portrait and event photography services.', '123 Lens St, Vosketap’, Armenia', '2024-09-16 13:00:00', 'business', 'active', '2024-09-16 12:30:00', '2024-09-16 13:00:00', NULL),
    (12, 'Charlotte', 'Evans', 'Vosketap’', 'Armenia', '555-2222', 'charlotte.evans@coachingpro.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Offering career coaching and personal development services.', '456 Coach Rd, Vosketap’, Armenia', '2024-09-16 14:30:00', 'business', 'active', '2024-09-16 14:00:00', '2024-09-16 14:30:00', NULL),
    (13, 'Ethan', 'Robinson', 'Vosketap’', 'Armenia', '555-3333', 'ethan.robinson@movingservices.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Providing professional moving and relocation services for individuals and businesses.', '789 Moving St, Vosketap’, Armenia', '2024-09-16 15:45:00', 'business', 'active', '2024-09-16 15:15:00', '2024-09-16 15:45:00', NULL),
    (14, 'Isabella', 'Garcia', 'Vosketap’', 'Armenia', '555-4444', 'isabella.garcia@floraldesign.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Creating custom floral arrangements for weddings, corporate events, and other special occasions.', '321 Bloom St, Vosketap’, Armenia', '2024-09-16 16:15:00', 'business', 'active', '2024-09-16 15:45:00', '2024-09-16 16:15:00', NULL),
    (15, 'Benjamin', 'Clark', 'Vosketap’', 'Armenia', '555-5555', 'benjamin.clark@realestatepro.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Providing real estate services including property sales, rentals, and management.', '456 Realty Rd, Vosketap’, Armenia', '2024-09-16 17:00:00', 'business', 'active', '2024-09-16 16:30:00', '2024-09-16 17:00:00', NULL),
    (16, 'Henry', 'King', 'Vosketap’', 'Armenia', '555-6666', 'henry.king@digitalagency.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Running a digital agency specializing in web development, marketing, and consulting.', '789 Digital Ave, Vosketap’, Armenia', '2024-09-16 18:30:00', 'business', 'active', '2024-09-16 18:00:00', '2024-09-16 18:30:00', NULL),
    (17, 'Ava', 'Thomas', 'Vosketap’', 'Armenia', '555-7777', 'ava.thomas@fashiondesign.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Creating unique and stylish clothing designs for individuals and fashion shows.', '123 Fashion St, Vosketap’, Armenia', '2024-09-16 19:00:00', 'business', 'active', '2024-09-16 18:30:00', '2024-09-16 19:00:00', NULL),
    (18, 'Harper', 'Walker', 'Vosketap’', 'Armenia', '555-8888', 'harper.walker@itconsult.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Offering IT consulting services for businesses and individuals.', '456 Tech Rd, Vosketap’, Armenia', '2024-09-16 20:15:00', 'business', 'active', '2024-09-16 19:45:00', '2024-09-16 20:15:00', NULL),
    (19, 'Ella', 'Moore', 'Vosketap’', 'Armenia', '555-9999', 'ella.moore@cateringdelights.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Providing catering services for corporate events, weddings, and private parties.', '789 Catering St, Vosketap’, Armenia', '2024-09-16 21:00:00', 'business', 'active', '2024-09-16 20:30:00', '2024-09-16 21:00:00', NULL),
    (20, 'Mason', 'Martin', 'Vosketap’', 'Armenia', '555-0000', 'mason.martin@healthcarepro.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Providing healthcare and wellness services including personal training and nutrition planning.', '321 Wellness St, Vosketap’, Armenia', '2024-09-16 22:30:00', 'business', 'active', '2024-09-16 22:00:00', '2024-09-16 22:30:00', NULL);

-- Customers
INSERT INTO public.users ("id", "firstName", "lastName", city, country, "phoneNumber", email, "password", description, address, verify_email_at, "role", status, "createdAt", "updatedAt", avatar_id) VALUES
(21, 'Sophia', 'Johnson', 'Vosketap’', 'Armenia', '555-1234', 'sophia.johnson@example.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Enthusiastic customer interested in various services.', '123 Customer St, Vosketap’, Armenia', '2024-09-16 09:00:00', 'customer', 'active', '2024-09-16 09:00:00', '2024-09-16 09:00:00', NULL),
(22, 'Liam', 'Williams', 'Vosketap’', 'Armenia', '555-2345', 'liam.williams@example.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Regular customer looking for quality services.', '456 Client Ave, Vosketap’, Armenia', '2024-09-16 10:00:00', 'customer', 'active', '2024-09-16 10:00:00', '2024-09-16 10:00:00', NULL),
(23, 'Olivia', 'Brown', 'Vosketap’', 'Armenia', '555-3456', 'olivia.brown@example.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Interested in premium services for personal and business needs.', '789 Client Blvd, Vosketap’, Armenia', '2024-09-16 11:00:00', 'customer', 'active', '2024-09-16 11:00:00', '2024-09-16 11:00:00', NULL),
(24, 'Noah', 'Jones', 'Vosketap’', 'Armenia', '555-4567', 'noah.jones@example.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Customer interested in a range of services for various occasions.', '321 Client Rd, Vosketap’, Armenia', '2024-09-16 12:00:00', 'customer', 'active', '2024-09-16 12:00:00', '2024-09-16 12:00:00', NULL),
(25, 'Emma', 'Garcia', 'Vosketap’', 'Armenia', '555-5678', 'emma.garcia@example.com', '$2b$10$LTeAITNISyGXkycgRPg/7eHbic71lIsn5sN5q0pdSt9N.fqSrjsQW', 'Looking for various services including personal and event-related.', '654 Client Ln, Vosketap’, Armenia', '2024-09-16 13:00:00', 'customer', 'active', '2024-09-16 13:00:00', '2024-09-16 13:00:00', NULL);

-- Services
INSERT INTO public.services (id, "name", description, duration, "userId", price) VALUES
-- (Alice Smith - Business Services)
(1, 'Corporate Event Planning', 'End-to-end planning for corporate events, including venue, catering, and logistics.', '10h', 1, 3000.0),
(2, 'Conference Management', 'Full conference management service with speaker coordination, venue setup, and more.', '12h', 1, 4000.0),
(3, 'Private Party Planning', 'Organizing private parties including decor, entertainment, and catering.', '6h', 1, 1500.0),
(4, 'Venue Booking Service', 'Assisting in booking and coordinating event venues.', '4h', 1, 1000.0),
(5, 'Event Coordination', 'On-site event coordination to ensure everything runs smoothly.', '8h', 1, 2000.0),

-- (John Doe - Photography Services)
(6, 'Wedding Photography', 'Complete wedding photography package covering ceremony, reception, and portraits.', '8h', 2, 2000.0),
(7, 'Corporate Headshots', 'Professional headshots for business profiles and corporate events.', '4h', 2, 800.0),
(8, 'Event Photography', 'Event photography package covering conferences, parties, and special occasions.', '6h', 2, 1200.0),
(9, 'Product Photography', 'High-quality product photography for marketing and e-commerce.', '5h', 2, 1000.0),
(10, 'Family Portraits', 'Family portrait sessions including studio or on-location shoots.', '3h', 2, 600.0),

-- (Emma Johnson - Catering Services)
(11, 'Wedding Catering', 'Full wedding catering service with customizable menu options.', '10h', 3, 6000.0),
(12, 'Corporate Catering', 'Catering service for corporate events with a range of gourmet options.', '8h', 3, 4500.0),
(13, 'Private Dinner Service', 'Customized catering for private dinners and small gatherings.', '5h', 3, 2000.0),
(14, 'Buffet Service', 'Buffet catering service with a variety of food stations and options.', '6h', 3, 3000.0),
(15, 'Brunch Catering', 'Catering for brunch events including a selection of pastries, fruits, and beverages.', '4h', 3, 1500.0),

-- (Michael Brown - Logo Design)
(16, 'Logo Design', 'Custom logo design for businesses, startups, and events.', '5h', 4, 800.0),
(17, 'Event Branding Package', 'Complete branding package for events including logos, banners, and invitations.', '10h', 4, 2000.0),
(18, 'Brochure Design', 'Design and layout of promotional brochures and flyers.', '6h', 4, 1200.0),
(19, 'Website Design', 'Custom website design with responsive layout and branding.', '20h', 4, 3500.0),
(20, 'Social Media Graphics', 'Design graphics for social media platforms and campaigns.', '4h', 4, 700.0),

-- (Sophia Williams - DJ Service)
(21, 'Wedding DJ Service', 'DJ service for weddings including music selection and live performance.', '6h', 5, 1200.0),
(22, 'Corporate Event DJ', 'Professional DJ service for corporate events with customizable playlists.', '5h', 5, 1000.0),
(23, 'Party DJ Service', 'DJ service for private parties with a variety of music genres.', '4h', 5, 800.0),
(24, 'Club DJ Performance', 'High-energy DJ performance for club events and nightlife.', '8h', 5, 1500.0),
(25, 'Live Music Integration', 'Integration of live music performances with DJ services for events.', '6h', 5, 1300.0);

INSERT INTO public.services (id, "name", description, duration, "userId", price) VALUES
-- (Sarah Lee - Event Planning)
(26, 'Birthday Party Planning', 'Comprehensive planning for birthday parties including decorations, catering, and activities.', '6h', 6, 1200.0),
(27, 'Holiday Party Planning', 'Planning and organizing holiday parties with themed decorations and entertainment.', '8h', 6, 1500.0),
(28, 'Product Launch Event', 'Event management for product launches, including venue setup and promotional activities.', '10h', 6, 2500.0),
(29, 'Team Building Events', 'Organizing team-building events with activities and workshops.', '5h', 6, 1000.0),
(30, 'Anniversary Celebration', 'Planning anniversary events with custom decorations and catering options.', '7h', 6, 1800.0),

-- (Chris Davis - Home Renovation)
(31, 'Kitchen Remodeling', 'Complete remodeling service for kitchens including design, materials, and installation.', '20h', 7, 5000.0),
(32, 'Bathroom Renovation', 'Full renovation service for bathrooms with modern fixtures and finishes.', '15h', 7, 3500.0),
(33, 'Basement Finishing', 'Transforming basements into usable living spaces with design and construction.', '25h', 7, 7000.0),
(34, 'Living Room Makeover', 'Redesigning living rooms with new furniture, decor, and layout.', '12h', 7, 3000.0),
(35, 'Home Office Setup', 'Creating functional and stylish home office spaces with furniture and technology.', '10h', 7, 2500.0),

-- (Patricia Brown - Landscaping)
(36, 'Garden Design', 'Design and planning for garden spaces including plant selection and layout.', '8h', 8, 1200.0),
(37, 'Lawn Care Service', 'Routine lawn care including mowing, fertilizing, and weed control.', '5h', 8, 600.0),
(38, 'Patio Installation', 'Design and installation of outdoor patios with various materials.', '10h', 8, 2000.0),
(39, 'Tree Trimming', 'Professional tree trimming and maintenance services.', '6h', 8, 800.0),
(40, 'Landscape Lighting', 'Installation of outdoor lighting to enhance landscape features.', '7h', 8, 1000.0),

-- (Jessica Williams - Tutoring)
(41, 'Math Tutoring', 'One-on-one tutoring for math subjects, from basic to advanced levels.', '2h', 9, 50.0),
(42, 'Science Tutoring', 'Tutoring services for science subjects including biology, chemistry, and physics.', '2h', 9, 50.0),
(43, 'Language Tutoring', 'Tutoring in various languages including Spanish, French, and Mandarin.', '2h', 9, 60.0),
(44, 'Test Preparation', 'Preparation for standardized tests such as SAT, ACT, and GRE.', '3h', 9, 75.0),
(45, 'Homework Help', 'Assistance with homework and study skills for students of all ages.', '1h', 9, 40.0),

-- (Daniel Taylor - Fitness Training)
(46, 'Personal Training Session', 'One-on-one personal training sessions tailored to individual fitness goals.', '1h', 10, 100.0),
(47, 'Group Fitness Classes', 'Group classes including yoga, pilates, and strength training.', '1h', 10, 25.0),
(48, 'Nutrition Coaching', 'Personalized nutrition coaching and meal planning.', '1h', 10, 80.0),
(49, 'Online Training Program', 'Customized online training programs with workout plans and progress tracking.', '8w', 10, 200.0),
(50, 'Fitness Bootcamp', 'Intensive fitness bootcamp program including various workouts and challenges.', '4h', 10, 150.0);


INSERT INTO public.services (id, "name", description, duration, "userId", price) VALUES
-- (Alice Green - Pet Grooming)
(51, 'Dog Grooming', 'Full grooming service for dogs including washing, trimming, and nail clipping.', '2h', 11, 80.0),
(52, 'Cat Grooming', 'Grooming service for cats including brushing, bath, and nail trimming.', '1.5h', 11, 70.0),
(53, 'Pet Bathing', 'Bathing service for all pets with specialty shampoos and conditioners.', '1h', 11, 50.0),
(54, 'Pet Nail Clipping', 'Nail clipping and paw care for pets of all sizes.', '30m', 11, 20.0),
(55, 'Pet Haircut', 'Custom haircuts for pets based on breed and owner preference.', '1.5h', 11, 60.0),

-- (Mark Wilson - Car Repair)
(56, 'Oil Change', 'Complete oil change service including filter replacement and fluid top-off.', '1h', 12, 40.0),
(57, 'Brake Repair', 'Inspection and repair of brake systems including pads and rotors.', '2h', 12, 150.0),
(58, 'Transmission Service', 'Transmission fluid change and system inspection.', '3h', 12, 250.0),
(59, 'Battery Replacement', 'Battery testing and replacement service for vehicles.', '1h', 12, 90.0),
(60, 'Tire Rotation', 'Tire rotation service to ensure even wear and extend tire life.', '1h', 12, 30.0),

-- (Nancy Taylor - Cleaning Services)
(61, 'House Cleaning', 'Comprehensive house cleaning service including dusting, vacuuming, and mopping.', '3h', 13, 100.0),
(62, 'Office Cleaning', 'Regular office cleaning including trash removal, surface cleaning, and floor care.', '4h', 13, 150.0),
(63, 'Deep Cleaning', 'Intensive cleaning service for homes with focus on hard-to-reach areas.', '5h', 13, 200.0),
(64, 'Move-In/Move-Out Cleaning', 'Cleaning service for homes before or after moving in or out.', '4h', 13, 180.0),
(65, 'Carpet Cleaning', 'Professional carpet cleaning service with stain removal and deodorizing.', '2h', 13, 120.0),

-- (Rachel Adams - Landscaping Design)
(66, 'Landscape Design Consultation', 'Consultation for designing outdoor spaces including gardens, lawns, and patios.', '2h', 14, 150.0),
(67, 'Custom Planting Design', 'Design and planning of custom planting layouts for gardens and outdoor areas.', '4h', 14, 300.0),
(68, 'Water Feature Installation', 'Design and installation of water features such as fountains and ponds.', '6h', 14, 800.0),
(69, 'Outdoor Lighting Design', 'Design and installation of outdoor lighting to enhance landscaping features.', '3h', 14, 250.0),
(70, 'Irrigation System Setup', 'Installation and setup of irrigation systems for efficient water usage.', '5h', 14, 400.0),

-- (George Martinez - Web Development)
(71, 'Website Design', 'Custom website design with responsive layout and modern aesthetics.', '20h', 15, 3000.0),
(72, 'E-commerce Development', 'Development of e-commerce websites with shopping cart and payment integration.', '25h', 15, 4000.0),
(73, 'SEO Optimization', 'Search engine optimization services to improve website visibility.', '10h', 15, 1200.0),
(74, 'Website Maintenance', 'Ongoing maintenance service including updates and security patches.', '5h', 15, 800.0),
(75, 'Landing Page Design', 'Design and development of high-converting landing pages for marketing campaigns.', '8h', 15, 1500.0);

INSERT INTO public.services (id, "name", description, duration, "userId", price) VALUES
-- (Laura Scott - Catering)
(76, 'Corporate Event Catering', 'Full-service catering for corporate events including food, beverages, and service staff.', '6h', 16, 3000.0),
(77, 'Wedding Catering', 'Custom catering for weddings with a variety of menu options and elegant presentation.', '8h', 16, 5000.0),
(78, 'Birthday Party Catering', 'Catering service for birthday parties with themed food and beverages.', '5h', 16, 2000.0),
(79, 'Buffet Catering', 'Buffet-style catering with a range of dishes and self-serve options.', '4h', 16, 1500.0),
(80, 'Gourmet Food Truck Service', 'Mobile food truck service offering gourmet meals at events and festivals.', '8h', 16, 3500.0),

-- (Henry Walker - Personal Coaching)
(81, 'Life Coaching', 'Personal life coaching sessions focusing on achieving goals and personal development.', '1h', 17, 100.0),
(82, 'Career Coaching', 'Career coaching to help with job search, career development, and interview preparation.', '1.5h', 17, 120.0),
(83, 'Executive Coaching', 'Coaching for executives to improve leadership skills and professional performance.', '2h', 17, 150.0),
(84, 'Health Coaching', 'Coaching focusing on improving health and wellness through lifestyle changes.', '1h', 17, 110.0),
(85, 'Financial Coaching', 'Guidance on personal finance management and financial planning.', '1.5h', 17, 130.0),

-- (Emily Evans - Photography)
(86, 'Wedding Photography', 'Complete photography package for weddings including pre-wedding and ceremony coverage.', '8h', 18, 2500.0),
(87, 'Portrait Photography', 'Studio or outdoor portrait sessions for individuals or families.', '2h', 18, 300.0),
(88, 'Event Photography', 'Photography services for various events including parties, corporate gatherings, and more.', '5h', 18, 1200.0),
(89, 'Product Photography', 'High-quality photography for products to be used in marketing and online stores.', '4h', 18, 800.0),
(90, 'Real Estate Photography', 'Professional photography for real estate listings, including interior and exterior shots.', '3h', 18, 600.0),

-- (Michael Hall - Translation Services)
(91, 'Document Translation', 'Translation services for business and legal documents in various languages.', '10h', 19, 800.0),
(92, 'Website Translation', 'Translation of website content to reach a global audience.', '15h', 19, 1200.0),
(93, 'Conference Interpreting', 'Real-time interpreting services for conferences and meetings.', '8h', 19, 1500.0),
(94, 'Legal Translation', 'Specialized translation services for legal documents and contracts.', '12h', 19, 1000.0),
(95, 'Certified Translation', 'Certified translation services for official documents such as birth certificates and diplomas.', '5h', 19, 600.0),

-- (Jessica Wilson - Music Lessons)
(96, 'Guitar Lessons', 'Private guitar lessons for beginners to advanced players.', '1h', 20, 50.0),
(97, 'Piano Lessons', 'Individual piano lessons focusing on technique, theory, and performance.', '1h', 20, 60.0),
(98, 'Vocal Coaching', 'Coaching and lessons for vocal improvement and performance.', '1h', 20, 70.0),
(99, 'Drum Lessons', 'Drum lessons for various styles and skill levels.', '1h', 20, 55.0),
(100, 'Music Theory Classes', 'Classes on music theory including sight-reading, harmony, and composition.', '1.5h', 20, 65.0);

