export const heroData = {
	title: "MERN Projects",
	description:
		"Project ideas to take you from beginner to advanced in Fullstack with MERN.",
	longDescription:
		"Below are project ideas designed to help you gain hands-on experience in building real-world applications with MongoDB, Express.js, React, and Node.js. Each project is structured into manageable components, making the learning process more practical, focused, and engaging.",
};

type Tech =
	| "REACT"
	| "MONGODB"
	| "NODE.JS"
	| "EXPRESS"
	| "SOCKET"
	| "GRAPHQL"
	| "GRPC"
	| "POSTGRES";

export type Tags = {
	level: "Begineer" | "Intermediate" | "Advanced";
	id: number;
};

export type ProjectItem = {
	title: string;
	longTitle: string;
	description: string;
	tag: Tags;
	techs?: Tech[];
};

export const projectsList: ProjectItem[] = [
	// ---------------- BEGINNER ----------------
	{
		title: "Todo List",
		longTitle:
			"Build a simple todo list application where users can add, edit, and delete tasks.",
		description: `Create a frontend interface for users to interact with.
Implement CRUD operations to manage tasks.
Add features like task filtering, sorting, and marking tasks as completed.
Include user authentication to allow users to have personalized todo lists.`,
		tag: { level: "Begineer", id: 1 },
		techs: ["REACT"],
	},
	{
		title: "Notes App",
		longTitle: "A simple note-taking app with persistence in MongoDB.",
		description: `Users can create, edit, and delete notes.
Store notes in MongoDB.
Add a simple search functionality.`,
		tag: { level: "Begineer", id: 2 },
		techs: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
	},
	{
		title: "Weather App",
		longTitle: "Fetch and display live weather data from an API.",
		description: `Integrate with a free weather API.
Display temperature, humidity, and forecast.
Add search by city functionality.`,
		tag: { level: "Begineer", id: 3 },
		techs: ["REACT", "NODE.JS"],
	},
	{
		title: "Expense Tracker",
		longTitle: "Track personal expenses with a simple dashboard.",
		description: `Users can add, categorize, and delete expenses.
Visualize data using charts.
Store data in MongoDB for persistence.`,
		tag: { level: "Begineer", id: 4 },
		techs: ["REACT", "MONGODB", "EXPRESS"],
	},
	{
		title: "Simple Blog",
		longTitle: "Create a basic blogging platform with CRUD functionality.",
		description: `Users can write, edit, and delete blog posts.
Implement a simple rich text editor.
Enable comments on posts.`,
		tag: { level: "Begineer", id: 5 },
		techs: ["REACT", "NODE.JS", "MONGODB"],
	},
	{
		title: "Recipe Finder",
		longTitle: "Search for recipes using a third-party API.",
		description: `Integrate recipe API for search.
Display ingredients and cooking steps.
Allow users to save favorite recipes.`,
		tag: { level: "Begineer", id: 6 },
		techs: ["REACT"],
	},
	{
		title: "URL Shortener",
		longTitle: "Build a simple URL shortener service.",
		description: `Users can input a long URL and get a short link.
Redirect short links to the original.
Store mappings in MongoDB.`,
		tag: { level: "Begineer", id: 7 },
		techs: ["NODE.JS", "EXPRESS", "MONGODB"],
	},
	{
		title: "Portfolio Website",
		longTitle:
			"Create a personal portfolio with projects and contact form.",
		description: `Responsive design with Tailwind.
Showcase projects and skills.
Add a contact form with backend handling.`,
		tag: { level: "Begineer", id: 8 },
		techs: ["REACT", "NODE.JS"],
	},
	{
		title: "Quiz App",
		longTitle:
			"Interactive quiz application with multiple-choice questions.",
		description: `Users can take quizzes with real-time scoring.
Pull data from static JSON or API.
Show results at the end.`,
		tag: { level: "Begineer", id: 9 },
		techs: ["REACT"],
	},
	{
		title: "Chat UI Mock",
		longTitle: "Frontend chat interface with dummy data.",
		description: `Design a chat layout with message bubbles.
Support dark mode and responsive layout.
No backend required, static data only.`,
		tag: { level: "Begineer", id: 10 },
		techs: ["REACT"],
	},

	// ---------------- INTERMEDIATE ----------------
	{
		title: "Real-Time Chat App",
		longTitle: "Chat application with WebSocket support.",
		description: `Users can send and receive messages instantly.
Implement private rooms.
Persist messages in MongoDB.`,
		tag: { level: "Intermediate", id: 1 },
		techs: ["REACT", "NODE.JS", "EXPRESS", "SOCKET", "MONGODB"],
	},
	{
		title: "E-Commerce Store",
		longTitle: "Online shopping platform with cart and checkout.",
		description: `Users can browse products and add them to cart.
Implement authentication and checkout flow.
Store product catalog in MongoDB.`,
		tag: { level: "Intermediate", id: 2 },
		techs: ["REACT", "NODE.JS", "EXPRESS", "MONGODB"],
	},
	{
		title: "Project Management Tool",
		longTitle: "Collaborative project/task management system.",
		description: `Create projects and assign tasks.
Drag-and-drop task boards.
Role-based authentication.`,
		tag: { level: "Intermediate", id: 3 },
		techs: ["REACT", "NODE.JS", "MONGODB"],
	},
	{
		title: "Video Streaming App",
		longTitle: "Stream and watch videos like a mini YouTube.",
		description: `Upload and stream videos.
Implement search and recommendations.
Track views and likes.`,
		tag: { level: "Intermediate", id: 4 },
		techs: ["REACT", "NODE.JS", "EXPRESS", "MONGODB"],
	},
	{
		title: "Social Media Clone",
		longTitle: "Basic clone of Twitter or Instagram.",
		description: `Users can post, like, and follow others.
Implement notifications and feed.
Store media and user data in MongoDB.`,
		tag: { level: "Intermediate", id: 5 },
		techs: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
	},
	{
		title: "Online Code Editor",
		longTitle: "Collaborative code editor with syntax highlighting.",
		description: `Users can write and run code snippets.
Enable real-time collaboration with sockets.
Store sessions for later retrieval.`,
		tag: { level: "Intermediate", id: 6 },
		techs: ["REACT", "NODE.JS", "SOCKET"],
	},
	{
		title: "GraphQL Blog API",
		longTitle: "Build a blog backend with GraphQL API.",
		description: `Use GraphQL for queries and mutations.
Enable filtering and pagination.
Integrate with MongoDB.`,
		tag: { level: "Intermediate", id: 7 },
		techs: ["NODE.JS", "GRAPHQL", "MONGODB"],
	},
	{
		title: "Learning Management System",
		longTitle: "Platform for online courses and quizzes.",
		description: `Instructors can upload courses.
Students can enroll and take quizzes.
Track progress with dashboards.`,
		tag: { level: "Intermediate", id: 8 },
		techs: ["REACT", "NODE.JS", "MONGODB"],
	},
	{
		title: "Event Booking App",
		longTitle: "Book and manage tickets for events.",
		description: `Users can view events and book tickets.
Generate unique QR codes.
Store booking history in Postgres.`,
		tag: { level: "Intermediate", id: 9 },
		techs: ["REACT", "NODE.JS", "POSTGRES"],
	},
	{
		title: "Job Board",
		longTitle: "Platform for posting and applying for jobs.",
		description: `Employers can post jobs.
Applicants can apply with resumes.
Filter by skills and location.`,
		tag: { level: "Intermediate", id: 10 },
		techs: ["REACT", "NODE.JS", "EXPRESS", "POSTGRES"],
	},

	// ---------------- ADVANCED ----------------
	{
		title: "Real-Time Collaboration Suite",
		longTitle: "Google Docs-like editor with collaborative editing.",
		description: `Implement real-time editing with sockets.
Conflict resolution with CRDT/OT.
Persist documents in MongoDB.`,
		tag: { level: "Advanced", id: 1 },
		techs: ["REACT", "NODE.JS", "SOCKET", "MONGODB"],
	},
	{
		title: "Microservices E-Commerce",
		longTitle: "E-commerce backend split into microservices.",
		description: `Separate services for products, orders, payments.
Use gRPC for communication.
Deploy with Docker/Kubernetes.`,
		tag: { level: "Advanced", id: 2 },
		techs: ["NODE.JS", "GRPC", "POSTGRES"],
	},
	{
		title: "Video Conferencing App",
		longTitle: "Zoom-like app with real-time video calls.",
		description: `WebRTC integration for video/audio.
Add chat alongside calls.
Implement user rooms and recording.`,
		tag: { level: "Advanced", id: 3 },
		techs: ["REACT", "NODE.JS", "SOCKET"],
	},
	{
		title: "Multi-Tenant SaaS Platform",
		longTitle: "SaaS app supporting multiple organizations.",
		description: `Separate tenant data using Postgres schemas.
Implement RBAC and billing.
Support API keys per tenant.`,
		tag: { level: "Advanced", id: 4 },
		techs: ["REACT", "NODE.JS", "POSTGRES"],
	},
	{
		title: "Analytics Dashboard",
		longTitle: "Real-time analytics dashboard for tracking events.",
		description: `Stream events into backend.
Aggregate with Postgres.
Visualize metrics with charts.`,
		tag: { level: "Advanced", id: 5 },
		techs: ["REACT", "NODE.JS", "POSTGRES"],
	},
	{
		title: "GraphQL Gateway",
		longTitle: "Federated GraphQL gateway for multiple services.",
		description: `Expose unified API for multiple microservices.
Support caching and schema stitching.
Integrate with authentication.`,
		tag: { level: "Advanced", id: 6 },
		techs: ["NODE.JS", "GRAPHQL", "POSTGRES"],
	},
	{
		title: "IoT Device Manager",
		longTitle: "Backend for managing IoT devices and telemetry.",
		description: `Register and control IoT devices.
Stream real-time telemetry with sockets.
Persist historical data in MongoDB.`,
		tag: { level: "Advanced", id: 7 },
		techs: ["NODE.JS", "SOCKET", "MONGODB"],
	},
	{
		title: "Banking System Clone",
		longTitle: "Simulated banking backend with accounts and transactions.",
		description: `Support deposits, withdrawals, transfers.
Ensure transactional integrity with Postgres.
Add audit logs and reports.`,
		tag: { level: "Advanced", id: 8 },
		techs: ["NODE.JS", "POSTGRES"],
	},
	{
		title: "Streaming Data Pipeline",
		longTitle: "Pipeline for ingesting and processing real-time data.",
		description: `Consume streams with gRPC or sockets.
Process data with worker queues.
Store aggregated results in Postgres.`,
		tag: { level: "Advanced", id: 9 },
		techs: ["NODE.JS", "GRPC", "POSTGRES"],
	},
	{
		title: "Enterprise CRM",
		longTitle: "Customer relationship management system for businesses.",
		description: `Track leads, contacts, and sales pipelines.
Support dashboards and reporting.
Enable multi-user roles and permissions.`,
		tag: { level: "Advanced", id: 10 },
		techs: ["REACT", "NODE.JS", "POSTGRES"],
	},
];
