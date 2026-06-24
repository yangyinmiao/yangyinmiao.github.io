(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const langToggle = document.querySelector('[data-lang-toggle]');
  const storedTheme = localStorage.getItem('theme');
  const storedLang = localStorage.getItem('lang');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const browserLang = (navigator.language || 'en').toLowerCase();
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  const initialLang = storedLang || (browserLang.startsWith('zh') ? 'zh' : 'en');

  const copy = {
    en: {
      'nav.blog': 'Blog',
      'nav.notes': 'Notes',
      'nav.projects': 'Projects',
      'nav.about': 'About',
      'theme.toggle': 'Toggle theme',
      'footer.copy': 'Built with Jekyll for GitHub Pages.',
      'home.greeting': "Hey, I'm Your Name!",
      'home.intro': "I'm a developer and writer. I like small tools, honest notes, and websites that feel lived in.",
      'home.writer_note': 'Everything on this site is written by me, not AI.',
      'home.about_button': 'About me',
      'home.email_button': 'Email newsletter',
      'home.current_title': 'What I am focused on',
      'home.current_intro': "I'm a developer and writer. I like small tools, honest notes, and websites that feel lived in.",
      'home.more_about': 'More about me',
      'home.highlight_title': 'Why this site exists',
      'home.highlight': 'A personal site should sound like a person. Small updates, a steady point of view, and a few places to say hello go a long way.',
      'home.connect_title': 'Stay Connected',
      'home.connect_intro': 'A few places to say hello.',
      'home.say_hello': 'Say hello',
      'home.connect.email.label': 'Email newsletter',
      'home.connect.email.short': 'Mail',
      'home.connect.github.label': 'GitHub',
      'home.connect.github.short': 'GH',
      'home.connect.rednote.label': 'RedNote',
      'home.connect.rednote.short': 'XHS',
      'home.connect.wechat.label': 'My Wechat',
      'home.connect.wechat.short': 'WeChat',
      'home.latest_posts': 'Latest posts',
      'home.all_posts': 'All posts',
      'home.notes': 'Notes',
      'home.all_notes': 'All notes',
      'home.projects': 'Projects',
      'home.all_projects': 'All projects',
      'page.kind': 'Page',
      'page.title.about': 'About',
      'page.title.blog': 'Blog',
      'page.title.notes': 'Notes',
      'page.title.projects': 'Projects',
      'page.title.archive': 'Archive',
      'page.title.not_found': 'Page not found',
      'blog.intro': 'The latest long-form articles live here.',
      'notes.intro': 'Short updates, experiments, and in-progress thoughts.',
      'projects.intro': 'Selected work and experiments.',
      'archive.intro': 'This page collects everything in one place.',
      'not_found.intro': "The page you're looking for doesn't exist.",
      'not_found.home': 'Return to the home page',
      'not_found.archive': 'check the archive',
      'about.heading': "Hi, I’m Your Name.",
      'about.tagline': 'A calm, content-first blog for essays, notes, and projects.',
      'about.writer_note': 'Everything on this site is written by me, not AI.',
      'about.summary': 'I use this site as a working notebook: a place for long-form posts, quick notes, experiments, and the occasional project dump that I want to keep around.',
      'about.current_title': 'Current focus',
      'about.current.0': 'Shipping tiny, useful experiments',
      'about.current.1': 'Writing posts I want to reread later',
      'about.current.2': 'Keeping a public trail of what I learn',
      'about.highlight_title': 'Why this site exists',
      'about.highlight': 'A personal site should sound like a person. Small updates, a steady point of view, and a few places to say hello go a long way.',
      'about.say_hello': 'Say hello',
      'about.links.github': 'GitHub',
      'about.links.email': 'Email',
      'about.connect_title': 'Connect',
      'about.connect.email.short': 'Mail',
      'about.connect.email.label': 'Email newsletter',
      'about.connect.github.short': 'GH',
      'about.connect.github.label': 'GitHub',
      'about.connect.rednote.short': 'XHS',
      'about.connect.rednote.label': 'RedNote',
      'about.connect.wechat.short': 'WeChat',
      'about.connect.wechat.label': 'My Wechat',
      'about.now_title': 'Now',
      'about.now_intro': "Right now I'm usually:",
      'about.now.0': 'Writing or editing one post at a time',
      'about.now.1': 'Tweaking small design details until the site feels like me',
      'about.now.2': 'Saving ideas before they disappear',
      'lang.switch_to_zh': 'Switch to Chinese',
      'lang.switch_to_en': 'Switch to English'
    },
    zh: {
      'nav.blog': '博客',
      'nav.notes': '笔记',
      'nav.projects': '项目',
      'nav.about': '关于',
      'theme.toggle': '切换主题',
      'footer.copy': '使用 Jekyll 构建，适用于 GitHub Pages。',
      'home.greeting': '你好，我是 Your Name！',
      'home.intro': '我是一名开发者和写作者。我喜欢小而实用的工具、诚实的记录，以及有生活感的网站。',
      'home.writer_note': '这个网站的内容都由我亲自撰写，不是 AI 生成。',
      'home.about_button': '关于我',
      'home.email_button': '邮件订阅',
      'home.current_title': '我最近在关注',
      'home.current_intro': '我是一名开发者和写作者。我喜欢小而实用的工具、诚实的记录，以及有生活感的网站。',
      'home.more_about': '更多关于我',
      'home.highlight_title': '为什么这个网站存在',
      'home.highlight': '个人网站应该像一个真实的人。小更新、稳定的观点，以及几个可以打招呼的地方，已经足够。',
      'home.connect_title': '保持联系',
      'home.connect_intro': '几个可以和我打招呼的地方。',
      'home.say_hello': '打个招呼',
      'home.connect.email.label': '邮件订阅',
      'home.connect.email.short': '邮件',
      'home.connect.github.label': 'GitHub',
      'home.connect.github.short': 'GH',
      'home.connect.rednote.label': '小红书',
      'home.connect.rednote.short': '小红书',
      'home.connect.wechat.label': '我的微信',
      'home.connect.wechat.short': '微信',
      'home.latest_posts': '最新文章',
      'home.all_posts': '全部文章',
      'home.notes': '笔记',
      'home.all_notes': '全部笔记',
      'home.projects': '项目',
      'home.all_projects': '全部项目',
      'page.kind': '页面',
      'page.title.about': '关于',
      'page.title.blog': '博客',
      'page.title.notes': '笔记',
      'page.title.projects': '项目',
      'page.title.archive': '归档',
      'page.title.not_found': '页面未找到',
      'blog.intro': '这里放最新的长文。',
      'notes.intro': '简短更新、实验和进行中的想法。',
      'projects.intro': '精选作品和实验。',
      'archive.intro': '这个页面把所有内容都汇总到一起。',
      'not_found.intro': '你要找的页面不存在。',
      'not_found.home': '返回首页',
      'not_found.archive': '查看归档',
      'about.heading': '你好，我是 Your Name。',
      'about.tagline': '一个以内容为先的安静博客，用来写文章、记笔记和做项目。',
      'about.writer_note': '这个网站的内容都由我亲自撰写，不是 AI 生成。',
      'about.summary': '我把这个网站当成一本工作笔记：放长文、短笔记、实验，也放我想保留下来的项目片段。',
      'about.current_title': '当前关注',
      'about.current.0': '交付小而有用的实验',
      'about.current.1': '写下我以后还想重读的文章',
      'about.current.2': '保留一条公开的学习轨迹',
      'about.highlight_title': '为什么这个网站存在',
      'about.highlight': '个人网站应该像一个真实的人。小更新、稳定的观点，以及几个可以打招呼的地方，已经足够。',
      'about.say_hello': '打个招呼',
      'about.links.github': 'GitHub',
      'about.links.email': '邮箱',
      'about.connect_title': '联系方式',
      'about.connect.email.short': '邮件',
      'about.connect.email.label': '邮件订阅',
      'about.connect.github.short': 'GH',
      'about.connect.github.label': 'GitHub',
      'about.connect.rednote.short': '小红书',
      'about.connect.rednote.label': '小红书',
      'about.connect.wechat.short': '微信',
      'about.connect.wechat.label': '我的微信',
      'about.now_title': '现在',
      'about.now_intro': '我现在通常在做这些：',
      'about.now.0': '一次写或改一篇文章',
      'about.now.1': '反复调整小细节，直到网站像我自己',
      'about.now.2': '在想法消失之前先记下来',
      'lang.switch_to_zh': '切换到中文',
      'lang.switch_to_en': '切换到英文'
    }
  };

  function applyTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }

  function updateLangToggle(lang) {
    if (!langToggle) return;
    langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
    langToggle.setAttribute('aria-label', copy[lang]['lang.switch_to_' + (lang === 'zh' ? 'en' : 'zh')]);
  }

  function applyLanguage(lang) {
    const bundle = copy[lang] || copy.en;

    root.dataset.lang = lang;
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      const value = bundle[key];
      if (typeof value === 'string') {
        node.textContent = value;
      }
    });

    updateLangToggle(lang);
  }

  applyTheme(initialTheme);
  applyLanguage(initialLang);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const next = root.dataset.lang === 'zh' ? 'en' : 'zh';
      applyLanguage(next);
    });
  }
})();
