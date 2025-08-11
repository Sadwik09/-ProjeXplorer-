interface Project {
  id: string
  title: string
  description: string
  domain: string
  difficulty: "Easy" | "Moderate" | "Hard" | "Insane"
  techStack: string[]
  timeEstimate: string
  teamSize: string
  learningOutcomes: string[]
  courseRelevance: string[]
  interests: string[]
  projectType: string[]
  skillLevel: string[]
  resources: {
    github?: string[]
    tutorials?: string[]
    documentation?: string[]
    videos?: string[]
  }
}

const projects: Project[] = [
  // Web Development Projects
  {
    id: "web-1",
    title: "Personal Portfolio Website",
    description: "Create a responsive portfolio website showcasing your projects and skills",
    domain: "Web Development",
    difficulty: "Easy",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    timeEstimate: "1-2 weeks",
    teamSize: "Individual",
    learningOutcomes: ["Responsive design", "CSS frameworks", "Git version control", "Web hosting"],
    courseRelevance: ["Computer Science Engineering", "Information Technology", "Software Engineering"],
    interests: ["Web Development", "UI/UX Design"],
    projectType: ["Mini", "Hackathon"],
    skillLevel: ["Beginner", "Intermediate"],
    resources: {
      github: [
        "https://github.com/microsoft/vscode-portfolio-template",
        "https://github.com/soumyajit4419/Portfolio",
        "https://github.com/ashutosh1919/masterPortfolio",
      ],
      tutorials: [
        "https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/",
        "https://www.youtube.com/watch?v=xV7S8BhIeBo",
        "https://css-tricks.com/building-a-portfolio-site/",
      ],
      documentation: [
        "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
        "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
        "https://pages.github.com/",
      ],
      videos: ["https://www.youtube.com/watch?v=P7t13SGytRk", "https://www.youtube.com/watch?v=UB1O30fR-EE"],
    },
  },
  {
    id: "web-2",
    title: "Real-time Chat Application",
    description: "Build a full-stack chat app with real-time messaging and user authentication",
    domain: "Web Development",
    difficulty: "Moderate",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    timeEstimate: "3-4 weeks",
    teamSize: "2-3 members",
    learningOutcomes: ["Real-time communication", "Database design", "Authentication", "API development"],
    courseRelevance: ["Computer Science Engineering", "Information Technology", "Software Engineering"],
    interests: ["Web Development", "Database Management"],
    projectType: ["Major", "Hackathon"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/adrianhajdin/chat_application",
        "https://github.com/coding-with-chaim/react-chat-app",
        "https://github.com/PedroHenriqueFerreira/ChatApp",
      ],
      tutorials: [
        "https://socket.io/get-started/chat",
        "https://www.freecodecamp.org/news/how-to-create-a-react-chatbot/",
        "https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/",
      ],
      documentation: [
        "https://socket.io/docs/v4/",
        "https://reactjs.org/docs/getting-started.html",
        "https://mongoosejs.com/docs/",
      ],
      videos: ["https://www.youtube.com/watch?v=ZwFA3YMfkoc", "https://www.youtube.com/watch?v=jD7FnbI76Hg"],
    },
  },
  {
    id: "web-3",
    title: "E-commerce Platform with Microservices",
    description: "Develop a scalable e-commerce platform using microservices architecture",
    domain: "Web Development",
    difficulty: "Hard",
    techStack: ["React", "Node.js", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
    timeEstimate: "8-10 weeks",
    teamSize: "4-5 members",
    learningOutcomes: [
      "Microservices architecture",
      "Container orchestration",
      "Payment integration",
      "Scalable design",
    ],
    courseRelevance: ["Computer Science Engineering", "Software Engineering"],
    interests: ["Web Development", "Cloud Computing", "DevOps"],
    projectType: ["Major", "Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/microservices-demo/microservices-demo",
        "https://github.com/kubernetes/kubernetes",
        "https://github.com/docker/docker",
      ],
      tutorials: [
        "https://microservices.io/patterns/microservices.html",
        "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
        "https://docs.docker.com/get-started/",
      ],
      documentation: ["https://microservices.io/", "https://kubernetes.io/docs/", "https://docs.docker.com/"],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "web-4",
    title: "Social Media Dashboard",
    description: "Build a comprehensive social media management dashboard with analytics",
    domain: "Web Development",
    difficulty: "Moderate",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
    timeEstimate: "4-5 weeks",
    teamSize: "2-3 members",
    learningOutcomes: ["Social media APIs", "Data visualization", "User authentication", "Real-time updates"],
    courseRelevance: ["Computer Science Engineering", "Information Technology"],
    interests: ["Web Development", "Data Science", "UI/UX Design"],
    projectType: ["Major", "Hackathon"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/facebook/react",
        "https://github.com/expressjs/express",
        "https://github.com/chartjs/Chart.js",
      ],
      tutorials: [
        "https://reactjs.org/tutorial/tutorial.html",
        "https://expressjs.com/en/starter/installing.html",
        "https://www.chartjs.org/docs/latest/getting-started/",
      ],
      documentation: [
        "https://reactjs.org/docs/getting-started.html",
        "https://expressjs.com/en/api.html",
        "https://www.chartjs.org/docs/latest/",
      ],
      videos: ["https://www.youtube.com/watch?v=Ke90Tje7VS0", "https://www.youtube.com/watch?v=zc8b2Jo7mno"],
    },
  },
  {
    id: "web-5",
    title: "Progressive Web App (PWA) News Reader",
    description: "Create a PWA that aggregates news from multiple sources with offline reading",
    domain: "Web Development",
    difficulty: "Hard",
    techStack: ["React", "Service Workers", "IndexedDB", "News API", "Workbox"],
    timeEstimate: "6-7 weeks",
    teamSize: "3-4 members",
    learningOutcomes: ["PWA development", "Offline functionality", "Service workers", "Performance optimization"],
    courseRelevance: ["Computer Science Engineering", "Information Technology"],
    interests: ["Web Development", "Mobile App Development"],
    projectType: ["Major", "Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/PWABuilder/pwabuilder",
        "https://github.com/GoogleChrome/workbox",
        "https://github.com/newsapi/newsapi-python",
      ],
      tutorials: [
        "https://developers.google.com/web/progressive-web-apps/",
        "https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/",
        "https://www.youtube.com/watch?v=4G2QhPIMbgw",
      ],
      documentation: [
        "https://developers.google.com/web/progressive-web-apps/",
        "https://developers.google.com/web/tools/workbox/",
        "https://newsapi.org/docs",
      ],
      videos: ["https://www.youtube.com/watch?v=4G2QhPIMbgw", "https://www.youtube.com/watch?v=5w84bxy6Q2w"],
    },
  },
  {
    id: "web-6",
    title: "Code Collaboration Platform",
    description: "Build a real-time collaborative code editor with version control",
    domain: "Web Development",
    difficulty: "Insane",
    techStack: ["React", "Node.js", "Socket.io", "Monaco Editor", "Git", "Docker"],
    timeEstimate: "12-14 weeks",
    teamSize: "4-5 members",
    learningOutcomes: ["Real-time collaboration", "Operational transforms", "Version control", "Code execution"],
    courseRelevance: ["Computer Science Engineering", "Software Engineering"],
    interests: ["Web Development", "DevOps", "Cloud Computing"],
    projectType: ["Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/microsoft/monaco-editor",
        "https://github.com/socketio/socket.io",
        "https://github.com/docker/docker",
      ],
      tutorials: [
        "https://code.visualstudio.com/api/extension-guides/webview",
        "https://socket.io/get-started/chat",
        "https://docs.docker.com/get-started/",
      ],
      documentation: [
        "https://microsoft.github.io/monaco-editor/api/",
        "https://socket.io/docs/v4/",
        "https://docs.docker.com/",
      ],
      videos: ["https://www.youtube.com/watch?v=6n38jBdDhBQ", "https://www.youtube.com/watch?v=7YcW25PHvvg"],
    },
  },

  // AI/ML Projects
  {
    id: "ai-1",
    title: "Image Classification App",
    description: "Build a mobile app that classifies images using pre-trained ML models",
    domain: "Artificial Intelligence",
    difficulty: "Easy",
    techStack: ["Python", "TensorFlow", "Flutter", "Firebase"],
    timeEstimate: "2-3 weeks",
    teamSize: "1-2 members",
    learningOutcomes: ["Transfer learning", "Mobile development", "Model deployment", "Cloud services"],
    courseRelevance: ["Artificial Intelligence & ML", "Computer Science Engineering", "Data Science"],
    interests: ["Artificial Intelligence", "Machine Learning", "Mobile App Development"],
    projectType: ["Mini", "Hackathon"],
    skillLevel: ["Beginner", "Intermediate"],
    resources: {
      github: [
        "https://github.com/tensorflow/models/tree/master/research/slim",
        "https://github.com/flutter/flutter",
        "https://github.com/firebase/firebase-admin-python",
      ],
      tutorials: [
        "https://www.tensorflow.org/tutorials/images/classification",
        "https://flutter.dev/docs/get-started/codelab",
        "https://firebase.google.com/docs/admin/setup",
      ],
      documentation: [
        "https://www.tensorflow.org/api_docs",
        "https://flutter.dev/docs",
        "https://firebase.google.com/docs",
      ],
      videos: ["https://www.youtube.com/watch?v=jztwpsIzEGc", "https://www.youtube.com/watch?v=aircAruvnKk"],
    },
  },
  {
    id: "ai-2",
    title: "Smart Study Assistant Chatbot",
    description: "Create an AI-powered chatbot that helps students with course-related queries",
    domain: "Artificial Intelligence",
    difficulty: "Moderate",
    techStack: ["Python", "OpenAI API", "LangChain", "Streamlit", "Vector Database"],
    timeEstimate: "4-5 weeks",
    teamSize: "2-3 members",
    learningOutcomes: ["Natural language processing", "RAG systems", "API integration", "Vector embeddings"],
    courseRelevance: ["Artificial Intelligence & ML", "Computer Science Engineering"],
    interests: ["Artificial Intelligence", "Natural Language Processing"],
    projectType: ["Major", "Research"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/openai/openai-python",
        "https://github.com/LAION-AI/LangChain",
        "https://github.com/streamlit/streamlit",
      ],
      tutorials: [
        "https://openai.com/blog/chatgpt/",
        "https://langchain.com/docs/",
        "https://docs.streamlit.io/en/stable/",
      ],
      documentation: [
        "https://openai.com/docs/",
        "https://langchain.com/docs/",
        "https://docs.streamlit.io/en/stable/",
      ],
      videos: ["https://www.youtube.com/watch?v=ZwFA3YMfkoc", "https://www.youtube.com/watch?v=jD7FnbI76Hg"],
    },
  },
  {
    id: "ai-3",
    title: "Autonomous Drone Navigation System",
    description: "Develop an AI system for autonomous drone navigation using computer vision",
    domain: "Artificial Intelligence",
    difficulty: "Insane",
    techStack: ["Python", "OpenCV", "PyTorch", "ROS", "CUDA", "Raspberry Pi"],
    timeEstimate: "12-16 weeks",
    teamSize: "4-6 members",
    learningOutcomes: ["Computer vision", "Reinforcement learning", "Real-time processing", "Hardware integration"],
    courseRelevance: ["Artificial Intelligence & ML", "Electronics & Communication", "Robotics"],
    interests: ["Artificial Intelligence", "Computer Vision", "Robotics"],
    projectType: ["Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: ["https://github.com/ros/ros", "https://github.com/pytorch/pytorch", "https://github.com/opencv/opencv"],
      tutorials: [
        "https://roboticsbackend.com/ros-tutorials/",
        "https://pytorch.org/tutorials/",
        "https://docs.opencv.org/master/",
      ],
      documentation: [
        "https://docs.ros.org/en/noetic/",
        "https://pytorch.org/docs/stable/",
        "https://docs.opencv.org/master/",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "ai-4",
    title: "Emotion Detection from Text",
    description: "Build a system that detects emotions from text using NLP techniques",
    domain: "Artificial Intelligence",
    difficulty: "Easy",
    techStack: ["Python", "NLTK", "Scikit-learn", "Streamlit", "Pandas"],
    timeEstimate: "2-3 weeks",
    teamSize: "1-2 members",
    learningOutcomes: ["Text preprocessing", "Feature extraction", "Classification algorithms", "Model evaluation"],
    courseRelevance: ["Artificial Intelligence & ML", "Data Science"],
    interests: ["Natural Language Processing", "Machine Learning"],
    projectType: ["Mini", "Hackathon"],
    skillLevel: ["Beginner", "Intermediate"],
    resources: {
      github: [
        "https://github.com/nltk/nltk",
        "https://github.com/scikit-learn/scikit-learn",
        "https://github.com/streamlit/streamlit",
      ],
      tutorials: [
        "https://www.nltk.org/book/",
        "https://scikit-learn.org/stable/tutorial/basic/tutorial.html",
        "https://docs.streamlit.io/en/stable/",
      ],
      documentation: [
        "https://www.nltk.org/api/nltk.html",
        "https://scikit-learn.org/stable/modules/classes.html",
        "https://docs.streamlit.io/en/stable/",
      ],
      videos: ["https://www.youtube.com/watch?v=jztwpsIzEGc", "https://www.youtube.com/watch?v=aircAruvnKk"],
    },
  },
  {
    id: "ai-5",
    title: "Recommendation System for E-learning",
    description: "Create a personalized course recommendation system using collaborative filtering",
    domain: "Artificial Intelligence",
    difficulty: "Moderate",
    techStack: ["Python", "Pandas", "Scikit-learn", "Flask", "SQLite", "React"],
    timeEstimate: "5-6 weeks",
    teamSize: "3-4 members",
    learningOutcomes: [
      "Recommendation algorithms",
      "Collaborative filtering",
      "Content-based filtering",
      "Hybrid systems",
    ],
    courseRelevance: ["Artificial Intelligence & ML", "Data Science"],
    interests: ["Machine Learning", "Data Science", "Web Development"],
    projectType: ["Major", "Research"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/scikit-learn/scikit-learn",
        "https://github.com/pallets/flask",
        "https://github.com/reactjs/react",
      ],
      tutorials: [
        "https://scikit-learn.org/stable/tutorial/recommendation/tutorial.html",
        "https://flask.palletsprojects.com/en/2.0.x/tutorial/",
        "https://reactjs.org/tutorial/tutorial.html",
      ],
      documentation: [
        "https://scikit-learn.org/stable/modules/classes.html",
        "https://flask.palletsprojects.com/en/2.0.x/api/",
        "https://reactjs.org/docs/getting-started.html",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "ai-6",
    title: "Multi-modal AI Assistant",
    description: "Develop an AI assistant that processes text, voice, and images simultaneously",
    domain: "Artificial Intelligence",
    difficulty: "Insane",
    techStack: ["Python", "Transformers", "OpenCV", "Speech Recognition", "FastAPI", "Docker"],
    timeEstimate: "16-20 weeks",
    teamSize: "5-6 members",
    learningOutcomes: [
      "Multi-modal learning",
      "Transformer architectures",
      "Speech processing",
      "Computer vision integration",
    ],
    courseRelevance: ["Artificial Intelligence & ML", "Computer Science Engineering"],
    interests: ["Artificial Intelligence", "Computer Vision", "Natural Language Processing"],
    projectType: ["Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/huggingface/transformers",
        "https://github.com/opencv/opencv",
        "https://github.com/PySpeech/CMU-Sphinx",
      ],
      tutorials: [
        "https://huggingface.co/docs/transformers/index",
        "https://docs.opencv.org/master/",
        "https://cmusphinx.github.io/wiki/tutorial",
      ],
      documentation: [
        "https://huggingface.co/docs/transformers/index",
        "https://docs.opencv.org/master/",
        "https://fastapi.tiangolo.com/",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },

  // Cybersecurity Projects
  {
    id: "cyber-1",
    title: "Password Strength Analyzer",
    description: "Build a tool that analyzes password strength and suggests improvements",
    domain: "Cybersecurity",
    difficulty: "Easy",
    techStack: ["Python", "Tkinter", "Regular Expressions", "Matplotlib"],
    timeEstimate: "1-2 weeks",
    teamSize: "Individual",
    learningOutcomes: ["Security principles", "Pattern matching", "GUI development", "Data visualization"],
    courseRelevance: ["Cybersecurity", "Computer Science Engineering"],
    interests: ["Cybersecurity", "Network Security"],
    projectType: ["Mini"],
    skillLevel: ["Beginner", "Intermediate"],
    resources: {
      github: [
        "https://github.com/python/cpython",
        "https://github.com/tkinterhub/tkinter",
        "https://github.com/matplotlib/matplotlib",
      ],
      tutorials: [
        "https://realpython.com/python-gui-tkinter/",
        "https://matplotlib.org/stable/tutorials/index.html",
        "https://www.geeksforgeeks.org/python-tkinter/",
      ],
      documentation: [
        "https://docs.python.org/3/library/tkinter.html",
        "https://matplotlib.org/stable/contents.html",
        "https://tkdocs.com/tutorial/",
      ],
      videos: ["https://www.youtube.com/watch?v=4t4kBkMsDbQ", "https://www.youtube.com/watch?v=3Kq1MIfTWCE"],
    },
  },
  {
    id: "cyber-2",
    title: "Network Intrusion Detection System",
    description: "Develop a system to detect and alert on suspicious network activities",
    domain: "Cybersecurity",
    difficulty: "Hard",
    techStack: ["Python", "Scapy", "Wireshark", "Machine Learning", "ELK Stack"],
    timeEstimate: "6-8 weeks",
    teamSize: "3-4 members",
    learningOutcomes: ["Network protocols", "Anomaly detection", "Log analysis", "Security monitoring"],
    courseRelevance: ["Cybersecurity", "Computer Science Engineering", "Electronics & Communication"],
    interests: ["Cybersecurity", "Network Security", "Machine Learning"],
    projectType: ["Major", "Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/secdev/scapy",
        "https://github.com/wireshark/wireshark",
        "https://github.com/elastic/elasticsearch",
      ],
      tutorials: [
        "https://scapy.readthedocs.io/en/latest/usage.html",
        "https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html",
        "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
      ],
      documentation: [
        "https://scapy.readthedocs.io/",
        "https://www.wireshark.org/docs/",
        "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
      ],
      videos: ["https://www.youtube.com/watch?v=4t4kBkMsDbQ", "https://www.youtube.com/watch?v=3Kq1MIfTWCE"],
    },
  },
  {
    id: "cyber-3",
    title: "Phishing Email Detector",
    description: "Build a machine learning system to detect phishing emails",
    domain: "Cybersecurity",
    difficulty: "Moderate",
    techStack: ["Python", "Scikit-learn", "NLTK", "Flask", "Email APIs"],
    timeEstimate: "3-4 weeks",
    teamSize: "2-3 members",
    learningOutcomes: ["Email security", "Feature engineering", "Classification models", "API integration"],
    courseRelevance: ["Cybersecurity", "Artificial Intelligence & ML"],
    interests: ["Cybersecurity", "Machine Learning", "Network Security"],
    projectType: ["Major", "Hackathon"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/scikit-learn/scikit-learn",
        "https://github.com/nltk/nltk",
        "https://github.com/pallets/flask",
      ],
      tutorials: [
        "https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html",
        "https://www.nltk.org/book/",
        "https://flask.palletsprojects.com/en/2.0.x/tutorial/",
      ],
      documentation: [
        "https://scikit-learn.org/stable/modules/classes.html",
        "https://www.nltk.org/api/nltk.html",
        "https://flask.palletsprojects.com/en/2.0.x/api/",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "cyber-4",
    title: "Blockchain-based Identity Management",
    description: "Create a decentralized identity management system using blockchain",
    domain: "Cybersecurity",
    difficulty: "Hard",
    techStack: ["Solidity", "Web3.js", "React", "IPFS", "MetaMask"],
    timeEstimate: "8-10 weeks",
    teamSize: "4-5 members",
    learningOutcomes: ["Decentralized identity", "Smart contracts", "Cryptographic protocols", "Privacy preservation"],
    courseRelevance: ["Cybersecurity", "Blockchain", "Computer Science Engineering"],
    interests: ["Blockchain", "Cybersecurity", "Web Development"],
    projectType: ["Research", "Major"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/ethereum/solidity",
        "https://github.com/ethereum/web3.js",
        "https://github.com/ipfs/ipfs",
      ],
      tutorials: [
        "https://ethereum.org/en/developers/tutorials/",
        "https://web3js.readthedocs.io/en/v1.5.2/",
        "https://docs.ipfs.io/",
      ],
      documentation: ["https://soliditylang.org/docs/", "https://web3js.readthedocs.io/", "https://docs.ipfs.io/"],
      videos: ["https://www.youtube.com/watch?v=4t4kBkMsDbQ", "https://www.youtube.com/watch?v=3Kq1MIfTWCE"],
    },
  },
  {
    id: "cyber-5",
    title: "AI-Powered Threat Hunting Platform",
    description: "Develop an advanced threat detection system using AI and behavioral analysis",
    domain: "Cybersecurity",
    difficulty: "Insane",
    techStack: ["Python", "TensorFlow", "ELK Stack", "Kafka", "Docker", "Kubernetes"],
    timeEstimate: "14-16 weeks",
    teamSize: "5-6 members",
    learningOutcomes: ["Threat intelligence", "Behavioral analysis", "Real-time processing", "Distributed systems"],
    courseRelevance: ["Cybersecurity", "Artificial Intelligence & ML"],
    interests: ["Cybersecurity", "Artificial Intelligence", "Cloud Computing"],
    projectType: ["Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/tensorflow/tensorflow",
        "https://github.com/elastic/elasticsearch",
        "https://github.com/apache/kafka",
      ],
      tutorials: [
        "https://www.tensorflow.org/tutorials/",
        "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
        "https://kafka.apache.org/documentation/",
      ],
      documentation: [
        "https://www.tensorflow.org/api_docs",
        "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
        "https://kafka.apache.org/documentation/",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },

  // IoT Projects
  {
    id: "iot-1",
    title: "Smart Home Automation System",
    description: "Create an IoT system to control home appliances remotely via mobile app",
    domain: "Internet of Things",
    difficulty: "Moderate",
    techStack: ["Arduino", "ESP32", "React Native", "Firebase", "MQTT"],
    timeEstimate: "5-6 weeks",
    teamSize: "3-4 members",
    learningOutcomes: ["IoT protocols", "Mobile app development", "Cloud integration", "Sensor interfacing"],
    courseRelevance: ["Internet of Things", "Embedded Systems", "Computer Science Engineering"],
    interests: ["IoT", "Mobile App Development", "Hardware Programming"],
    projectType: ["Major", "Research"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/espressif/arduino-esp32",
        "https://github.com/knolleary/pubsubclient",
        "https://github.com/firebase/firebase-js-sdk",
      ],
      tutorials: [
        "https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/",
        "https://firebase.google.com/docs/database/web/start",
        "https://reactnative.dev/docs/getting-started",
      ],
      documentation: [
        "https://docs.espressif.com/projects/esp-idf/en/latest/",
        "https://firebase.google.com/docs",
        "https://mqtt.org/getting-started/",
      ],
      videos: ["https://www.youtube.com/watch?v=EAXLbf8QrFA", "https://www.youtube.com/watch?v=fJWR7dBuc18"],
    },
  },
  {
    id: "iot-2",
    title: "Industrial IoT Monitoring Platform",
    description: "Build a comprehensive IoT platform for monitoring industrial equipment",
    domain: "Internet of Things",
    difficulty: "Insane",
    techStack: ["Python", "InfluxDB", "Grafana", "Docker", "Edge Computing", "LoRaWAN"],
    timeEstimate: "14-18 weeks",
    teamSize: "5-6 members",
    learningOutcomes: ["Industrial protocols", "Time-series databases", "Edge computing", "Scalable architecture"],
    courseRelevance: ["Internet of Things", "Mechanical Engineering", "Computer Science Engineering"],
    interests: ["IoT", "Cloud Computing", "Data Science"],
    projectType: ["Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/influxdata/influxdb",
        "https://github.com/grafana/grafana",
        "https://github.com/docker/docker",
      ],
      tutorials: [
        "https://docs.influxdata.com/influxdb/v2.0/",
        "https://grafana.com/docs/grafana/latest/",
        "https://docs.docker.com/get-started/",
      ],
      documentation: [
        "https://docs.influxdata.com/influxdb/v2.0/",
        "https://grafana.com/docs/grafana/latest/",
        "https://docs.docker.com/",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "iot-3",
    title: "Smart Agriculture Monitoring",
    description: "Build an IoT system for monitoring crop conditions and automated irrigation",
    domain: "Internet of Things",
    difficulty: "Easy",
    techStack: ["Arduino", "Sensors", "WiFi Module", "Mobile App", "Firebase"],
    timeEstimate: "3-4 weeks",
    teamSize: "2-3 members",
    learningOutcomes: ["Sensor integration", "Data collection", "Mobile development", "Cloud storage"],
    courseRelevance: ["Internet of Things", "Computer Science Engineering"],
    interests: ["IoT", "Mobile App Development"],
    projectType: ["Mini", "Major"],
    skillLevel: ["Beginner", "Intermediate"],
    resources: {
      github: ["https://github.com/arduino/Arduino", "https://github.com/firebase/firebase-admin-python"],
      tutorials: [
        "https://randomnerdtutorials.com/arduino-wi-fi-modules/",
        "https://firebase.google.com/docs/admin/setup",
      ],
      documentation: ["https://www.arduino.cc/en/software", "https://firebase.google.com/docs"],
      videos: ["https://www.youtube.com/watch?v=EAXLbf8QrFA", "https://www.youtube.com/watch?v=fJWR7dBuc18"],
    },
  },
  {
    id: "iot-4",
    title: "Smart City Traffic Management",
    description: "Develop an IoT-based traffic monitoring and optimization system",
    domain: "Internet of Things",
    difficulty: "Hard",
    techStack: ["Raspberry Pi", "Computer Vision", "MQTT", "InfluxDB", "Grafana", "Machine Learning"],
    timeEstimate: "10-12 weeks",
    teamSize: "4-5 members",
    learningOutcomes: ["Computer vision", "Real-time processing", "Traffic optimization", "Urban planning"],
    courseRelevance: ["Internet of Things", "Computer Science Engineering", "Civil Engineering"],
    interests: ["IoT", "Computer Vision", "Data Science"],
    projectType: ["Research", "Major"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/raspberrypi/rpi-imager",
        "https://github.com/influxdata/influxdb",
        "https://github.com/grafana/grafana",
      ],
      tutorials: [
        "https://projects.raspberrypi.org/en/projects",
        "https://docs.influxdata.com/influxdb/v2.0/",
        "https://grafana.com/docs/grafana/latest/",
      ],
      documentation: [
        "https://www.raspberrypi.org/documentation/",
        "https://docs.influxdata.com/influxdb/v2.0/",
        "https://grafana.com/docs/grafana/latest/",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },

  // Mobile Development Projects
  {
    id: "mobile-1",
    title: "Expense Tracker App",
    description: "Develop a mobile app to track personal expenses with analytics and budgeting",
    domain: "Mobile Development",
    difficulty: "Easy",
    techStack: ["React Native", "SQLite", "Chart.js", "AsyncStorage"],
    timeEstimate: "3-4 weeks",
    teamSize: "2-3 members",
    learningOutcomes: ["Mobile UI/UX", "Local storage", "Data visualization", "State management"],
    courseRelevance: ["Computer Science Engineering", "Information Technology"],
    interests: ["Mobile App Development", "UI/UX Design", "Data Visualization"],
    projectType: ["Mini", "Major"],
    skillLevel: ["Beginner", "Intermediate"],
    resources: {
      github: [
        "https://github.com/react-native-async-storage/async-storage",
        "https://github.com/chartjs/Chart.js",
        "https://github.com/andpor/react-native-sqlite-storage",
      ],
      tutorials: [
        "https://reactnative.dev/docs/tutorial",
        "https://www.freecodecamp.org/news/create-an-expense-tracker-app-with-react-native/",
        "https://blog.logrocket.com/complete-guide-react-native-asyncstorage/",
      ],
      documentation: [
        "https://reactnative.dev/docs/getting-started",
        "https://www.chartjs.org/docs/latest/",
        "https://github.com/react-native-async-storage/async-storage/blob/main/docs/API.md",
      ],
      videos: ["https://www.youtube.com/watch?v=0-S5a0eXPoc", "https://www.youtube.com/watch?v=DqJ_KjFzL9I"],
    },
  },
  {
    id: "mobile-2",
    title: "Augmented Reality Shopping App",
    description: "Create an AR app that allows users to visualize products in their space",
    domain: "Mobile Development",
    difficulty: "Hard",
    techStack: ["Unity", "ARCore", "ARKit", "C#", "Firebase", "3D Modeling"],
    timeEstimate: "8-10 weeks",
    teamSize: "3-4 members",
    learningOutcomes: ["AR development", "3D graphics", "Computer vision", "Mobile optimization"],
    courseRelevance: ["Computer Science Engineering", "Game Development"],
    interests: ["Augmented Reality", "Mobile App Development", "Computer Vision"],
    projectType: ["Major", "Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/Unity-Technologies/Unity",
        "https://github.com/google-ar/arcore-android-sdk",
        "https://github.com/apple/ARKit",
      ],
      tutorials: [
        "https://unity.com/how-to-build/ar-apps",
        "https://developers.google.com/ar/develop/java/quickstart",
        "https://developer.apple.com/augmented-reality/arkit/",
      ],
      documentation: [
        "https://docs.unity3d.com/",
        "https://developers.google.com/ar/develop/java/reference",
        "https://developer.apple.com/documentation/arkit",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "mobile-3",
    title: "Fitness Tracking App with AI Coach",
    description: "Create a comprehensive fitness app with AI-powered workout recommendations",
    domain: "Mobile Development",
    difficulty: "Moderate",
    techStack: ["React Native", "TensorFlow Lite", "Firebase", "Health APIs"],
    timeEstimate: "6-7 weeks",
    teamSize: "3-4 members",
    learningOutcomes: ["Mobile AI integration", "Health data processing", "Recommendation systems", "User engagement"],
    courseRelevance: ["Computer Science Engineering", "Artificial Intelligence & ML"],
    interests: ["Mobile App Development", "Artificial Intelligence", "UI/UX Design"],
    projectType: ["Major", "Hackathon"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/react-native-async-storage/async-storage",
        "https://github.com/tensorflow/tensorflow",
        "https://github.com/firebase/firebase-admin-python",
      ],
      tutorials: [
        "https://reactnative.dev/docs/tutorial",
        "https://www.tensorflow.org/lite/guide",
        "https://firebase.google.com/docs/admin/setup",
      ],
      documentation: [
        "https://reactnative.dev/docs/getting-started",
        "https://www.tensorflow.org/lite/api_docs/python/tflite_runtime",
        "https://firebase.google.com/docs",
      ],
      videos: ["https://www.youtube.com/watch?v=0-S5a0eXPoc", "https://www.youtube.com/watch?v=DqJ_KjFzL9I"],
    },
  },
  {
    id: "mobile-4",
    title: "Cross-Platform Social Learning App",
    description: "Build a social learning platform with video calls, quizzes, and progress tracking",
    domain: "Mobile Development",
    difficulty: "Hard",
    techStack: ["Flutter", "WebRTC", "Firebase", "Node.js", "MongoDB"],
    timeEstimate: "8-10 weeks",
    teamSize: "4-5 members",
    learningOutcomes: [
      "Real-time communication",
      "Cross-platform development",
      "Social features",
      "Learning analytics",
    ],
    courseRelevance: ["Computer Science Engineering", "Information Technology"],
    interests: ["Mobile App Development", "Web Development", "UI/UX Design"],
    projectType: ["Major", "Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/flutter/flutter",
        "https://github.com/flutter-webrtc/flutter-webrtc",
        "https://github.com/firebase/firebase-admin-python",
      ],
      tutorials: [
        "https://flutter.dev/docs/get-started/codelab",
        "https://flutter-webrtc.org/",
        "https://firebase.google.com/docs/admin/setup",
      ],
      documentation: ["https://flutter.dev/docs", "https://flutter-webrtc.org/", "https://firebase.google.com/docs"],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },

  // Data Science Projects
  {
    id: "data-1",
    title: "Social Media Sentiment Analysis",
    description: "Analyze sentiment of social media posts using NLP techniques",
    domain: "Data Science",
    difficulty: "Moderate",
    techStack: ["Python", "Pandas", "NLTK", "Scikit-learn", "Matplotlib", "Twitter API"],
    timeEstimate: "3-4 weeks",
    teamSize: "2-3 members",
    learningOutcomes: ["Natural language processing", "Data preprocessing", "Machine learning", "API integration"],
    courseRelevance: ["Data Science", "Artificial Intelligence & ML", "Computer Science Engineering"],
    interests: ["Data Science", "Natural Language Processing", "Machine Learning"],
    projectType: ["Major", "Research"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/nltk/nltk",
        "https://github.com/scikit-learn/scikit-learn",
        "https://github.com/pandas-dev/pandas",
      ],
      tutorials: [
        "https://www.nltk.org/book/",
        "https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html",
        "https://pandas.pydata.org/pandas-docs/stable/user_guide/index.html",
      ],
      documentation: [
        "https://www.nltk.org/api/nltk.html",
        "https://scikit-learn.org/stable/modules/classes.html",
        "https://pandas.pydata.org/pandas-docs/stable/reference/index.html",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "data-2",
    title: "Customer Churn Prediction System",
    description: "Build a comprehensive system to predict and prevent customer churn",
    domain: "Data Science",
    difficulty: "Moderate",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Flask", "PostgreSQL", "Docker"],
    timeEstimate: "5-6 weeks",
    teamSize: "3-4 members",
    learningOutcomes: ["Predictive modeling", "Feature engineering", "Model deployment", "Business analytics"],
    courseRelevance: ["Data Science", "Artificial Intelligence & ML"],
    interests: ["Data Science", "Machine Learning", "Web Development"],
    projectType: ["Major", "Research"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/scikit-learn/scikit-learn",
        "https://github.com/dmlc/xgboost",
        "https://github.com/pallets/flask",
      ],
      tutorials: [
        "https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html",
        "https://xgboost.readthedocs.io/en/latest/",
        "https://flask.palletsprojects.com/en/2.0.x/tutorial/",
      ],
      documentation: [
        "https://scikit-learn.org/stable/modules/classes.html",
        "https://xgboost.readthedocs.io/",
        "https://flask.palletsprojects.com/en/2.0.x/api/",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "data-3",
    title: "Climate Change Data Visualization",
    description: "Create interactive visualizations of climate data with predictive modeling",
    domain: "Data Science",
    difficulty: "Easy",
    techStack: ["Python", "Pandas", "Plotly", "Streamlit", "APIs"],
    timeEstimate: "2-3 weeks",
    teamSize: "1-2 members",
    learningOutcomes: ["Data visualization", "API integration", "Statistical analysis", "Interactive dashboards"],
    courseRelevance: ["Data Science", "Environmental Engineering"],
    interests: ["Data Science", "Web Development"],
    projectType: ["Mini", "Hackathon"],
    skillLevel: ["Beginner", "Intermediate"],
    resources: {
      github: [
        "https://github.com/plotly/plotly.py",
        "https://github.com/streamlit/streamlit",
        "https://github.com/pandas-dev/pandas",
      ],
      tutorials: [
        "https://plotly.com/python/getting-started/",
        "https://docs.streamlit.io/en/stable/",
        "https://pandas.pydata.org/pandas-docs/stable/user_guide/index.html",
      ],
      documentation: [
        "https://plotly.com/python/api-reference/",
        "https://docs.streamlit.io/en/stable/api-reference/",
        "https://pandas.pydata.org/pandas-docs/stable/reference/index.html",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "data-4",
    title: "Customer Churn Prediction System",
    description: "Build a comprehensive system to predict and prevent customer churn",
    domain: "Data Science",
    difficulty: "Moderate",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Flask", "PostgreSQL", "Docker"],
    timeEstimate: "5-6 weeks",
    teamSize: "3-4 members",
    learningOutcomes: ["Predictive modeling", "Feature engineering", "Model deployment", "Business analytics"],
    courseRelevance: ["Data Science", "Artificial Intelligence & ML"],
    interests: ["Data Science", "Machine Learning", "Web Development"],
    projectType: ["Major", "Research"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/scikit-learn/scikit-learn",
        "https://github.com/dmlc/xgboost",
        "https://github.com/pallets/flask",
      ],
      tutorials: [
        "https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html",
        "https://xgboost.readthedocs.io/en/latest/",
        "https://flask.palletsprojects.com/en/2.0.x/tutorial/",
      ],
      documentation: [
        "https://scikit-learn.org/stable/modules/classes.html",
        "https://xgboost.readthedocs.io/",
        "https://flask.palletsprojects.com/en/2.0.x/api/",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "data-5",
    title: "Real-time Fraud Detection Pipeline",
    description: "Develop a real-time fraud detection system for financial transactions",
    domain: "Data Science",
    difficulty: "Insane",
    techStack: ["Python", "Apache Kafka", "Apache Spark", "TensorFlow", "Redis", "Kubernetes"],
    timeEstimate: "14-18 weeks",
    teamSize: "5-6 members",
    learningOutcomes: ["Stream processing", "Anomaly detection", "Real-time ML", "Distributed systems"],
    courseRelevance: ["Data Science", "Computer Science Engineering"],
    interests: ["Data Science", "Machine Learning", "Cloud Computing"],
    projectType: ["Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/apache/kafka",
        "https://github.com/apache/spark",
        "https://github.com/tensorflow/tensorflow",
      ],
      tutorials: [
        "https://kafka.apache.org/documentation/",
        "https://spark.apache.org/docs/latest/",
        "https://www.tensorflow.org/tutorials/",
      ],
      documentation: [
        "https://kafka.apache.org/documentation/",
        "https://spark.apache.org/docs/latest/",
        "https://www.tensorflow.org/api_docs",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },

  // Game Development Projects
  {
    id: "game-1",
    title: "2D Platformer Game",
    description: "Create a classic 2D platformer game with physics and level progression",
    domain: "Game Development",
    difficulty: "Easy",
    techStack: ["Unity", "C#", "2D Physics", "Animation"],
    timeEstimate: "3-4 weeks",
    teamSize: "1-2 members",
    learningOutcomes: ["Game physics", "Animation systems", "Level design", "User input handling"],
    courseRelevance: ["Computer Science Engineering", "Game Development"],
    interests: ["Game Development", "UI/UX Design"],
    projectType: ["Mini", "Hackathon"],
    skillLevel: ["Beginner", "Intermediate"],
    resources: {
      github: [
        "https://github.com/Unity-Technologies/Unity",
        "https://github.com/Unity-Technologies/2D-Physics",
        "https://github.com/Unity-Technologies/Animation",
      ],
      tutorials: [
        "https://unity.com/how-to-build/2d-games",
        "https://docs.unity3d.com/Manual/2DPhysics.html",
        "https://docs.unity3d.com/Manual/AnimatingCharacters.html",
      ],
      documentation: [
        "https://docs.unity3d.com/",
        "https://docs.unity3d.com/Manual/2DPhysics.html",
        "https://docs.unity3d.com/Manual/AnimatingCharacters.html",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "game-2",
    title: "Multiplayer VR Experience",
    description: "Build an immersive VR experience with multiplayer capabilities",
    domain: "Game Development",
    difficulty: "Insane",
    techStack: ["Unity", "VR SDK", "Photon", "C#", "3D Modeling"],
    timeEstimate: "16-20 weeks",
    teamSize: "5-6 members",
    learningOutcomes: ["VR development", "Multiplayer networking", "3D graphics", "User experience design"],
    courseRelevance: ["Computer Science Engineering", "Game Development"],
    interests: ["Virtual Reality", "Game Development", "Computer Vision"],
    projectType: ["Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/Unity-Technologies/Unity",
        "https://github.com/Unity-Technologies/VR-SDK",
        "https://github.com/ExitGames/Photon",
      ],
      tutorials: [
        "https://unity.com/how-to-build/vr-games",
        "https://www.youtube.com/watch?v=7YcW25PHvvg",
        "https://www.youtube.com/watch?v=6n38jBdDhBQ",
      ],
      documentation: [
        "https://docs.unity3d.com/",
        "https://docs.unity3d.com/Packages/com.unity.xr.management@4.0/manual/index.html",
        "https://doc.photonengine.com/en-us/pun/current/getting-started/getting-started",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },

  // Blockchain Projects
  {
    id: "blockchain-1",
    title: "Cryptocurrency Trading Bot",
    description: "Develop an automated trading bot for cryptocurrency markets",
    domain: "Blockchain",
    difficulty: "Hard",
    techStack: ["Python", "APIs", "Machine Learning", "WebSocket", "Database"],
    timeEstimate: "6-8 weeks",
    teamSize: "2-3 members",
    learningOutcomes: ["Trading algorithms", "API integration", "Risk management", "Real-time data processing"],
    courseRelevance: ["Computer Science Engineering", "Data Science"],
    interests: ["Blockchain", "Machine Learning", "Data Science"],
    projectType: ["Major", "Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/ccxt/ccxt",
        "https://github.com/tensorflow/tensorflow",
        "https://github.com/asyncio/asyncio",
      ],
      tutorials: [
        "https://github.com/ccxt/ccxt/wiki",
        "https://www.tensorflow.org/tutorials/",
        "https://docs.python.org/3/library/asyncio.html",
      ],
      documentation: [
        "https://github.com/ccxt/ccxt/wiki",
        "https://www.tensorflow.org/api_docs",
        "https://docs.python.org/3/library/asyncio.html",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "blockchain-2",
    title: "Decentralized Voting System",
    description: "Create a secure, transparent voting system using blockchain technology",
    domain: "Blockchain",
    difficulty: "Hard",
    techStack: ["Solidity", "Web3.js", "React", "IPFS", "Truffle"],
    timeEstimate: "8-10 weeks",
    teamSize: "3-4 members",
    learningOutcomes: ["Smart contracts", "Decentralized applications", "Cryptographic security", "Governance systems"],
    courseRelevance: ["Computer Science Engineering", "Cybersecurity"],
    interests: ["Blockchain", "Cybersecurity", "Web Development"],
    projectType: ["Major", "Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/ethereum/solidity",
        "https://github.com/ethereum/web3.js",
        "https://github.com/trufflesuite/truffle",
      ],
      tutorials: [
        "https://ethereum.org/en/developers/tutorials/",
        "https://web3js.readthedocs.io/en/v1.5.2/",
        "https://trufflesuite.com/docs/truffle/quickstart",
      ],
      documentation: [
        "https://soliditylang.org/docs/",
        "https://web3js.readthedocs.io/",
        "https://trufflesuite.com/docs/truffle/quickstart",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },

  // DevOps & Cloud Computing Projects
  {
    id: "devops-1",
    title: "CI/CD Pipeline Automation",
    description: "Build a comprehensive CI/CD pipeline with automated testing and deployment",
    domain: "DevOps",
    difficulty: "Moderate",
    techStack: ["Jenkins", "Docker", "Kubernetes", "Git", "AWS/Azure"],
    timeEstimate: "4-5 weeks",
    teamSize: "2-3 members",
    learningOutcomes: ["Pipeline automation", "Container orchestration", "Infrastructure as code", "Monitoring"],
    courseRelevance: ["Computer Science Engineering", "Software Engineering"],
    interests: ["DevOps", "Cloud Computing", "Web Development"],
    projectType: ["Major", "Research"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/jenkinsci/jenkins",
        "https://github.com/docker/docker",
        "https://github.com/kubernetes/kubernetes",
      ],
      tutorials: [
        "https://www.jenkins.io/doc/book/",
        "https://docs.docker.com/get-started/",
        "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
      ],
      documentation: ["https://www.jenkins.io/doc/", "https://docs.docker.com/", "https://kubernetes.io/docs/"],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "devops-2",
    title: "Microservices Orchestration Platform",
    description: "Develop a platform for managing and orchestrating microservices at scale",
    domain: "DevOps",
    difficulty: "Insane",
    techStack: ["Kubernetes", "Istio", "Prometheus", "Grafana", "Helm", "Go"],
    timeEstimate: "16-20 weeks",
    teamSize: "5-6 members",
    learningOutcomes: ["Service mesh", "Observability", "Scalable architecture", "Performance optimization"],
    courseRelevance: ["Computer Science Engineering", "Software Engineering"],
    interests: ["DevOps", "Cloud Computing", "Web Development"],
    projectType: ["Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/kubernetes/kubernetes",
        "https://github.com/istio/istio",
        "https://github.com/prometheus/prometheus",
      ],
      tutorials: [
        "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
        "https://istio.io/latest/docs/",
        "https://prometheus.io/docs/introduction/overview/",
      ],
      documentation: ["https://kubernetes.io/docs/", "https://istio.io/latest/docs/", "https://prometheus.io/docs/"],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },

  // Robotics Projects
  {
    id: "robotics-1",
    title: "Line Following Robot",
    description: "Build a robot that can follow a line using sensors and basic AI",
    domain: "Robotics",
    difficulty: "Easy",
    techStack: ["Arduino", "Sensors", "Motors", "C++"],
    timeEstimate: "2-3 weeks",
    teamSize: "2-3 members",
    learningOutcomes: ["Sensor integration", "Motor control", "Basic algorithms", "Hardware programming"],
    courseRelevance: ["Electronics & Communication", "Mechanical Engineering", "Computer Science Engineering"],
    interests: ["Robotics", "Internet of Things (IoT)"],
    projectType: ["Mini", "Hackathon"],
    skillLevel: ["Beginner", "Intermediate"],
    resources: {
      github: [
        "https://github.com/arduino/Arduino",
        "https://github.com/adafruit/Adafruit_Sensor",
        "https://github.com/arduino/ArduinoCore-avr",
      ],
      tutorials: [
        "https://randomnerdtutorials.com/arduino-line-following-robot/",
        "https://www.arduino.cc/en/software",
        "https://www.tutorialspoint.com/cplusplus/index.htm",
      ],
      documentation: [
        "https://www.arduino.cc/en/software",
        "https://github.com/adafruit/Adafruit_Sensor",
        "https://www.tutorialspoint.com/cplusplus/index.htm",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "robotics-2",
    title: "Autonomous Delivery Robot",
    description: "Create an autonomous robot for package delivery with navigation and obstacle avoidance",
    domain: "Robotics",
    difficulty: "Insane",
    techStack: ["ROS", "Python", "Computer Vision", "LIDAR", "GPS", "Machine Learning"],
    timeEstimate: "18-24 weeks",
    teamSize: "6-8 members",
    learningOutcomes: ["Autonomous navigation", "SLAM", "Path planning", "Computer vision", "Sensor fusion"],
    courseRelevance: ["Robotics", "Computer Science Engineering", "Mechanical Engineering"],
    interests: ["Robotics", "Artificial Intelligence", "Computer Vision"],
    projectType: ["Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: ["https://github.com/ros/ros", "https://github.com/python/cpython", "https://github.com/opencv/opencv"],
      tutorials: [
        "https://roboticsbackend.com/ros-tutorials/",
        "https://www.python.org/doc/",
        "https://docs.opencv.org/master/",
      ],
      documentation: [
        "https://docs.ros.org/en/noetic/",
        "https://www.python.org/doc/",
        "https://docs.opencv.org/master/",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },

  // Fintech Projects
  {
    id: "fintech-1",
    title: "Personal Finance Manager",
    description: "Build a comprehensive personal finance management app with budgeting and analytics",
    domain: "Fintech",
    difficulty: "Moderate",
    techStack: ["React Native", "Node.js", "MongoDB", "Chart.js", "Banking APIs"],
    timeEstimate: "5-6 weeks",
    teamSize: "3-4 members",
    learningOutcomes: ["Financial APIs", "Data visualization", "Security practices", "Mobile development"],
    courseRelevance: ["Computer Science Engineering", "Information Technology"],
    interests: ["Mobile App Development", "Data Science", "Web Development"],
    projectType: ["Major", "Hackathon"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/react-native-async-storage/async-storage",
        "https://github.com/chartjs/Chart.js",
        "https://github.com/andpor/react-native-sqlite-storage",
      ],
      tutorials: [
        "https://reactnative.dev/docs/tutorial",
        "https://www.freecodecamp.org/news/create-an-expense-tracker-app-with-react-native/",
        "https://blog.logrocket.com/complete-guide-react-native-asyncstorage/",
      ],
      documentation: [
        "https://reactnative.dev/docs/getting-started",
        "https://www.chartjs.org/docs/latest/",
        "https://github.com/react-native-async-storage/async-storage/blob/main/docs/API.md",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "fintech-2",
    title: "Algorithmic Trading Platform",
    description: "Develop a sophisticated platform for algorithmic trading with backtesting capabilities",
    domain: "Fintech",
    difficulty: "Insane",
    techStack: ["Python", "TensorFlow", "Apache Kafka", "PostgreSQL", "React", "WebSocket"],
    timeEstimate: "16-20 weeks",
    teamSize: "5-6 members",
    learningOutcomes: ["Quantitative finance", "High-frequency trading", "Risk management", "Real-time systems"],
    courseRelevance: ["Computer Science Engineering", "Data Science"],
    interests: ["Machine Learning", "Data Science", "Web Development"],
    projectType: ["Research"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/apache/kafka",
        "https://github.com/tensorflow/tensorflow",
        "https://github.com/pallets/flask",
      ],
      tutorials: [
        "https://kafka.apache.org/documentation/",
        "https://www.tensorflow.org/tutorials/",
        "https://flask.palletsprojects.com/en/2.0.x/tutorial/",
      ],
      documentation: [
        "https://kafka.apache.org/documentation/",
        "https://www.tensorflow.org/api_docs",
        "https://flask.palletsprojects.com/en/2.0.x/api/",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },

  // Healthcare Tech Projects
  {
    id: "health-1",
    title: "Symptom Checker App",
    description: "Create an AI-powered app that helps users assess symptoms and find appropriate care",
    domain: "Healthcare Technology",
    difficulty: "Moderate",
    techStack: ["React Native", "Python", "TensorFlow", "Medical APIs", "Firebase"],
    timeEstimate: "6-7 weeks",
    teamSize: "3-4 members",
    learningOutcomes: ["Medical AI", "Natural language processing", "Healthcare regulations", "Mobile development"],
    courseRelevance: ["Artificial Intelligence & ML", "Computer Science Engineering"],
    interests: ["Artificial Intelligence", "Mobile App Development", "Natural Language Processing"],
    projectType: ["Major", "Research"],
    skillLevel: ["Intermediate", "Advanced"],
    resources: {
      github: [
        "https://github.com/react-native-async-storage/async-storage",
        "https://github.com/chartjs/Chart.js",
        "https://github.com/andpor/react-native-sqlite-storage",
      ],
      tutorials: [
        "https://reactnative.dev/docs/tutorial",
        "https://www.freecodecamp.org/news/create-an-expense-tracker-app-with-react-native/",
        "https://blog.logrocket.com/complete-guide-react-native-asyncstorage/",
      ],
      documentation: [
        "https://reactnative.dev/docs/getting-started",
        "https://www.chartjs.org/docs/latest/",
        "https://github.com/react-native-async-storage/async-storage/blob/main/docs/API.md",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
  {
    id: "health-2",
    title: "Telemedicine Platform",
    description: "Build a comprehensive telemedicine platform with video consultations and patient management",
    domain: "Healthcare Technology",
    difficulty: "Hard",
    techStack: ["React", "Node.js", "WebRTC", "MongoDB", "Socket.io", "Stripe"],
    timeEstimate: "10-12 weeks",
    teamSize: "4-5 members",
    learningOutcomes: ["Video communication", "Healthcare workflows", "Payment integration", "Data privacy"],
    courseRelevance: ["Computer Science Engineering", "Information Technology"],
    interests: ["Web Development", "UI/UX Design", "Cloud Computing"],
    projectType: ["Research", "Major"],
    skillLevel: ["Advanced"],
    resources: {
      github: [
        "https://github.com/react-native-async-storage/async-storage",
        "https://github.com/chartjs/Chart.js",
        "https://github.com/andpor/react-native-sqlite-storage",
      ],
      tutorials: [
        "https://reactnative.dev/docs/tutorial",
        "https://www.freecodecamp.org/news/create-an-expense-tracker-app-with-react-native/",
        "https://blog.logrocket.com/complete-guide-react-native-asyncstorage/",
      ],
      documentation: [
        "https://reactnative.dev/docs/getting-started",
        "https://www.chartjs.org/docs/latest/",
        "https://github.com/react-native-async-storage/async-storage/blob/main/docs/API.md",
      ],
      videos: ["https://www.youtube.com/watch?v=7YcW25PHvvg", "https://www.youtube.com/watch?v=6n38jBdDhBQ"],
    },
  },
]

class ProjectDatabase {
  private projects: Project[] = projects

  getRecommendations(studentData: any): Project[] {
    const { course, interests, skillLevel, difficulty, projectType } = studentData

    const scored = this.projects.map((project) => {
      let score = 0

      // Course relevance (30% weight)
      if (project.courseRelevance.includes(course)) {
        score += 30
      }

      // Interest matching (25% weight)
      const interestMatches = project.interests.filter((interest) => interests.includes(interest)).length
      score += (interestMatches / Math.max(project.interests.length, 1)) * 25

      // Skill level compatibility (20% weight)
      if (project.skillLevel.includes(skillLevel)) {
        score += 20
      }

      // Difficulty preference (15% weight)
      if (project.difficulty === difficulty) {
        score += 15
      } else {
        // Partial score for adjacent difficulty levels
        const difficultyOrder = ["Easy", "Moderate", "Hard", "Insane"]
        const userIndex = difficultyOrder.indexOf(difficulty)
        const projectIndex = difficultyOrder.indexOf(project.difficulty)
        const distance = Math.abs(userIndex - projectIndex)
        if (distance === 1) score += 10
        else if (distance === 2) score += 5
      }

      // Project type matching (10% weight)
      if (project.projectType.includes(projectType)) {
        score += 10
      }

      return { ...project, score }
    })

    // Sort by score and return top recommendations
    return scored.sort((a, b) => b.score - a.score).slice(0, 15) // Return top 15 recommendations
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id)
  }

  getProjectsByDomain(domain: string): Project[] {
    return this.projects.filter((project) => project.domain === domain)
  }

  getProjectsByDifficulty(difficulty: string): Project[] {
    return this.projects.filter((project) => project.difficulty === difficulty)
  }
}

export const projectDatabase = new ProjectDatabase()
