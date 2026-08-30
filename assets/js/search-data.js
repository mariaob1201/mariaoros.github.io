// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/mariaoros.github.io/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order. Also see my Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mariaoros.github.io/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mariaoros.github.io/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Selected GitHub repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mariaoros.github.io/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae. Download the PDF using the icon on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mariaoros.github.io/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught and research mentorship during my time in Mexico.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mariaoros.github.io/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-launched-my-personal-website-more-to-come-soon",
          title: 'Launched my personal website. More to come soon.',
          description: "",
          section: "News",},{id: "news-submitted-a-paper-on-a-meta-analysis-in-alfalfa-crop-management-to-phytofrontiers-with-dr-shalini-yerukala-and-dr-damon-smith-uw-madison",
          title: 'Submitted a paper on a meta-analysis in alfalfa crop management to PhytoFrontiers, with...',
          description: "",
          section: "News",},{id: "news-4-contributor-on-the-uw-madison-dsi-open-source-leaderboard",
          title: '#4 contributor on the UW–Madison DSI open-source leaderboard.',
          description: "",
          section: "News",},{id: "news-began-my-phd-in-statistics-at-uw-madison",
          title: 'Began my PhD in Statistics at UW–Madison.',
          description: "",
          section: "News",},{id: "projects-mechanistic-modeling-of-hic",
          title: 'Mechanistic modeling of HIC',
          description: "Statistical and ML methods for protein purification via Hydrophobic Interaction Chromatography.",
          section: "Projects",handler: () => {
              window.location.href = "/mariaoros.github.io/projects/1_hic/";
            },},{id: "projects-agricultural-forecasting-system",
          title: 'Agricultural forecasting system',
          description: "LLM-based advisory system backed by ML risk-forecasting models trained on Wisconet weather station data.",
          section: "Projects",handler: () => {
              window.location.href = "/mariaoros.github.io/projects/2_agricultural_forecasting/";
            },},{id: "projects-fungicide-roi-calculator",
          title: 'Fungicide ROI calculator',
          description: "Economic ROI tool for fungicide profitability — corn diseases, soybean white mold, and alfalfa foliar diseases.",
          section: "Projects",handler: () => {
              window.location.href = "/mariaoros.github.io/projects/3_roi_calculator/";
            },},{id: "projects-open-lambda",
          title: 'Open Lambda',
          description: "Bridging an open-source serverless research platform into a usable product, in collaboration with DSI.",
          section: "Projects",handler: () => {
              window.location.href = "/mariaoros.github.io/projects/4_open_lambda/";
            },},{id: "projects-dsi-impact-map",
          title: 'DSI Impact Map',
          description: "Interactive citation map visualizing the research reach of UW–Madison&#39;s Data Science Institute.",
          section: "Projects",handler: () => {
              window.location.href = "/mariaoros.github.io/projects/5_dsi_impact_map/";
            },},{id: "projects-ai-driven-anomaly-detection",
          title: 'AI-driven anomaly detection',
          description: "Partnership with SafeSet — LLM-based anomaly detection on workforce scheduling data to flag safety risk in manufacturing.",
          section: "Projects",handler: () => {
              window.location.href = "/mariaoros.github.io/projects/6_safeset_anomaly_detection/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/mariaoros.github.io/assets/rendercv/rendercv_output/Mary_J_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6F%72%6F%73%32@%77%69%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=FCNAyHsAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-2067-4063", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mariaob1201", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/MariaOros", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@MariaOrosB", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/mariaoros.github.io/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
