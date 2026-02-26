<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Nine Games</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Cloud Nine Games</h1>
        <input type="text" id="searchBar" placeholder="Search games...">
    </header>

    <main class="game-container" id="gameGrid">
        </main>

    <script src="script.js"></script>
</body>
</html>
uters.

CSS
body {
    background-color: #121212;
    color: white;
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

#searchBar {
    padding: 10px;
    width: 60%;
    border-radius: 20px;
    border: none;
    outline: none;
}

.game-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.game-card {
    background: #1e1e1e;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    transition: transform 0.2s;
    cursor: pointer;
}

.game-card:hover {
    transform: scale(1.05);
    background: #333;
}

.game-card img {
    width: 100%;
    border-radius: 8px;
    height: 150px;
    object-fit: cover;
}{
    background-color: #121212;
    color: white;
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

#searchBar {
    padding: 10px;
    width: 60%;
    border-radius: 20px;
    border: none;
    outline: none;
}

.game-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.game-card {
    background: #1e1e1e;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    transition: transform 0.2s;
    cursor: pointer;
}

.game-card:hover {
    transform: scale(1.05);
    background: #333;
}

.game-card img {
    width: 100%;
    border-radius: 8px;
    height: 150px;
    object-fit: cover;
}


JavaScript
const games = [
    { title: "Slope", url: "https://example.com/slope", img: "https://via.placeholder.com/150" },
    { title: "Retro Bowl", url: "https://example.com/retro-bowl", img: "https://via.placeholder.com/150" },
    { title: "Tetris", url: "https://example.com/tetris", img: "https://via.placeholder.com/150" },
    { title: "Bitlife", url: "https://example.com/bitlife", img: "https://via.placeholder.com/150" }
];

const gameGrid = document.getElementById('gameGrid');
const searchBar = document.getElementById('searchBar');

// Function to display games
function displayGames(gameList) {
    gameGrid.innerHTML = '';
    gameList.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.img}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        card.onclick = () => window.location.href = game.url;
        gameGrid.appendChild(card);
    });
}

// Search Functionality
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredGames = games.filter(game => {
        return game.title.toLowerCase().includes(searchString);
    });
    displayGames(filteredGames);
});

// Initial load
displayGames(games);[
  {
    "title": "Slope",
    "thumbnail": "https://via.placeholder.com/150",
    "url": "https://example.com/slope-game-link"
  },
  {
    "title": "Retro Bowl",
    "thumbnail": "https://via.placeholder.com/150",
    "url": "https://example.com/retro-bowl-link"
  },
  {
    "title": "Tetris",
    "thumbnail": "https://via.placeholder.com/150",
    "url": "https://example.com/tetris-link"
  }
][
  {
    "title": "Slope",
    "thumbnail": "https://via.placeholder.com/150",
    "url": "https://example.com/slope-game-link"
  },
  {
    "title": "Retro Bowl",
    "thumbnail": "https://via.placeholder.com/150",
    "url": "https://example.com/retro-bowl-link"
  },
  {
    "title": "Tetris",
    "thumbnail": "https://via.placeholder.com/150",
    "url": "https://example.com/tetris-link"
  }
]:root {
    --bg-color: #0f172a;
    --card-bg: #1e293b;
    --accent: #38bdf8;
    --text: #f8fafc;
}

body {
    background-color: var(--bg-color);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 20px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
}

#search {
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #334155;
    background: var(--card-bg);
    color: white;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
}

.card {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid transparent;
}

.card:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
}

.card img { width: 100%; height: 120px; object-fit: cover; }
.card p { padding: 10px; text-align: center; margin: 0; }

/* Overlay Styling */
#game-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.9);
    display: flex; justify-content: center; align-items: center;
    z-index: 1000;
}

.hidden { display: none !important; }

.overlay-content { width: 80%; height: 80%; position: relative; }
#game-frame { width: 100%; height: 100%; border-radius: 10px; }
#close-btn {
    position: absolute; top: -40px; right: 0;
    background: var(--accent); border: none; padding: 5px 15px; cursor: pointer;
}const gameList = document.getElementById('game-list');
const overlay = document.getElementById('game-overlay');
const frame = document.getElementById('game-frame');
const closeBtn = document.getElementById('close-btn');
const search = document.getElementById('search');

let allGames = [];

// 1. Fetch data from JSON
fetch('games.json')
    .then(res => res.json())
    .then(data => {
        allGames = data;
        renderGames(allGames);
    });

// 2. Render cards to screen
function renderGames(arr) {
    gameList.innerHTML = '';
    arr.forEach(game => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${game.thumbnail}">
            <p>${game.title}</p>
        `;
        div.onclick = () => openGame(game.url);
        gameList.appendChild(div);
    });
}

// 3. Open Iframe
function openGame(url) {
    frame.src = url;
    overlay.classList.remove('hidden');
}

// 4. Close Iframe
closeBtn.onclick = () => {
    overlay.classList.add('hidden');
    frame.src = ''; // Stops the game audio/process
};

// 5. Search Logic
search.oninput = (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allGames.filter(g => g.title.toLowerCase().includes(term));
    renderGames(filtered);
};const gameList = document.getElementById('game-list');
const overlay = document.getElementById('game-overlay');
const frame = document.getElementById('game-frame');
const closeBtn = document.getElementById('close-btn');
const search = document.getElementById('search');

let allGames = [];

// 1. Fetch data from JSON
fetch('games.json')
    .then(res => res.json())
    .then(data => {
        allGames = data;
        renderGames(allGames);
    });

// 2. Render cards to screen
function renderGames(arr) {
    gameList.innerHTML = '';
    arr.forEach(game => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${game.thumbnail}">
            <p>${game.title}</p>
        `;
        div.onclick = () => openGame(game.url);
        gameList.appendChild(div);
    });
}

// 3. Open Iframe
function openGame(url) {
    frame.src = url;
    overlay.classList.remove('hidden');
}

// 4. Close Iframe
closeBtn.onclick = () => {
    overlay.classList.add('hidden');
    frame.src = ''; // Stops the game audio/process
};

// 5. Search Logic
search.oninput = (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allGames.filter(g => g.title.toLowerCase().includes(term));
    renderGames(filtered);
};<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unblocked Hub</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav>
        <h1>Unblocked Games</h1>
        <input type="text" id="search" placeholder="Search for a game...">
    </nav>

    <div class="container" id="game-list"></div>

    <div id="game-overlay" class="hidden">
        <div class="overlay-content">
            <button id="close-btn">Close Game &times;</button>
            <iframe id="game-frame" src="" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>:root {
    --bg-color: #0f172a;
    --card-bg: #1e293b;
    --accent: #38bdf8;
    --text: #f8fafc;
}

body {
    background-color: var(--bg-color);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 20px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
}

#search {
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #334155;
    background: var(--card-bg);
    color: white;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
}

.card {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid transparent;
}

.card:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
}

.card img { width: 100%; height: 120px; object-fit: cover; }
.card p { padding: 10px; text-align: center; margin: 0; }

/* Overlay Styling */
#game-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.9);
    display: flex; justify-content: center; align-items: center;
    z-index: 1000;
}

.hidden { display: none !important; }

.overlay-content { width: 80%; height: 80%; position: relative; }
#game-frame { width: 100%; height: 100%; border-radius: 10px; }
#close-btn {
    position: absolute; top: -40px; right: 0;
    background: var(--accent); border: none; padding: 5px 15px; cursor: pointer;
}
4. The Brains (script.js)
This script fetches the JSON data, creates the cards, and handles the "click to play" logic using Iframes.

JavaScript
const gameList = document.getElementById('game-list');
const overlay = document.getElementById('game-overlay');
const frame = document.getElementById('game-frame');
const closeBtn = document.getElementById('close-btn');
const search = document.getElementById('search');

let allGames = [];

// 1. Fetch data from JSON
fetch('games.json')
    .then(res => res.json())
    .then(data => {
        allGames = data;
        renderGames(allGames);
    });

// 2. Render cards to screen
function renderGames(arr) {
    gameList.innerHTML = '';
    arr.forEach(game => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${game.thumbnail}">
            <p>${game.title}</p>
        `;
        div.onclick = () => openGame(game.url);
        gameList.appendChild(div);
    });
}

// 3. Open Iframe
function openGame(url) {
    frame.src = url;
    overlay.classList.remove('hidden');
}

// 4. Close Iframe
closeBtn.onclick = () => {
    overlay.classList.add('hidden');
    frame.src = ''; // Stops the game audio/process
};

// 5. Search Logic
search.oninput = (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allGames.filter(g => g.title.toLowerCase().includes(term));
    renderGames(filtered);
};[
  {
    "title": "Geometry Dash",
    "url": "https://example.com/game1"
  },
  {
    "title": "Slope",
    "url": "https://example.com/game2"
  }
]
Conversation with Gemini
You said
bulid a basic unblocked games website using html,js,and css files

Gemini said
Building a basic "unblocked games" site is a classic way to learn how web structure and styling work together. To keep it simple, we’ll create a grid-based layout where each game card links to an external game file or an embedded link.

Here is a simple structure using three files: index.html, style.css, and script.js.

1. The Structure (index.html)
This file acts as the skeleton. We'll use a header for the title and a div container to hold the game cards.

HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Nine Games</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Cloud Nine Games</h1>
        <input type="text" id="searchBar" placeholder="Search games...">
    </header>

    <main class="game-container" id="gameGrid">
        </main>

    <script src="script.js"></script>
</body>
</html>
2. The Styling (style.css)
We want a dark, modern "gamer" aesthetic. Using CSS Grid makes the layout responsive so it looks good on both phones and computers.

CSS
body {
    background-color: #121212;
    color: white;
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

#searchBar {
    padding: 10px;
    width: 60%;
    border-radius: 20px;
    border: none;
    outline: none;
}

.game-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.game-card {
    background: #1e1e1e;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    transition: transform 0.2s;
    cursor: pointer;
}

.game-card:hover {
    transform: scale(1.05);
    background: #333;
}

.game-card img {
    width: 100%;
    border-radius: 8px;
    height: 150px;
    object-fit: cover;
}
3. The Logic (script.js)
Instead of typing out every game in HTML, we use JavaScript to store our game data in an array and "render" it to the screen. This makes it much easier to add new games later.

JavaScript
const games = [
    { title: "Slope", url: "https://example.com/slope", img: "https://via.placeholder.com/150" },
    { title: "Retro Bowl", url: "https://example.com/retro-bowl", img: "https://via.placeholder.com/150" },
    { title: "Tetris", url: "https://example.com/tetris", img: "https://via.placeholder.com/150" },
    { title: "Bitlife", url: "https://example.com/bitlife", img: "https://via.placeholder.com/150" }
];

const gameGrid = document.getElementById('gameGrid');
const searchBar = document.getElementById('searchBar');

// Function to display games
function displayGames(gameList) {
    gameGrid.innerHTML = '';
    gameList.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.img}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        card.onclick = () => window.location.href = game.url;
        gameGrid.appendChild(card);
    });
}

// Search Functionality
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredGames = games.filter(game => {
        return game.title.toLowerCase().includes(searchString);
    });
    displayGames(filteredGames);
});

// Initial load
displayGames(games);
How to host this
Since these are static files, you can’t just run them "live" on the web from your desktop. Here are your best (and free) options:

GitHub Pages: Best for longevity. Create a repository, upload these files, and enable "Pages" in settings.

Netlify / Vercel: Drag and drop your folder, and it gives you a live link instantly.

A quick note on "Unblocked": To keep a site from being flagged by school filters, many creators use "About:Blank" cloaking or embed games via iframes.

Would you like me to show you how to add an "About:Blank" cloaker script to help the site stay discreet?

You said
bulid a basic unblocked games website using html,js,and css files. We will store each game as an Iframe in a Json File. No ai features

Gemini said
To keep the site efficient and easy to update, we will use a JSON file as your database. This allows you to add or remove games without ever touching your HTML or CSS again.

Here is the setup for a modular, Iframe-based games site.

1. The Data (games.json)
This is where you store your game library. Each game needs a title, a thumbnail image, and the iframe source URL.

JSON
[
  {
    "title": "Slope",
    "thumbnail": "https://via.placeholder.com/150",
    "url": "https://example.com/slope-game-link"
  },
  {
    "title": "Retro Bowl",
    "thumbnail": "https://via.placeholder.com/150",
    "url": "https://example.com/retro-bowl-link"
  },
  {
    "title": "Tetris",
    "thumbnail": "https://via.placeholder.com/150",
    "url": "https://example.com/tetris-link"
  }
]
2. The Skeleton (index.html)
We include a "Game Overlay" section. When a user clicks a game, an Iframe will pop up over the screen so they don't have to leave the main page.

HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unblocked Hub</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav>
        <h1>Unblocked Games</h1>
        <input type="text" id="search" placeholder="Search for a game...">
    </nav>

    <div class="container" id="game-list"></div>

    <div id="game-overlay" class="hidden">
        <div class="overlay-content">
            <button id="close-btn">Close Game &times;</button>
            <iframe id="game-frame" src="" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
3. The Look (style.css)
We’ll use a dark "midnight" theme with a responsive grid.

CSS
:root {
    --bg-color: #0f172a;
    --card-bg: #1e293b;
    --accent: #38bdf8;
    --text: #f8fafc;
}

body {
    background-color: var(--bg-color);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 20px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
}

#search {
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #334155;
    background: var(--card-bg);
    color: white;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
}

.card {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid transparent;
}

.card:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
}

.card img { width: 100%; height: 120px; object-fit: cover; }
.card p { padding: 10px; text-align: center; margin: 0; }

/* Overlay Styling */
#game-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.9);
    display: flex; justify-content: center; align-items: center;
    z-index: 1000;
}

.hidden { display: none !important; }

.overlay-content { width: 80%; height: 80%; position: relative; }
#game-frame { width: 100%; height: 100%; border-radius: 10px; }
#close-btn {
    position: absolute; top: -40px; right: 0;
    background: var(--accent); border: none; padding: 5px 15px; cursor: pointer;
}
4. The Brains (script.js)
This script fetches the JSON data, creates the cards, and handles the "click to play" logic using Iframes.

JavaScript
const gameList = document.getElementById('game-list');
const overlay = document.getElementById('game-overlay');
const frame = document.getElementById('game-frame');
const closeBtn = document.getElementById('close-btn');
const search = document.getElementById('search');

let allGames = [];

// 1. Fetch data from JSON
fetch('games.json')
    .then(res => res.json())
    .then(data => {
        allGames = data;
        renderGames(allGames);
    });

// 2. Render cards to screen
function renderGames(arr) {
    gameList.innerHTML = '';
    arr.forEach(game => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${game.thumbnail}">
            <p>${game.title}</p>
        `;
        div.onclick = () => openGame(game.url);
        gameList.appendChild(div);
    });
}

// 3. Open Iframe
function openGame(url) {
    frame.src = url;
    overlay.classList.remove('hidden');
}

// 4. Close Iframe
closeBtn.onclick = () => {
    overlay.classList.add('hidden');
    frame.src = ''; // Stops the game audio/process
};

// 5. Search Logic
search.oninput = (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allGames.filter(g => g.title.toLowerCase().includes(term));
    renderGames(filtered);
};
Important Tips:
Security: To run a fetch for a JSON file, you usually need a local server (like the Live Server extension in VS Code) or to host it online. Simply opening index.html in a browser might trigger a "CORS" error.

External Links: Make sure the game URLs you put in games.json allow "Embedding." If a site has an X-Frame-Options: DENY header, the game won't load in your Iframe.

Would you like me to show you how to add a "Fullscreen" button for the game overlay?

You said
can you build a game website with unblocked games and it says on the home screen ih match and no ai fetures and make it a website that only i whould know

Gemini said
To make a website that stays under the radar, we will use a "Cloaking" technique. The site will look like a boring math resource called "iH Match" (Integrated Higher Mathematics) and will only reveal the games if you perform a specific action, like clicking a hidden button or entering a secret key.

Here are the four files you need.

1. The Stealth Data (games.json)
We keep this separate so it's easy to edit.

JSON
[
  {
    "title": "Geometry Dash",
    "url": "https://example.com/game1"
  },
  {
    "title": "Slope",
    "url": "https://example.com/game2"
  }
]
2. The Boring Home Screen (index.html)
This page is designed to look like a school assignment. It includes a meta tag to tell Google not to show this site in search results.

HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, nofollow"> <title>iH Match | Semester 2 Resources</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div id="math-front">
        <nav>iH Match: Advanced Calculus & Logic</nav>
        <div class="content">
            <h1>Module 4: Geometric Probability</h1>
            <p>Please review the theorems below before beginning the practice set.</p>
            <div class="math-box">$$\int_{a}^{b} f(x)dx = F(b) - F(a)$$</div>
            <p>Click the <span id="secret-trigger" style="cursor:default">integral</span> symbol to download the worksheet.</p>
        </div>
    </div>body { font-family: serif; margin: 0; background: #f4f4f9; color: #333; }
nav { background: #2c3e50; color: white; padding: 10px 20px; font-weight: bold; }
.content { max-width: 800px; margin: 50px auto; line-height: 1.6; }
.math-box { background: white; border: 1px solid #ccc; padding: 20px; text-align: center; font-size: 1.5rem; margin: 20px 0; }
.hidden { display: none !important; }

/* Game Hub Styles */
#game-hub { padding: 20px; text-align: center; background: #121212; color: white; min-height: 100vh; }
#game-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; }
.game-card { background: #222; padding: 20px; border-radius: 8px; cursor: pointer; border: 1px solid #444; }

/* Player Overlay */
#overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: black; z-index: 999; }
#player { width: 100%; height: 90%; border: none; }
#close { background: red; color: white; border: none; padding: 10px; width: 100%; cursor: pointer; }const trigger = document.getElementById('secret-trigger');
const mathFront = document.getElementById('math-front');
const gameHub = document.getElementById('game-hub');
const gameGrid = document.getElementById('game-grid');
const overlay = document.getElementById('overlay');
const player = document.getElementById('player');
const closeBtn = document.getElementById('close');

// 1. Toggle the game hub when the secret word is clicked
trigger.addEventListener('click', () => {
    mathFront.classList.add('hidden');
    gameHub.classList.remove('hidden');
    loadGames();
});

// 2. Load games from JSON
function loadGames() {
    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            gameGrid.innerHTML = '';
            data.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.innerText = game.title;
                card.onclick = () => {
                    player.src = game.url;
                    overlay.classList.remove('hidden');
                };
                gameGrid.appendChild(card);
            });
        });
}

// 3. Close the game and go back to math
closeBtn.onclick = () => {
    overlay.classList.add('hidden');
    player.src = '';
};const trigger = document.getElementById('secret-trigger');
const mathFront = document.getElementById('math-front');
const gameHub = document.getElementById('game-hub');
const gameGrid = document.getElementById('game-grid');
const overlay = document.getElementById('overlay');
const player = document.getElementById('player');

// 1. Secret Entry: Click the word "integral" to unlock games
trigger.addEventListener('click', () => {
    mathFront.classList.add('hidden');
    gameHub.classList.remove('hidden');
    loadGames();
});

// 2. Fetch Games from JSON
function loadGames() {
    fetch('games.json')
        .then(res => res.json())
        .then(data => {
            gameGrid.innerHTML = '';
            data.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.innerHTML = `<h3>${game.title}</h3>`;
                card.onclick = () => {
                    player.src = game.url;
                    overlay.classList.remove('hidden');
                };
                gameGrid.appendChild(card);
            });
        })
        .catch(err => console.error("Could not load games. Check your JSON file."));
}

// 3. THE PANIC FUNCTION (Esc Key)
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        panic();
    }
});

function panic() {
    // Hide the game and the hub
    overlay.classList.add('hidden');
    gameHub.classList.add('hidden');
    
    // Show the math page
    mathFront.classList.remove('hidden');
    
    // Kill the game process/audio
    player.src = '';
    
    console.log("Panic mode activated: Returning to Calculus.");
}// Changes the tab title if you switch tabs
window.onblur = function () { document.title = "iH Match | Dashboard"; }
window.onfocus = function () { document.title = "iH Match | Semester 2"; }body { font-family: 'Times New Roman', serif; margin: 0; background: #fdfdfd; color: #222; }
nav { background: #1a5f7a; color: white; padding: 12px 30px; font-weight: bold; }
.content { max-width: 700px; margin: 60px auto; padding: 20px; border-left: 3px solid #eee; }
.math-box { background: #fff; border: 1px solid #ddd; padding: 30px; text-align: center; font-size: 1.4rem; margin: 25px 0; border-radius: 4px; }
#secret-trigger { cursor: text; border-bottom: 1px dashed transparent; }
.hidden { display: none !important; }

/* Hidden Game Hub */
#game-page { background: #0b0e14; min-height: 100vh; padding: 40px; color: white; font-family: sans-serif; }
.game-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 15px; }
.card { background: #1c2331; padding: 15px; border-radius: 8px; text-align: center; cursor: pointer; transition: 0.2s; border: 1px solid #2d3748; }
.card:hover { border-color: #38bdf8; background: #252f44; }

/* Overlay */
#overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #000; z-index: 9999; }
#game-player { width: 100%; height: 100%; }
#panic-bar { position: absolute; top: 0; right: 0; background: rgba(0,0,0,0.5); color: #444; padding: 5px; font-size: 10px; pointer-events: none;const games = [
    { title: "Slope", url: "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3333r/slope@main/slope.xml" },
    { title: "Retro Bowl", url: "https://game316046.konggames.com/gamepro/316046/2/index.html" },
    { title: "Minecraft", url: "https://classic.minecraft.net" }
];

const trigger = document.getElementById('secret-trigger');
const mathPage = document.getElementById('math-page');
const gamePage = document.getElementById('game-page');
const gameGrid = document.getElementById('game-grid');
const overlay = document.getElementById('overlay');
const player = document.getElementById('game-player');

// Unlock games
trigger.onclick = () => {
    mathPage.classList.add('hidden');
    gamePage.classList.remove('hidden');
    render();
};

function render() {
    gameGrid.innerHTML = '';
    games.forEach(g => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<h4>${g.title}</h4>`;
        div.onclick = () => {
            player.src = g.url;
            overlay.classList.remove('hidden');
        };
        gameGrid.appendChild(div);
    });
}

// THE PANIC KEY (ESC)
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        overlay.classList.add('hidden');
        gamePage.classList.add('hidden');
        mathPage.classList.remove('hidden');
        player.src = ''; // Stops the game
        document.title = "iH Match | Semester 2 Resources";
    }
});
