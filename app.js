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
const list = document.getElementById("case-list");
const currentCategory = document.getElementById("current-category");
const resultCount = document.getElementById("result-count");
const toast = document.getElementById("toast");
const shareCategoryButton = document.getElementById("share-category");
const imageDialog = document.getElementById("image-dialog");
const dialogImage = document.getElementById("dialog-image");
const dialogTitle = document.getElementById("dialog-title");
let selected = "all";
let highlightedCase = null;
let toastTimer;

function imagePath(id) {
  return `assets/case-${String(id).padStart(2, "0")}.webp?v=20261021`;
}

function actionLabel(url) {
  if (url.includes("drive.weixin.qq.com")) return "查看案例内容";
  if (url.includes("bilibili.com")) return "观看视频";
  return "查看 3D 演示";
}

function cardMarkup(category, item) {
  const [id, title, url] = item;
  const image = `<img src="${imagePath(id)}" alt="${title}的折页配图" loading="lazy" decoding="async">`;
  const imageAction = url
    ? `<a class="image-view" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${actionLabel(url)}：${title}">${image}<span class="image-zoom">${actionLabel(url)} <span aria-hidden="true">↗</span></span></a>`
    : `<button class="image-view" type="button" data-view-case="${id}" aria-label="放大查看${title}图片">${image}<span class="image-zoom">放大查看图片 <span aria-hidden="true">↗</span></span></button>`;
  const open = url
    ? `<a class="case-open" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${actionLabel(url)}：${title}"><span>${actionLabel(url)}</span><span class="action-arrow" aria-hidden="true">↗</span></a>`
    : `<button class="case-open case-open-image" type="button" data-view-case="${id}" aria-label="放大查看${title}图片"><span>查看高清图片</span><span class="action-arrow" aria-hidden="true">↗</span></button>`;
  return `<article class="case-card${id === highlightedCase ? " is-target" : ""}" id="case-${id}">
    <div class="case-image">${imageAction}</div>
    <div class="case-body">
      <div class="case-kind">${category.name} · ${String(id).padStart(2, "0")}</div>
      <h4 class="case-title">${title}</h4>
      <div class="case-actions">${open}<button class="case-share" type="button" data-share-case="${id}" aria-label="分享${title}的页面链接">分享此案例 ↗</button></div>
    </div>
  </article>`;
}

function sectionMarkup(category, index) {
  return `<section class="category-section" aria-labelledby="group-${category.slug}">
    <div class="group-heading"><div><h3 id="group-${category.slug}">${category.name}</h3><p>${category.summary}</p></div><span class="group-index">${String(index + 1).padStart(2, "0")} / 10</span></div>
    <div class="cards">${category.cases.map(item => cardMarkup(category, item)).join("")}</div>
  </section>`;
}

function renderTabs() {
  const options = [{ slug: "all", name: "全部案例" }, ...categories];
  tabs.innerHTML = options.map(option => `<button class="category-tab" type="button" role="tab" aria-controls="case-list" aria-selected="${selected === option.slug}" data-category="${option.slug}">${option.name}</button>`).join("");
  const activeTab = tabs.querySelector('[aria-selected="true"]');
  if (activeTab) tabs.scrollLeft = activeTab.offsetLeft - tabs.offsetLeft - (tabs.clientWidth - activeTab.clientWidth) / 2;
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
    if (slug !== "all") url.searchParams.set("category", slug);
    history.replaceState(null, "", url);
  }
  if (caseId) {
    requestAnimationFrame(() => document.getElementById(`case-${caseId}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

async function shareLink(url, title) {
  if (navigator.share) {
    try { await navigator.share({ title, url }); return; } catch (error) { if (error.name === "AbortError") return; }
  }
  try {
    await navigator.clipboard.writeText(url);
    showToast("链接已复制，可转发给同事");
  } catch {
    const input = document.createElement("input");
    input.value = url;
    document.body.appendChild(input);
    input.select();
    const copied = document.execCommand("copy");
    input.remove();
    showToast(copied ? "链接已复制，可转发给同事" : "请复制浏览器地址栏中的链接");
  }
}

tabs.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  setSelection(button.dataset.category);
  document.getElementById("explore").scrollIntoView({ behavior: "smooth", block: "start" });
});

list.addEventListener("click", event => {
  const imageButton = event.target.closest("[data-view-case]");
  if (imageButton) {
    const id = Number(imageButton.dataset.viewCase);
    const category = categories.find(group => group.cases.some(item => item[0] === id));
    const item = category.cases.find(entry => entry[0] === id);
    dialogImage.src = imagePath(id);
    dialogImage.alt = `${item[1]}的折页配图`;
    dialogTitle.textContent = `${category.name} / ${item[1]}`;
    imageDialog.showModal();
    return;
  }
  const button = event.target.closest("[data-share-case]");
  if (!button) return;
  const id = Number(button.dataset.shareCase);
  const category = categories.find(group => group.cases.some(item => item[0] === id));
  const item = category.cases.find(entry => entry[0] === id);
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("case", String(id));
  shareLink(url.toString(), `Aholo 案例｜${item[1]}`);
});

document.getElementById("dialog-close").addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", event => { if (event.target === imageDialog) imageDialog.close(); });

shareCategoryButton.addEventListener("click", () => {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  if (selected !== "all") url.searchParams.set("category", selected);
  shareLink(url.toString(), `Aholo 行业案例｜${currentCategory.textContent}`);
});

const incoming = new URL(window.location.href).searchParams;
const targetId = Number(incoming.get("case"));
const targetGroup = categories.find(group => group.cases.some(item => item[0] === targetId));
if (targetGroup) setSelection(targetGroup.slug, targetId, false);
else setSelection(incoming.get("category") || "all", null, false);
