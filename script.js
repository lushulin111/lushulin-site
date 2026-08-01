/* ============================================
   个人简历网站 - 交互脚本（单页长滚动版）
   ============================================ */

// 渲染：把 data.js 数据填入页面
const Render = {
  init() {
    this.renderHeroStats();
    this.renderCapabilities();
    this.renderAboutLong();
    this.renderJourney();
    this.renderIPShowcase();
    this.renderCourseShowcase();
  },
  renderHeroStats() {
    const container = document.getElementById('heroStats');
    container.innerHTML = SITE_CONFIG.heroStats.map((stat, i) => `
      <div class="stat-card" style="--stat-i:${i}">
        <div class="stat-number">
          <span class="counter" data-count="${stat.number}">0</span><span>${stat.suffix}</span>
        </div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  },
  renderCapabilities() {
    const container = document.getElementById('capabilitiesGrid');
    container.innerHTML = SITE_CONFIG.coreCapabilities.map((cap, i) => `
      <div class="capability-card reveal" style="--card-i:${i}">
        <div class="capability-icon">${cap.icon}</div>
        <div class="capability-title">${cap.title}</div>
        <div class="capability-desc">${cap.desc}</div>
      </div>
    `).join('');

    const note = document.getElementById('capabilityNote');
    const diff = SITE_CONFIG.capabilityDiff;
    if (note && diff) {
      note.innerHTML = `
        <span class="capability-note-label">${diff.label}</span>
        <p class="capability-note-text">${diff.text}</p>
      `;
    }
  },
  renderAboutLong() {
    const data = SITE_CONFIG.aboutLong;
    const renderBlock = block => {
      if (block.type === 'p') return `<p>${block.html}</p>`;
      if (block.type === 'h3') return `<h3>${block.html}</h3>`;
      if (block.type === 'ul') {
        return `<ul>${block.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
      }
      return '';
    };

    const homeSubtitle = document.getElementById('aboutLongSubtitleHome');
    if (homeSubtitle) homeSubtitle.textContent = data.subtitle;
    const homePhoto = document.getElementById('aboutLongPhotoHome');
    if (homePhoto) homePhoto.src = data.photo;
    const homeCard = document.getElementById('aboutLongCardHome');
    if (homeCard) homeCard.innerHTML = data.blocks.map(renderBlock).join('');
  },
  renderJourney() {
    const container = document.getElementById('journeyTimeline');
    container.innerHTML = SITE_CONFIG.experiences.map((exp, i) => `
      <div class="journey-item ${i % 2 === 0 ? 'journey-left' : 'journey-right'} reveal" style="--journey-i:${i}">
        <div class="journey-card">
          <div class="journey-period">${exp.period} · ${exp.location}</div>
          <h3 class="journey-role">${exp.role}</h3>
          <div class="journey-company">${exp.company}</div>
          <ul class="journey-desc">
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
        <div class="journey-node"><span>${exp.icon || '💼'}</span></div>
      </div>
    `).join('');
  },
  renderCourseShowcase() {
    const data = SITE_CONFIG.courseShowcase;
    const wrap = document.getElementById('courseParts');
    if (!data || !wrap) return;

    wrap.innerHTML = data.parts.map(part => {
      if (part.comingSoon) {
        return `
        <div class="course-part" data-part="${part.key}">
          <div class="course-part-head">
            <h3 class="course-part-title">${part.label}</h3>
            <span class="course-badge">即将上线</span>
          </div>
          <div class="course-coming">兴趣类课程模块正在打磨中，敬请期待。</div>
        </div>`;
      }

      // 兴趣类课程：封面图 + 打开课件 + 摄影课程逻辑图 + 悬浮翻书弹层（单页展示）
      if (part.images && part.images.length) {
        return `
        <div class="course-part course-part-active" data-part="${part.key}">
          <div class="course-part-head">
            <h3 class="course-part-title">${part.label}</h3>
            <span class="course-badge course-badge--live">已上线</span>
          </div>
          <div class="course-book-cover" data-open-book title="点击打开课件">
            <div class="book-cover-inner">
              <img loading="lazy" src="${part.cover}" alt="${part.label}封面">
              <span class="book-spine"></span>
            </div>
            <p class="book-open-label">打开课件</p>
          </div>
          <div class="course-logic reveal">
            <div class="section-header course-logic-head">
              <span class="section-tag">LOGIC MAP</span>
              <h3 class="section-subtitle">摄影课程设计逻辑图</h3>
              <p class="section-desc">从「课程定位」到「设计亮点」，一张图看清引流课的设计脉络（点击图片可放大查看细节）</p>
            </div>
            <div class="logic-img-wrap">
              <img loading="lazy" src="${part.logicImg}" alt="摄影课程设计逻辑图" class="logic-img zoomable" data-zoom-src="${part.logicImg}">
              <span class="logic-zoom-hint">🔍 点击放大</span>
            </div>
          </div>
          <div class="flipbook-overlay" aria-hidden="true">
            <div class="fb-backdrop" data-close-book></div>
            <div class="fb-modal">
              <button type="button" class="fb-close" data-close-book aria-label="关闭">×</button>
              <div class="fb-stage">
                <div class="fb-book" data-images='${JSON.stringify(part.images)}'>
                  <div class="fb-page fb-under"><img loading="lazy" src="${part.images[0]}" alt="课件 1"></div>
                  <div class="fb-page fb-top"><img loading="lazy" src="${part.images[0]}" alt="课件 1"></div>
                </div>
              </div>
              <div class="fb-controls">
                <button type="button" class="fb-btn fb-prev" data-fb-prev>‹ 上一页</button>
                <span class="fb-counter"><b data-fb-cur>1</b> / ${part.images.length}</span>
                <button type="button" class="fb-btn fb-next" data-fb-next>下一页 ›</button>
              </div>
              <p class="fb-hint">点击书页左侧翻上一页 · 右侧翻下一页 · 也可用 ← → 键</p>
            </div>
          </div>
        </div>`;
      }

      // 课程设计对比：表格 + 底层逻辑总结
      if (part.comparison) {
        const rows = part.comparison.map(r => `
          <tr>
            <th class="cmp-dim">${r.dim}</th>
            <td class="cmp-startup">${r.startup}</td>
            <td class="cmp-interest">${r.interest}</td>
          </tr>`).join('');
        return `
        <div class="course-part course-part-active" data-part="${part.key}">
          <div class="course-part-head">
            <h3 class="course-part-title">${part.label}</h3>
            <span class="course-badge course-badge--live">已上线</span>
          </div>
          <div class="course-compare reveal">
            <div class="cmp-table-wrap">
              <table class="cmp-table">
                <thead>
                  <tr>
                    <th class="cmp-dim-head">维度</th>
                    <th class="cmp-startup-head">创业类课程</th>
                    <th class="cmp-interest-head">兴趣类课程</th>
                  </tr>
                </thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
            <div class="cmp-summary">
              <span class="cmp-summary-tag">底层逻辑</span>
              <p>${part.summary}</p>
            </div>
          </div>
        </div>`;
      }

      // 全链路课程研发设计：三栏流程（公域引流 → 私域销转 → VIP系列小课）
      if (part.chain && part.chain.length) {
        const items = part.chain.map((c, i) => `
          <div class="chain-item">
            <div class="chain-head">
              <span class="chain-step">${i + 1}</span>
              <h4 class="chain-title">${c.title}</h4>
            </div>
            <div class="chain-img-wrap">
              <img loading="lazy" src="${c.img}" alt="${c.title}" class="chain-img zoomable" data-zoom-src="${c.img}" data-zoom-type="chain">
              <span class="logic-zoom-hint">🔍 点击放大</span>
              ${c.desc ? '<div class="chain-desc-source" hidden>' + formatChainDesc(c.desc) + '</div>' : ''}
            </div>
            <p class="chain-hint">点击可查看课程研发思路</p>
          </div>
          ${i < part.chain.length - 1 ? '<div class="chain-arrow" aria-hidden="true">→</div>' : ''}
        `).join('');
        return `
        <div class="course-part course-part-active" data-part="${part.key}">
          <div class="course-part-head">
            <h3 class="course-part-title">${part.label}</h3>
            <span class="course-badge course-badge--live">已上线</span>
          </div>
          <div class="chain-flow">
            ${items}
          </div>
        </div>`;
      }

      const textHTML = part.blocks.map((b, i) => {
        if (b.type === 'title') return `<div class="course-block course-title" style="--i:${i}">${b.text}</div>`;
        if (b.type === 'subtitle') return `<div class="course-block course-sub" style="--i:${i}"><span>${b.text}</span></div>`;
        if (b.type === 'line') return `<div class="course-block course-line" style="--i:${i}">${b.text}</div>`;
        if (b.type === 'list') return `<ul class="course-block course-list" style="--i:${i}">${b.items.map(it => `<li>${it}</li>`).join('')}</ul>`;
        if (b.type === 'p') return `<p class="course-block course-p" style="--i:${i}">${b.text}</p>`;
        return '';
      }).join('');

      return `
      <div class="course-part course-part-active" data-part="${part.key}">
        <div class="course-part-head">
          <h3 class="course-part-title">${part.label}</h3>
          <span class="course-badge course-badge--live">已上线</span>
        </div>
        <div class="course-split">
          <div class="course-video">
            <video controls preload="metadata" poster="${part.poster || ''}">
              <source src="${part.video}" type="video/mp4">
              你的浏览器不支持视频播放。
            </video>
            <p class="course-video-cap">${part.videoTitle || ''}</p>
          </div>
          <div class="course-text">${textHTML}</div>
        </div>
      </div>`;
    }).join('');

    // 文字「跳动出现」动画：进入视口时播放（只播一次）
    const textEls = wrap.querySelectorAll('.course-text');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.15 });
      textEls.forEach(el => obs.observe(el));
    } else {
      textEls.forEach(el => el.classList.add('in-view'));
    }
  },

  renderIPShowcase() {
    const data = SITE_CONFIG.ipShowcase;
    if (!data) return;
    // 数据对比图
    const compareImg = document.getElementById('ipCompareImg');
    if (compareImg && data.comparisonImage) compareImg.src = data.comparisonImage;
    const caption = document.getElementById('ipCompareCaption');
    if (caption && data.compareCaption) caption.textContent = data.compareCaption;
    // 视频/截图卡片
    const videos = document.getElementById('ipVideos');
    if (videos && data.videos) {
      videos.innerHTML = data.videos.map(v => {
        const isImage = /\.(png|jpe?g|gif|webp)$/i.test(v.file);
        const media = isImage
          ? `<img loading="lazy" src="${v.file}" alt="${v.title}" class="ip-media-img gallery-img">`
          : `<video controls preload="metadata"><source src="${v.file}" type="video/mp4">你的浏览器不支持视频播放。</video>`;
        return `
        <div class="ip-video-card reveal">
          <div class="ip-video${isImage ? ' ip-video--image' : ''}">
            ${media}
          </div>
          <div class="ip-video-meta">
            <h3 class="ip-video-title">${v.title}</h3>
            <p class="ip-video-desc">${v.desc}</p>
            <a href="${v.douyinLink}" target="_blank" class="douyin-btn">🎵 在抖音中查看</a>
          </div>
        </div>
      `;
      }).join('');
    }
  }
};

// 动画：滚动入场 + 数字递增
function triggerRevealAnimations() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.dataset.reveal = '1');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  // 保险：短延迟后强制显示已在视口内的元素
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom > -200 && rect.top < vh + 200) {
        el.classList.add('visible');
      }
    });
  }, 250);
}

function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count, 10);
    const suffix = counter.dataset.suffix || '';
    const duration = 1500;
    const startTime = performance.now();
    counter.textContent = '0' + suffix;
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(target * eased);
      counter.textContent = val.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(animate);
      else counter.textContent = target.toLocaleString() + suffix;
    };
    requestAnimationFrame(animate);
  });
}

// 将全链路课程研发思路数据格式化为面板 HTML
function formatChainDesc(desc) {
  if (!desc) return '';
  const title = desc.title ? '<h3 class="zoom-panel-title">' + desc.title + '</h3>' : '';
  const points = (desc.points || []).map(([label, content]) =>
    '<div class="zoom-panel-item"><span class="zoom-panel-label">' + label + '</span>' +
    '<span class="zoom-panel-text">' + content + '</span></div>'
  ).join('');
  return title + '<div class="zoom-panel-list">' + points + '</div>';
}

// 缩放浮层：点击指定图片后浮层显示，支持 100%-200% 缩放、滚轮、拖拽平移、方向键、再次点击退出
function initZoomModal() {
  const modal = document.getElementById('zoomModal');
  const stage = document.getElementById('zoomStage');
  const img = document.getElementById('zoomImg');
  const panel = document.getElementById('zoomPanel');
  const closeBtn = document.getElementById('zoomClose');
  const zoomInBtn = document.getElementById('zoomIn');
  const zoomOutBtn = document.getElementById('zoomOut');
  const resetBtn = document.getElementById('zoomReset');
  const levelText = document.getElementById('zoomLevel');
  const nextBtn = document.getElementById('zoomNext');
  if (!modal || !stage || !img) return;

  // 面板区域：阻止滚轮/点击冒泡到 stage，避免滚动文本时放大图片
  if (panel) {
    panel.addEventListener('wheel', (e) => e.stopPropagation(), { passive: false });
    panel.addEventListener('click', (e) => e.stopPropagation());
  }

  let scale = 1;
  let tx = 0, ty = 0;
  let isDragging = false;
  let moved = false;
  let startX = 0, startY = 0;
  let isChain = false;
  // 链路图模式：维护图片列表和当前索引，支持"下一张"切换
  let chainImages = [];
  let chainIndex = -1;
  const MIN = 1, MAX_NORMAL = 2, MAX_CHAIN = 2, STEP = 0.1;

  const getMax = () => isChain ? MAX_CHAIN : MAX_NORMAL;

  const apply = () => {
    const max = getMax();
    scale = Math.max(MIN, Math.min(max, parseFloat(scale.toFixed(2))));
    img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    if (levelText) levelText.textContent = Math.round(scale * 100) + '%';
    stage.style.cursor = scale > 1 ? 'grab' : 'default';
  };

  const open = (src, chainMode, descHtml) => {
    isChain = !!chainMode;
    img.src = src;
    scale = 1;
    tx = 0;
    ty = 0;
    // 切换链路图模式（左图右文）
    modal.classList.toggle('has-chain', isChain);
    if (panel) {
      panel.hidden = !isChain;
      if (isChain) panel.innerHTML = descHtml || '';
    }
    // 链路图模式：收集所有链路图、定位当前索引、显示/隐藏下一张按钮
    if (isChain) {
      chainImages = Array.from(document.querySelectorAll('.zoomable[data-zoom-type="chain"]')).map(el => ({
        src: el.dataset.zoomSrc || el.src,
        desc: (() => {
          const wrap = el.closest('.chain-img-wrap');
          const srcEl = wrap && wrap.querySelector('.chain-desc-source');
          return srcEl ? srcEl.innerHTML : '';
        })()
      }));
      chainIndex = chainImages.findIndex(c => c.src === src);
      if (chainIndex === -1) chainIndex = 0;
      if (nextBtn) {
        nextBtn.hidden = chainImages.length <= 1;
        nextBtn.textContent = `下一张 (${chainIndex + 1}/${chainImages.length}) →`;
      }
    } else {
      chainImages = [];
      chainIndex = -1;
      if (nextBtn) nextBtn.hidden = true;
    }
    // 更新缩放提示
    const tip = document.getElementById('zoomTip');
    if (tip) tip.textContent = isChain
      ? '滚轮 / 按钮可放大至 200% · 拖拽或方向键移动 · 点击图片退出放大'
      : '滚轮 / 按钮可放大至 200% · 拖拽或方向键上下左右移动 · 点击图片退出放大';
    apply();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  };

  // 下一张：切换到链路图的下一张图片+文本
  const goNext = () => {
    if (!chainImages.length || chainIndex < 0) return;
    chainIndex = (chainIndex + 1) % chainImages.length;
    const item = chainImages[chainIndex];
    img.src = item.src;
    scale = 1; tx = 0; ty = 0;
    if (panel) panel.innerHTML = item.desc || '';
    if (nextBtn) nextBtn.textContent = `下一张 (${chainIndex + 1}/${chainImages.length}) →`;
    apply();
  };

  const close = () => {
    modal.classList.remove('active', 'has-chain');
    modal.setAttribute('aria-hidden', 'true');
    if (panel) panel.hidden = true;
    isChain = false;
    scale = 1;
    tx = 0;
    ty = 0;
    apply();
  };

  document.querySelectorAll('.zoomable').forEach(el => {
    el.addEventListener('click', () => {
      const src = el.dataset.zoomSrc || el.src;
      const chain = el.dataset.zoomType === 'chain';
      let descHtml = '';
      if (chain) {
        const wrap = el.closest('.chain-img-wrap');
        const srcEl = wrap && wrap.querySelector('.chain-desc-source');
        if (srcEl) descHtml = srcEl.innerHTML;
      }
      if (src) open(src, chain, descHtml);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal || e.target === stage) close(); });
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') { close(); return; }
    // 链路图模式：→ 键切下一张
    if (isChain && e.key === 'ArrowRight' && chainImages.length > 1) { goNext(); e.preventDefault(); return; }
    if (scale > 1) {
      const step = 40;
      if (e.key === 'ArrowUp') { ty += step; apply(); e.preventDefault(); }
      else if (e.key === 'ArrowDown') { ty -= step; apply(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { tx += step; apply(); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { tx -= step; apply(); e.preventDefault(); }
    }
  });

  if (zoomInBtn) zoomInBtn.addEventListener('click', (e) => { e.stopPropagation(); scale += STEP; apply(); });
  if (zoomOutBtn) zoomOutBtn.addEventListener('click', (e) => { e.stopPropagation(); scale -= STEP; apply(); });
  if (resetBtn) resetBtn.addEventListener('click', (e) => { e.stopPropagation(); scale = 1; tx = 0; ty = 0; apply(); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goNext(); });

  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    scale += (e.deltaY > 0 ? -STEP : STEP);
    apply();
  }, { passive: false });

  stage.addEventListener('mousedown', (e) => {
    moved = false;
    if (scale <= 1) return;
    isDragging = true;
    startX = e.clientX - tx;
    startY = e.clientY - ty;
    stage.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    tx = e.clientX - startX;
    ty = e.clientY - startY;
    if (Math.abs(tx) > 4 || Math.abs(ty) > 4) moved = true;
    apply();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    stage.style.cursor = scale > 1 ? 'grab' : 'default';
  });

  // 再次点击图片：放大状态下退出放大（回到 100%），100% 状态下关闭浮层
  img.addEventListener('click', () => {
    if (moved) return;
    if (scale > 1) { scale = 1; tx = 0; ty = 0; apply(); }
    else { close(); }
  });
}

// 灯箱：点击生活照放大
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  if (!lightbox || !lightboxImg || !closeBtn) return;

  document.querySelectorAll('.about-long-photo img, .life-photo img, .ip-compare-img, .gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  const close = () => lightbox.classList.remove('active');
  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

// 回到顶部
function initBackToTop() {
  const link = document.getElementById('backToTop');
  if (!link) return;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 左侧悬浮导航：点击平滑滚动 + 滚动高亮当前板块
function initSideNav() {
  const items = document.querySelectorAll('.side-nav-item');
  if (!items.length) return;

  // 点击跳转
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(item.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // 滚动时高亮当前板块（用视口中部一条窄带判定）
  const targets = Array.from(items)
    .map(i => document.getElementById(i.dataset.target))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        items.forEach(i => i.classList.toggle('active', i.dataset.target === entry.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  targets.forEach(t => observer.observe(t));
}

// 搜索跳转：关键词 → 对应板块，并支持板块内高亮 + 历史记录
function initSearch() {
  // 板块索引：label 为板块名，keys 为可命中关键词（含同义/口语化说法）
  const INDEX = [
    { id: 'homeHero',        label: '首页',       keys: ['首页','主页','开头','顶部','介绍','简介','首屏','陆姝霖','知识产品架构师','转化链路','五年','知识付费','内容转化'] },
    { id: 'homeAbout',       label: '关于我',     keys: ['关于我','关于','个人','简介','我是谁','背景','个人信息','生活照','教育经历','工作背景','线上摄影','售前讲师','课程研发','内容表达','独立设计','中老年','信任','说服','转化率'] },
    { id: 'homeCapabilities',label: '我的核心能力', keys: ['核心能力','能力','技能','擅长','我能做什么','实力','本领','课程研发','课件制作','售前转化','内容创作','抖音','IP打造','用户教育','知识变现','三差模型','用户理解','持续迭代','商业闭环','选题','文案','口播','直播','切片','引流','销转','训练营','VIP','小课','摄影入门','约拍','全链路','创业课','摄影课','认知冲突','付款','学会','不同'] },
    { id: 'homeCourse',      label: '课程研发设计展示', keys: ['课程设计','课程研发','课程','课件','教学','课程结构','公开课','讲课','培训','内容结构','知识产品','TK公开课','三差模型','直播切片','创业类','兴趣类','课程对比','公域引流','私域销转','VIP小课','口播视频录制','摄影公开课','摄影入门训练营','约拍小灶','全链路课程研发','打开课件','翻书','逻辑图','课程逻辑','研发思路'] },
    { id: 'homeIpShowcase',  label: 'IP作品展示',  keys: ['ip作品','ip','作品','抖音','短视频','数据','对比','案例','成绩','爆款','原创','口播','长视频','播放量','点赞','收藏','50W','7000','500','精准流量','矩阵账号','收藏点赞比','90%','渔子教育','独立策划','剪辑','分发','运营团队','摄影入门教学','数据最高'] },
    { id: 'homeJourney',     label: '我的工作旅程', keys: ['工作旅程','旅程','经历','履历','简历','职业发展','时间线','故事','成长','工作','峰行跨境','长沙','跨行业','快速学习','矩阵账号','前司','渔子教育'] },
    { id: 'homeContact',     label: '联系方式',   keys: ['联系','联系方式','微信','邮箱','加我','合作','联系我','沟通','商务','扫码','添加'] },
  ];

  // 评分匹配：标题/关键词包含查询、或查询包含关键词都算命中，命中标题加权
  function search(q) {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    const hits = [];
    INDEX.forEach(item => {
      let score = 0;
      const label = item.label.toLowerCase();
      if (label.includes(query)) score = 100;
      else if (query.includes(label)) score = 90;
      item.keys.forEach(k => {
        const key = k.toLowerCase();
        if (key === query) score = Math.max(score, 80);
        else if (key.includes(query)) score = Math.max(score, 60);
        else if (query.includes(key)) score = Math.max(score, 40);
      });
      if (score > 0) hits.push({ ...item, score });
    });
    return hits.sort((a, b) => b.score - a.score);
  }

  function highlight(text, q) {
    const query = q.trim();
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return text.slice(0, idx) + '<mark>' + text.slice(idx, idx + query.length) + '</mark>' + text.slice(idx + query.length);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // 历史记录（localStorage 持久化）
  const HIST_KEY = 'lushulin_search_history';
  function getHistory() {
    try { return JSON.parse(localStorage.getItem(HIST_KEY)) || []; } catch (e) { return []; }
  }
  function saveHistory(word) {
    const w = word.trim();
    if (!w) return;
    let hist = getHistory().filter(x => x !== w);
    hist.unshift(w);
    hist = hist.slice(0, 8);
    try { localStorage.setItem(HIST_KEY, JSON.stringify(hist)); } catch (e) {}
  }

  // 板块内关键词高亮：跳转到板块后，把命中文字用 <mark class="search-hit"> 标出
  function clearHighlights(section) {
    section.querySelectorAll('mark.search-hit').forEach(m => {
      const parent = m.parentNode;
      if (!parent) return;
      parent.replaceChild(document.createTextNode(m.textContent), m);
      parent.normalize();
    });
  }
  function highlightInSection(section, query) {
    const q = query.trim();
    if (!q) return;
    clearHighlights(section);
    const lower = q.toLowerCase();
    const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (p.closest('script, style, input, textarea, .search-suggestions, .mobile-search-bar, .side-nav')) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.toLowerCase().indexOf(lower) === -1 ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    const targets = [];
    let n;
    while ((n = walker.nextNode())) targets.push(n);
    if (!targets.length) return;
    targets.slice(0, 30).forEach(textNode => {
      const text = textNode.nodeValue;
      const idx = text.toLowerCase().indexOf(lower);
      if (idx === -1) return;
      const frag = document.createDocumentFragment();
      if (idx > 0) frag.appendChild(document.createTextNode(text.slice(0, idx)));
      const mark = document.createElement('mark');
      mark.className = 'search-hit';
      mark.textContent = text.slice(idx, idx + q.length);
      frag.appendChild(mark);
      if (idx + q.length < text.length) frag.appendChild(document.createTextNode(text.slice(idx + q.length)));
      textNode.parentNode.replaceChild(frag, textNode);
    });
    setTimeout(() => clearHighlights(section), 3000);
  }

  // 工厂：为一组 input + 下拉容器创建搜索实例（桌面端 + 移动端共用）
  function createSearch(input, list, containerSel) {
    if (!input || !list) return;

    let activeIndex = -1;

    function openList() {
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    }
    function close() {
      list.hidden = true;
      input.setAttribute('aria-expanded', 'false');
    }

    function render(q) {
      const val = q.trim();
      list.innerHTML = '';
      activeIndex = -1;
      if (!val) { renderHistory(); return; }

      const hits = search(q);
      if (!hits.length) {
        const li = document.createElement('li');
        li.className = 'search-empty';
        li.textContent = '没有找到相关板块，换个词试试～';
        list.appendChild(li);
        openList();
        return;
      }

      hits.forEach((item) => {
        const li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.dataset.id = item.id;
        li.innerHTML = '<span class="s-label">' + highlight(item.label, q) + '</span><span class="s-key">' + escapeHtml(item.keys[0]) + '</span>';
        li.addEventListener('click', () => jump(item.id, q));
        list.appendChild(li);
      });
      openList();
    }

    function renderHistory() {
      const hist = getHistory();
      if (!hist.length) { close(); return; }
      const label = document.createElement('li');
      label.className = 's-hist-label';
      label.textContent = '最近搜索';
      list.appendChild(label);
      hist.forEach(word => {
        const li = document.createElement('li');
        li.className = 's-hist-item';
        li.setAttribute('role', 'option');
        li.innerHTML = '<span class="s-label">' + escapeHtml(word) + '</span>';
        li.addEventListener('click', () => { input.value = word; render(word); input.focus(); });
        list.appendChild(li);
      });
      openList();
    }

    function jump(id, q) {
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (q && q.trim()) {
        highlightInSection(target, q);
        saveHistory(q.trim());
      }
      input.value = '';
      close();
      input.blur();
    }

    function setActive(i) {
      const items = Array.from(list.querySelectorAll('li[data-id]'));
      if (!items.length) return;
      activeIndex = (i + items.length) % items.length;
      items.forEach((el, idx) => el.classList.toggle('active', idx === activeIndex));
    }

    input.addEventListener('input', () => render(input.value));
    input.addEventListener('focus', () => { if (input.value.trim()) render(input.value); else renderHistory(); });
    input.addEventListener('keydown', (e) => {
      const items = Array.from(list.querySelectorAll('li[data-id]'));
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(activeIndex + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(activeIndex - 1); }
      else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0 && items[activeIndex]) { jump(items[activeIndex].dataset.id, input.value); return; }
        const hits = search(input.value);
        if (hits.length) { jump(hits[0].id, input.value); return; }
        // 历史态（空输入）回车：直接跳第一个历史词的板块
        const hist = getHistory();
        if (input.value.trim() === '' && hist.length) {
          const h = search(hist[0]);
          if (h.length) jump(h[0].id, hist[0]);
        }
      } else if (e.key === 'Escape') { close(); }
    });

    // 清空按钮（移动端）
    const clearBtn = input.parentElement && input.parentElement.querySelector('.msb-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => { input.value = ''; render(''); input.focus(); });
    }

    // 点击外部关闭
    document.addEventListener('click', (e) => {
      if (!e.target.closest(containerSel)) close();
    });
  }

  createSearch(document.getElementById('siteSearch'), document.getElementById('searchSuggestions'), '.hero-search');
  createSearch(document.getElementById('mobileSiteSearch'), document.getElementById('mobileSearchSuggestions'), '.mobile-search-bar');
}

// 悬浮翻书：封面打开弹层 + 单页翻看（翻页时当前页向右翻走，下一页居中显示）
function initFlipbook() {
  document.querySelectorAll('.flipbook-overlay').forEach(overlay => {
    const book = overlay.querySelector('.fb-book');
    const top = overlay.querySelector('.fb-top');
    const under = overlay.querySelector('.fb-under');
    const images = book && book.dataset.images ? JSON.parse(book.dataset.images) : [];
    const N = images.length;
    if (!N || !top || !under) return;

    const counter = overlay.querySelector('[data-fb-cur]');
    const prevBtn = overlay.querySelector('[data-fb-prev]');
    const nextBtn = overlay.querySelector('[data-fb-next]');
    const topImg = top.querySelector('img');
    const underImg = under.querySelector('img');
    let current = 0;
    let isFlipping = false;

    // 预加载所有课件图片，翻页时从缓存读取，避免 5 秒白屏
    const preloaded = images.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });
    });

    function awaitImage(src, timeout = 3000) {
      const idx = images.indexOf(src);
      if (idx < 0) return Promise.resolve();
      return Promise.race([
        preloaded[idx],
        new Promise(resolve => setTimeout(resolve, timeout))
      ]);
    }

    function updateControls() {
      if (counter) counter.textContent = current + 1;
      if (prevBtn) prevBtn.disabled = current === 0 || isFlipping;
      if (nextBtn) nextBtn.disabled = current === N - 1 || isFlipping;
    }

    async function flipTo(dest) {
      if (isFlipping || dest < 0 || dest >= N || dest === current) return;
      isFlipping = true;
      updateControls();

      // 等待目标图片预加载完成再开始动画，避免翻页空白或长时间等待
      await awaitImage(images[dest]);
      // 底层先换成目标页（已确保加载完成）
      if (underImg) underImg.src = images[dest];

      // 顶层执行翻页动画（向右翻走），动画结束后再把顶层也切到目标页
      top.classList.add('flipping');
      const onEnd = () => {
        if (topImg) topImg.src = images[dest];
        top.classList.remove('flipping');
        top.removeEventListener('animationend', onEnd);
        current = dest;
        isFlipping = false;
        updateControls();
      };
      top.addEventListener('animationend', onEnd);
    }

    if (nextBtn) nextBtn.addEventListener('click', () => flipTo(current + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => flipTo(current - 1));

    // 点击书页：左 40% 上一页，右侧下一页
    if (book) {
      book.addEventListener('click', (e) => {
        const rect = book.getBoundingClientRect();
        const x = e.clientX - rect.left;
        if (x < rect.width * 0.4) flipTo(current - 1);
        else flipTo(current + 1);
      });
    }

    // 关闭弹层 → 放回原始父节点
    overlay.querySelectorAll('[data-close-book]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        // 还原到原始父节点（课程卡片内）
        if (overlay._originalParent) {
          overlay._originalParent.appendChild(overlay);
        }
        // 重置到第一页
        current = 0;
        if (topImg) topImg.src = images[0];
        if (underImg) underImg.src = images[0];
        updateControls();
      });
    });

    updateControls();
  });

  // 打开：封面点击 → 将弹层提升到 <body> 级别，避免被父容器裁切
  document.querySelectorAll('[data-open-book]').forEach(cover => {
    cover.addEventListener('click', () => {
      const part = cover.closest('.course-part');
      const overlay = part && part.querySelector('.flipbook-overlay');
      if (!overlay) return;
      // 记录原始父节点，以便关闭时还原
      if (!overlay._originalParent) overlay._originalParent = part;
      document.body.appendChild(overlay);
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  // 键盘：方向键翻页，Esc 关闭
  document.addEventListener('keydown', (e) => {
    const open = document.querySelector('.flipbook-overlay.open');
    if (!open) return;
    if (e.key === 'Escape') {
      open.classList.remove('open');
      open.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      // 还原到原始父节点
      if (open._originalParent) open._originalParent.appendChild(open);
    } else if (e.key === 'ArrowRight') {
      const btn = open.querySelector('[data-fb-next]');
      if (btn) btn.click();
    } else if (e.key === 'ArrowLeft') {
      const btn = open.querySelector('[data-fb-prev]');
      if (btn) btn.click();
    }
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  Render.init();
  initZoomModal();
  triggerRevealAnimations();
  animateCounters();
  initLightbox();
  initBackToTop();
  initSideNav();
  initSearch();
  initFlipbook();
});
