// HSK 1〜5級 学習アプリ紹介ポータルメニュー (script.js)

const HSK_APPS = [
  {
    id: 'hsk1',
    levelNum: '1',
    levelLabel: 'HSK 1級',
    title: 'HSK 1級 単語＆問題集アプリ',
    subtitle: '中国語デビュー！基礎の150語を楽しくマスター',
    vocabCount: '必修 150語',
    url: 'https://tamagenai.github.io/HSK1Level/',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    accentColor: '#2563eb',
    description:
      '中国語学習の第一歩！日常のあいさつ、数字、家族、基本動詞など最も重要な150語を収録。ピンインとネイティブ音声付きで、ゼロからでも耳と目で楽しく覚えられます。',
    features: [
      { text: '🔊 ピンイン＆中国語音声', highlight: false },
      { text: '🃏 暗記フラッシュカード', highlight: false },
      { text: '📝 4択確認クイズ', highlight: false },
      { text: '🌱 初学者・入門向け', highlight: true }
    ]
  },
  {
    id: 'hsk2',
    levelNum: '2',
    levelLabel: 'HSK 2級',
    title: 'HSK 2級 単語＆問題集アプリ',
    subtitle: '日常会話の幅が広がる！基礎固めの300語',
    vocabCount: '必修 300語',
    url: 'https://tamagenai.github.io/HSK2Level/',
    gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    accentColor: '#059669',
    description:
      '簡単な日常のやり取りや買い物、趣味、時間表現がスムーズにできるようになる300語レベル。比較表現や補語の基礎を含む実践的な例文・模擬クイズで定着を図ります。',
    features: [
      { text: '🔊 全単語・例文音声つき', highlight: false },
      { text: '📚 品詞・テーマ別学習', highlight: false },
      { text: '🎯 弱点復習モード', highlight: false },
      { text: '🌿 基礎会話マスター', highlight: true }
    ]
  },
  {
    id: 'hsk3',
    levelNum: '3',
    levelLabel: 'HSK 3級',
    title: 'HSK 3級 単語＆問題集アプリ',
    subtitle: '旅行・生活・仕事の基本コミュニケーション600語',
    vocabCount: '必修 600語',
    url: 'https://tamagenai.github.io/HSK3Level/',
    gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
    accentColor: '#d97706',
    description:
      '中国語検定・HSKの中でも人気の高い中級への登竜門！「把」構文や「被」構文、複文接続詞など、表現力を一気に引き上げる重要600語と文法・読解問題を網羅しています。',
    features: [
      { text: '🔊 ネイティブ発音再生', highlight: false },
      { text: '🧩 文法・語順整序対策', highlight: false },
      { text: '📊 学習進捗グラフ', highlight: false },
      { text: '⭐ 初級卒業・中級準備', highlight: true }
    ]
  },
  {
    id: 'hsk4',
    levelNum: '4',
    levelLabel: 'HSK 4級',
    title: 'HSK 4級 単語＆問題集アプリ',
    subtitle: '幅広い話題を議論できる中級1,200語＋満点ファンファーレ',
    vocabCount: '必修 1,200語',
    url: 'https://tamagenai.github.io/HSK4Level/',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    accentColor: '#7c3aed',
    description:
      '中国への留学やビジネス活用の目安となる重要グレード！1,200語の重要語彙・類義語使い分けに加え、テストで100点満点を達成すると豪華な祝勝ファンファーレ＆紙吹雪が鳴り響きます！',
    features: [
      { text: '🎺 100点満点祝勝ファンファーレ搭載', highlight: true },
      { text: '🔊 音声＆ピンイン完備', highlight: false },
      { text: '📝 読解・語順並べ替え演習', highlight: false },
      { text: '💎 中級実力完成', highlight: false }
    ]
  },
  {
    id: 'hsk5',
    levelNum: '5',
    levelLabel: 'HSK 5級',
    title: 'HSK 5級 単語＆問題集アプリ',
    subtitle: '新聞・映画・スピーチを理解する上級2,500語＋満点ファンファーレ',
    vocabCount: '必修 2,500語',
    url: 'https://tamagenai.github.io/HSK5Level/',
    gradient: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
    accentColor: '#e11d48',
    description:
      '中国語の新聞・雑誌を読んだり、映画やテレビ番組を鑑賞できる上級レベル！四字成語・書面語・抽象語彙を徹底攻略。100点満点達成時のド派手なファンファーレ演出でモチベーション最高潮！',
    features: [
      { text: '🎺 100点満点祝勝ファンファーレ搭載', highlight: true },
      { text: '🐉 四字成語・上級書面語', highlight: false },
      { text: '🏆 本格模擬テスト', highlight: false },
      { text: '👑 上級エキスパート', highlight: false }
    ]
  },
  {
    id: 'hskall',
    levelNum: 'ALL',
    levelLabel: 'HSK 1〜5級 統合版',
    title: 'HSK 1級〜5級 オールインワン総合対策アプリ',
    subtitle: '5つのレベルを1つの画面で自在に切り替えられる統合版！',
    vocabCount: '全レベル統合',
    url: 'https://tamagenai.github.io/HSKAllLevel/',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    accentColor: '#0f172a',
    description:
      '1級から5級までの全カリキュラムを1つのアプリに凝縮！タブ切り替えで前後の級の復習・予習がシームレスに行えるほか、総合進捗管理と満点ファンファーレも搭載しています。',
    features: [
      { text: '🌟 1〜5級シームレス切替', highlight: true },
      { text: '🎺 全級で満点ファンファーレ対応', highlight: true },
      { text: '📈 総合スコア管理', highlight: false }
    ]
  }
];

// 3種類の可愛いパンダアイコン設定（iPad用180x180アイコン＆専用manifest連動）
const PANDA_ICONS = {
  cheer: {
    id: 'cheer',
    name: '① 応援パンダ',
    src: './icons/panda-cheer.png',
    icon180: './icons/panda-cheer-180.png',
    manifest: './manifest.json',
    defaultQuote: '「加油！今日も好きな級のカードをタップして中国語を楽しもう🐼✨」'
  },
  scholar: {
    id: 'scholar',
    name: '② パンダ博士',
    src: './icons/panda-scholar.png',
    icon180: './icons/panda-scholar-180.png',
    manifest: './manifest-scholar.json',
    defaultQuote: '「温故知新！1級〜5級までコツコツ積み重ねれば必ず合格できるよ👓📖」'
  },
  crown: {
    id: 'crown',
    name: '③ 王冠パンダ',
    src: './icons/panda-crown.png',
    icon180: './icons/panda-crown-180.png',
    manifest: './manifest-crown.json',
    defaultQuote: '「目指せ100点満点！満点ファンファーレを鳴らして次の級へ進もう👑🏆」'
  }
};

// パンダをタップしたときの中国語応援フレーズ
const CHEER_PHRASES = [
  {
    zh: '加油！你一定能行！',
    py: 'Jiāyóu! Nǐ yídìng néng xíng!',
    ja: '頑張って！あなたなら絶対できるよ！'
  },
  {
    zh: '太棒了！今天也要开心学中文！',
    py: 'Tài bàng le! Jīntiān yě yào kāixīn xué Zhōngwén!',
    ja: '最高だね！今日も楽しく中国語を学ぼう！'
  },
  {
    zh: '一步一个脚印，HSK必胜！',
    py: 'Yí bù yí gè jiǎoyìn, HSK bìshèng!',
    ja: '一歩一歩着実に、HSK絶対合格！'
  },
  {
    zh: '坚持就是胜利！满分在向你招手！',
    py: 'Jiānchí jiù shì shènglì! Mǎnfēn zài xiàng nǐ zhāoshǒu!',
    ja: '継続は力なり！100点満点があなたを待っているよ！'
  },
  {
    zh: '恭喜进步！向更高的一级出发吧！',
    py: 'Gōngxǐ jìnbù! Xiàng gèng gāo de yì jí chūfā ba!',
    ja: 'レベルアップおめでとう！さらに上の級へ出発しよう！'
  }
];

const STORAGE_KEY_ICON = 'hsk_menu_selected_panda_icon';
const STORAGE_KEY_STAMPS = 'hsk_menu_today_stamps';

let phraseIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initIconSelector();
  renderAppCards();
  initMascotInteraction();
  initFanfareButton();
  initPwaInstall();
});

// 今日の日付キー (YYYY-MM-DD)
function getTodayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function getTodayStamps() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STAMPS);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const today = getTodayKey();
    return parsed[today] || {};
  } catch (e) {
    return {};
  }
}

function toggleTodayStamp(appId) {
  try {
    const today = getTodayKey();
    const raw = localStorage.getItem(STORAGE_KEY_STAMPS);
    const allData = raw ? JSON.parse(raw) : {};
    if (!allData[today]) allData[today] = {};
    allData[today][appId] = !allData[today][appId];
    localStorage.setItem(STORAGE_KEY_STAMPS, JSON.stringify(allData));
    return !!allData[today][appId];
  } catch (e) {
    return false;
  }
}

// アイコン着せ替え機能の初期化
function initIconSelector() {
  const savedIconKey = localStorage.getItem(STORAGE_KEY_ICON) || 'cheer';
  applyPandaIcon(savedIconKey, false);

  const buttons = document.querySelectorAll('.icon-opt-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const iconKey = btn.getAttribute('data-icon');
      applyPandaIcon(iconKey, true);
    });
  });
}

function applyPandaIcon(iconKey, playSound = false) {
  const config = PANDA_ICONS[iconKey] || PANDA_ICONS.cheer;
  localStorage.setItem(STORAGE_KEY_ICON, config.id);

  // ヘッダーのマスコット画像を更新
  const mascotImg = document.getElementById('mascot-avatar-img');
  if (mascotImg) {
    mascotImg.src = config.src;
    mascotImg.alt = config.name;
  }

  // 吹き出しテキストを更新
  const bubbleText = document.getElementById('mascot-bubble-text');
  if (bubbleText) {
    bubbleText.textContent = config.defaultQuote;
  }

  // iPad / iPhone 向け Apple Touch Icon (全サイズ) と Manifest を動的に更新
  ['apple-touch-icon-default', 'apple-touch-icon-152', 'apple-touch-icon-167', 'apple-touch-icon-180'].forEach((id) => {
    const linkEl = document.getElementById(id);
    if (linkEl) linkEl.href = config.icon180;
  });

  const manifestLink = document.getElementById('manifest-link');
  if (manifestLink) {
    manifestLink.href = config.manifest;
  }

  // iPad追加ガイドモーダル内のプレビューも更新
  const modalPreviewImg = document.getElementById('modal-panda-preview-img');
  const modalPreviewName = document.getElementById('modal-panda-preview-name');
  if (modalPreviewImg) modalPreviewImg.src = config.icon180;
  if (modalPreviewName) modalPreviewName.textContent = `現在のアイコン：${config.name}`;

  // ボタンのアクティブ状態を更新
  document.querySelectorAll('.icon-opt-btn').forEach((btn) => {
    if (btn.getAttribute('data-icon') === config.id) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (playSound) {
    playCutePopSound();
  }
}

// 5つのHSKアプリ（＋統合版）カードの描画
function renderAppCards() {
  const container = document.getElementById('app-list-container');
  if (!container) return;

  const stamps = getTodayStamps();
  container.innerHTML = '';

  HSK_APPS.forEach((app) => {
    const isStamped = !!stamps[app.id];
    const card = document.createElement('article');
    card.className = 'app-card';

    const featuresHtml = app.features
      .map(
        (f) =>
          `<span class="feature-tag ${f.highlight ? 'highlight' : ''}">${f.text}</span>`
      )
      .join('');

    card.innerHTML = `
      <div class="app-card-banner" style="background: ${app.gradient};">
        <div class="banner-left">
          <div class="level-icon-badge">
            <span class="lvl-sm">LEVEL</span>
            <span class="lvl-num">${app.levelNum}</span>
          </div>
          <div class="banner-titles">
            <h3>${app.title}</h3>
            <p>${app.subtitle}</p>
          </div>
        </div>
        <span class="vocab-pill">${app.vocabCount}</span>
      </div>

      <div class="app-card-body">
        <p class="app-desc">${app.description}</p>
        <div class="feature-tags">
          ${featuresHtml}
        </div>
        <div class="app-card-footer">
          <button type="button" class="stamp-check-btn ${isStamped ? 'stamped' : ''}" data-app-id="${app.id}">
            <span>${isStamped ? '💮 今日学習済み！' : '🐾 今日学習したらチェック'}</span>
          </button>
          <a href="${app.url}" class="jump-btn" style="background: ${app.gradient};" target="_blank" rel="noopener noreferrer">
            <span>🚀 ${app.levelLabel}を開く</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a href="${app.url}" class="url-preview" target="_blank" rel="noopener noreferrer">🔗 ${app.url}</a>
      </div>
    `;

    const stampBtn = card.querySelector('.stamp-check-btn');
    stampBtn.addEventListener('click', () => {
      const nowStamped = toggleTodayStamp(app.id);
      stampBtn.classList.toggle('stamped', nowStamped);
      stampBtn.innerHTML = `<span>${nowStamped ? '💮 今日学習済み！' : '🐾 今日学習したらチェック'}</span>`;
      if (nowStamped) {
        playStampChime();
      }
    });

    container.appendChild(card);
  });
}

// パンダマスコットをタップしたときの中国語ボイス＆吹き出し演出
function initMascotInteraction() {
  const mascotWrap = document.getElementById('mascot-avatar-wrap');
  const bubbleText = document.getElementById('mascot-bubble-text');
  if (!mascotWrap || !bubbleText) return;

  mascotWrap.addEventListener('click', () => {
    const item = CHEER_PHRASES[phraseIndex % CHEER_PHRASES.length];
    phraseIndex++;

    bubbleText.innerHTML = `🔊 <strong>${item.zh}</strong>（${item.py}）<br><span>${item.ja}</span>`;

    // Web Speech API で中国語発音
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(item.zh);
      utter.lang = 'zh-CN';
      utter.rate = 0.95;
      window.speechSynthesis.speak(utter);
    } else {
      playCutePopSound();
    }
  });
}

// 100点満点祝勝ファンファーレ試聴＆紙吹雪ボタン
function initFanfareButton() {
  const btn = document.getElementById('fanfare-try-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    playVictoryFanfare();
    launchConfetti();
    const bubbleText = document.getElementById('mascot-bubble-text');
    if (bubbleText) {
      bubbleText.innerHTML =
        '🎉 <strong>恭喜满分！(Gōngxǐ mǎnfēn!)</strong> 100点満点ファンファーレ！この調子で各級にチャレンジしよう！🏆';
    }
  });
}

// 可愛いポップ音（アイコン切替時）
function playCutePopSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  } catch (e) {}
}

// スタンプチェック時のチャイム音
function playStampChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const start = ctx.currentTime + idx * 0.08;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.2, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.26);
    });
  } catch (e) {}
}

// ド派手な祝勝ファンファーレ音（Web Audio API）
function playVictoryFanfare() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const melody = [
      { f: 523.25, t: 0.0, d: 0.14 },
      { f: 523.25, t: 0.15, d: 0.14 },
      { f: 523.25, t: 0.3, d: 0.14 },
      { f: 659.25, t: 0.46, d: 0.38 },
      { f: 587.33, t: 0.88, d: 0.32 },
      { f: 659.25, t: 1.24, d: 0.28 },
      { f: 783.99, t: 1.56, d: 0.75 },
      { f: 1046.5, t: 1.56, d: 0.75 }
    ];

    melody.forEach((n) => {
      const start = ctx.currentTime + n.t;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(n.f, start);
      gain.gain.setValueAtTime(0.16, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + n.d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + n.d + 0.02);
    });
  } catch (e) {}
}

// 紙吹雪アニメーション
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#e11d48', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#fde047'];
  const pieces = Array.from({ length: 110 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 10 + 6,
    h: Math.random() * 6 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    vy: Math.random() * 4 + 2.5,
    vx: (Math.random() - 0.5) * 3,
    angle: Math.random() * Math.PI * 2,
    vAngle: (Math.random() - 0.5) * 0.15
  }));

  let frame = 0;
  function animate() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.vAngle;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (frame < 180) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(animate);
}

// PWA インストール＆iPad/iPhone ホーム画面追加ガイド制御
let deferredPrompt = null;

function initPwaInstall() {
  const installFab = document.getElementById('install-button');
  const inlineInstallBtn = document.getElementById('inline-install-btn');
  const heroInstallBtn = document.getElementById('hero-install-btn');
  const iosModal = document.getElementById('ios-install-modal');
  const closeBtn = document.getElementById('ios-modal-close');
  const okBtn = document.getElementById('ios-modal-ok-btn');
  const copyUrlBtn = document.getElementById('copy-url-btn');

  // すでにホーム画面から起動（スタンドアロン動作）しているか判定
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  if (isStandalone) {
    if (installFab) installFab.classList.add('hidden');
    if (inlineInstallBtn) inlineInstallBtn.style.display = 'none';
    if (heroInstallBtn) {
      heroInstallBtn.innerHTML = '<span>🐼 ホーム画面アプリ起動中✨</span>';
    }
  }

  // Chrome / Edge / Android 向け beforeinstallprompt イベント保持
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installFab && !isStandalone) {
      installFab.classList.remove('hidden');
    }
  });

  // インストールボタン押下時の共通ハンドラ（iPadでも確実に動作）
  async function handleInstallClick() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      deferredPrompt = null;
      if (outcome === 'accepted' && installFab) {
        installFab.classList.add('hidden');
      }
      return;
    }

    // iPad / iPhone (Safari / Chrome) や beforeinstallprompt 非対応環境では図解ガイドモーダルを表示
    if (iosModal) {
      iosModal.classList.add('open');
      playCutePopSound();
    }
  }

  if (installFab) installFab.addEventListener('click', handleInstallClick);
  if (inlineInstallBtn) inlineInstallBtn.addEventListener('click', handleInstallClick);
  if (heroInstallBtn) heroInstallBtn.addEventListener('click', handleInstallClick);

  // モーダルを閉じる処理
  function closeIosModal() {
    if (iosModal) iosModal.classList.remove('open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeIosModal);
  if (okBtn) okBtn.addEventListener('click', closeIosModal);
  if (iosModal) {
    iosModal.addEventListener('click', (e) => {
      if (e.target === iosModal) closeIosModal();
    });
  }

  // URLコピーボタン
  if (copyUrlBtn) {
    copyUrlBtn.addEventListener('click', async () => {
      const urlToCopy = 'https://tamagenai.github.io/HSKMENU/';
      try {
        await navigator.clipboard.writeText(urlToCopy);
        copyUrlBtn.textContent = '✅ コピー完了！';
        setTimeout(() => {
          copyUrlBtn.textContent = '📋 URLをコピー';
        }, 2000);
      } catch (err) {
        copyUrlBtn.textContent = 'URLを長押しでコピー';
      }
    });
  }

  window.addEventListener('appinstalled', () => {
    if (installFab) installFab.classList.add('hidden');
    deferredPrompt = null;
  });
}
