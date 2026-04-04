// ==========================================
// state.js: 状態管理・共通変数 (Big Dipper Ⅲ 版)
// ==========================================
let currentLesson = 1;
let currentKey = "L01_full"; // ★ Partがなくなり、キーが短くなります
let currentScore = 0;
let currentMode = ''; 
let isScriptOpen = false;
let isJapaneseOpen = false;

// フォントサイズ管理
let engFontSize = 24;
let jpnFontSize = 20;
let recFontSize = 28;

let targetText = "";
let recordStartTime = 0;
let lastSpokenText = "";

// ★ Big Dipper Ⅲ レッスン構造データ（Part廃止）
// 配列の長さが段落数（または発話数）を表します
const lessonStructure = {
    1: [1, 2, 3, 4, 5, 6],
    2: [1, 2, 3, 4],
    3: [1, 2, 3, 4, 5, 6, 7, 8, 9], // Fred(5) + Sue(4)
    4: [1, 2, 3],
    5: [1, 2, 3],
    6: [1, 2, 3, 4],
    7: [1, 2, 3, 4, 5, 6], // 6人のレビュー
    8: [1, 2, 3, 4, 5],
    9: [1, 2, 3, 4, 5],
    10: [1, 2, 3, 4],
    // 11 は広告のためスキップ
    12: [1, 2, 3, 4, 5],
    13: [1, 2, 3, 4],
    14: [1, 2, 3, 4, 5], // 見出し(1) + 段落(4)
    15: [1, 2, 3, 4, 5, 6],
    16: [1, 2, 3, 4, 5, 6, 7, 8],
    17: [1, 2, 3, 4, 5, 6, 7],
    18: [1, 2, 3, 4, 5, 6, 7],
    19: [1, 2, 3, 4, 5, 6, 7, 8],
    20: [1, 2, 3, 4, 5, 6, 7],
    21: [1, 2, 3, 4, 5, 6],
    22: [1, 2, 3, 4, 5, 6, 7, 8],
    23: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    24: [1, 2, 3, 4, 5, 6, 7, 8]
};

// オーディオ要素
let audioPlayer = document.getElementById('mainAudioPlayer');
let successSound = document.getElementById('successSound');