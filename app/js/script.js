/*---- Hero Animation ----*/
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const translateY = -scroll / 300;
  const scale = (100 - scroll / 100) / 100;

  const hero = document.querySelector(".hero-wrapper");
  hero.style.transform = `translateY(${translateY}%) scale(${scale})`;
});

/*---- Wish Animation ----*/
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const stripe = document.querySelector(".stripe-overlay");
  if (!stripe) return;

  const startScroll = 400; // animation starts
  const maxOffset = 35; // px
  const maxScroll = 500; // scroll distance

  // Calculate effective scroll
  let effectiveScroll = scroll - startScroll;
  if (effectiveScroll < 0) effectiveScroll = 0;
  if (effectiveScroll > maxScroll) effectiveScroll = maxScroll;

  // Calculate offset proportional to effectiveScroll
  const newOffset = (effectiveScroll / maxScroll) * maxOffset;

  stripe.style.transform = `translateX(${newOffset}px)`;

  // Test
  console.log(`Scroll: ${scroll}, Offset: ${newOffset}`);
  console.log("Scroll:", scroll);
  console.log("Effective scroll:", effectiveScroll);
  console.log("New offset:", newOffset);
});

/*---- About Sliders ----*/
const wrappers = document.querySelectorAll(
  ".about__1__wrapper, .about__3__wrapper"
);

wrappers.forEach((wrapper) => {
  const track = wrapper.querySelector(".slider-track");
  const prevBtn = wrapper.parentElement.querySelector(".prev");
  const nextBtn = wrapper.parentElement.querySelector(".next");

  const numSlides = track.children.length;
  let currentSlide = 0;

  function updateSlide() {
    const percentage = -(100 / numSlides) * currentSlide;
    track.style.transform = `translateX(${percentage}%)`;
  }

  // Arrow click handlers
  nextBtn.addEventListener("click", () => {
    if (currentSlide < numSlides - 1) {
      currentSlide++;
      updateSlide();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlide();
    }
  });
});

/*---- Album Carousel ----*/
const albums = {
  soulboy: {
    name: "SOULBOY",
    info: ["November 16, 2005", "14 songs"],
    songs: [
      "Prologue",
      "妹妹",
      "春风吹",
      "每天每天",
      "女人",
      "叫我怎么说",
      "哪怕",
      "南音",
      "我们能不能",
      "跳",
      "总结",
      "赶场",
      "等着你回来",
      "认识你 (Hidden Track)",
    ],
    cover: "images/soulboy.jpg",
    bgColor: "#A59988",
    inColor: "#342E2E",
  },

  thisLove: {
    name: "THIS LOVE",
    info: ["December 31, 2006", "13 songs"],
    songs: [
      "爱爱爱",
      "苏丽珍",
      "歌手与模特儿",
      "唉！",
      "四人游",
      "手拖手",
      "偷笑",
      "Goodbye Melody Rose",
      "诗人的情人",
      "拖男带女",
      "Love Outrolude",
      "If You Leave Me Now",
      "春风吹之吹吹风mix",
    ],
    cover: "images/this-love.jpg",
    bgColor: "#40504D",
    inColor: "#B3D3D0",
  },

  wonderland: {
    name: "WONDERLAND",
    info: ["January 11, 2008", "11 songs"],
    songs: [
      "Love Song",
      "够不够",
      "暖",
      "爱在",
      "公园",
      "简单最浪漫",
      "十九八七",
      "未来",
      "忘了美丽",
      "Sorry",
      "爱爱爱 (Acoustic Ver.)",
    ],
    cover: "images/wonderland.jpg",
    bgColor: "#12A4E0",
    inColor: "#1EF4F2",
  },

  orangeMoon: {
    name: "ORANGE MOON",
    info: ["December 19, 2008", "12 songs"],
    songs: [
      "Singalongsong",
      "小小虫",
      "1234567",
      "黑白",
      "如果爱",
      "黑洞里",
      "三人游",
      "每个人都会",
      "100种表情",
      "爱我吧",
      "为你写的歌",
      "Orange Moon (Hidden Track)",
    ],
    cover: "images/orange-moon.jpg",
    bgColor: "#D69845",
    inColor: "#593D31",
  },

  timeless: {
    name: "TIMELESS",
    info: ["August 11, 2009", "10 songs"],
    songs: [
      "You Are The Sunshine Of My Life",
      "Nothing's Gonna Change My Love For You",
      "Bad",
      "狂潮",
      "La Bamba",
      "红豆",
      "Georgia On My Mind",
      "记得",
      "Wonderful Tonight",
      "Moon River",
    ],
    cover: "images/timeless.jpg",
    bgColor: "#1D1F38",
    inColor: "#A9B6B9",
  },

  fifteen: {
    name: "15",
    info: ["April 20, 2011", "12 songs"],
    songs: [
      "Gotta Make A Change",
      "昙花",
      "张永成",
      "因为你",
      "情胜策略",
      "无菇朋友",
      "自以为",
      "二人游",
      "Over",
      "Take Me",
      "好不容易",
      "Over Reprise",
    ],
    cover: "images/15.jpg",
    bgColor: "#212121",
    inColor: "#D9D9D9",
  },

  backToWonderland: {
    name: "BACK TO WONDERLAND",
    info: ["November 23, 2012", "11 songs"],
    songs: [
      "Can You Feel The Music",
      "I Want You Back",
      "你就是",
      "千纸鹤",
      "关于爱的定义",
      "麦恩莉",
      "孤独孩儿",
      "Romeo",
      "妈妈说",
      "爱立刻",
      "BB88",
    ],
    cover: "images/back-to-wonderland.jpg",
    bgColor: "#5CAEB6",
    inColor: "#0B747C",
  },

  dangerousWorld: {
    name: "DANGEROUS WORLD",
    info: ["April 11, 2014", "15 songs"],
    songs: [
      "Welcome",
      "危险世界",
      "Peace",
      "Soundcheck",
      "黑白灰",
      "桃花运",
      "特别的人",
      "Weather Report",
      "天气先生",
      "枫叶做的风铃",
      "Boarding",
      "巴黎",
      "爱不来",
      "僵尸",
      "Lights Up",
    ],
    cover: "images/dangerous-world.jpg",
    bgColor: "#052B3E",
    inColor: "#477B86",
  },

  jtw: {
    name: "JTW",
    info: ["September 29, 2016", "21 songs"],
    songs: {
      black: [
        "悟空",
        "Flow",
        "听",
        "味道",
        "Ring Finger",
        "NMW",
        "笑开",
        "梦蝴蝶",
        "Love You So Much",
        "醉",
        "悟空 2003 Demo",
      ],
      gold: [
        "All Night",
        "Right Girl",
        "Run From Your Love",
        "烦",
        "Once",
        "无所谓",
        "黑夜",
        "很不低调",
        "放不过自己",
        "As I Do",
      ],
    },
    cover: "images/jtw.jpg",
    bgColor: "#332B16",
    inColor: "#E3C975",
  },

  theDreamer: {
    name: "THE DREAMER",
    info: ["October 18, 2024", "10 songs"],
    songs: [
      "XZMHXDXH",
      "江湖中人",
      "GF",
      "Tango",
      "才二十三",
      "谁知爱是什么",
      "我不是农人",
      "那沙漠里的水",
      "回留",
      "没啥好说",
    ],
    cover: "images/the-dreamer.jpg",
    bgColor: "#70A851",
    inColor: "#065715",
  },
};

// Create Variables
const menuEl = document.getElementById("album-menu");
const indicatorEl = document.getElementById("menu-indicator");
const coverEl = document.getElementById("album-cover");
const nameEl = document.getElementById("album-name");
const infoEl = document.getElementById("album-info");
const songsEl = document.getElementById("album-songs");

const albumPlayer = document.querySelector(".album-player");

function renderMenu() {
  Object.entries(albums).forEach(([key, album], i) => {
    // Create List Item
    const li = document.createElement("li");

    // Create Radio Input
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "album";
    input.id = `radio_${key}`;
    input.value = key;
    input.style.display = "none";
    if (i === 0) input.checked = true;

    // Create Label
    const label = document.createElement("label");
    label.setAttribute("for", input.id);
    label.textContent = album.name;

    // Build The Item
    li.appendChild(input);
    li.appendChild(label);
    menuEl.appendChild(li);

    input.addEventListener("change", () => renderAlbum(album, label));

    if (i === 0) renderAlbum(album, label);
  });
}

function renderAlbum(album, labelEl) {
  // Clear Previous Songs
  songsEl.innerHTML = "";

  if (Array.isArray(album.songs)) {
    album.songs.forEach((song) => {
      const p = document.createElement("p");
      p.textContent = song;
      songsEl.appendChild(p);
    });
  } else {
    const discWrapper = document.createElement("div");
    discWrapper.className = "jtw-wrapper";

    // Black Disc
    const blackWrapper = document.createElement("div");
    blackWrapper.className = "disc black-disc";

    const disc1 = document.createElement("h4");
    disc1.textContent = "Black";
    blackWrapper.appendChild(disc1);

    album.songs.black.forEach((song) => {
      const p = document.createElement("p");
      p.className = "song--black";
      p.textContent = song;
      blackWrapper.appendChild(p);
    });

    // Gold Disc
    const goldWrapper = document.createElement("div");
    goldWrapper.className = "disc gold-disc";

    const disc2 = document.createElement("h4");
    disc2.textContent = "Gold";
    goldWrapper.appendChild(disc2);

    album.songs.gold.forEach((song) => {
      const p = document.createElement("p");
      p.className = "song--gold";
      p.textContent = song;
      goldWrapper.appendChild(p);
    });

    discWrapper.appendChild(blackWrapper);
    discWrapper.appendChild(goldWrapper);
    songsEl.appendChild(discWrapper);
  }

  // Cover + Name
  coverEl.src = album.cover;
  nameEl.textContent = album.name;

  // Info
  infoEl.innerHTML = `${album.info[0]}<br>${album.info[1]}`;

  // Colors
  albumPlayer.style.backgroundColor = album.bgColor;
  nameEl.style.color = album.inColor;

  // Active state for labels
  document.querySelectorAll("#album-menu label").forEach((lab) => {
    lab.classList.remove("active");
    lab.style.color = "";
  });
  labelEl.classList.add("active");
  labelEl.style.color = album.inColor;

  // Indicator Move
  indicatorEl.style.top = `${labelEl.offsetTop}px`;
  indicatorEl.style.color = album.inColor;
}

// Init Menu On Page Load
window.addEventListener("DOMContentLoaded", renderMenu);

/*---- Photo Wall ----*/
const scroller = document.querySelectorAll(".scroller");

scroller.forEach((scroller) => {
  scroller.setAttribute("data-animated", true);

  const scrollerInner = scroller.querySelector(".scroller__inner");
  const items = Array.from(scrollerInner.children);

  items.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(clone);
  });
});

/*---- Typing Quote ----*/
const text = [
  "时间不等人，随着年龄的增长，更能深入理解时间的现实与虚幻。",
  "生活给我们带来了各种各样的转折和挑战，       但我认为我们的目标之一应该是以雅致得体的态度去走完生命之路。",
  " ",
  "祝你在未来的日子里，继续怀抱梦想，持续努力，成长进化，        在人生的每个阶段充分发挥自己的潜能。",
  " ",
  "               \u2014 方大同.  ",
];

const quoteEl = document.querySelector(".quote");
let lineIndex = 0;
let charIndex = 0;
let cursorEl = null;
let typingStarted = false;

function typeLine() {
  if (lineIndex >= text.length) return;

  const line = text[lineIndex];
  const lineSpan = document.createElement("span");
  quoteEl.appendChild(lineSpan);

  cursorEl = document.createElement("span");
  cursorEl.classList.add("cursor");
  lineSpan.appendChild(cursorEl);

  function typeChar() {
    if (charIndex < line.length) {
      // Insert character before cursor
      cursorEl.insertAdjacentText("beforebegin", line[charIndex]);
      charIndex++;
      setTimeout(typeChar, 120);
    } else {
      charIndex = 0;
      lineIndex++;

      // Cursor stays blinking for 3 seconds after line finishes typing
      setTimeout(() => {
        cursorEl.remove();
        quoteEl.appendChild(document.createElement("br"));
        setTimeout(typeLine, 300);
      }, 2000);
    }
  }

  typeChar();
}

// Scroll event listener to trigger typing when quoteEl is visible
window.addEventListener("scroll", () => {
  if (typingStarted) return;

  const rect = quoteEl.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    typingStarted = true;
    typeLine();
  }
});
