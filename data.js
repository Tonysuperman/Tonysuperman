// Data file for the academic portfolio website
// All content data is stored here for easy updates

// Projects data array
const projects = [
    {
        id: 1,
        title: "AI-Powered Research Assistant",
        description: "一个基于大语言模型的智能研究助手，帮助研究人员快速检索、总结和分析学术论文。支持多轮对话和上下文理解。",
        category: "ai",
        tags: ["AI", "NLP", "Python", "React"],
        links: {
            github: "https://github.com/Tonysuperman/research-assistant",
            demo: null
        }
    },
    {
        id: 2,
        title: "Creative Portfolio Website",
        description: "个人作品集网站，采用现代前端技术构建，具有独特的视觉设计和流畅的交互体验。强调首屏节奏和信息层次。",
        category: "frontend",
        tags: ["React", "CSS", "JavaScript", "Design"],
        links: {
            github: "https://github.com/Tonysuperman/portfolio",
            demo: "https://tonyyang.dev"
        }
    },
    {
        id: 3,
        title: "Full-Stack Task Management System",
        description: "全栈任务管理系统，从前端界面到后端 API 完整实现。包含用户认证、任务管理、团队协作等功能模块。",
        category: "fullstack",
        tags: ["Node.js", "React", "PostgreSQL", "TypeScript"],
        links: {
            github: "https://github.com/Tonysuperman/task-manager",
            demo: null
        }
    },
    {
        id: 4,
        title: "Developer Productivity Toolkit",
        description: "开发者效率工具集，整合常用开发工具和脚本，提升日常工作效率。包含代码片段管理、API 测试等功能。",
        category: "tool",
        tags: ["Electron", "JavaScript", "Productivity"],
        links: {
            github: "https://github.com/Tonysuperman/dev-toolkit",
            demo: null
        }
    },
    {
        id: 5,
        title: "Machine Learning Model Dashboard",
        description: "机器学习模型可视化仪表板，用于监控和展示模型训练过程、性能指标和预测结果。",
        category: "ai",
        tags: ["Python", "TensorFlow", "D3.js", "Flask"],
        links: {
            github: "https://github.com/Tonysuperman/ml-dashboard",
            demo: null
        }
    },
    {
        id: 6,
        title: "Interactive Data Visualization Library",
        description: "交互式数据可视化组件库，提供丰富的图表类型和自定义选项，支持响应式布局。",
        category: "frontend",
        tags: ["D3.js", "React", "TypeScript", "SVG"],
        links: {
            github: "https://github.com/Tonysuperman/viz-library",
            demo: "https://viz.tonyyang.dev"
        }
    },
    {
        id: 7,
        title: "E-commerce Platform",
        description: "完整的电商平台，包含商品管理、购物车、订单处理、支付集成等核心功能。采用微服务架构设计。",
        category: "fullstack",
        tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
        links: {
            github: "https://github.com/Tonysuperman/ecommerce",
            demo: null
        }
    },
    {
        id: 8,
        title: "Code Snippet Manager",
        description: "代码片段管理工具，支持分类、标签、搜索和同步功能。帮助开发者高效管理和复用代码。",
        category: "tool",
        tags: ["Vue.js", "Firebase", "Markdown"],
        links: {
            github: "https://github.com/Tonysuperman/snippet-manager",
            demo: null
        }
    }
];

// Experience data array
const experience = [
    {
        id: 1,
        title: "全栈开发实习生",
        organization: "某科技公司 · 杭州",
        date: "2024.06 - 至今",
        description: "参与公司核心产品的全栈开发工作，负责前端界面优化和后端 API 开发。使用 React、Node.js 和 PostgreSQL 技术栈，独立完成了多个功能模块的开发和部署。"
    },
    {
        id: 2,
        title: "AI 应用开发项目",
        organization: "个人项目",
        date: "2023.09 - 2024.05",
        description: "独立开发基于大语言模型的 AI 应用，探索 AI-native 产品的设计模式。深入研究 Prompt Engineering 和 RAG 技术，实现了多个实用的 AI 工具。"
    },
    {
        id: 3,
        title: "前端开发实践",
        organization: "开源社区贡献",
        date: "2022.03 - 至今",
        description: "积极参与开源社区，为多个前端项目贡献代码。专注于 React 生态系统和 Creative Frontend 方向，积累了丰富的大型项目开发经验。"
    }
];

// Reviewer service data array
const reviewerService = [
    {
        id: 1,
        name: "Conference Reviewer",
        detail: "担任多个国际学术会议审稿人，包括 HCI、AI 相关领域的顶会。专注于评估论文的技术创新性、实验设计和写作质量。"
    },
    {
        id: 2,
        name: "Journal Reviewer",
        detail: "为多个学术期刊提供审稿服务，主要关注人工智能应用、人机交互和软件工程方向的投稿。保持严谨、公正的审稿态度。"
    },
    {
        id: 3,
        name: "Open Source Project Reviewer",
        detail: "参与多个开源项目的代码审查工作，帮助社区维护代码质量。熟悉常见的代码规范和最佳实践。"
    }
];
