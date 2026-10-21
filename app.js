const categories = [
  {
    slug: "heritage", name: "文旅文博", summary: "古建筑、文博空间与文化资产的三维呈现", cases: [
      [1, "时思寺", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAcRBmyxcD"],
      [2, "德寿宫", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAc2PLzg1h"],
      [3, "凤冠", "https://www.aholo3d.cn/3dgs-model/phoenix-coronet-3FO4K4W84R8T"],
    ]
  },
  {
    slug: "smart-home", name: "智能家居", summary: "全屋可视、设备互联与智慧生活展示", cases: [
      [4, "全屋 3D 说明书", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAcVKWpxoi"],
      [5, "栖境 AI HOME", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAcdGQr0Dd"],
      [6, "样板间", "https://www.bilibili.com/video/BV1wudnBPEpo/"],
    ]
  },
  {
    slug: "urban", name: "城市更新", summary: "地块研判、空间规划与城市更新场景", cases: [
      [7, "城市设计", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAcy4711W4"],
      [8, "地块研判", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAcFr5auJq"],
      [9, "危房 AI 检查", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAcuoysw1u"],
    ]
  },
  {
    slug: "construction", name: "建筑工程", summary: "建筑档案、施工与智能建造", cases: [
      [10, "建筑三维档案", "https://studio.aholo3d.cn/3dgs-model/collection/yongtai-tortoise-city"],
      [11, "标准化施工", "https://www.kujiale.com/pub/homeshow/exh/gs-model-share/SF48A3S2LCVZ?quality=null"],
      [12, "点云驱动的建筑机器人智能施工", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAc3gUkw0G"],
    ]
  },
  {
    slug: "renovation", name: "局改旧改", summary: "隐蔽工程留档、户型与实景设计", cases: [
      [13, "隐蔽工程档案", "https://www.bilibili.com/video/BV1WTdnBvEca/"],
      [14, "图生高斯", "https://www.bilibili.com/video/BV1MidnByEXR/"],
      [15, "实景设计", null],
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
      [19, "工厂数字孪生管理平台", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAcuvfQZFN"],
      [20, "机器人自主感知导航", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAcljevfjG"],
      [21, "数字孪生工厂 · IoT 设备融合联动", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAc0DD1hNx"],
    ]
  },
  {
    slug: "dataset", name: "高质量数据集", summary: "结构化空间场景与语义数据展示", cases: [
      [22, "空间数据展示 01", null],
      [23, "空间数据展示 02", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAceARcoGu"],
      [24, "空间数据展示 03", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAcRlzxlxA"],
    ]
  },
  {
    slug: "embodied-ai", name: "具身智能", summary: "虚实场景映射与具身交互推演", cases: [
      [25, "具身智能展示 01", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAckozgKdC"],
      [26, "具身智能展示 02", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAc1UYaN1s"],
      [27, "具身智能展示 03", "https://www.bilibili.com/video/BV1nGdnBwEeq/"],
    ]
  },
  {
    slug: "film", name: "影视片场", summary: "实景空间、虚实融合与影视资产", cases: [
      [28, "时思剑鸣", "https://drive.weixin.qq.com/s?k=AJUA2wdHAAcBo0dDLI"],
      [29, "虚实融合制片", null],
      [30, "影视资产", null],
    ]
  },
];

const tabs = document.getElementById("category-tabs");
const categoryOptions = [{ slug: "all", name: "全部案例" }, ...categories];
const mobileCategoryCarousel = document.getElementById("mobile-category-carousel");
const mobilePrevLabel = document.getElementById("mobile-prev-label");
const mobileNextLabel = document.getElementById("mobile-next-label");
const mobileCategoryStep = document.getElementById("mobile-category-step");
const mobileCategoryName = document.getElementById("mobile-category-name");
const list = document.getElementById("case-list");
const currentCategory = document.getElementById("current-category");
const resultCount = document.getElementById("result-count");
const imageDialog = document.getElementById("image-dialog");
const dialogImage = document.getElementById("dialog-image");
const dialogTitle = document.getElementById("dialog-title");
let selected = "all";
let highlightedCase = null;

function imagePath(id) {
  return `assets/case-${String(id).padStart(2, "0")}.webp?v=20261021`;
}

const heroSlides = [1, 10, 4, 19, 25, 28].map(id => {
  const category = categories.find(group => group.cases.some(item => item[0] === id));
  return { category: category.name, slug: category.slug, item: category.cases.find(item => item[0] === id) };
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

heroDots.innerHTML = heroSlides.map(({ item }, index) => `<button class="hero-dot" type="button" data-hero-slide="${index}" aria-label="切换到${item[1]}案例" aria-pressed="${index === 0}"></button>`).join("");

function setHeroSlide(index, animate = true) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  const active = heroSlides[heroIndex];
  const upcoming = heroSlides[(heroIndex + 1) % heroSlides.length];
  heroCurrentLink.href = `?category=${active.slug}#group-${active.slug}`;
  heroCurrentLink.dataset.category = active.slug;
  heroCurrentLink.setAttribute("aria-label", `查看${active.category}行业`);
  heroCurrentLink.querySelector("img").src = imagePath(active.item[0]);
  heroCurrentLink.querySelector("img").alt = `${active.item[1]}案例画面`;
  heroNextImage.querySelector("img").src = imagePath(upcoming.item[0]);
  heroNextImage.href = `?category=${upcoming.slug}#group-${upcoming.slug}`;
  heroNextImage.dataset.category = upcoming.slug;
  heroNextImage.setAttribute("aria-label", `查看${upcoming.category}行业`);
  heroCount.textContent = `${String(heroIndex + 1).padStart(2, "0")} / ${String(heroSlides.length).padStart(2, "0")}`;
  heroCaseTitle.textContent = `${active.category} / ${active.item[1]}`;
  heroDots.querySelectorAll("button").forEach((dot, dotIndex) => dot.setAttribute("aria-pressed", String(dotIndex === heroIndex)));
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
  const url = new URL(window.location.href);
  url.hash = `group-${slug}`;
  history.replaceState(null, "", url);
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
  const [id, title, url] = item;
  const tag = url ? "a" : "article";
  const destination = url
    ? `href="${url}" target="_blank" rel="noopener noreferrer"`
    : `role="button" tabindex="0" data-view-case="${id}"`;
  const accessibleLabel = url ? `${title}：查看案例` : `${title}：查看案例大图`;
  return `<${tag} class="case-card${id === highlightedCase ? " is-target" : ""}" id="case-${id}" ${destination} aria-label="${accessibleLabel}">
    <div class="case-image"><img src="${imagePath(id)}" alt="${title}的折页配图" loading="lazy" decoding="async"><span class="image-zoom" aria-hidden="true">查看案例 ↗</span></div>
    <div class="case-body">
      <div class="case-kind">${category.name} · ${String(id).padStart(2, "0")}</div>
      <h4 class="case-title">${title}</h4>
    </div>
  </${tag}>`;
}

function sectionMarkup(category, index) {
  return `<section class="category-section" aria-labelledby="group-${category.slug}">
    <div class="group-heading"><div><h3 id="group-${category.slug}">${category.name}</h3><p>${category.summary}</p></div><span class="group-index">${String(index + 1).padStart(2, "0")} / 10</span></div>
    <div class="cards">${category.cases.map(item => cardMarkup(category, item)).join("")}</div>
  </section>`;
}

function renderTabs() {
  tabs.innerHTML = categoryOptions.map(option => `<button class="category-tab" type="button" role="tab" aria-controls="case-list" aria-selected="${selected === option.slug}" data-category="${option.slug}">${option.name}</button>`).join("");
  const activeTab = tabs.querySelector('[aria-selected="true"]');
  if (activeTab) tabs.scrollLeft = activeTab.offsetLeft - tabs.offsetLeft - (tabs.clientWidth - activeTab.clientWidth) / 2;
  const activeIndex = categoryOptions.findIndex(option => option.slug === selected);
  const previous = categoryOptions[(activeIndex - 1 + categoryOptions.length) % categoryOptions.length];
  const next = categoryOptions[(activeIndex + 1) % categoryOptions.length];
  mobilePrevLabel.textContent = previous.name;
  mobileNextLabel.textContent = next.name;
  mobileCategoryStep.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(categoryOptions.length).padStart(2, "0")}`;
  mobileCategoryName.textContent = categoryOptions[activeIndex].name;
  document.getElementById("mobile-category-prev").setAttribute("aria-label", `切换到${previous.name}`);
  document.getElementById("mobile-category-next").setAttribute("aria-label", `切换到${next.name}`);
}

function renderCases() {
  const filtered = selected === "all" ? categories : categories.filter(category => category.slug === selected);
  currentCategory.textContent = selected === "all" ? "全部案例" : filtered[0].name;
  resultCount.textContent = `${filtered.reduce((total, group) => total + group.cases.length, 0)} 个展示`;
  list.innerHTML = filtered.map(category => sectionMarkup(category, categories.indexOf(category))).join("");
}

function setSelection(slug, caseId = null, updateUrl = true) {
  if (slug !== "all" && !categories.some(category => category.slug === slug)) slug = "all";
  selected = slug;
  highlightedCase = caseId;
  renderTabs();
  renderCases();
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.delete("category");
    url.searchParams.delete("case");
    url.hash = "";
    if (slug !== "all") url.searchParams.set("category", slug);
    history.replaceState(null, "", url);
  }
  if (caseId) {
    requestAnimationFrame(() => document.getElementById(`case-${caseId}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  }
}

tabs.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  setSelection(button.dataset.category);
  document.getElementById("explore").scrollIntoView({ behavior: "smooth", block: "start" });
});

function cycleCategory(direction) {
  const activeIndex = categoryOptions.findIndex(option => option.slug === selected);
  const nextIndex = (activeIndex + direction + categoryOptions.length) % categoryOptions.length;
  setSelection(categoryOptions[nextIndex].slug);
  list.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.getElementById("mobile-category-prev").addEventListener("click", () => cycleCategory(-1));
document.getElementById("mobile-category-next").addEventListener("click", () => cycleCategory(1));
let categoryPointerStart = null;
let suppressCategoryClick = false;
let categoryClickTimer = null;
function resetCategoryDrag() {
  categoryPointerStart = null;
  mobileCategoryCarousel.classList.remove("is-swiping");
  mobileCategoryCarousel.style.removeProperty("--swipe-x");
}
mobileCategoryCarousel.addEventListener("pointerdown", event => {
  if (!event.isPrimary || event.button !== 0) return;
  categoryPointerStart = { id: event.pointerId, x: event.clientX, y: event.clientY, horizontal: false };
});
window.addEventListener("pointermove", event => {
  if (!categoryPointerStart || event.pointerId !== categoryPointerStart.id) return;
  const dx = event.clientX - categoryPointerStart.x;
  const dy = event.clientY - categoryPointerStart.y;
  if (!categoryPointerStart.horizontal && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy) * 1.15) {
    categoryPointerStart.horizontal = true;
    mobileCategoryCarousel.classList.add("is-swiping");
  }
  if (categoryPointerStart.horizontal) {
    mobileCategoryCarousel.style.setProperty("--swipe-x", `${Math.max(-64, Math.min(64, dx * .55))}px`);
  }
});
window.addEventListener("pointerup", event => {
  if (!categoryPointerStart || event.pointerId !== categoryPointerStart.id) return;
  const dx = event.clientX - categoryPointerStart.x;
  const dy = event.clientY - categoryPointerStart.y;
  const shouldSwitch = categoryPointerStart.horizontal && Math.abs(dx) >= 35 && Math.abs(dx) > Math.abs(dy) * 1.15;
  resetCategoryDrag();
  if (!shouldSwitch) return;
  suppressCategoryClick = true;
  window.clearTimeout(categoryClickTimer);
  cycleCategory(dx < 0 ? 1 : -1);
  categoryClickTimer = window.setTimeout(() => { suppressCategoryClick = false; }, 450);
});
window.addEventListener("pointercancel", event => {
  if (categoryPointerStart && event.pointerId === categoryPointerStart.id) resetCategoryDrag();
});
mobileCategoryCarousel.addEventListener("click", event => {
  if (!suppressCategoryClick) return;
  event.preventDefault();
  event.stopPropagation();
  suppressCategoryClick = false;
}, true);

list.addEventListener("click", event => {
  const card = event.target.closest("[data-view-case]");
  if (!card) return;
  showCaseImage(Number(card.dataset.viewCase));
});

list.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-view-case]");
  if (!card) return;
  event.preventDefault();
  showCaseImage(Number(card.dataset.viewCase));
});

function showCaseImage(id) {
  const category = categories.find(group => group.cases.some(item => item[0] === id));
  const item = category.cases.find(entry => entry[0] === id);
  dialogImage.src = imagePath(id);
  dialogImage.alt = `${item[1]}的折页配图`;
  dialogTitle.textContent = `${category.name} / ${item[1]}`;
  imageDialog.showModal();
}

document.getElementById("dialog-close").addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", event => { if (event.target === imageDialog) imageDialog.close(); });

const incoming = new URL(window.location.href).searchParams;
const targetId = Number(incoming.get("case"));
const targetGroup = categories.find(group => group.cases.some(item => item[0] === targetId));
if (targetGroup) setSelection(targetGroup.slug, targetId, false);
else setSelection(incoming.get("category") || "all", null, false);
if (window.location.hash.startsWith("#group-")) {
  requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.closest(".category-section")?.scrollIntoView({ block: "start" }));
}
