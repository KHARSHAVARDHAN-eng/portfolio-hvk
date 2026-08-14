import type { PersonalInfo, Project, SkillCategory, Contribution, Milestone } from '../types';

export const personalInfo: PersonalInfo = {
  name: "K. HARSHAVARDHAN",
  handle: "harshavardhan-k",
  title: "Computer Science & Engineering Student",
  subtitle: "AI/ML • Software Development • Open Source",
  location: "India",
  status: "AVAILABLE FOR OPPORTUNITIES",
  bio: "Computer Science & Engineering student at Alliance University specializing in Artificial Intelligence & Machine Learning. I build enterprise GraphRAG indexing systems, real-time computer vision anti-spoofing biometrics, and open-source developer tooling.",
  interests: [
    "Enterprise GraphRAG & Knowledge Systems",
    "Agentic AI Frameworks & Tool Use",
    "Multi-Modal Deepfake & Anti-Spoofing Detection",
    "High-Performance System Architecture",
    "Open Source Infrastructure"
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Alliance University",
    period: "2023 — 2027",
    grade: "Specialization in Artificial Intelligence & Machine Learning",
    details: "Coursework: Data Structures & Algorithms, Deep Learning, Natural Language Processing, Computer Vision, Database Systems, Operating Systems."
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
        name: "DOCUMENT PARSER",
        subtitle: "Multi-Format Ingestion",
        description: "Parses structured & unstructured data (PDFs, Markdown, DOCX) while preserving layout geometry and tables.",
        tech: ["PyPDF", "Unstructured", "Tesseract OCR"],
        details: ["Extracts text & table layout geometry", "Assigns document offsets"]
      },
      {
        step: 2,
        name: "SEMANTIC CHUNKER",
        subtitle: "Parent-Child Windowing",
        description: "Splits documents into context-aware chunks with parent windows for generation and child windows for dense retrieval.",
        tech: ["LangChain", "Tiktoken"],
        details: ["Parent chunks: 1024 tokens", "Child chunks: 256 tokens"]
      },
      {
        step: 3,
        name: "GRAPH & VECTOR EMBEDDING",
        subtitle: "Dual Representations",
        description: "Generates high-dimensional semantic vector embeddings alongside Subject-Predicate-Object knowledge graph triples.",
        tech: ["BGE-Large-v1.5", "spaCy NLP"],
        details: ["1024-d dense vectors", "Entity-relation extraction"]
      },
      {
        step: 4,
        name: "HYBRID STORAGE ENGINE",
        subtitle: "Qdrant + Neo4j",
        description: "Stores vector embeddings in Qdrant for semantic similarity and entity nodes in Neo4j for multi-hop graph traversals.",
        tech: ["Qdrant DB", "Neo4j Cypher"],
        details: ["Sub-10ms HNSW index search", "Multi-hop graph queries"]
      },
      {
        step: 5,
        name: "RRF FUSION RETRIEVAL",
        subtitle: "Hybrid Search Merging",
        description: "Runs concurrent dense vector search and sparse BM25 keyword matching, merging results with Reciprocal Rank Fusion.",
        tech: ["BM25", "Qdrant Hybrid", "RRF"],
        details: ["Reciprocal Rank Fusion k=60", "Combined semantic & keyword scores"]
      },
      {
        step: 6,
        name: "CROSS-ENCODER RERANKER",
        subtitle: "Context Relevance Filter",
        description: "Filters retrieved candidate passages through a Cross-Encoder reranker to eliminate noise before LLM prompting.",
        tech: ["BGE-Reranker-Large", "Transformers"],
        details: ["Filters top-50 down to top-5 high-signal chunks", "Improves context signal"]
      },
      {
        step: 7,
        name: "LLM SYNTHESIS ENGINE",
        subtitle: "Grounded Generation",
        description: "Synthesizes final answer using LLMs constrained by system prompts requiring inline sentence-level citations.",
        tech: ["Llama 3 70B", "Claude 3.5 Sonnet"],
        details: ["Strict JSON schema enforcement", "Prevents off-context hallucinations"]
      },
      {
        step: 8,
        name: "CITATION AUDIT ENGINE",
        subtitle: "Verification Output",
        description: "Verifies generated claims against retrieved text snippets, outputting interactively clickable citations to exact document coordinates.",
        tech: ["Ragas Evaluator", "Custom Verifier"],
        details: ["Exact page & line highlights", "Real-time groundedness score"]
      }
    ]
  },
  {
    id: "face-auth-ai",
    title: "FaceAuth AI",
    subtitle: "Real-time face recognition and liveness detection system with anti-spoofing micro-texture analysis.",
    category: "Computer Vision",
    featured: true,
    problem: "Standard camera biometric auth is vulnerable to presentation attacks using high-resolution photos, video replays, or 3D masks.",
    solution: "FaceAuth AI integrates lightweight MobileFaceNet embeddings with a multi-task CNN anti-spoofing pipeline that inspects texture micro-anomalies and dynamic illumination in real time.",
    architecture: "WebCam Stream -> MediaPipe Face Mesh -> Micro-Texture CNN Anti-Spoofing -> MobileFaceNet 512-d Embeddings -> Cosine Similarity Database Match.",
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
    ],
    pipelineSteps: [
      {
        step: 1,
        name: "WEBCAM INGESTION",
        subtitle: "Video Frame Capture",
        description: "Captures high-fps video stream from standard RGB webcams with dynamic brightness normalization.",
        tech: ["OpenCV", "WebRTC"],
        details: ["60fps input frame stream", "Lighting normalization"]
      },
      {
        step: 2,
        name: "FACIAL LANDMARK MESH",
        subtitle: "468-Point Mesh Extraction",
        description: "Detects face bounding box and tracks 3D facial mesh points in real-time.",
        tech: ["MediaPipe", "TFLite"],
        details: ["468 facial landmark coordinates", "Eye blink & head pose tracking"]
      },
      {
        step: 3,
        name: "MICRO-TEXTURE ANTI-SPOOF",
        subtitle: "Liveness Verification CNN",
        description: "Inspects high-frequency spatial texture anomalies to detect screen replay or paper mask photo attacks.",
        tech: ["PyTorch CNN", "Custom Texture Model"],
        details: ["Sub-30ms liveness score calculation", "Replay & print attack rejection"]
      },
      {
        step: 4,
        name: "EMBEDDING & MATCHING",
        subtitle: "MobileFaceNet Vector Search",
        description: "Extracts 512-dimensional facial embedding vector and computes cosine similarity against enrolled user database.",
        tech: ["MobileFaceNet", "Faiss"],
        details: ["512-d biometric embedding", "AES-256 encrypted vector storage"]
      }
    ]
  },
  {
    id: "fake-content-detection",
    title: "Fake Content & Deepfake Neural Analyzer",
    subtitle: "Multi-modal transformer engine for detecting AI-generated text, image manipulation, and synthetic news.",
    category: "AI/ML",
    featured: true,
    problem: "The rapid proliferation of generative AI text (LLMs) and synthetic imagery threatens media integrity and automated content moderation.",
    solution: "A unified multi-modal neural network analyzing linguistic perplexity/burstiness metrics alongside image frequency domain artifacts (FFT spectral analysis) to classify content authenticity.",
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
    ],
    pipelineSteps: [
      {
        step: 1,
        name: "MULTI-MODAL INGESTION",
        subtitle: "Text & Image Parsing",
        description: "Accepts raw text passages, web URLs, or uploaded image files for multi-modal analysis.",
        tech: ["FastAPI", "Pillow"],
        details: ["Text tokenization", "Image tensor pre-processing"]
      },
      {
        step: 2,
        name: "FFT SPECTRAL FREQUENCY",
        subtitle: "Vision Artifact Analyzer",
        description: "Applies Discrete Fourier Transforms to inspect high-frequency spatial grid artifacts left by diffusion models.",
        tech: ["NumPy FFT", "ConvNeXt"],
        details: ["Spatial frequency spectrum decomposition", "GAN/Diffusion fingerprint detection"]
      },
      {
        step: 3,
        name: "PERPLEXITY & ENTROPY",
        subtitle: "Linguistic Text Inspector",
        description: "Calculates token probability distributions and sentence-to-sentence burstiness variance to identify LLM output.",
        tech: ["DeBERTa-v3", "HuggingFace"],
        details: ["N-gram entropy calculation", "Perplexity distribution curve"]
      },
      {
        step: 4,
        name: "GATED FUSION & SCORE",
        subtitle: "Multimodal Classification",
        description: "Fuses vision and language embedding vectors via a gated attention mechanism to produce final authenticity scores.",
        tech: ["PyTorch Gated Fusion"],
        details: ["Confidence score output (0-100%)", "Synthetic probability breakdown"]
      }
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
    ],
    pipelineSteps: [
      {
        step: 1,
        name: "AUDIO STREAM RECEIVER",
        subtitle: "WAV / Streamed Input",
        description: "Captures microphone audio or uploads uncompressed PCM WAV files.",
        tech: ["WebAudio API", "Librosa"],
        details: ["16kHz mono sampling", "DC offset removal"]
      },
      {
        step: 2,
        name: "SINCNET WAVEFORM FILTER",
        subtitle: "Raw Audio Processing",
        description: "Processes raw audio waveforms directly through parameterized SincNet band-pass filters.",
        tech: ["PyTorch SincNet"],
        details: ["Direct waveform input", "Learned frequency band responses"]
      },
      {
        step: 3,
        name: "RAWNET2 TEMPORAL MODEL",
        subtitle: "Phase & Spectral Analysis",
        description: "Extracts high-level spectral phase coherence and temporal reverberation cues.",
        tech: ["RawNet2", "Bi-LSTM"],
        details: ["Linear Frequency Cepstral Coefficients (LFCC)", "Synthetic phase glitch detection"]
      },
      {
        step: 4,
        name: "ONNX EDGE INFERENCE",
        subtitle: "Real-Time Verification",
        description: "Outputs binary classification (Genuine vs Synthesized/Replayed) with real-time confidence scores.",
        tech: ["ONNX Runtime", "FastAPI"],
        details: ["Sub-100ms classification latency", "Exportable ONNX runtime engine"]
      }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    iconName: "BrainCircuit",
    description: "Deep learning model design, training, computer vision pipelines, and LLM systems.",
    skills: [
      { name: "Python", categoryTag: "Primary Language", highlight: "PyTorch, FastAPI, Async I/O, Metaprogramming", projectsUsedIn: ["All Projects"] },
      { name: "Machine Learning", categoryTag: "Core AI", highlight: "Feature engineering, ensemble models, loss design", projectsUsedIn: ["Fake Content Detection"] },
      { name: "RAG & GraphRAG", categoryTag: "Knowledge Systems", highlight: "Hybrid dense/sparse vector & Neo4j graph retrieval", projectsUsedIn: ["ContentIQ GraphRAG"] },
      { name: "LangChain & LangGraph", categoryTag: "Agent Orchestration", highlight: "Custom tools, stateful graph agents, retrievers", projectsUsedIn: ["ContentIQ GraphRAG"] },
      { name: "FAISS & Qdrant", categoryTag: "Vector Search", highlight: "HNSW similarity indexing, dense embedding search", projectsUsedIn: ["ContentIQ GraphRAG", "FaceAuth AI"] },
      { name: "OpenCV & MediaPipe", categoryTag: "Computer Vision", highlight: "Facial landmark tracking, anti-spoofing liveness CNNs", projectsUsedIn: ["FaceAuth AI"] }
    ]
  },
  {
    title: "Languages & Software Engineering",
    iconName: "Code2",
    description: "Core languages for high-throughput backends, algorithms, and web applications.",
    skills: [
      { name: "Java", categoryTag: "OOP & Enterprise", highlight: "Object-oriented design, concurrency, memory management", projectsUsedIn: ["Undergraduate Coursework"] },
      { name: "C++", categoryTag: "Systems & DSA", highlight: "Data structures, memory allocation, algorithm design", projectsUsedIn: ["Undergraduate Coursework"] },
      { name: "SQL & PostgreSQL", categoryTag: "Relational DBs", highlight: "Complex queries, schema indexing, performance tuning", projectsUsedIn: ["ContentIQ", "Backend Tools"] },
      { name: "Git & GitHub", categoryTag: "Version Control", highlight: "Branching strategies, open-source pull requests, CI/CD", projectsUsedIn: ["All Projects"] }
    ]
  },
  {
    title: "Full Stack & Web Technologies",
    iconName: "Layout",
    description: "Modern interactive web interfaces, REST APIs, and containerized deployments.",
    skills: [
      { name: "React", categoryTag: "Frontend", highlight: "Custom hooks, state management, interactive UI", projectsUsedIn: ["Portfolio"] },
      { name: "Vite", categoryTag: "Build System", highlight: "Fast bundling, TypeScript configuration, dev server", projectsUsedIn: ["Portfolio"] },
      { name: "FastAPI", categoryTag: "Backend Framework", highlight: "Async endpoints, WebSockets, OpenAPI schemas", projectsUsedIn: ["ContentIQ", "FaceAuth AI"] }
    ]
  }
];

export const openSourceContributions: Contribution[] = [
  {
    title: "ContentIQ Enterprise GraphRAG",
    repo: "KHARSHAVARDHAN-eng/ContentIQ-GraphRAG",
    role: "Author & Lead Maintainer",
    stars: "140+",
    type: "Maintainer",
    description: "Created an open-source framework combining Qdrant dense vector search with Neo4j entity graphs for transparent enterprise document question-answering.",
    tech: ["Python", "Neo4j", "Qdrant", "LangChain"],
    link: "https://github.com/KHARSHAVARDHAN-eng/ContentIQ-GraphRAG"
  },
  {
    title: "FaceAuth Anti-Spoofing Biometrics",
    repo: "KHARSHAVARDHAN-eng/FaceAuth-AI",
    role: "Creator & Maintainer",
    stars: "95+",
    type: "Feature",
    description: "Developed lightweight micro-texture anti-spoofing models tailored for real-time webcam streams.",
    tech: ["PyTorch", "OpenCV", "MediaPipe"],
    link: "https://github.com/KHARSHAVARDHAN-eng/FaceAuth-AI"
  },
  {
    title: "Community AI Tooling & RAG Utilities",
    repo: "open-source-ai/rag-utilities",
    role: "Core Contributor",
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
    title: "B.Tech in Computer Science & Engineering",
    organization: "Alliance University",
    period: "2023 — 2027",
    type: "internship",
    location: "India",
    description: "Pursuing Bachelor of Technology in Computer Science & Engineering with specialization in AI & Machine Learning.",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Core coursework: Deep Learning, NLP, Knowledge Graphs, Computer Vision, DSA",
      "Organized open-source developer sessions on GraphRAG and PyTorch"
    ],
    badgeText: "Alliance Univ 2027"
  },
  {
    id: "m2",
    title: "AI/ML Open Source Developer",
    organization: "Independent Research & Open Source",
    period: "2023 — Present",
    type: "open-source",
    location: "Remote",
    description: "Architecting end-to-end GraphRAG pipelines, facial liveness biometrics, and synthetic voice classifiers.",
    highlights: [
      "Architected ContentIQ GraphRAG pipeline reaching 94.8% retrieval accuracy",
      "Built real-time sub-50ms facial anti-spoofing computer vision pipeline",
      "Published production-grade open-source repositories"
    ],
    badgeText: "Open Source"
  },
  {
    id: "m3",
    title: "National AI Hackathon Top Finalist",
    organization: "National Innovation Hackathons",
    period: "2024",
    type: "hackathon",
    location: "India",
    description: "Designed and prototyped real-time AI solutions for automated media verification and deepfake detection under strict 36-hour deadlines.",
    highlights: [
      "Recognized for Fake Content Multi-modal Analyzer architecture",
      "Demonstrated real-time FFT spectral analysis live before technical judges",
      "Pitched agentic AI workflows to engineering evaluators"
    ],
    badgeText: "Hackathon Finalist"
  }
];
