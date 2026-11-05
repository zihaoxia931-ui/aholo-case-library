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
    ? `href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${title}：查看案例"`
    : "";
  const action = url ? '<span class="image-zoom" aria-hidden="true">查看案例 ↗</span>' : "";
  return `<${tag} class="case-card${id === highlightedCase ? " is-target" : ""}" id="case-${id}" ${destination}>
    <div class="case-image"><img src="${imagePath(id)}" alt="${title}的折页配图" loading="lazy" decoding="async">${action}</div>
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
  const copy = position => categoryOptions.map(option => position === "main"
    ? `<button class="category-tab" type="button" role="tab" aria-controls="case-list" aria-selected="${selected === option.slug}" data-loop="main" data-category="${option.slug}">${option.name}</button>`
    : `<button class="category-tab" type="button" tabindex="-1" aria-hidden="true" data-loop="${position}" data-active="${selected === option.slug}" data-category="${option.slug}">${option.name}</button>`).join("");
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
  document.querySelector(".result-bar").scrollIntoView({ behavior: "smooth", block: "start" });
});

const incoming = new URL(window.location.href).searchParams;
const targetId = Number(incoming.get("case"));
const targetGroup = categories.find(group => group.cases.some(item => item[0] === targetId));
if (targetGroup) setSelection(targetGroup.slug, targetId, false);
else setSelection(incoming.get("category") || "all", null, false);
if (window.location.hash.startsWith("#group-")) {
  requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.closest(".category-section")?.scrollIntoView({ block: "start" }));
}
