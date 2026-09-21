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
    cookiePolicy: string;
  };
  hud: {
    hero: string;
    about: string;
    skill: string;
    work: string;
    contact: string;
  };
  cookieBanner: {
    title: string;
    description: string;
    acceptAll: string;
    essentialOnly: string;
    viewPolicy: string;
  };
  cookiePolicy: {
    badge: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    backToHome: string;
    intro: string;
    whatAreCookiesTitle: string;
    whatAreCookiesDesc: string;
    howWeUseTitle: string;
    howWeUseDesc: string;
    cookieTableTitle: string;
    cookieTableHeaders: {
      name: string;
      purpose: string;
      duration: string;
      type: string;
    };
    cookieItems: Array<{
      name: string;
      purpose: string;
      duration: string;
      type: string;
    }>;
    thirdPartyTitle: string;
    thirdPartyDesc: string;
    managingCookiesTitle: string;
    managingCookiesDesc: string;
    contactTitle: string;
    contactDesc: string;
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
      cookiePolicy: "Cookie Policy",
    },
    hud: {
      hero: "Hero",
      about: "About",
      skill: "Skill",
      work: "Work",
      contact: "Contact",
    },
    cookieBanner: {
      title: "Cookie & Privacy Preferences",
      description:
        "This website uses essential browser storage to remember your language preferences and provide a smooth, interactive 3D portfolio experience. No marketing or tracking cookies are used.",
      acceptAll: "Accept All",
      essentialOnly: "Essential Only",
      viewPolicy: "Learn More",
    },
    cookiePolicy: {
      badge: "LEGAL & TRANSPARENCY",
      title: "Cookie Policy",
      subtitle:
        "Learn how we handle local storage and cookies to provide a fast, personalized experience on this portfolio.",
      lastUpdated: "Last Updated: September 2026",
      backToHome: "Back to Portfolio",
      intro:
        "This Cookie Policy explains what cookies and browser storage technologies are, how they are used across this portfolio website, and how you can manage your preferences.",
      whatAreCookiesTitle: "1. What Are Cookies and Local Storage?",
      whatAreCookiesDesc:
        "Cookies are small text files stored on your device by your web browser when visiting websites. Modern web applications also use Local Storage and Session Storage, which allow websites to store key-value data directly in your browser without transmitting data back and forth to external ad tracking servers.",
      howWeUseTitle: "2. How This Website Uses Storage",
      howWeUseDesc:
        "We believe in privacy by design. This portfolio does NOT use advertising cookies, marketing pixels, cross-site trackers, or invasive analytics. We only use strictly necessary browser storage to maintain your user preferences (such as your chosen language) and remember your cookie consent decision.",
      cookieTableTitle: "3. Technologies & Storage Keys Used",
      cookieTableHeaders: {
        name: "Storage Key / Cookie",
        purpose: "Purpose & Functionality",
        duration: "Duration",
        type: "Type",
      },
      cookieItems: [
        {
          name: "portfolio_lang",
          purpose: "Saves your preferred language selection (English or Amharic) across pages and visits.",
          duration: "Persistent (Local Storage)",
          type: "Strictly Essential",
        },
        {
          name: "cookie_consent",
          purpose: "Remembers your cookie banner preference so you are not prompted repeatedly.",
          duration: "Persistent (Local Storage)",
          type: "Strictly Essential",
        },
      ],
      thirdPartyTitle: "4. Third-Party Links & Services",
      thirdPartyDesc:
        "This portfolio provides direct external links to professional platforms including GitHub, LinkedIn, Instagram, and Facebook. When clicking on external links, those external platforms have their own independent cookie and privacy policies which are governed by their respective services.",
      managingCookiesTitle: "5. How to Control & Manage Cookies",
      managingCookiesDesc:
        "You have complete control over cookies and local storage. You can delete or block storage at any time directly through your web browser settings (Chrome, Safari, Firefox, Edge, etc.). Note that clearing your browser storage may reset your language preference to the default.",
      contactTitle: "6. Questions or Inquiries?",
      contactDesc:
        "If you have questions regarding this Cookie Policy or data privacy on this portfolio, feel free to reach out via email at yonaskassahunyoka@gmail.com.",
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
      cookiePolicy: "የኩኪ ፖሊሲ",
    },
    hud: {
      hero: "መግቢያ",
      about: "ስለ እኔ",
      skill: "ክህሎቶች",
      work: "ስራዎች",
      contact: "ያግኙኝ",
    },
    cookieBanner: {
      title: "የኩኪ እና የግላዊነት ምርጫዎች",
      description:
        "ይህ ድረ-ገጽ የመረጡትን ቋንቋ ለማስታወስ እና ምቹ የ3D ፖርትፎሊዮ ተሞክሮ ለመስጠት መሰረታዊ የብሮውዘር ስቶሬጅ ይጠቀማል። ምንም አይነት የማስታወቂያ ወይም የክትትል ኩኪዎችን አንጠቀምም።",
      acceptAll: "ሁሉንም ተቀበል",
      essentialOnly: "አስፈላጊውን ብቻ",
      viewPolicy: "ተጨማሪ እወቅ",
    },
    cookiePolicy: {
      badge: "ህጋዊ መረጃ እና ግልፅነት",
      title: "የኩኪ ፖሊሲ",
      subtitle:
        "በዚህ ፖርትፎሊዮ ላይ ፈጣን እና የተስተካከለ አገልግሎት ለመስጠት የብሮውዘር ስቶሬጅ እና ኩኪዎች እንዴት ጥቅም ላይ እንደሚውሉ ይረዱ።",
      lastUpdated: "የመጨረሻ ማሻሻያ፡ መስከረም 2026",
      backToHome: "ወደ ፖርትፎሊዮ ተመለስ",
      intro:
        "ይህ የኩኪ ፖሊሲ ኩኪዎች እና የብሮውዘር ማከማቻ ቴክኖሎጂዎች ምን እንደሆኑ፣ በዚህ ድረ-ገጽ ላይ እንዴት ጥቅም ላይ እንደሚውሉ እና ምርጫዎችዎን እንዴት ማስተዳደር እንደሚችሉ ያብራራል።",
      whatAreCookiesTitle: "1. ኩኪዎች እና ሎካል ስቶሬጅ ምንድን ናቸው?",
      whatAreCookiesDesc:
        "ኩኪዎች ድረ-ገጾችን በሚጎበኙበት ጊዜ በብሮውዘርዎ አማካኝነት በመሳሪያዎ ላይ የሚቀመጡ ጥቃቅን የጽሁፍ ፋይሎች ናቸው። በተጨማሪም ዘመናዊ ድረ-ገጾች መረጃዎችን ወደ ውጫዊ የማስታወቂያ አገልጋዮች ሳያስተላልፉ በብሮውዘርዎ ውስጥ ብቻ ለማስቀመጥ ሎካል ስቶሬጅ (Local Storage) ይጠቀማሉ።",
      howWeUseTitle: "2. ይህ ድረ-ገጽ ስቶሬጅን እንዴት እንደሚጠቀም",
      howWeUseDesc:
        "የተጠቃሚዎችን ግላዊነት በጥብቅ እናከብራለን። ይህ ፖርትፎሊዮ የማስታወቂያ ኩኪዎችን፣ የተጠቃሚ መከታተያዎችን ወይም ሌሎች ጣልቃ-ገብ ቴክኖሎጂዎችን አይጠቀምም። የመረጡትን ቋንቋ (እንግሊዝኛ ወይም አማርኛ) ለማስታወስ እና የኩኪ ፍቃድ ምርጫዎን ለመያዝ ብቻ አስፈላጊውን የብሮውዘር ስቶሬጅ እንጠቀማለን።",
      cookieTableTitle: "3. ጥቅም ላይ የዋሉ ቁልፎች እና ቴክኖሎጂዎች",
      cookieTableHeaders: {
        name: "የስቶሬጅ ቁልፍ / ኩኪ",
        purpose: "የአጠቃቀም ዓላማ",
        duration: "የሚቆይበት ጊዜ",
        type: "አይነት",
      },
      cookieItems: [
        {
          name: "portfolio_lang",
          purpose: "የመረጡትን ቋንቋ (እንግሊዝኛ ወይም አማርኛ) በገጾች መካከል እና በድጋሚ ሲጎበኙ ያስቀምጣል።",
          duration: "ቋሚ (Local Storage)",
          type: "እጅግ አስፈላጊ",
        },
        {
          name: "cookie_consent",
          purpose: "የኩኪ ምርጫዎን በማስታወስ ባነሩ ደጋግሞ እንዳይረብሽ ያደርጋል።",
          duration: "ቋሚ (Local Storage)",
          type: "እጅግ አስፈላጊ",
        },
      ],
      thirdPartyTitle: "4. የሶስተኛ ወገን ሊንኮች እና አገልግሎቶች",
      thirdPartyDesc:
        "ይህ ፖርትፎሊዮ ወደ ማህበራዊ አውታሮች (GitHub, LinkedIn, Instagram, Facebook) የሚወስዱ ቀጥታ ሊንኮችን ይዟል። እነዚያን ሊንኮች ተጭነው ሲሄዱ የእነሱ የራሳቸው የሆነ የኩኪ እና የግላዊነት ፖሊሲ ተፈጻሚ ይሆናል።",
      managingCookiesTitle: "5. ኩኪዎችን እንዴት ማስተዳደር እና ማጥፋት ይቻላል?",
      managingCookiesDesc:
        "በማንኛውም ጊዜ በብሮውዘርዎ ሴቲንግ (Chrome, Safari, Firefox, Edge ወዘተ) ውስጥ በመግባት የተቀመጡ ኩኪዎችን እና ስቶሬጅን ማጥፋት ወይም ማገድ ይችላሉ። ስቶሬጅን ሲያጠፉ የመረጡት ቋንቋ ወደ ነባሪው ሊመለስ ይችላል።",
      contactTitle: "6. ጥያቄ ወይም አስተያየት አለዎት?",
      contactDesc:
        "ስለዚህ የኩኪ ፖሊሲ ወይም የግላዊነት ጥበቃ ማንኛውም ጥያቄ ካለዎት በኢሜይል አድራሻ yonaskassahunyoka@gmail.com ሊያገኙኝ ይችላሉ።",
    },
  },
};
