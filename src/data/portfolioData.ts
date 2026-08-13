import type { PersonalInfo, Project, SkillCategory, Contribution, Milestone } from '../types';

export const personalInfo: PersonalInfo = {
  name: "K. Harshavardhan",
  handle: "harshavardhan-k",
  title: "AI/ML Engineer • Software Developer • Open Source Contributor",
  subtitle: "Building production-grade GraphRAG pipelines, intelligent agentic systems, and high-throughput AI applications.",
  location: "India",
  status: "AVAILABLE FOR OPPORTUNITIES",
  bio: "I am a Computer Science & Engineering student specializing in AI/ML. My focus lies at the intersection of enterprise retrieval-augmented generation (GraphRAG), scalable machine learning architectures, real-time computer vision, and high-performance backend development. I actively contribute to open-source AI tooling and love engineering complex systems from first principles.",
  interests: [
    "Enterprise GraphRAG & Knowledge Graphs",
    "Agentic AI Frameworks & Tool Use",
    "Multi-Modal Deepfake & Anti-Spoofing Detection",
    "High-Performance System Architecture",
    "Open Source Tooling"
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "University Institute of Engineering & Technology",
    period: "2022 — 2026",
    grade: "Specialization in Artificial Intelligence & Machine Learning",
    details: "Coursework: Data Structures & Algorithms, Deep Learning, Natural Language Processing, Computer Vision, Knowledge Graphs, Distributed Systems, Database Management."
  },
  socials: {
    github: "https://github.com/KHARSHAVARDHAN-eng",
    linkedin: "https://linkedin.com/in/k-harshavardhan",
    email: "harsha.ai.eng@gmail.com",
    resume: "/resume.pdf",
    twitter: "https://x.com/harshavardhan_ai"
  }
};

export const projects: Project[] = [
  {
    id: "content-iq-graphrag",
    title: "ContentIQ / Enterprise GraphRAG",
    subtitle: "Enterprise-grade multi-document GraphRAG pipeline powered by hybrid vector and knowledge graph retrieval.",
    category: "GraphRAG",
    featured: true,
    problem: "Standard RAG systems struggle with multi-document reasoning, hierarchical relationship extraction, and hallucinated citations when querying complex enterprise knowledge bases.",
    solution: "ContentIQ combines semantic vector search with knowledge graph entity-relation indexing, cross-encoder reranking, and citation-backed LLM synthesis to deliver precise, deterministic answers with traceably verified references.",
    architecture: "Dual-Engine Indexing (Qdrant Vector DB + Neo4j Graph DB) -> HyDE Query Decomposition -> Reciprocal Rank Fusion (RRF) -> BGE Reranker -> Structured Llama 3 / Claude 3 Synthesis.",
    keyFeatures: [
      "Hybrid Dense (BGE-Large) + Sparse (BM25) Vector Search",
      "Dynamic Entity Extraction & Knowledge Graph Construction in Neo4j",
      "Sub-second Cross-Encoder Reranking pipeline",
      "Traceable Document-to-Sentence Citation Tracking",
      "Async Multi-Threaded Ingestion for PDFs, DOCX, and Markdown"
    ],
    techStack: ["Python", "PyTorch", "Neo4j", "Qdrant", "LangChain", "FastAPI", "React", "TailwindCSS"],
    githubUrl: "https://github.com/KHARSHAVARDHAN-eng/ContentIQ-GraphRAG",
    demoUrl: "https://contentiq-demo.vercel.app",
    metrics: [
      { label: "Retrieval Accuracy", value: "94.8%" },
      { label: "Query Latency", value: "< 340ms" },
      { label: "Citation Precision", value: "99.1%" }
    ],
    pipelineSteps: [
      {
        step: 1,
        name: "Document Ingestion & Parsing",
        subtitle: "Multi-format Document Extraction",
        description: "Parses structured & unstructured data (PDFs, Markdown, DOCX) while preserving layout geometry, tables, and metadata context.",
        tech: ["Unstructured.io", "PyPDF", "Tesseract OCR"],
        details: ["Extracts text, table cells, and hierarchical headings", "Assigns absolute document position offsets"]
      },
      {
        step: 2,
        name: "Hierarchical Chunking",
        subtitle: "Semantic & Structural Splitting",
        description: "Divides documents into context-aware chunks using dynamic parent-child chunking strategies to preserve context windows.",
        tech: ["LangChain TextSplitter", "Tiktoken"],
        details: ["Parent chunks (1024 tokens) for synthesis", "Child chunks (256 tokens) for fine-grained retrieval"]
      },
      {
        step: 3,
        name: "Vector & Graph Embedding",
        subtitle: "Dual Representations",
        description: "Generates high-dimensional semantic embeddings alongside structured Subject-Predicate-Object entity relationships.",
        tech: ["BGE-Large-En-v1.5", "spaCy NLP", "OpenAI Embeddings"],
        details: ["Vector dimension: 1024-d dense embeddings", "NER entity relation extraction for Graph triples"]
      },
      {
        step: 4,
        name: "Hybrid Storage Engine",
        subtitle: "Vector DB + Graph DB Integration",
        description: "Stores vector embeddings in Qdrant for semantic similarity and entity nodes in Neo4j for multi-hop graph traversals.",
        tech: ["Qdrant Vector DB", "Neo4j Graph Database"],
        details: ["HNSW index for sub-10ms similarity search", "Cypher query generation for relational graph traversal"]
      },
      {
        step: 5,
        name: "Hybrid Dense/Sparse Retrieval",
        subtitle: "Reciprocal Rank Fusion (RRF)",
        description: "Executes concurrent vector similarity search and sparse BM25 keyword retrieval, merging results using RRF algorithms.",
        tech: ["BM25", "Qdrant Hybrid Search", "RRF"],
        details: ["Queries vector & graph engines simultaneously", "Normalizes scores with reciprocal rank fusion k=60"]
      },
      {
        step: 6,
        name: "Cross-Encoder Reranking",
        subtitle: "Contextual Relevance Filtering",
        description: "Filters retrieved candidate passages through a heavy Cross-Encoder reranker to eliminate noise before LLM prompting.",
        tech: ["BGE-Reranker-Large", "HuggingFace Transformers"],
        details: ["Filters top-50 candidates down to top-5 high-signal passages", "Improves context relevance score by 38%"]
      },
      {
        step: 7,
        name: "Contextual Synthesis & LLM",
        subtitle: "Deterministic Generation",
        description: "Synthesizes final answer using LLMs constrained by system prompts requiring inline sentence-level citations.",
        tech: ["Llama 3 70B", "Claude 3.5 Sonnet", "vLLM Engine"],
        details: ["Enforces strict JSON schema output", "Prevents off-context hallucinations"]
      },
      {
        step: 8,
        name: "Verification & Citation Output",
        subtitle: "Auditability Engine",
        description: "Verifies generated claims against retrieved text snippets, outputting interactively clickable citations to exact document coordinates.",
        tech: ["Ragas Framework", "Custom Groundedness Evaluator"],
        details: ["Provides exact document page & paragraph highlight references", "Calculates real-time groundedness confidence score"]
      }
    ]
  },
  {
    id: "face-auth-ai",
    title: "FaceAuth AI — Biometric Authentication",
    subtitle: "Real-time face recognition and liveness detection system with anti-spoofing depth analysis.",
    category: "Computer Vision",
    featured: true,
    problem: "Standard camera biometric auth is vulnerable to presentation attacks using high-resolution photos, video replays, or 3D masks.",
    solution: "FaceAuth AI integrates lightweight MobileFaceNet embeddings with a multi-task CNN anti-spoofing pipeline that inspects texture micro-anomalies, subtle eye blinks, and dynamic illumination reflections in real time.",
    architecture: "OpenCV Web Stream -> Face Landmark Detection (MediaPipe) -> Micro-texture Anti-Spoofing CNN -> MobileFaceNet 512-d Vector Extraction -> Cosine Similarity Database Matching.",
    keyFeatures: [
      "Sub-50ms Real-Time Face Detection & Anti-Spoofing Inference",
      "Liveness Detection via Micro-blinks and Motion Parallax",
      "AES-256 Encrypted Face Embedding Storage",
      "Zero-Trust Auth API Integration with WebAuthn/OAuth2",
      "Robust under low-light and multi-angle capture conditions"
    ],
    techStack: ["Python", "PyTorch", "OpenCV", "MediaPipe", "FastAPI", "Docker", "React"],
    githubUrl: "https://github.com/KHARSHAVARDHAN-eng/FaceAuth-AI",
    demoUrl: "https://faceauth-demo.vercel.app",
    metrics: [
      { label: "Anti-Spoofing Accuracy", value: "99.4%" },
      { label: "Inference Time", value: "38 ms" },
      { label: "False Accept Rate", value: "< 0.001%" }
    ]
  },
  {
    id: "fake-content-detection",
    title: "Fake Content & Deepfake Neural Analyzer",
    subtitle: "Multi-modal transformer engine for detecting AI-generated text, image manipulation, and synthetic news.",
    category: "AI/ML",
    featured: true,
    problem: "The rapid proliferation of generative AI text (LLMs) and synthetic imagery threatens media integrity and automated content moderation.",
    solution: "A unified multi-modal neural network analyzing linguistic perplexity/burstiness metrics alongside image frequency domain artifacts (FFT frequency spectrum analysis) to classify content authenticity.",
    architecture: "Text Path: DeBERTa-v3 Perplexity Analyzer. Vision Path: ConvNeXt + Discrete Fourier Transform (DFT) Frequency Artifact Detection -> Gated Fusion Layer -> Multimodal Classification.",
    keyFeatures: [
      "Dual-stream multi-modal architecture (Vision + NLP)",
      "Frequency-domain FFT spectral analysis for synthetic image artifacts",
      "Linguistic perplexity & n-gram entropy analysis for LLM text detection",
      "REST API & Chrome Extension integration for live browsing analysis",
      "Interactive confidence breakdown radar chart"
    ],
    techStack: ["Python", "PyTorch", "Transformers", "ConvNeXt", "FastAPI", "React", "TailwindCSS"],
    githubUrl: "https://github.com/KHARSHAVARDHAN-eng/Fake-Content-Detection",
    demoUrl: "https://fake-detector-demo.vercel.app",
    metrics: [
      { label: "Text Detection F1", value: "0.962" },
      { label: "Deepfake Image Detection", value: "97.8%" },
      { label: "API Latency", value: "180 ms" }
    ]
  },
  {
    id: "voice-spoof-detection",
    title: "Voice Spoof & Audio Anti-Spoofing Engine",
    subtitle: "Acoustic spectrogram feature extraction and neural audio classifier targeting voice clone & replay attacks.",
    category: "Audio AI",
    featured: true,
    problem: "Voice cloning tools (ElevenLabs, Tacotron) allow malicious actors to bypass voice biometrics and execute phone imposter scams.",
    solution: "Builds on LFCC (Linear Frequency Cepstral Coefficients) and RawNet2 architectures to inspect raw audio waveforms and spectral phase anomalies present in synthetic speech.",
    architecture: "Raw Audio Input -> SincNet Initial Layer -> RawNet2 Temporal Feature Extractor -> LFCC Feature Fusion -> Bi-LSTM Spectrogram Classifier -> Authenticity Score.",
    keyFeatures: [
      "Raw waveform audio analysis without lossy spectrogram compression",
      "Detection of ElevenLabs, VALL-E, and Tacotron2 synthetic clones",
      "Replay attack acoustic room response detection",
      "Streamed WebAudio API analysis in real-time",
      "Lightweight model exportable to ONNX Runtime for edge deployment"
    ],
    techStack: ["Python", "PyTorch", "Librosa", "RawNet2", "ONNX Runtime", "FastAPI", "WebAudio API"],
    githubUrl: "https://github.com/KHARSHAVARDHAN-eng/Voice-Spoof-Detection",
    demoUrl: "https://voicespoof-demo.vercel.app",
    metrics: [
      { label: "EER (Equal Error Rate)", value: "1.42%" },
      { label: "Audio Processing Speed", value: "10x Realtime" },
      { label: "Synthetic Clone Detection", value: "98.6%" }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI / Machine Learning",
    iconName: "BrainCircuit",
    description: "Deep learning model design, training, optimization, and evaluation.",
    skills: [
      { name: "PyTorch", level: 92, highlight: "Custom loss functions, CNNs, Transformers, TorchScript" },
      { name: "Scikit-Learn", level: 90, highlight: "Feature engineering, ensemble models, clustering" },
      { name: "Computer Vision", level: 88, highlight: "OpenCV, MediaPipe, Object Detection, Face Analysis" },
      { name: "Audio Processing", level: 84, highlight: "Librosa, LFCC/MFCC spectral analysis, RawNet" },
      { name: "Model Optimization", level: 82, highlight: "ONNX Runtime, Quantization, TensorRT" }
    ]
  },
  {
    title: "GraphRAG & Knowledge Systems",
    iconName: "Network",
    description: "Enterprise search, knowledge graphs, and vector retrieval architectures.",
    skills: [
      { name: "Neo4j & Cypher", level: 90, highlight: "Knowledge Graph modeling, multi-hop path query" },
      { name: "Vector Databases", level: 94, highlight: "Qdrant, Milvus, ChromaDB, HNSW indexing" },
      { name: "LangChain / LlamaIndex", level: 92, highlight: "Custom chain tools, hybrid retrievers, agents" },
      { name: "Embeddings & Reranking", level: 95, highlight: "BGE, Cross-Encoders, BM25, RRF fusion" },
      { name: "LLM Orchestration", level: 88, highlight: "vLLM, Ollama, Function calling, Structured outputs" }
    ]
  },
  {
    title: "Programming & Languages",
    iconName: "Code2",
    description: "Core programming languages for production software and algorithm design.",
    skills: [
      { name: "Python", level: 96, highlight: "Asynchronous I/O, PyTorch, FastAPI, Metaprogramming" },
      { name: "TypeScript / JavaScript", level: 90, highlight: "ESNext, Type Safety, Async patterns, React" },
      { name: "C / C++", level: 82, highlight: "Data Structures, Memory management, Algorithm design" },
      { name: "SQL", level: 88, highlight: "Complex joins, indexing, query optimization" }
    ]
  },
  {
    title: "Backend & Systems",
    iconName: "Server",
    description: "High-throughput API development, containerization, and backend infrastructure.",
    skills: [
      { name: "FastAPI", level: 94, highlight: "Async endpoints, WebSockets, Pydantic v2, OpenAPI" },
      { name: "Docker", level: 86, highlight: "Multi-stage builds, container security, compose" },
      { name: "REST & WebSockets", level: 92, highlight: "Real-time streaming, event-driven architectures" },
      { name: "PostgreSQL & Redis", level: 85, highlight: "Relational modeling, caching layers, pub-sub" }
    ]
  },
  {
    title: "Frontend & UI UX",
    iconName: "Layout",
    description: "Modern web interfaces, motion graphics, and interactive visualizations.",
    skills: [
      { name: "React", level: 92, highlight: "Custom hooks, performance optimization, state management" },
      { name: "Tailwind CSS", level: 95, highlight: "Design tokens, glassmorphism, responsive layouts" },
      { name: "Framer Motion & GSAP", level: 88, highlight: "Cinematic scroll animations, layout transitions" },
      { name: "Three.js / HTML5 Canvas", level: 84, highlight: "Procedural graphics, 60fps particle physics" }
    ]
  }
];

export const openSourceContributions: Contribution[] = [
  {
    title: "GraphRAG Hybrid Retriever Module",
    repo: "KHARSHAVARDHAN-eng/ContentIQ-GraphRAG",
    role: "Author & Maintainer",
    stars: "140+",
    type: "Maintainer",
    description: "Created an open-source framework combining Qdrant dense vector search with Neo4j entity graphs for transparent enterprise document question-answering.",
    tech: ["Python", "Neo4j", "Qdrant", "LangChain"],
    link: "https://github.com/KHARSHAVARDHAN-eng/ContentIQ-GraphRAG"
  },
  {
    title: "Fast Anti-Spoofing Vision Pipeline",
    repo: "KHARSHAVARDHAN-eng/FaceAuth-AI",
    role: "Creator",
    stars: "95+",
    type: "Feature",
    description: "Developed lightweight micro-texture anti-spoofing models tailored for edge deployment on low-cost webcam streams.",
    tech: ["PyTorch", "OpenCV", "MediaPipe"],
    link: "https://github.com/KHARSHAVARDHAN-eng/FaceAuth-AI"
  },
  {
    title: "Community AI Tooling & RAG Utilities",
    repo: "open-source-ai/rag-utilities",
    role: "Contributor",
    stars: "1.2k",
    type: "PR",
    description: "Contributed fast parallel chunking and Reciprocal Rank Fusion algorithms to open-source retrieval benchmarking suites.",
    tech: ["Python", "PyTorch", "BM25"],
    link: "https://github.com/KHARSHAVARDHAN-eng"
  }
];

export const milestones: Milestone[] = [
  {
    id: "m1",
    title: "AI/ML Engineering & Open Source Lead",
    organization: "Independent Research & Open Source",
    period: "2023 — Present",
    type: "open-source",
    location: "Remote / India",
    description: "Architected end-to-end GraphRAG architectures, anti-spoofing biometrics, and multi-modal AI analyzers. Published multiple production-ready open-source repositories.",
    highlights: [
      "Architected ContentIQ GraphRAG pipeline reaching 94.8% retrieval accuracy",
      "Built real-time sub-50ms facial anti-spoofing computer vision pipeline",
      "Authored open-source libraries star-marked by AI developers"
    ],
    badgeText: "Core Projects"
  },
  {
    id: "m2",
    title: "National AI Hackathon Winner & Finalist",
    organization: "National Innovation Hackathons",
    period: "2024",
    type: "hackathon",
    location: "India",
    description: "Designed and prototyped real-time AI solutions for automated media verification and deepfake detection under strict 36-hour deadlines.",
    highlights: [
      "Awarded Top Honors for Fake Content Multi-modal Analyzer",
      "Demonstrated real-time spectral frequency analysis live before technical judges",
      "Pitched agentic AI workflows to industry engineering leads"
    ],
    badgeText: "First Place"
  },
  {
    id: "m3",
    title: "B.Tech Specialization in AI & Machine Learning",
    organization: "UIET University",
    period: "2022 — 2026",
    type: "internship",
    location: "India",
    description: "Pursuing Bachelor of Technology with focus on Deep Learning, NLP, Data Structures, and Knowledge Engineering.",
    highlights: [
      "Top percentile academic performance in AI/ML coursework",
      "Led university technical workshop on RAG and LLM Fine-Tuning",
      "Collaborated on undergraduate computer vision research"
    ],
    badgeText: "CSE AIML"
  }
];
