import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import SkillsSection from "@/components/SkillsSection";
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Globe,
  GitBranch,
  Palette,
  Wrench,
  Target,
  Bot
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const education = [
    {
      institution: "Sofia University \"St. Kliment Ohridski\"",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      duration: "2010 - 2014",
      gpa: "",
      location: "Sofia, Bulgaria",
    }
  ];

  const experience = [
    {
      position: "Senior AI Engineer",
      company: "Freelance / Upwork & International Clients",
      duration: "04/2019 - Present",
      description: "Designed and deployed AI/ML models for automation, NLP, computer vision, and predictive analytics. Built chatbots and LLM-powered applications integrating GPT, transformers, and custom datasets.",
      responsibilities: [
        "Designed and deployed AI/ML models for automation, NLP, computer vision, and predictive analytics",
        "Built chatbots and LLM-powered applications integrating GPT, transformers, and custom datasets",
        "Developed AI-driven automation pipelines using Python, Zapier, n8n, Make, and GoHighLevel",
        "Integrated AI with Unity, web, and mobile applications, delivering immersive experiences",
        "Collaborated with global clients in gaming, engineering, and digital transformation projects"
      ]
    },
    {
      position: "Software & XR Developer",
      company: "Unity & Immersive Tech Solutions",
      duration: "06/2016 - 04/2019",
      description: "Created VR/AR applications and 3D product visualizations. Worked on simulation and interactive environments for training, visualization, and engineering.",
      responsibilities: [
        "Created VR/AR applications and 3D product visualizations in Unity, WebGL, and Three.js",
        "Worked on simulation and interactive environments for training, visualization, and engineering",
        "Integrated AI-driven features into immersive applications, enhancing realism and interactivity"
      ]
    },
    {
      position: "Automation & Full-Stack Engineer",
      company: "Tech Integration Projects",
      duration: "07/2014 - 06/2016",
      description: "Built scalable web and mobile apps with full-stack architectures. Designed workflow automation systems improving operational efficiency for businesses.",
      responsibilities: [
        "Built scalable web and mobile apps with full-stack architectures",
        "Designed workflow automation systems improving operational efficiency for businesses",
        "Delivered tailor-made software solutions across different industries"
      ]
    }
  ];


  const projects = [
    {
      title: "AI-Powered Customer Support Chatbot",
      description: "Developed an advanced LLM-driven chatbot for customer support using GPT and custom fine-tuned models. The system automated responses, ticket triage, and summarization while integrating seamlessly with CRM platforms.",
      technologies: ["Python", "NLP", "LLM", "GPT Integrations", "API Engineering", "Automation"],
      duration: "06/2023 - 10/2023",
      type: "Client Project",
      accomplishments: [
        "Built a full conversational AI system with custom logic, memory, and dynamic workflows",
        "Achieved over 80% reduction in manual ticket handling",
        "Implemented multilingual support using embeddings and RAG",
        "Integrated with client's CRM for automated ticket creation and analytics",
        "Deployed scalable backend with continuous model updates"
      ]
    },
    {
      title: "AI Document Intelligence Pipeline",
      description: "Designed a complete AI-powered system for extracting, classifying, and structuring data from PDFs, emails, and scanned documents using OCR, embeddings, and NLP workflows.",
      technologies: ["Python", "OCR", "NLP", "Embeddings", "Make", "n8n", "Automation"],
      duration: "01/2023 - 06/2023",
      type: "Enterprise Automation",
      accomplishments: [
        "Automated up to 75% of document processing workload",
        "Built custom OCR + NLP pipeline for unstructured text",
        "Implemented data classification using embeddings and vector search",
        "Deployed a dashboard for document status tracking and analytics",
        "Integrated with Make and n8n for end-to-end automation"
      ]
    },
    {
      title: "VR Training Simulation for Engineering Operations",
      description: "Developed a highly interactive VR training simulation in Unity for industrial engineering teams, featuring realistic environments, physics-based interactions, and performance tracking.",
      technologies: ["Unity", "VR", "C#", "3D Simulation", "Interaction Systems"],
      duration: "02/2022 - 12/2022",
      type: "XR / Unity Project",
      accomplishments: [
        "Built full VR simulation with step-by-step guided tasks",
        "Integrated AI-driven assistants and hint systems",
        "Created custom physics interactions for tool handling",
        "Added analytics system for completion time, errors, and progress",
        "Delivered optimized builds for Oculus and PCVR"
      ]
    },
    {
      title: "3D Web Product Visualizer",
      description: "Created an interactive 3D product visualizer using Three.js and WebGL for a client in the e-commerce and manufacturing sector, allowing users to rotate, customize, and explore 3D models in real time.",
      technologies: ["Three.js", "WebGL", "JavaScript", "3D Rendering", "React"],
      duration: "07/2021 - 11/2021",
      type: "Web / Three.js Project",
      accomplishments: [
        "Built performant 3D viewer optimized for mobile and desktop",
        "Added customization options (colors, materials, animations)",
        "Integrated dynamic lighting and PBR materials",
        "Implemented compressed model loading for fast rendering",
        "Delivered seamless integration with React frontend"
      ]
    },
    {
      title: "AI + Automation CRM Workflow System",
      description: "Implemented an automated CRM workflow system connecting Zapier, Make, and GoHighLevel to streamline lead intake, AI-generated responses, and reporting.",
      technologies: ["Zapier", "Make", "GoHighLevel", "n8n", "API Integrations", "Automation"],
      duration: "03/2021 - 08/2021",
      type: "Automation Project",
      accomplishments: [
        "Automated full lead lifecycle: intake → enrichment → scoring → routing",
        "Connected multiple services including GHL, Sheets, Zoho, Email APIs",
        "Added AI-based message generation and classification",
        "Reduced manual workload by 60% and improved data accuracy",
        "Built error-proof monitoring and reporting dashboards"
      ]
    },
  ];

  const certifications = [
    {
      name: "API Prototyping Learning Path",
      issuer: "Postman",
      date: "December 2024",
      skills: "API Prototyping, API Testing, API Documentation",
      credential: "PST-APL-2024"
    },
    {
      name: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      date: "November 2024",
      skills: "Generative AI, Prompt Engineering, LLM Applications",
      credential: "MSLI-GAI-2024"
    },
    {
      name: "Learning Microsoft Power BI",
      issuer: "Infosys Springboard",
      date: "November 2024",
      skills: "Microsoft Power BI, Data Visualization, Business Intelligence",
      credential: "ISB-PBI-2024"
    },
    {
      name: "Neural Networks and Deep Learning",
      issuer: "Great Learning",
      date: "January 2024",
      skills: "Neural Networks, Deep Learning, AI Architecture",
      credential: "GL-NNDL-2024"
    },
    {
      name: "Real Life Machine Learning and Data Science Projects",
      issuer: "Udemy",
      date: "November 2022",
      skills: "Machine Learning, Data Science, Practical Implementation",
      credential: "UC-e1c70903-b810-4b6b-8749-eebd3345715"
    },
  ];

  const softSkills = [
    { skill: "Problem Solving", description: "Analytical approach to complex technical challenges" },
    { skill: "Communication", description: "Clear technical and non-technical communication" },
    { skill: "Team Collaboration", description: "Effective work in cross-functional teams" },
    { skill: "Adaptability", description: "Quick learning of new technologies and methodologies" },
    { skill: "Time Management", description: "Efficient project delivery within deadlines" },
    { skill: "Critical Thinking", description: "Analytical evaluation of solutions and approaches" },
  ];

  const resumeHighlights = [
    {
      title: "AI Automation Engineer",
      description: "Designing intelligent automation pipelines with AI-driven decision systems, improving operational efficiency through tools like Python, n8n, Zapier, Make, and custom LLM integrations.",
      icon: <Brain className="h-8 w-8 text-brand-purple" />
    },
    {
      title: "Data Analyst",
      description: "Experienced in data processing, visualization, and extracting meaningful insights using machine learning, predictive analytics, and statistical techniques to support smarter business decisions.",
      icon: <Database className="h-8 w-8 text-brand-purple" />
    },
    {
      title: "Unity VR Developer",
      description: "Building immersive VR/AR applications in Unity, crafting interactive simulations, training environments, and 3D experiences enhanced with AI-powered logic and real-time interactivity.",
      icon: <Cpu className="h-8 w-8 text-brand-purple" />
    },
    {
      title: "Three.js Web Developer",
      description: "Developing high-performance 3D web experiences using Three.js, delivering interactive visualizations, product demos, and WebGL-powered environments optimized for the modern web.",
      icon: <Code className="h-8 w-8 text-brand-purple" />
    },
  ];

  const tabContent = {
    skills: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg flex items-start backdrop-blur-md border border-white/10"
            >
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-full">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SkillsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="glass-panel p-6 rounded-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-1">{item.skill}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <div className="text-lg mt-1">{edu.institution}</div>
                    <div className="text-muted-foreground mt-1">{edu.field}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end text-right">
                <div className="px-3 py-1 rounded-full text-sm bg-brand-purple/10 text-brand-purple">
                  {edu.gpa}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{edu.duration}</div>
                <div className="text-sm text-muted-foreground mt-1">{edu.location}</div>
              </div>
            </div>
            <div className="mt-4 pl-4 border-l-2 border-brand-purple/30">
              <h4 className="font-medium mb-2">Key Courses:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {edu.institution.includes("Presidency") ? (
                  <>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Artificial Intelligence & Machine Learning
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Data Structures & Algorithms
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Computer Vision Systems
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Web Development
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Database Management Systems
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Deep Learning
                    </li>
                  </>
                ) : (
                  <>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Physics
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Chemistry
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Mathematics
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Computer Science
                    </li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <Briefcase className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="text-lg mt-1">{exp.company}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                {exp.duration}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 pl-0 md:pl-12">{exp.description}</p>
            <div className="pl-0 md:pl-12">
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    projects: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs py-1 px-3 bg-brand-purple/10 text-brand-purple rounded-full">
                  {project.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.duration}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Accomplishments:</h4>
              <ul className="space-y-2">
                {project.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs py-1 px-3 bg-secondary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    certifications: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex items-start">
              <div className="bg-brand-purple/10 p-2 rounded-full mr-4 flex-shrink-0">
                <Award className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <div className="text-sm text-muted-foreground mb-2">
                  {cert.issuer} • {cert.date}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {cert.skills.split(', ').map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 bg-secondary inline-block rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.credential && (
                  <div className="text-xs text-muted-foreground">
                    Credential ID: {cert.credential}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4 backdrop-blur-sm border border-brand-purple/20">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <AnimatedText text="Professional Experience" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I am an AI-driven engineer with over 7 years of experience designing and implementing machine learning, deep learning, NLP, computer vision, and generative AI solutions. My work bridges AI engineering, automation pipelines, Unity/VR/AR, and fullstack development, enabling businesses to transform ideas into scalable, intelligent, and immersive products.
              </p>
            </div>
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "skills", icon: <Code className="h-5 w-5" />, label: "Skills" },
                { id: "experience", icon: <Briefcase className="h-5 w-5" />, label: "Experience" },
                { id: "projects", icon: <Code className="h-5 w-5" />, label: "Projects" },
                { id: "certifications", icon: <Award className="h-5 w-5" />, label: "Certifications" },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm border ${activeTab === tab.id
                    ? "bg-brand-purple text-white border-brand-purple/50"
                    : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40 border-white/10"
                    }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
