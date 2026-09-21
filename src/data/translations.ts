export type Language = "en" | "am";

export interface TranslationData {
  nav: {
    about: string;
    skill: string;
    work: string;
    contact: string;
    letsTalk: string;
    getInTouch: string;
  };
  hero: {
    badge: string;
    title: string;
    desc: string;
    exploreWork: string;
    getInTouch: string;
  };
  about: {
    subtitle: string;
    tagline: string;
    heading: string;
    greeting: string;
    name: string;
    roleIntro: string;
    bio: string;
    pillars: {
      fullstack: {
        title: string;
        desc: string;
      };
      ai: {
        title: string;
        desc: string;
      };
      video: {
        title: string;
        desc: string;
      };
    };
    viewWork: string;
    contactMe: string;
  };
  skills: {
    subtitle: string;
    heading: string;
    cards: {
      fullstack: {
        title: string;
        desc: string;
        tags: string[];
      };
      ai: {
        title: string;
        desc: string;
        tags: string[];
      };
      video: {
        title: string;
        desc: string;
        tags: string[];
      };
    };
  };
  work: {
    subtitle: string;
    heading: string;
    liveBadge: string;
    inBuildingBadge: string;
    inBuildingText: string;
    projects: {
      agarai: {
        title: string;
        badge: string;
        desc: string;
        tags: string[];
      };
      adwasec: {
        title: string;
        badge: string;
        desc: string;
        tags: string[];
      };
    };
  };
  contact: {
    badge: string;
    heading: string;
    desc: string;
    sendMessage: string;
    backToStart: string;
    socialHeading: string;
    socialCount: string;
    directMail: string;
    footerCopyright: string;
    footerRoles: string;
  };
  hud: {
    hero: string;
    about: string;
    skill: string;
    work: string;
    contact: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  en: {
    nav: {
      about: "About",
      skill: "Skill",
      work: "Work",
      contact: "Contact",
      letsTalk: "Let's Talk",
      getInTouch: "Get In Touch",
    },
    hero: {
      badge: "00 // PORTFOLIO",
      title: "I am a Full-Stack Developer, AI Learner & Video Editor",
      desc: "Architecting scalable full-stack web applications, exploring intelligent AI models, and crafting dynamic cinematic video edits.",
      exploreWork: "Explore Work",
      getInTouch: "Get In Touch",
    },
    about: {
      subtitle: "01 // ABOUT & IDENTITY",
      tagline: "Full-Stack Systems • Intelligent AI",
      heading: "Architecting robust full-stack solutions, intelligent AI, and moving visuals.",
      greeting: "Hello! I'm",
      name: "Yonas Kassahun",
      roleIntro: "— a full-stack engineer, enthusiastic AI learner, and creative video editor passionate about crafting comprehensive digital systems from the ground up.",
      bio: "I specialize in engineering full-stack architectures: designing scalable database schemas, high-throughput REST/GraphQL APIs, and microservices in Node.js and Python, matched with responsive, reactive interfaces using Next.js and TypeScript. Constantly expanding my horizons, I dive deep into machine learning foundations, neural networks, and autonomous AI agents, while delivering cinematic storytelling through dynamic video post-production.",
      pillars: {
        fullstack: {
          title: "Full-Stack Dev",
          desc: "Next.js 14, TypeScript, Node.js, Python, PostgreSQL, REST/GraphQL APIs, and scalable architectures.",
        },
        ai: {
          title: "AI Learner",
          desc: "Deep learning fundamentals, PyTorch, LLM orchestration, AI agent workflows, and ML pipelines.",
        },
        video: {
          title: "Video Editing",
          desc: "Premiere Pro, DaVinci Resolve color grading, After Effects kinetic motion graphics, and audio pacing.",
        },
      },
      viewWork: "View Featured Work",
      contactMe: "Get In Touch",
    },
    skills: {
      subtitle: "02 // CAPABILITIES & CRAFT",
      heading: "Specialized Skills",
      cards: {
        fullstack: {
          title: "Full-Stack Dev",
          desc: "TypeScript, Next.js 14, React, Node.js, Python, PostgreSQL, REST/GraphQL APIs, and high-performance cloud architectures.",
          tags: ["TYPESCRIPT", "NEXT.JS", "NODE.JS", "PYTHON", "POSTGRESQL"],
        },
        ai: {
          title: "AI Learner",
          desc: "Deep learning fundamentals, PyTorch, LLM orchestration, autonomous AI agents, prompt engineering, and machine learning pipelines.",
          tags: ["PYTORCH", "LLMS", "AI AGENTS", "MACHINE LEARNING"],
        },
        video: {
          title: "Video Editing",
          desc: "Adobe Premiere Pro, After Effects kinetic motion graphics, DaVinci Resolve color grading, dynamic pacing and audio mastering.",
          tags: ["PREMIERE", "AFTER EFFECTS", "DAVINCI"],
        },
      },
    },
    work: {
      subtitle: "03 // FEATURED WORK",
      heading: "Recent Creations",
      liveBadge: "LIVE",
      inBuildingBadge: "IN BUILDING",
      inBuildingText: "In Building",
      projects: {
        agarai: {
          title: "AgarAI",
          badge: "DIGITAL AI EMPLOYEES",
          desc: "Digital AI employees engineered to streamline workflows, handle customer operations, and execute complex business tasks with intelligent multi-agent orchestration.",
          tags: ["NEXT.JS", "DIGITAL EMPLOYEES", "AI AGENTS", "LLMS"],
        },
        adwasec: {
          title: "AdwaSec",
          badge: "IN BUILDING",
          desc: "AI cyber security analyst and automated report generator designed to detect vulnerabilities, analyze threat vectors, and generate comprehensive security audit documentation.",
          tags: ["CYBERSECURITY", "AI ANALYST", "AUDIT REPORTS", "THREAT INTEL"],
        },
      },
    },
    contact: {
      badge: "04 // LET'S BUILD TOGETHER",
      heading: "Have a vision in mind?",
      desc: "Whether you need scalable full-stack development, intelligent AI integrations, or cinematic video post-production — let's create something extraordinary together.",
      sendMessage: "Send a Message",
      backToStart: "Back to Start",
      socialHeading: "SOCIAL CHANNELS & PROFILES",
      socialCount: "5 NETWORKS",
      directMail: "Direct Mail",
      footerCopyright: "© 2026 YONAS KASSAHUN",
      footerRoles: "FULL-STACK DEVELOPER • AI LEARNER • VIDEO EDITOR",
    },
    hud: {
      hero: "Hero",
      about: "About",
      skill: "Skill",
      work: "Work",
      contact: "Contact",
    },
  },
  am: {
    nav: {
      about: "ስለ እኔ",
      skill: "ክህሎቶች",
      work: "ስራዎች",
      contact: "ያግኙኝ",
      letsTalk: "እንነጋገር",
      getInTouch: "ያግኙኝ",
    },
    hero: {
      badge: "00 // ፖርትፎሊዮ",
      title: "ሙሉ-ስታክ ሶፍትዌር አበልጻጊ፣ የ-AI ተማሪ እና ቪዲዮ ኤዲተር",
      desc: "አስተማማኝ እና ፈጣን የሙሉ-ስታክ ድረ-ገጾችን መገንባት፣ ዘመናዊ የ-AI ሞዴሎችን መመርመር እና ሳቢ ሲኒማቲክ የቪዲዮ ስራዎችን ማዘጋጀት።",
      exploreWork: "ስራዎቼን ይመልከቱ",
      getInTouch: "ያግኙኝ",
    },
    about: {
      subtitle: "01 // ስለ እኔ እና ማንነቴ",
      tagline: "ሙሉ-ስታክ ሲስተሞች • አስተዋይ AI",
      heading: "አስተማማኝ የሙሉ-ስታክ መፍትሄዎችን፣ ዘመናዊ AI እና ማራኪ ምስላዊ ስራዎችን መፍጠር።",
      greeting: "ሰላም! እኔ",
      name: "ዮናስ ካሳሁን",
      roleIntro: "— ከስሩ ጀምሮ የተሟሉ ዲጂታል ሲስተሞችን በመገንባት ላይ ያተኮርኩ የሙሉ-ስታክ ኢንጂነር፣ ጉጉ የ-AI ተማሪ እና የፈጠራ ቪዲዮ ኤዲተር ነኝ።",
      bio: "በሙሉ-ስታክ አርክቴክቸር ላይ እሰራለሁ፦ አስተማማኝ ዳታቤዞችን መንደፍ፣ ፈጣን REST/GraphQL APIዎችን እና ማይክሮሰርቪሶችን በ-Node.js እና Python መገንባት፣ እንዲሁም በ-Next.js እና TypeScript ምላሽ ሰጪ ገጾችን ማበልጸግ። በተጨማሪም በማሽን ለርኒንግ፣ ኒውራል ኔትወርኮች እና ራሳቸውን በሚያስተዳድሩ AI ኤጀንቶች ዙሪያ እመረምራለሁ፤ በቪዲዮ ኤዲቲንግም ሲኒማቲክ ታሪኮችን እሰራለሁ።",
      pillars: {
        fullstack: {
          title: "ሙሉ-ስታክ ልማት",
          desc: "Next.js 14፣ TypeScript፣ Node.js፣ Python፣ PostgreSQL፣ REST/GraphQL APIs እና አስተማማኝ አርክቴክቸር።",
        },
        ai: {
          title: "የ-AI ተማሪ",
          desc: "የዲፕ ለርኒንግ መሰረቶች፣ PyTorch፣ የ-LLM ቅንጅት፣ የ-AI ኤጀንት ስራዎች እና የማሽን ለርኒንግ ቧንቧዎች።",
        },
        video: {
          title: "ቪዲዮ ኤዲቲንግ",
          desc: "Premiere Pro፣ DaVinci Resolve የቀለም ቅንብር፣ After Effects ሞሽን ግራፊክስ እና የድምፅ ማስተካከያ።",
        },
      },
      viewWork: "ተለይተው የቀረቡ ስራዎች",
      contactMe: "ያግኙኝ",
    },
    skills: {
      subtitle: "02 // ክህሎቶች እና ሙያ",
      heading: "ልዩ ክህሎቶች",
      cards: {
        fullstack: {
          title: "ሙሉ-ስታክ ልማት",
          desc: "TypeScript፣ Next.js 14፣ React፣ Node.js፣ Python፣ PostgreSQL፣ REST/GraphQL APIs እና ከፍተኛ ብቃት ያላቸው የክላውድ አርክቴክቸሮች።",
          tags: ["TYPESCRIPT", "NEXT.JS", "NODE.JS", "PYTHON", "POSTGRESQL"],
        },
        ai: {
          title: "የ-AI ተማሪ",
          desc: "የዲፕ ለርኒንግ መሰረቶች፣ PyTorch፣ የ-LLM ቅንጅት፣ ራስ-ገዝ የ-AI ኤጀንቶች፣ የፕሮምፕት ኢንጂነሪንግ እና የማሽን ለርኒንግ ቧንቧዎች።",
          tags: ["PYTORCH", "LLMS", "AI AGENTS", "MACHINE LEARNING"],
        },
        video: {
          title: "ቪዲዮ ኤዲቲንግ",
          desc: "Adobe Premiere Pro፣ After Effects kinetic ሞሽን ግራፊክስ፣ DaVinci Resolve የቀለም ቅንብር እና የድምፅ ማስተካከያ።",
          tags: ["PREMIERE", "AFTER EFFECTS", "DAVINCI"],
        },
      },
    },
    work: {
      subtitle: "03 // የተመረጡ ስራዎች",
      heading: "የቅርብ ጊዜ ስራዎች",
      liveBadge: "በስራ ላይ",
      inBuildingBadge: "በግንባታ ላይ",
      inBuildingText: "በግንባታ ላይ",
      projects: {
        agarai: {
          title: "AgarAI",
          badge: "ዲጂታል የ-AI ሰራተኞች",
          desc: "የስራ ፍሰቶችን ለማሳለጥ፣ የደንበኞች አገልግሎትን ለማስተናገድ እና ውስብስብ የንግድ ስራዎችን በብልህ ባለብዙ-ኤጀንት ቅንጅት ለማከናወን የተነደፉ ዲጂታል የ-AI ሰራተኞች።",
          tags: ["NEXT.JS", "DIGITAL EMPLOYEES", "AI AGENTS", "LLMS"],
        },
        adwasec: {
          title: "AdwaSec",
          badge: "በግንባታ ላይ",
          desc: "ክፍተቶችን ለመለየት፣ የስጋት መንገዶችን ለመተንተን እና ዝርዝር የደህንነት ኦዲት ሪፖርቶችን ለማመንጨት የተነደፈ የ-AI ሳይበር ሴኪዩሪቲ ተንታኝ።",
          tags: ["CYBERSECURITY", "AI ANALYST", "AUDIT REPORTS", "THREAT INTEL"],
        },
      },
    },
    contact: {
      badge: "04 // በጋራ እንገንባ",
      heading: "የታሰበ እቅድ ወይም ሃሳብ አለዎት?",
      desc: "አስተማማኝ የሙሉ-ስታክ ድረ-ገጽ፣ ዘመናዊ የ-AI ቅንጅት ወይም ሲኒማቲክ የቪዲዮ ዝግጅት ቢያስፈልግዎት — ድንቅ ነገርን በጋራ እንፍጠር።",
      sendMessage: "መልእክት ይላኩ",
      backToStart: "ወደ መጀመሪያ ተመለስ",
      socialHeading: "ማህበራዊ አውታሮች",
      socialCount: "5 አውታሮች",
      directMail: "ቀጥታ ኢሜይል",
      footerCopyright: "© 2026 ዮናስ ካሳሁን",
      footerRoles: "ሙሉ-ስታክ አበልጻጊ • የ-AI ተማሪ • ቪዲዮ ኤዲተር",
    },
    hud: {
      hero: "መግቢያ",
      about: "ስለ እኔ",
      skill: "ክህሎቶች",
      work: "ስራዎች",
      contact: "ያግኙኝ",
    },
  },
};
