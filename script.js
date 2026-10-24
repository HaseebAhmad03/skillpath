// ---------- DATA ----------
// In every question the FIRST option is the correct one.
// The page shuffles the options each time, so don't worry about the order.

const PATHS = {
  swe: {
    name: "Software engineer",
    blurb: "Data structures, problem solving, clean code",
    questions: [
      { q: "What does Big-O notation describe?", o: ["How time or memory grows as input grows", "How many lines your code has", "How fast your laptop compiles"], why: "Big-O is about growth, not exact speed." },
      { q: "Which structure gives average O(1) lookup by key?", o: ["Hash map", "Array you scan from the start", "Linked list"], why: "Hash maps jump straight to the slot using a hash of the key." },
      { q: "What does 'git commit' do?", o: ["Saves a snapshot in your local repository", "Uploads your code to GitHub", "Deletes old files"], why: "Pushing is a separate step (git push)." },
      { q: "Binary search only works if the data is...", o: ["Sorted", "Unique", "Shorter than 100 items"], why: "It halves the range each step, which needs order." },
      { q: "A function calls itself and has no base case. What happens?", o: ["Stack overflow", "It returns null", "It runs faster each time"], why: "Every call adds a stack frame that never gets removed." },
      { q: "'A class should have only one reason to change' is which principle?", o: ["Single Responsibility", "Open/Closed", "Don't Repeat Yourself"], why: "It's the S in SOLID." }
    ],
    steps: {
      beginner: ["Pick one language (Python, Java or C++) and stay with it for 2 months.", "Solve 3 easy problems a week on LeetCode or HackerRank, starting with arrays and strings.", "Learn Git basics and put every small program on GitHub."],
      intermediate: ["Study core data structures: stacks, queues, trees, graphs, hash maps.", "Move to medium problems and practise explaining your approach out loud.", "Build one project with 500+ lines, like a CLI tool or a small library."],
      pro: ["Practise system design basics and read other people's code on GitHub.", "Join contests (Codeforces, CodeChef) and aim for internships.", "Contribute a small fix to an open source project."]
    }
  },
  fullstack: {
    name: "Full stack developer",
    blurb: "Frontend, backend and databases together",
    questions: [
      { q: "What is HTML's main job?", o: ["Structure of the page", "Styling the page", "Storing data"], why: "CSS handles looks, HTML handles structure." },
      { q: "Which HTTP method normally reads data?", o: ["GET", "POST", "DELETE"], why: "GET asks for data without changing anything." },
      { q: "What does fetch() return in JavaScript?", o: ["A Promise", "A plain string", "An array"], why: "You await it or use .then() to get the response." },
      { q: "Flexbox is mainly used for...", o: ["Laying items out in a row or column", "Querying databases", "Hashing passwords"], why: "Think alignment and spacing." },
      { q: "Why do apps hash passwords instead of storing them?", o: ["So the real password is never stored", "To make login faster", "To save database space"], why: "If the database leaks, hashes are much harder to abuse." },
      { q: "What is CORS about?", o: ["Browser rules for cross-origin requests", "Compressing images", "Choosing CSS colours"], why: "The server must say which origins may call it." }
    ],
    steps: {
      beginner: ["Learn HTML, CSS and plain JavaScript properly before any framework.", "Build 3 static pages: a portfolio, a landing page, a to-do app.", "Host them free on GitHub Pages."],
      intermediate: ["Learn React for the frontend and Node.js with Express for the backend.", "Learn one database: start with MongoDB or PostgreSQL.", "Build a full app with login, a database and deployment (for example a notes app)."],
      pro: ["Add TypeScript, testing and authentication (JWT or sessions) to your stack.", "Deploy a real project with a custom domain and keep it running.", "Start applying for internships with 2 solid projects and a clean GitHub."]
    }
  },
  web: {
    name: "Web developer",
    blurb: "Websites that look good and work everywhere",
    questions: [
      { q: "Which tag gives the most important heading?", o: ["<h1>", "<head>", "<header>"], why: "Easy to mix up, but <head> holds metadata and <header> is a page region." },
      { q: "Which CSS property changes text colour?", o: ["color", "font-style", "text-align"], why: "background-color is for the background." },
      { q: "What does the viewport meta tag help with?", o: ["Making the page scale properly on phones", "Search ranking only", "Loading images faster"], why: "Without it, phones show a shrunken desktop layout." },
      { q: "In JavaScript, what is the difference with '==='?", o: ["It compares without converting types", "It assigns a value", "Nothing, same as =="], why: "5 == '5' is true, but 5 === '5' is false." },
      { q: "Which element is meant for navigation links?", o: ["<nav>", "<div>", "<span>"], why: "Semantic tags help screen readers and SEO." },
      { q: "What does a Lighthouse report check?", o: ["Performance, accessibility and SEO of a page", "Your Git history", "Server hardware"], why: "It's built into Chrome DevTools." }
    ],
    steps: {
      beginner: ["Finish a solid HTML and CSS course and rebuild 3 sites you like.", "Learn responsive design: media queries, flexbox, grid.", "Start JavaScript with small DOM tasks (buttons, forms, toggles)."],
      intermediate: ["Learn accessibility basics and test every page with Lighthouse.", "Pick up a framework (React or Vue) and Tailwind or Sass.", "Build a portfolio with 4 polished pages and deploy it."],
      pro: ["Learn performance tuning: image formats, lazy loading, bundlers.", "Add animation and design systems to your work.", "Take on freelance or open source frontend tasks."]
    }
  },
  game: {
    name: "Game developer",
    blurb: "Engines, physics, and making things playable",
    questions: [
      { q: "What does a game loop do on every frame?", o: ["Handles input, updates the world, draws it", "Compiles the code again", "Uploads the save file"], why: "Almost every game is this three-step cycle." },
      { q: "Why is delta time used for movement?", o: ["So speed is the same on any frame rate", "To make the game run faster", "To save memory"], why: "Without it, a 144 Hz player moves faster than a 60 Hz player." },
      { q: "What is Unreal Engine's visual scripting system called?", o: ["Blueprints", "Shader Graph", "Playmaker"], why: "Blueprints and C++ are the two main ways to script in Unreal." },
      { q: "What does collision detection check?", o: ["Whether two objects overlap", "How many polygons a model has", "The game's frame rate"], why: "Bounding boxes and spheres are the cheap first check." },
      { q: "What is the length of a normalized vector?", o: ["1", "0", "10"], why: "Normalizing keeps the direction and sets the length to 1." },
      { q: "What is object pooling for?", o: ["Reusing objects instead of constantly creating and destroying them", "Compressing textures", "Syncing multiplayer"], why: "It avoids lag spikes from memory allocation, for example with bullets." }
    ],
    steps: {
      beginner: ["Pick one engine (Unity with C#, or Unreal with Blueprints) and finish its official beginner tutorial.", "Make 2 tiny games: Pong and a simple platformer.", "Learn basic vector maths: position, direction, speed."],
      intermediate: ["Learn the engine's physics, animation and UI systems properly.", "Build one complete small game with a menu, score and win or lose state.", "Publish it on itch.io and ask for feedback."],
      pro: ["Go deeper: C++ in Unreal, shaders, or AI behaviour trees.", "Join a game jam (Global Game Jam, itch.io jams) with a team.", "Build a portfolio with 2 or 3 polished playable demos."]
    }
  },
  devops: {
    name: "DevOps engineer",
    blurb: "Servers, pipelines and keeping things running",
    questions: [
      { q: "Which Linux command lists files in a folder?", o: ["ls", "cd", "rm"], why: "cd moves around, rm deletes." },
      { q: "What does CI stand for?", o: ["Continuous Integration", "Code Inspection", "Central Install"], why: "Code is built and tested automatically on every push." },
      { q: "Compared with a virtual machine, a Docker container...", o: ["Shares the host's kernel and is lighter", "Includes a full separate OS", "Needs special hardware"], why: "That's why containers start in seconds." },
      { q: "Which file describes how to build a Docker image?", o: ["Dockerfile", "docker.json", "image.yml"], why: "Each line in a Dockerfile adds a layer." },
      { q: "What does 'infrastructure as code' mean?", o: ["Describing servers and networks in versioned files", "Writing code on the server directly", "Using only cloud dashboards"], why: "Terraform and CloudFormation are common tools for this." },
      { q: "What does a load balancer do?", o: ["Spreads traffic across several servers", "Compresses your database", "Encrypts source code"], why: "It also keeps the site up if one server dies." }
    ],
    steps: {
      beginner: ["Get comfortable with the Linux command line: files, permissions, processes.", "Learn Git and GitHub properly, including branches.", "Learn basic networking: IP, DNS, HTTP, ports."],
      intermediate: ["Learn Docker and containerise one of your own projects.", "Set up a CI pipeline with GitHub Actions that tests and deploys on push.", "Get started with one cloud (AWS free tier is a good place)."],
      pro: ["Learn Kubernetes basics and Terraform.", "Add monitoring (Prometheus, Grafana) to a running project.", "Look at AWS or Azure entry certifications."]
    }
  }
};

const LEVELS = {
  beginner: { label: "Beginner", text: "You're at the start of this path, which is a good place to be. You know some of the ideas, and the rest is just practice." },
  intermediate: { label: "Intermediate", text: "You've got a real base here. A few gaps remain, and filling them is what moves you up." },
  pro: { label: "Pro", text: "You know this path well for your stage. Now it's about proving it with projects and real work." }
};

// ---------- SMALL HELPERS ----------
const $ = (id) => document.getElementById(id);
const store = {
  get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* storage blocked, app still works */ } }
};
const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

function show(view) {
  ["home", "quiz", "result"].forEach((v) => { $("view-" + v).hidden = v !== view; });
  window.scrollTo(0, 0);
}

// ---------- STATE ----------
let user = store.get("skillpath_user", null);
let results = store.get("skillpath_results", {}); // { pathKey: [{level, score, date}] }
let current = null; // { key, order, index, score, answered }

// ---------- HOME ----------
function renderHome() {
  show("home");
  $("loginForm").hidden = !!user;
  $("pathsWrap").hidden = !user;
  $("whoami").hidden = !user;
  if (!user) return;

  $("whoName").textContent = user;
  $("greeting").textContent = "Hi " + user + ", pick a path to test yourself on";

  const trail = $("trail");
  trail.innerHTML = "";
  Object.entries(PATHS).forEach(([key, p]) => {
    const last = (results[key] || []).slice(-1)[0];
    const li = document.createElement("li");
    if (last) li.className = "done";
    const btn = document.createElement("button");
    btn.className = "pathbtn";
    btn.innerHTML = "<strong></strong><small></small>";
    btn.querySelector("strong").textContent = p.name;
    btn.querySelector("small").textContent = p.blurb;
    if (last) {
      const b = document.createElement("span");
      b.className = "badge";
      b.textContent = "Last result: " + LEVELS[last.level].label;
      btn.querySelector("strong").appendChild(b);
    }
    btn.addEventListener("click", () => startQuiz(key));
    li.appendChild(btn);
    trail.appendChild(li);
  });

  const all = Object.entries(results).flatMap(([k, list]) => list.map((r) => ({ ...r, k })));
  $("history").hidden = all.length === 0;
  $("historyList").innerHTML = "";
  all.sort((a, b) => b.date - a.date).slice(0, 5).forEach((r) => {
    const li = document.createElement("li");
    li.textContent = PATHS[r.k].name + ": " + LEVELS[r.level].label + " (" + r.score + "/" + PATHS[r.k].questions.length + "), " + new Date(r.date).toLocaleDateString();
    $("historyList").appendChild(li);
  });
}

$("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("nameInput").value.trim();
  if (!name) return;
  user = name;
  store.set("skillpath_user", user);
  renderHome();
});

$("logout").addEventListener("click", () => {
  if (!confirm("Log out? Your saved results will be cleared from this browser.")) return;
  user = null; results = {};
  try { localStorage.removeItem("skillpath_user"); localStorage.removeItem("skillpath_results"); } catch {}
  renderHome();
});

$("logo").addEventListener("click", (e) => { e.preventDefault(); renderHome(); });

// ---------- QUIZ ----------
function startQuiz(key) {
  current = { key, index: 0, score: 0, answered: false };
  show("quiz");
  renderQuestion();
}

function renderQuestion() {
  const path = PATHS[current.key];
  const item = path.questions[current.index];
  const total = path.questions.length;
  current.answered = false;

  $("progress").textContent = path.name + ", question " + (current.index + 1) + " of " + total;
  $("barFill").style.width = (current.index / total) * 100 + "%";
  $("question").textContent = item.q;
  $("feedback").hidden = true;
  $("nextBtn").hidden = true;
  $("nextBtn").textContent = current.index === total - 1 ? "See my result" : "Next question";

  const box = $("options");
  box.innerHTML = "";
  shuffle(item.o.map((text, i) => ({ text, correct: i === 0 }))).forEach((opt) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.textContent = opt.text;
    b.addEventListener("click", () => answer(b, opt.correct));
    box.appendChild(b);
  });
}

function answer(btn, correct) {
  if (current.answered) return;
  current.answered = true;
  const item = PATHS[current.key].questions[current.index];
  if (correct) current.score++;
  [...$("options").children].forEach((b) => {
    b.disabled = true;
    if (b.textContent === item.o[0]) b.classList.add("right");
  });
  if (!correct) btn.classList.add("wrong");
  $("feedback").textContent = (correct ? "Correct. " : "Not quite. ") + item.why;
  $("feedback").hidden = false;
  $("nextBtn").hidden = false;
  $("nextBtn").focus();
}

$("nextBtn").addEventListener("click", () => {
  const total = PATHS[current.key].questions.length;
  current.index++;
  if (current.index >= total) finish(); else renderQuestion();
});

$("quitQuiz").addEventListener("click", renderHome);

// ---------- RESULT ----------
function finish() {
  const { key, score } = current;
  const total = PATHS[key].questions.length;
  const level = score <= 2 ? "beginner" : score <= 4 ? "intermediate" : "pro";

  results[key] = [...(results[key] || []), { level, score, date: Date.now() }];
  store.set("skillpath_results", results);

  $("resPath").textContent = PATHS[key].name + ": you scored " + score + " out of " + total;
  $("resLevel").innerHTML = "You're at <span></span> level";
  $("resLevel").querySelector("span").textContent = LEVELS[level].label;
  $("resText").textContent = LEVELS[level].text;
  $("resSteps").innerHTML = "";
  PATHS[key].steps[level].forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    $("resSteps").appendChild(li);
  });
  show("result");
}

$("retake").addEventListener("click", () => startQuiz(current.key));
$("otherPath").addEventListener("click", renderHome);

// ---------- START ----------
renderHome();
