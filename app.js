const categories = [
  {
    slug: "heritage", name: "文旅文博", summary: "古建筑、文博空间与文化资产的三维呈现", cases: [
      [1, "时思寺", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793761612086_%E7%B4%A0%E6%9D%90%E4%BA%8C%EF%BC%9A%E6%97%B6%E6%80%9D%E5%AF%BA%E5%9C%BA%E6%99%AF%E8%BF%98%E5%8E%9F%E8%A7%86%E9%A2%91.mp4"],
      [2, "德寿宫", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793761580183_%E6%89%A9%E6%95%A3-%E5%BE%B7%E5%AF%BF%E5%AE%AB.mp4"],
      [3, "凤冠", "https://www.aholo3d.cn/3dgs-model/phoenix-coronet-3FO4K4W84R8T"],
    ]
  },
  {
    slug: "smart-home", name: "智能家居", summary: "全屋可视、设备互联与智慧生活展示", cases: [
      [4, "全屋 3D 说明书", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793762800618_%E5%85%A8%E5%B1%8B3D%E8%AF%B4%E6%98%8E%E4%B9%A6.mp4"],
      [5, "栖境 AI HOME", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793763412645_%E6%A0%96%E5%A2%83AIHOME.mp4"],
      [6, "样板间", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793762718767_%E6%89%A9%E6%95%A3-%E6%A0%B7%E6%9D%BF%E9%97%B4.mp4"],
    ]
  },
  {
    slug: "urban", name: "城市更新", summary: "地块研判、空间规划与城市更新场景", cases: [
      [7, "城市设计", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793763494745_%E5%9F%8E%E5%B8%82%E8%AE%BE%E8%AE%A1agent.mp4"],
      [8, "地块研判", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793763776735_%E5%9C%B0%E5%9D%97AI%E7%A0%94%E5%88%A4.mp4"],
      [9, "危房 AI 检查", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793763639043_%E6%B8%A9%E5%B7%9E%E5%8D%B1%E6%88%BFAI%E6%A3%80%E6%B5%8B.mp4"],
    ]
  },
  {
    slug: "construction", name: "建筑工程", summary: "建筑档案、施工与智能建造", cases: [
      [10, "建筑三维档案", "https://studio.aholo3d.cn/3dgs-model/collection/yongtai-tortoise-city"],
      [11, "标准化施工", "https://www.kujiale.com/pub/homeshow/exh/gs-model-share/SF48A3S2LCVZ?quality=null"],
      [12, "点云驱动的建筑机器人智能施工", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793843592046_%E7%82%B9%E4%BA%91%E5%88%86%E5%89%B2%E4%BB%BB%E5%8A%A1%E4%B8%8B%E5%8F%91V3.mp4"],
    ]
  },
  {
    slug: "renovation", name: "局改旧改", summary: "隐蔽工程留档、户型与实景设计", cases: [
      [13, "隐蔽工程档案", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772316200_%E6%89%A9%E6%95%A3-%E6%B0%B4%E7%94%B5.mp4"],
      [14, "图生高斯", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793763982928_%E5%9B%BE%E7%94%9F%E4%B8%89%E7%BB%B4.mp4"],
      [15, "实景设计", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772276311_%E5%AE%9E%E6%99%AF%E8%AE%BE%E8%AE%A1.mp4"],
    ]
  },
  {
    slug: "ai-modeling", name: "AI+建模", summary: "家居、服装等单体资产展示", cases: [
      [16, "单人椅", "https://www.aholo3d.cn/3dgs-model/armchair-3FO4K4W85T15"],
      [17, "毛绒娃娃", "https://www.aholo3d.cn/3dgs-model/plush-toy-3FO4K4W84UKU"],
      [18, "旗袍", "https://www.aholo3d.cn/3dgs-model/clothes-3FO4K4W8529W"],
    ]
  },
  {
    slug: "digital-twin", name: "数字孪生", summary: "工业空间、设备联动与自主巡检", cases: [
      [19, "工厂数字孪生管理平台", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772503693_%E5%B7%A5%E5%8E%82%E6%95%B0%E5%AD%97%E5%AD%AA%E7%94%9F%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0.mp4"],
      [20, "机器人自主感知导航", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772531158_%E7%A9%BA%E9%97%B4%E6%99%BA%E8%83%BD%C2%B7%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%87%AA%E4%B8%BB%E6%84%9F%E7%9F%A5%E5%AF%BC%E8%88%AA.mp4"],
      [21, "数字孪生工厂 · IoT 设备融合联动", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772544948_%E6%95%B0%E5%AD%97%E5%AD%AA%E7%94%9F%E5%B7%A5%E5%8E%82%C2%B7IoT%E8%AE%BE%E5%A4%87%E8%9E%8D%E5%90%88%E8%81%94%E5%8A%A8.mp4"],
    ]
  },
  {
    slug: "dataset", name: "高质量数据集", summary: "结构化空间场景与语义数据展示", cases: [
      [22, "空间数据展示 01", null],
      [23, "空间数据展示 02", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772634268_%E6%95%B0%E6%8D%AE%E6%A0%87%E6%B3%A8.mp4"],
      [24, "空间数据展示 03", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772589501_%E7%A9%BA%E9%97%B4%E9%AB%98%E8%B4%A8%E9%87%8F%E6%95%B0%E6%8D%AE%E9%9B%86.mp4"],
    ]
  },
  {
    slug: "embodied-ai", name: "具身智能", summary: "虚实场景映射与具身交互推演", cases: [
      [25, "具身智能展示 01", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772848354_%E3%80%90%E7%9F%AD%E7%89%88-%E5%A4%87%E9%80%89%E3%80%91%E7%BE%A4%E6%A0%B8%E7%A9%BA%E9%97%B4%E6%99%BA%E8%83%BD%E5%B9%B3%E5%8F%B0%E8%A7%86%E9%A2%91.mp4"],
      [26, "具身智能展示 02", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772900655_%E3%80%90%E9%95%BF%E7%89%88%E3%80%91%E7%BE%A4%E6%A0%B8%E7%A9%BA%E9%97%B4%E6%99%BA%E8%83%BD%E5%B9%B3%E5%8F%B0%E8%A7%86%E9%A2%91.mp4"],
      [27, "具身智能展示 03", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772720507_%E5%8A%A8%E6%80%81%E5%AD%AA%E7%94%9F%E5%9B%BE%E8%A1%A8.mp4"],
    ]
  },
  {
    slug: "film", name: "影视片场", summary: "实景空间、虚实融合与影视资产", cases: [
      [28, "时思剑鸣", "https://qhstaticva-cos.kujiale.com/media/yun/help/college/1793772674356_%E6%97%B6%E6%80%9D%E5%89%91%E9%B8%A32.0-%E7%A3%81%E6%98%9F.mp4"],
      [29, "虚实融合制片", null],
      [30, "影视资产", null],
    ]
  },
];

const englishCategories = {
  heritage: ["Cultural Heritage", "3D presentations of historic buildings, museums, and cultural assets"],
  "smart-home": ["Smart Living", "Whole-home visualization, connected devices, and smarter living"],
  urban: ["Urban Renewal", "Site assessment, spatial planning, and urban renewal"],
  construction: ["Construction", "Building records, construction workflows, and intelligent building"],
  renovation: ["Renovation & Retrofit", "Concealed works records, floor plans, and real-space design"],
  "ai-modeling": ["AI + 3D Modeling", "Individual assets, from furniture to fashion"],
  "digital-twin": ["Digital Twins", "Industrial spaces, connected equipment, and autonomous inspection"],
  dataset: ["High-Quality Datasets", "Structured spatial scenes and semantic data"],
  "embodied-ai": ["Embodied AI", "Physical-digital scene mapping and embodied interaction"],
  film: ["Film Production", "Real locations, virtual production, and film assets"],
};

const japaneseCategories = {
  heritage: ["文化・観光", "歴史的建造物、博物館、文化資産を3Dで表現"],
  "smart-home": ["スマートホーム", "住まい全体の可視化、機器連携、スマートな暮らし"],
  urban: ["都市再生", "敷地の評価、空間計画、都市再生の活用シーン"],
  construction: ["建築・建設", "建築記録、施工プロセス、スマート建設"],
  renovation: ["部分改修・リノベーション", "隠蔽部の記録、間取り、実空間を活用した設計"],
  "ai-modeling": ["AI＋3Dモデリング", "家具や衣服など、単体アセットの展示"],
  "digital-twin": ["デジタルツイン", "産業空間、設備連携、自律巡回"],
  dataset: ["高品質データセット", "構造化された空間シーンと意味情報の展示"],
  "embodied-ai": ["エンボディドAI", "現実とデジタルの空間連携、身体性を伴うインタラクション"],
  film: ["映像制作", "実空間、バーチャル制作、映像アセット"],
};

const englishCaseTitles = {
  1: "Shisi Temple", 2: "Deshou Palace", 3: "Phoenix Coronet",
  4: "Whole-Home 3D Guide", 5: "Qijing AI HOME", 6: "Show Home",
  7: "Urban Design", 8: "Site Feasibility Review", 9: "AI Building Safety Check",
  10: "3D Building Archive", 11: "Standardized Construction", 12: "Point-Cloud-Driven Robotic Construction",
  13: "Concealed Works Archive", 14: "Image-to-Gaussian", 15: "Design in Real Spaces",
  16: "Lounge Chair", 17: "Plush Toy", 18: "Qipao Dress",
  19: "Factory Digital Twin Management Platform", 20: "Autonomous Robot Perception & Navigation",
  21: "Digital Twin Factory · IoT Integration",
  22: "Spatial Data Showcase 01", 23: "Spatial Data Showcase 02", 24: "Spatial Data Showcase 03",
  25: "Embodied AI Showcase 01", 26: "Embodied AI Showcase 02", 27: "Embodied AI Showcase 03",
  28: "Shisi: Sword Resonance", 29: "Hybrid Virtual Production", 30: "Film Asset Collection",
};

const japaneseCaseTitles = {
  1: "時思寺", 2: "徳寿宮", 3: "鳳冠",
  4: "住まい全体の3Dガイド", 5: "栖境 AI HOME", 6: "モデルルーム",
  7: "都市設計", 8: "敷地の評価", 9: "AIによる危険建物点検",
  10: "建築物の3Dアーカイブ", 11: "標準化施工", 12: "点群を活用した建設ロボットのスマート施工",
  13: "隠蔽工事アーカイブ", 14: "画像からの3D Gaussian生成", 15: "実空間を活用した設計",
  16: "一人掛けチェア", 17: "ぬいぐるみ", 18: "チャイナドレス",
  19: "工場デジタルツイン管理プラットフォーム", 20: "ロボットの自律認識・ナビゲーション",
  21: "デジタルツイン工場・IoT機器連携",
  22: "空間データ展示 01", 23: "空間データ展示 02", 24: "空間データ展示 03",
  25: "エンボディドAI展示 01", 26: "エンボディドAI展示 02", 27: "エンボディドAI展示 03",
  28: "時思剣鳴", 29: "実写とバーチャルを融合した映像制作", 30: "映像制作アセット",
};

const localizedCategories = { en: englishCategories, ja: japaneseCategories };
const localizedCaseTitles = { en: englishCaseTitles, ja: japaneseCaseTitles };

const copy = {
  zh: {
    pageTitle: "Aholo 行业案例精选",
    pageDescription: "按行业浏览 Aholo 折页中的空间智能与三维应用案例，有演示内容的卡片可直接查看。",
    brandLabel: "Aholo 行业案例首页", headerLink: "了解平台",
    heroTitle: "让空间案例<br><em>自己开口。</em>",
    heroDescription: "从文旅文博到具身智能，浏览折页里的真实场景。点击图片进入对应行业，有演示内容的卡片可直接查看。",
    languageSwitchLabel: "切换语言", metricsLabel: "案例概览", industryCount: "个行业方向", caseCount: "个案例与场景展示",
    carouselLabel: "精选案例轮播", carouselRole: "轮播", viewIndustry: "查看行业 ↓", swipeHint: "左右滑动切换",
    previousCase: "上一个案例", nextCase: "下一个案例", carouselPagination: "精选案例分页",
    exploreTitle: "探索空间的更多可能",
    exploreDescription: "选择与你业务相关的方向，有演示内容的案例卡片可直接打开查看。",
    categoryHint: "行业方向", categoryInstruction: "循环滑动浏览 · 点击选择 ↔", categoryTabsLabel: "行业分类",
    browsingLabel: "当前浏览", allCases: "全部案例",
    closingTitle: "找到相近场景，<br>再讨论你的试点。",
    closingDescription: "可以从一处空间、一个物体或一段采集素材开始，先验证重建效果与后续应用方式。",
    primaryLink: "前往 Aholo 企业平台", officialSite: "官网",
    viewCase: "查看案例 ↗", caseImage: title => `${title}的折页配图`,
    caseLink: title => `${title}：查看案例`, heroIndustry: name => `查看${name}行业`,
    heroImage: title => `${title}案例画面`, heroDot: title => `切换到${title}案例`,
    displayCount: count => `${count} 个展示`,
  },
  en: {
    pageTitle: "Aholo | Industry Case Collection",
    pageDescription: "Explore Aholo's spatial intelligence and 3D use cases by industry. Open any case with a demo to learn more.",
    brandLabel: "Aholo case collection home", headerLink: "Explore Aholo",
    heroTitle: "Spaces speak.<br><em>Stories unfold.</em>",
    heroDescription: "From cultural heritage to embodied AI, explore real-world spatial applications. Tap an image to jump to its industry, then open any case with a demo.",
    languageSwitchLabel: "Switch language", metricsLabel: "Collection overview", industryCount: "industry sectors", caseCount: "cases and showcases",
    carouselLabel: "Featured case carousel", carouselRole: "carousel", viewIndustry: "View industry ↓", swipeHint: "Swipe to explore",
    previousCase: "Previous case", nextCase: "Next case", carouselPagination: "Featured case pages",
    exploreTitle: "Explore what space can do",
    exploreDescription: "Choose an industry relevant to your work. Tap any case card with a demo to explore it.",
    categoryHint: "INDUSTRIES", categoryInstruction: "Swipe to browse · Tap to select ↔", categoryTabsLabel: "Industry categories",
    browsingLabel: "VIEWING", allCases: "All cases",
    closingTitle: "See your use case.<br>Start a pilot.",
    closingDescription: "Start with a space, an object, or a short capture. Test the reconstruction quality and how you could use the result.",
    primaryLink: "Visit Aholo for Business", officialSite: "Website",
    viewCase: "View case ↗", caseImage: title => `Brochure image for ${title}`,
    caseLink: title => `View case: ${title}`, heroIndustry: name => `View ${name}`,
    heroImage: title => `Preview of ${title}`, heroDot: title => `Show ${title}`,
    displayCount: count => `${count} showcases`,
  },
  ja: {
    pageTitle: "Aholo｜業界別事例集",
    pageDescription: "Aholoの空間知能・3D活用事例を業界別にご紹介。デモのある事例はカードからご覧いただけます。",
    brandLabel: "Aholo 業界別事例集のトップ", headerLink: "サービスを見る",
    heroTitle: "空間が語る。<br><em>事例が伝わる。</em>",
    heroDescription: "文化・観光からエンボディドAIまで、実際の空間活用事例をご紹介。写真をタップすると業界別の事例へ移動し、デモのある事例はそのままご覧いただけます。",
    languageSwitchLabel: "表示言語を切り替える", metricsLabel: "事例集の概要", industryCount: "業界", caseCount: "事例・シーン",
    carouselLabel: "注目事例のカルーセル", carouselRole: "カルーセル", viewIndustry: "業界を見る ↓", swipeHint: "左右にスワイプ",
    previousCase: "前の事例", nextCase: "次の事例", carouselPagination: "注目事例のページ",
    exploreTitle: "空間の可能性を探る",
    exploreDescription: "関連する業界を選択してください。デモがある事例カードから内容をご覧いただけます。",
    categoryHint: "業界カテゴリー", categoryInstruction: "横にスワイプして選択 ↔", categoryTabsLabel: "業界カテゴリー",
    browsingLabel: "表示中", allCases: "すべての事例",
    closingTitle: "近い事例から<br>実証へ。",
    closingDescription: "まずは一つの空間、物体、または撮影素材から。3D再構築の品質と活用方法を検証できます。",
    primaryLink: "Aholo企業向けプラットフォームへ", officialSite: "公式サイト",
    viewCase: "事例を見る ↗", caseImage: title => `${title}のパンフレット掲載画像`,
    caseLink: title => `${title}の事例を見る`, heroIndustry: name => `${name}の事例を見る`,
    heroImage: title => `${title}の事例画像`, heroDot: title => `${title}を表示`,
    displayCount: count => `${count} 件表示`,
  },
};

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
let language = ["en", "ja"].includes(requestedLanguage) ? requestedLanguage : "zh";
const phrase = key => copy[language][key];
const categoryName = category => language === "zh" ? category.name : localizedCategories[language][category.slug][0];
const categorySummary = category => language === "zh" ? category.summary : localizedCategories[language][category.slug][1];
const caseTitle = item => language === "zh" ? item[1] : localizedCaseTitles[language][item[0]];

const tabs = document.getElementById("category-tabs");
const categoryOptions = [{ slug: "all", name: "全部案例" }, ...categories];
const mobileTabs = window.matchMedia("(max-width: 700px)");
const list = document.getElementById("case-list");
const currentCategory = document.getElementById("current-category");
const resultCount = document.getElementById("result-count");
let selected = "all";
let highlightedCase = null;

function imagePath(id) {
  return `assets/case-${String(id).padStart(2, "0")}.webp?v=20261022d`;
}

const heroSlides = [1, 10, 4, 19, 25, 28].map(id => {
  const category = categories.find(group => group.cases.some(item => item[0] === id));
  return { category, slug: category.slug, item: category.cases.find(item => item[0] === id) };
});
const heroShowcase = document.getElementById("hero-showcase");
const heroArt = document.getElementById("hero-art");
const heroCurrentLink = document.getElementById("hero-current-link");
const heroNextImage = document.getElementById("hero-next-image");
const heroDots = document.getElementById("hero-dots");
const heroCount = document.getElementById("hero-count");
const heroCaseTitle = document.getElementById("hero-case-title");
let heroIndex = 0;
let suppressHeroClick = false;

heroDots.innerHTML = heroSlides.map(({ item }, index) => `<button class="hero-dot" type="button" data-hero-slide="${index}" aria-label="${phrase("heroDot")(caseTitle(item))}" aria-pressed="${index === 0}"></button>`).join("");

function setHeroSlide(index, animate = true) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  const active = heroSlides[heroIndex];
  const upcoming = heroSlides[(heroIndex + 1) % heroSlides.length];
  const langQuery = language === "zh" ? "" : `lang=${language}&`;
  heroCurrentLink.href = `?${langQuery}category=${active.slug}#group-${active.slug}`;
  heroCurrentLink.dataset.category = active.slug;
  heroCurrentLink.setAttribute("aria-label", phrase("heroIndustry")(categoryName(active.category)));
  heroCurrentLink.querySelector("img").src = imagePath(active.item[0]);
  heroCurrentLink.querySelector("img").alt = phrase("heroImage")(caseTitle(active.item));
  heroNextImage.querySelector("img").src = imagePath(upcoming.item[0]);
  heroNextImage.href = `?${langQuery}category=${upcoming.slug}#group-${upcoming.slug}`;
  heroNextImage.dataset.category = upcoming.slug;
  heroNextImage.setAttribute("aria-label", phrase("heroIndustry")(categoryName(upcoming.category)));
  heroCount.textContent = `${String(heroIndex + 1).padStart(2, "0")} / ${String(heroSlides.length).padStart(2, "0")}`;
  heroCaseTitle.textContent = `${categoryName(active.category)} / ${caseTitle(active.item)}`;
  heroDots.querySelectorAll("button").forEach((dot, dotIndex) => {
    dot.setAttribute("aria-pressed", String(dotIndex === heroIndex));
    dot.setAttribute("aria-label", phrase("heroDot")(caseTitle(heroSlides[dotIndex].item)));
  });
  if (animate) {
    for (const frame of [heroCurrentLink, heroNextImage]) {
      frame.classList.remove("is-changing");
      void frame.offsetWidth;
      frame.classList.add("is-changing");
    }
  }
}

setHeroSlide(0, false);
document.getElementById("hero-prev").addEventListener("click", () => setHeroSlide(heroIndex - 1));
document.getElementById("hero-next").addEventListener("click", () => setHeroSlide(heroIndex + 1));
function openHeroCategory(event) {
  event.preventDefault();
  const slug = event.currentTarget.dataset.category;
  setSelection(slug);
  history.replaceState(null, "", `${window.location.pathname}${window.location.search}#group-${slug}`);
  requestAnimationFrame(() => document.getElementById(`group-${slug}`)?.closest(".category-section")?.scrollIntoView({ behavior: "smooth", block: "start" }));
}
heroCurrentLink.addEventListener("click", openHeroCategory);
heroNextImage.addEventListener("click", openHeroCategory);
heroDots.addEventListener("click", event => {
  const dot = event.target.closest("[data-hero-slide]");
  if (dot) setHeroSlide(Number(dot.dataset.heroSlide));
});
heroShowcase.addEventListener("keydown", event => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  setHeroSlide(heroIndex + (event.key === "ArrowRight" ? 1 : -1));
});

let heroPointerStart = null;
heroArt.addEventListener("dragstart", event => event.preventDefault());
heroArt.addEventListener("pointerdown", event => {
  if (!event.isPrimary || event.button !== 0) return;
  heroPointerStart = { id: event.pointerId, x: event.clientX, y: event.clientY };
});
window.addEventListener("pointermove", event => {
  if (!heroPointerStart || event.pointerId !== heroPointerStart.id) return;
  const dx = event.clientX - heroPointerStart.x;
  const dy = event.clientY - heroPointerStart.y;
  if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy) * 1.1) return;
  heroArt.classList.add("is-dragging");
  heroArt.style.setProperty("--drag-x", `${Math.max(-110, Math.min(110, dx))}px`);
});
window.addEventListener("pointerup", event => {
  if (!heroPointerStart || event.pointerId !== heroPointerStart.id) return;
  const dx = event.clientX - heroPointerStart.x;
  const dy = event.clientY - heroPointerStart.y;
  heroPointerStart = null;
  heroArt.classList.remove("is-dragging");
  heroArt.style.removeProperty("--drag-x");
  if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
  suppressHeroClick = true;
  setHeroSlide(heroIndex + (dx < 0 ? 1 : -1));
  window.setTimeout(() => { suppressHeroClick = false; }, 450);
});
window.addEventListener("pointercancel", event => {
  if (!heroPointerStart || event.pointerId !== heroPointerStart.id) return;
  heroPointerStart = null;
  heroArt.classList.remove("is-dragging");
  heroArt.style.removeProperty("--drag-x");
});
heroArt.addEventListener("click", event => {
  if (!suppressHeroClick) return;
  event.preventDefault();
  event.stopPropagation();
  suppressHeroClick = false;
}, true);

function cardMarkup(category, item) {
  const [id, , url] = item;
  const title = caseTitle(item);
  const tag = url ? "a" : "article";
  const destination = url
    ? `target="_blank" rel="noopener noreferrer" aria-label="${phrase("caseLink")(title)}"`
    : "";
  const action = url ? `<span class="image-zoom" aria-hidden="true">${phrase("viewCase")}</span>` : "";
  return `<${tag} class="case-card${id === highlightedCase ? " is-target" : ""}" id="case-${id}" data-case-id="${id}" ${destination}>
    <div class="case-image"><img alt="${phrase("caseImage")(title)}" loading="lazy" decoding="async">${action}</div>
    <div class="case-body">
      <div class="case-kind">${categoryName(category)} · ${String(id).padStart(2, "0")}</div>
      <h4 class="case-title">${title}</h4>
    </div>
  </${tag}>`;
}

function sectionMarkup(category, index) {
  return `<section class="category-section" aria-labelledby="group-${category.slug}">
    <div class="group-heading"><div><h3 id="group-${category.slug}">${categoryName(category)}</h3><p>${categorySummary(category)}</p></div><span class="group-index">${String(index + 1).padStart(2, "0")} / 10</span></div>
    <div class="cards">${category.cases.map(item => cardMarkup(category, item)).join("")}</div>
  </section>`;
}

function renderTabs() {
  const copy = position => categoryOptions.map(option => position === "main"
    ? `<button class="category-tab" type="button" role="tab" aria-controls="case-list" aria-selected="${selected === option.slug}" data-loop="main" data-category="${option.slug}">${option.slug === "all" ? phrase("allCases") : categoryName(option)}</button>`
    : `<button class="category-tab" type="button" tabindex="-1" aria-hidden="true" data-loop="${position}" data-active="${selected === option.slug}" data-category="${option.slug}">${option.slug === "all" ? phrase("allCases") : categoryName(option)}</button>`).join("");
  tabs.innerHTML = mobileTabs.matches ? copy("before") + copy("main") + copy("after") : copy("main");
  const activeTab = tabs.querySelector('[data-loop="main"][aria-selected="true"]');
  if (activeTab) tabs.scrollLeft = activeTab.offsetLeft - tabs.offsetLeft - (tabs.clientWidth - activeTab.clientWidth) / 2;
}

let tabLoopTimer;
function recenterMobileTabs() {
  if (!mobileTabs.matches) return;
  const middle = tabs.querySelector('[data-loop="main"]');
  const after = tabs.querySelector('[data-loop="after"]');
  if (!middle || !after) return;
  const cycleWidth = after.offsetLeft - middle.offsetLeft;
  const middleStart = middle.offsetLeft - tabs.offsetLeft;
  const afterStart = after.offsetLeft - tabs.offsetLeft;
  if (tabs.scrollLeft < middleStart) tabs.scrollLeft += cycleWidth;
  else if (tabs.scrollLeft >= afterStart) tabs.scrollLeft -= cycleWidth;
}
tabs.addEventListener("scroll", () => {
  if (!mobileTabs.matches) return;
  window.clearTimeout(tabLoopTimer);
  tabLoopTimer = window.setTimeout(recenterMobileTabs, 130);
}, { passive: true });
mobileTabs.addEventListener("change", renderTabs);

function renderCases() {
  const filtered = selected === "all" ? categories : categories.filter(category => category.slug === selected);
  currentCategory.textContent = selected === "all" ? phrase("allCases") : categoryName(filtered[0]);
  resultCount.textContent = phrase("displayCount")(filtered.reduce((total, group) => total + group.cases.length, 0));
  list.innerHTML = filtered.map(category => sectionMarkup(category, categories.indexOf(category))).join("");
  list.querySelectorAll(".case-card").forEach(card => {
    const id = Number(card.dataset.caseId);
    card.querySelector("img").src = imagePath(id);
    if (card.tagName === "A") {
      const record = categories.flatMap(category => category.cases).find(item => item[0] === id);
      card.href = record[2];
    }
  });
}

function setSelection(slug, caseId = null, updateUrl = true) {
  if (slug !== "all" && !categories.some(category => category.slug === slug)) slug = "all";
  selected = slug;
  highlightedCase = caseId;
  renderTabs();
  renderCases();
  if (updateUrl) {
    const params = new URLSearchParams(window.location.search);
    params.delete("category");
    params.delete("case");
    if (slug !== "all") params.set("category", slug);
    const query = params.toString();
    history.replaceState(null, "", window.location.pathname + (query ? "?" + query : ""));
  }
  if (caseId) {
    requestAnimationFrame(() => document.getElementById(`case-${caseId}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  }
}

tabs.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  setSelection(button.dataset.category);
  document.querySelector(".result-bar").scrollIntoView({ behavior: "smooth", block: "start" });
});

const incoming = new URLSearchParams(window.location.search);
const targetId = Number(incoming.get("case"));
const targetGroup = categories.find(group => group.cases.some(item => item[0] === targetId));
if (targetGroup) setSelection(targetGroup.slug, targetId, false);
else setSelection(incoming.get("category") || "all", null, false);
if (window.location.hash.startsWith("#group-")) {
  requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.closest(".category-section")?.scrollIntoView({ block: "start" }));
}

function applyLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.title = phrase("pageTitle");
  document.querySelector('meta[name="description"]').content = phrase("pageDescription");
  document.querySelector('meta[property="og:title"]').content = phrase("pageTitle");
  document.querySelector('meta[property="og:description"]').content = phrase("pageDescription");
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = phrase(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(element => { element.innerHTML = phrase(element.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-aria]").forEach(element => { element.setAttribute("aria-label", phrase(element.dataset.i18nAria)); });
  document.querySelectorAll("[data-i18n-role]").forEach(element => { element.setAttribute("aria-roledescription", phrase(element.dataset.i18nRole)); });
  document.querySelectorAll(".language-option").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });
  setHeroSlide(heroIndex, false);
  renderTabs();
  renderCases();
}

document.querySelector(".language-switch").addEventListener("click", event => {
  const button = event.target.closest("[data-lang]");
  if (!button || button.dataset.lang === language) return;
  language = button.dataset.lang;
  const params = new URLSearchParams(window.location.search);
  if (language !== "zh") params.set("lang", language);
  else params.delete("lang");
  const query = params.toString();
  history.replaceState(null, "", window.location.pathname + (query ? "?" + query : "") + window.location.hash);
  applyLanguage();
});

applyLanguage();
