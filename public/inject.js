(function () {
  if (document.getElementById("yateen-portfolio-root")) return;

  // 1. Inject Styles
  const style = document.createElement("style");
  style.id = "yateen-injected-css";
  style.innerHTML = `
    :root {
      --scissor-cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%230284c7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='6' cy='6' r='3'/%3E%3Cpath d='M8.12 8.12 12 12'/%3E%3Cpath d='M20 4 8.12 15.88'/%3E%3Ccircle cx='6' cy='18' r='3'/%3E%3Cpath d='M14.8 14.8 20 20'/%3E%3C/svg%3E");
    }
    body.portfolio-active > div:not(#yateen-portfolio-root) {
      filter: blur(8px) brightness(0.65) !important;
      pointer-events: none !important;
      user-select: none !important;
      transition: filter 0.4s ease-in-out;
    }
    body.portfolio-active, body.portfolio-active * {
      cursor: var(--scissor-cursor) 4 4, auto !important;
    }
    #yateen-portfolio-root {
      position: fixed; inset: 0; z-index: 2147483647;
      display: flex; align-items: center; justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .portfolio-inner-frame {
      position: relative; width: 90%; max-width: 820px; height: 500px;
      background: rgba(255, 255, 255, 0.98); border: 3px solid #334155;
      border-radius: 20px; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 30px; box-sizing: border-box;
    }
    .portfolio-heading {
      font-size: 38px; font-weight: 900; color: #0f172a; text-align: center; line-height: 1.1; margin-bottom: 20px;
    }
    .envelope-btn {
      position: absolute; width: 180px; height: 95px; background: #9f7979; color: #fff;
      border-radius: 14px; border: 2px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); display: flex; flex-direction: column;
      align-items: center; justify-content: center; text-align: center;
      transition: transform 0.2s ease, background 0.2s ease;
    }
    .envelope-btn:hover { transform: scale(1.05); background: #8c6767; }
    .pos-1 { left: -60px; top: 40px; }
    .pos-2 { left: -60px; bottom: 40px; }
    .pos-3 { right: -60px; top: 40px; }
    .pos-4 { right: -60px; bottom: 40px; }
    .close-btn {
      position: absolute; top: 15px; right: 20px; font-size: 26px;
      font-weight: bold; color: #64748b; background: none; border: none; cursor: pointer;
    }
  `;
  document.head.appendChild(style);
  document.body.classList.add("portfolio-active");

  // 2. Inject DOM Elements
  const root = document.createElement("div");
  root.id = "yateen-portfolio-root";
  root.innerHTML = `
    <div class="portfolio-inner-frame">
      <button class="close-btn" id="yateen-close-btn">&times;</button>
      <div class="portfolio-heading">
        Welcome to the yateen<br/>Portfolio
      </div>
      <div class="envelope-btn pos-1" onclick="window.open('https://github.com/yanshu01','_blank')">
        <div style="font-size: 20px; font-weight: 800;">Project 1</div>
        <div style="font-size: 11px; opacity: 0.9;">AI Talent Intelligence</div>
      </div>
      <div class="envelope-btn pos-2" onclick="window.open('https://github.com/yanshu01','_blank')">
        <div style="font-size: 20px; font-weight: 800;">Project 2</div>
        <div style="font-size: 11px; opacity: 0.9;">Walkie-Talkie & Live GPS</div>
      </div>
      <div class="envelope-btn pos-3" onclick="window.open('https://github.com/yanshu01','_blank')">
        <div style="font-size: 20px; font-weight: 800;">Project 3</div>
        <div style="font-size: 11px; opacity: 0.9;">Autonomous ReAct Agent</div>
      </div>
      <div class="envelope-btn pos-4" onclick="window.open('https://github.com/yanshu01','_blank')">
        <div style="font-size: 20px; font-weight: 800;">Project 4</div>
        <div style="font-size: 11px; opacity: 0.9;">Shopiy E-Commerce Engine</div>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  document.getElementById("yateen-close-btn").addEventListener("click", () => {
    document.body.classList.remove("portfolio-active");
    root.remove();
    style.remove();
  });
})();