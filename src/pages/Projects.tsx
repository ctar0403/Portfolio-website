import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import { 
  Bot, 
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart
} from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    // AI Category
    {
      id: 1,
      title: "LLM-Powered Customer Support Chatbot",
      description: "Built an AI-driven support system using GPT and custom fine-tuned models to automate responses, triage tickets, and summarize conversations. Integrated with CRM tools and delivered a scalable backend for continuous learning and improvement.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "NLP", "LLM", "API Integration"],
      category: "ai"
    },
    {
      id: 2,
      title: "Document Intelligence Pipeline for Automation",
      description: "Developed an AI workflow to extract, classify, and structure information from PDFs, emails, and documents using OCR, embeddings, and custom NLP models. Reduced manual processing time for clients by over 70%.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "OCR", "Embeddings", "NLP"],
      category: "ai"
    },
    {
      id: 3,
      title: "ComfyUI Image Generation & Workflow Automation",
      description: "Designed advanced ComfyUI pipelines for generative image creation, model merging, upscaling, and automation. Integrated pipelines into web dashboards for user-friendly image and asset generation.",
      image: "https://images.unsplash.com/photo-1611432579699-484f7990f956?auto=format&fit=crop&w=800&q=80",
      tags: ["ComfyUI", "Generative AI", "Automation", "Python"],
      category: "ai"
    },
    {
      id: 4,
      title: "LLM-Driven Knowledge Base Search",
      description: "Created a semantic search and Q&A system using embeddings and vector databases to retrieve answers from large internal knowledge bases. Used custom fine-tuned models and retrieval-augmented generation.",
      image: "https://images.unsplash.com/photo-1516321287840-aa6e0fd3976a?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "NLP", "RAG", "Vector Databases"],
      category: "ai"
    },
    // Automation Category
    {
      id: 5,
      title: "Sales & CRM Automation Workflow",
      description: "Designed an end-to-end automation pipeline connecting Make, Zoho CRM, and Google Workspace. Automated lead intake, scoring, data enrichment, and notifications, improving conversion speed and data accuracy.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      tags: ["Make", "Zoho", "API Automation"],
      category: "automation"
    },
    {
      id: 6,
      title: "Business Process Automation with n8n & GHL",
      description: "Implemented multi-step workflow automations including scheduling, email sequences, tagging, and AI message generation. Connected n8n with GoHighLevel to streamline client onboarding.",
      image: "https://images.unsplash.com/photo-1553531088-5cecdb3df375?auto=format&fit=crop&w=800&q=80",
      tags: ["n8n", "GoHighLevel", "Webhooks"],
      category: "automation"
    },
    {
      id: 7,
      title: "Zapier AI Email Categorization System",
      description: "Created an automated email classification workflow using Zapier + LLM to tag, categorize, and route messages to the correct departments. Reduced manual workload and improved response time.",
      image: "https://images.unsplash.com/photo-1504868584819-36bda54df88f?auto=format&fit=crop&w=800&q=80",
      tags: ["Zapier", "LLM", "NLP"],
      category: "automation"
    },
    {
      id: 8,
      title: "Data Sync & Reporting Automation",
      description: "Integrated multiple business tools—CRM, analytics dashboards, spreadsheets—into a unified automated reporting system. Ensured real-time updates and error checking for operational transparency.",
      image: "https://images.unsplash.com/photo-1596558450446-5146d302efe0?auto=format&fit=crop&w=800&q=80",
      tags: ["Make", "API Integration", "Automation"],
      category: "automation"
    },
    // Game Category
    {
      id: 9,
      title: "VR Training Simulation for Engineering Operations",
      description: "Built a fully interactive VR simulation in Unity for equipment training, including physics-based interactions, guided steps, and analytics tracking. Enabled immersive hands-on practice for remote teams.",
      image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=800&q=80",
      tags: ["Unity", "VR", "C#"],
      category: "game"
    },
    {
      id: 10,
      title: "AR Product Visualization Experience",
      description: "Developed an AR mobile application displaying interactive 3D products, animations, and scene-based interactions. Used AI-generated assets to streamline modeling workflows.",
      image: "https://images.unsplash.com/photo-1535016120754-fd45c1d5ccdd?auto=format&fit=crop&w=800&q=80",
      tags: ["Unity", "AR", "3D Design"],
      category: "game"
    },
    {
      id: 11,
      title: "Three.js Interactive 3D Web Showcase",
      description: "Created a WebGL-powered 3D visualization tool using Three.js with real-time manipulation, dynamic lighting, and optimized performance for web and mobile.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      tags: ["Three.js", "WebGL", "JavaScript"],
      category: "game"
    },
    {
      id: 12,
      title: "Immersive Web Simulation for Training",
      description: "Built an interactive web-based 3D environment to simulate training scenarios, integrating physics, UI overlays, and AI-assisted interactions.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      tags: ["Three.js", "JavaScript", "AI Integration"],
      category: "game"
    }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case "ai":
        return Brain;
      case "automation":
        return Bot;
      case "game":
        return Cpu;
      default:
        return Code;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ai", name: "AI" },
    { id: "automation", name: "Automation" },
    { id: "game", name: "Game" }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="My Projects" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Explore a collection of my recent work across various technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg">
              {/* Category Filter */}
              <div className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="mr-4 text-sm font-medium">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                        filter === category.id 
                          ? "bg-brand-purple text-white" 
                          : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                      }`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <motion.input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(155, 135, 245, 0.3)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  // code={project.code}
                  category={project.category}
                  icon={getIcon(project.category)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 glass-panel rounded-lg"
              >
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                <motion.button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B5CF6" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
