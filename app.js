"use strict";

const questions = [
  {category:"SHIS", icon:"🧭", level:"Fondamentaux", page:3, q:"À quoi sert principalement la codification SHIS ?", choices:["Identifier sans ambiguïté les jeux de direction","Mesurer l'usure d'une chaîne","Définir la largeur d'un pneu","Classer les types de freins"], answer:"Identifier sans ambiguïté les jeux de direction", why:"Le SHIS est un système universel qui décrit précisément les interfaces du jeu de direction et évite les anciennes appellations ambiguës."},
  {category:"SHIS", icon:"🧭", level:"Fondamentaux", page:3, q:"Dans le code ZS44/28.6, que signifie « ZS » ?", choices:["Zero Stack","Zone Standard","Zéro Serrage","Zinc Steel"], answer:"Zero Stack", why:"ZS signifie Zero Stack : la coupelle est interne, à épaulement, et affleure le cadre."},
  {category:"SHIS", icon:"🧭", level:"Atelier", page:3, q:"Quel type SHIS désigne un logement usiné dans le cadre, sans coupelle ?", choices:["IS","EC","TH","ACB"], answer:"IS", why:"IS, pour Integrated Stack, indique que le roulement prend place dans un logement directement usiné dans le cadre."},
  {category:"SHIS", icon:"🧭", level:"Atelier", page:3, q:"Dans un code SHIS, le nombre placé après la barre oblique correspond à…", choices:["Le diamètre du pivot de fourche","La hauteur de la potence","Le diamètre de la roue","Le couple de serrage"], answer:"Le diamètre du pivot de fourche", why:"Le format est : type + diamètre du logement cadre / diamètre du pivot de fourche."},
  {category:"SHIS", icon:"🧭", level:"Expert", page:3, q:"Quel code décrit un jeu intégré pur souvent rencontré sur des cadres haut de gamme ?", choices:["IS42/28.6 | IS52/40","EC34/28.6 | EC34/30","ZS44/28.6 | EC49/40","TH44/28.6 | MH49/40"], answer:"IS42/28.6 | IS52/40", why:"Le guide cite IS42/28.6 | IS52/40 comme montage intégré pur sur cadres haut de gamme."},
  {category:"SHIS", icon:"🧭", level:"Atelier", page:3, q:"Quel diamètre réel correspond à un pivot de 1\"1/8 ?", choices:["28,6 mm","22,2 mm","31,8 mm","38,1 mm"], answer:"28,6 mm", why:"Le pivot 1\"1/8 mesure 28,6 mm ; c'est le standard moderne courant en route et VTT."},

  {category:"ETRTO", icon:"◉", level:"Fondamentaux", page:4, q:"Que décrit le code ETRTO 37-622 ?", choices:["Un pneu de 37 mm sur un siège de jante de 622 mm","Une jante de 37 pouces et un pneu de 622 g","Une pression de 3,7 bar pour une roue de 622 mm","Un pneu de 622 mm de large sur une jante de 37 mm"], answer:"Un pneu de 37 mm sur un siège de jante de 622 mm", why:"Le premier nombre est la largeur du pneu en millimètres, le second le diamètre de siège de jante (BSD)."},
  {category:"ETRTO", icon:"◉", level:"Fondamentaux", page:4, q:"Quel BSD correspond au 700C, très courant en route et gravel ?", choices:["622 mm","584 mm","559 mm","630 mm"], answer:"622 mm", why:"Le 700C, aussi appelé 28 pouces dans certains usages, possède un BSD de 622 mm."},
  {category:"ETRTO", icon:"◉", level:"Atelier", page:4, q:"Quel BSD correspond au 650B / 27,5 pouces ?", choices:["584 mm","559 mm","507 mm","451 mm"], answer:"584 mm", why:"Le 650B, commercialement appelé 27,5 pouces en VTT, correspond au diamètre ETRTO 584 mm."},
  {category:"ETRTO", icon:"◉", level:"Atelier", page:4, q:"Pour une jante de 19 à 21 mm de largeur intérieure, quelle plage de pneu est recommandée ?", choices:["35 à 50 mm","18 à 25 mm","23 à 32 mm","55 mm et plus"], answer:"35 à 50 mm", why:"Le tableau de compatibilité du guide recommande des pneus de 35 à 50 mm sur une jante interne de 19 à 21 mm."},
  {category:"ETRTO", icon:"◉", level:"Fondamentaux", page:4, q:"Quelle largeur de pneu est typique du VTT XC / trail ?", choices:["50 à 65 mm","18 à 25 mm","28 à 35 mm","80 mm et plus"], answer:"50 à 65 mm", why:"Le guide associe 50 à 65 mm au VTT XC / trail, et 65 à 80 mm à l'enduro / all-mountain."},
  {category:"ETRTO", icon:"◉", level:"Piège", page:5, q:"Pourquoi l'appellation « 26 pouces » ne suffit-elle pas pour choisir un pneu ?", choices:["Elle peut désigner plusieurs BSD incompatibles","Elle indique uniquement la pression maximale","Elle ne s'applique qu'aux vélos enfants","Elle mesure la largeur et non le diamètre"], answer:"Elle peut désigner plusieurs BSD incompatibles", why:"Sous le nom 26 pouces se cachent notamment les BSD 559, 571, 584 et 507 : seul le code ETRTO lève l'ambiguïté."},
  {category:"ETRTO", icon:"◉", level:"Expert", page:5, q:"Un ancien « 26 pouces hollandais » possède en réalité quel BSD ?", choices:["584 mm","559 mm","571 mm","507 mm"], answer:"584 mm", why:"Le 26 pouces hollandais du guide est en 584 mm, soit le même diamètre de siège que le 650B."},

  {category:"Pédalier", icon:"⚙", level:"Fondamentaux", page:6, q:"Quel est le rôle principal du pédalier ?", choices:["Transformer la force musculaire en rotation transmise à la chaîne","Maintenir la roue avant alignée","Absorber les vibrations du cadre","Régler automatiquement les vitesses"], answer:"Transformer la force musculaire en rotation transmise à la chaîne", why:"Le pédalier convertit l'effort du cycliste en mouvement rotatif, ensuite transmis à la chaîne."},
  {category:"Pédalier", icon:"⚙", level:"Atelier", page:6, q:"Quelle particularité distingue Hollowtech II ?", choices:["L'axe est intégré à la manivelle droite","Il utilise un axe carré en acier","Il possède dix cannelures","Il impose un boîtier italien"], answer:"L'axe est intégré à la manivelle droite", why:"Sur Hollowtech II, l'axe est solidaire de la manivelle droite et les roulements sont logés dans le boîtier."},
  {category:"Pédalier", icon:"⚙", level:"Expert", page:6, q:"Quel est le diamètre d'axe du standard SRAM DUB ?", choices:["28,99 mm","24 mm","30 mm","22,2 mm"], answer:"28,99 mm", why:"Le DUB utilise un axe de 28,99 mm, standardisé sur la gamme SRAM actuelle."},
  {category:"Pédalier", icon:"⚙", level:"Fondamentaux", page:6, q:"Quel profil de dents aide à retenir la chaîne sur un mono-plateau ?", choices:["Narrow-Wide","Flat-Top","Micro-Spline","Centerlock"], answer:"Narrow-Wide", why:"L'alternance de dents larges et fines du profil Narrow-Wide améliore la rétention de chaîne en mono-plateau."},
  {category:"Pédalier", icon:"⚙", level:"Atelier", page:6, q:"Quel BCD est courant sur un pédalier VTT classique à 4 trous ?", choices:["104 mm","130 mm","110 mm","64 mm uniquement"], answer:"104 mm", why:"Le BCD 104 mm à 4 trous est un classique du VTT ; le 64 mm est souvent associé au petit plateau."},
  {category:"Pédalier", icon:"⚙", level:"Atelier", page:7, q:"Quel standard de boîtier est fileté en G 1,37\" × 24 tpi ?", choices:["BSA / English","ITA","T47","PF30"], answer:"BSA / English", why:"Le BSA, standard fileté le plus répandu, emploie le filetage G 1,37 pouce × 24 tpi."},
  {category:"Pédalier", icon:"⚙", level:"Piège", page:7, q:"Dans quel sens serre-t-on la pédale gauche ?", choices:["Dans le sens anti-horaire","Dans le sens horaire","Dans les deux sens selon le cadre","Sans rotation, par pression"], answer:"Dans le sens anti-horaire", why:"La manivelle gauche possède un filetage inversé : on serre donc la pédale dans le sens anti-horaire."},
  {category:"Pédalier", icon:"⚙", level:"Fondamentaux", page:7, q:"Quel est l'avantage principal d'un boîtier fileté face au press-fit selon le guide ?", choices:["Fiabilité et facilité de montage","Poids toujours inférieur","Aucune maintenance nécessaire","Compatibilité avec tous les axes"], answer:"Fiabilité et facilité de montage", why:"Le fileté privilégie la fiabilité et la facilité de montage, au prix d'un léger surpoids."},

  {category:"VAE", icon:"🔋", level:"Fondamentaux", page:9, q:"En Union européenne, à quelle vitesse l'assistance d'un VAE standard doit-elle se couper ?", choices:["25 km/h","20 km/h","32 km/h","45 km/h"], answer:"25 km/h", why:"Un VAE standard doit assister uniquement au pédalage, rester à 250 W continus maximum et couper l'assistance au-delà de 25 km/h."},
  {category:"VAE", icon:"🔋", level:"Fondamentaux", page:9, q:"Quelle est la puissance moteur continue maximale d'un VAE standard dans l'UE ?", choices:["250 W","500 W","750 W","1 000 W"], answer:"250 W", why:"La limite réglementaire indiquée dans le guide est de 250 W en puissance continue."},
  {category:"VAE", icon:"🔋", level:"Atelier", page:9, q:"Quel capteur offre l'assistance la plus progressive et naturelle ?", choices:["Le capteur de couple","Le capteur de cadence seul","Le capteur de vitesse de roue","Le capteur de température"], answer:"Le capteur de couple", why:"Le capteur de couple mesure la force sur les pédales et module l'assistance en conséquence."},
  {category:"VAE", icon:"🔋", level:"Fondamentaux", page:9, q:"Quel indicateur décrit le mieux la quantité d'énergie disponible dans une batterie ?", choices:["Les watt-heures (Wh)","Les volts (V) seuls","Les ampères (A) instantanés","Les newtons-mètres (N·m)"], answer:"Les watt-heures (Wh)", why:"Les Wh combinent tension et capacité et constituent le vrai indicateur énergétique lié à l'autonomie."},
  {category:"VAE", icon:"🔋", level:"Atelier", page:9, q:"Quel avantage caractérise un moteur pédalier (mid-drive) ?", choices:["Il profite des rapports de transmission","Il n'use jamais la chaîne","Il fonctionne sans contrôleur","Il rend la roue avant motrice"], answer:"Il profite des rapports de transmission", why:"Le moteur pédalier travaille avec la transmission, donne un comportement naturel et une bonne répartition du poids, mais accroît l'usure de la chaîne."},
  {category:"VAE", icon:"🔋", level:"Entretien", page:10, q:"Pour un stockage longue durée, quelle charge de batterie est conseillée ?", choices:["Entre 50 et 80 %","Toujours exactement 100 %","Moins de 5 %","Peu importe si elle reste branchée"], answer:"Entre 50 et 80 %", why:"Le guide conseille 50 à 80 % pour limiter le vieillissement pendant un stockage prolongé."},
  {category:"VAE", icon:"🔋", level:"Entretien", page:10, q:"Sur un VAE à moteur pédalier, chaîne et cassette s'usent généralement…", choices:["2 à 3 fois plus vite","Deux fois moins vite","À la même vitesse qu'un vélo musculaire","Uniquement quand le moteur est coupé"], answer:"2 à 3 fois plus vite", why:"Le couple moteur traverse la transmission ; le guide estime l'usure 2 à 3 fois plus rapide sur un mid-drive."},
  {category:"VAE", icon:"🔋", level:"Culture atelier", page:10, q:"Quel système moteur est décrit comme ultra-compact, avec 50 N·m pour 1,85 kg ?", choices:["TQ HPR50","Bosch Performance Line CX","Shimano EP8","Brose Drive S Mag"], answer:"TQ HPR50", why:"Le TQ HPR50 est cité pour son format ultra-compact : 50 N·m et 1,85 kg."},

  {category:"Électricité", icon:"ϟ", level:"Calcul", page:11, q:"Quelle formule relie puissance, tension et intensité ?", choices:["P = U × I","P = U ÷ I","P = U + I","P = I ÷ U"], answer:"P = U × I", why:"La puissance en watts est le produit de la tension en volts par l'intensité en ampères."},
  {category:"Électricité", icon:"ϟ", level:"Calcul", page:11, q:"Quelle énergie stocke une batterie de 36 V et 14 Ah ?", choices:["504 Wh","360 Wh","672 Wh","50,4 Wh"], answer:"504 Wh", why:"E = U × C, donc 36 × 14 = 504 Wh."},
  {category:"Électricité", icon:"ϟ", level:"Expert", page:11, q:"À pleine charge, quelle tension atteint une batterie 36 V composée de 10 cellules en série (10S) ?", choices:["42 V","36 V","30 V","54,6 V"], answer:"42 V", why:"Chaque groupe atteint 4,2 V à pleine charge : 10 × 4,2 V = 42 V."},
  {category:"Électricité", icon:"ϟ", level:"Fondamentaux", page:12, q:"Que fait le contrôleur d'un moteur BLDC ?", choices:["Il convertit le courant continu en courant alternatif triphasé","Il transforme mécaniquement le couple en tension","Il recharge la batterie en permanence","Il remplace le capteur de pédalage"], answer:"Il convertit le courant continu en courant alternatif triphasé", why:"Le contrôleur alimente les bobinages du moteur BLDC en convertissant le courant continu de la batterie."},
  {category:"Électricité", icon:"ϟ", level:"Atelier", page:12, q:"À quoi sert la PWM dans un contrôleur VAE ?", choices:["À ajuster efficacement la puissance par impulsions","À équilibrer mécaniquement la roue","À mesurer la pression des pneus","À refroidir directement les cellules"], answer:"À ajuster efficacement la puissance par impulsions", why:"La modulation de largeur d'impulsion fait varier la durée des impulsions pour régler précisément la puissance sans pertes résistives inutiles."},
  {category:"Électricité", icon:"ϟ", level:"Entretien", page:12, q:"Quelle fonction du BMS protège une cellule qui dépasse 4,2 V ?", choices:["La protection contre la surcharge","La protection contre la décharge profonde","Le calcul de cadence","La modulation PWM"], answer:"La protection contre la surcharge", why:"Le BMS coupe la charge lorsqu'une cellule dépasse 4,2 V ; il gère aussi équilibrage, température et décharge profonde."},

  {category:"Serrage", icon:"🔧", level:"Atelier", page:13, q:"Quel couple générique est indiqué pour des pédales à filetage standard ?", choices:["35 à 40 N·m","4 à 6 N·m","12 à 14 N·m","2 à 4 N·m"], answer:"35 à 40 N·m", why:"Le guide indique 35 à 40 N·m pour les pédales. Les préconisations du fabricant restent prioritaires."},
  {category:"Serrage", icon:"🔧", level:"Atelier", page:13, q:"Quel couple est indiqué pour un axe traversant ?", choices:["12 à 15 N·m","2 à 4 N·m","35 à 50 N·m","5 à 7 N·m"], answer:"12 à 15 N·m", why:"La valeur générique fournie pour un thru-axle est de 12 à 15 N·m."},
  {category:"Serrage", icon:"🔧", level:"Atelier", page:13, q:"Quel couple est indiqué pour les six vis d'un rotor de disque ?", choices:["2 à 4 N·m","6 à 8 N·m","12 à 15 N·m","40 à 50 N·m"], answer:"2 à 4 N·m", why:"Les vis d'un rotor 6 boulons se serrent à 2 à 4 N·m selon le tableau du guide."},
  {category:"Serrage", icon:"🔧", level:"Expert", page:14, q:"Quel couple Shimano est indiqué pour le capuchon de précontrainte Hollowtech II ?", choices:["0,5 à 1,5 N·m, à la main","12 à 14 N·m","35 à 50 N·m","5 à 7 N·m"], answer:"0,5 à 1,5 N·m, à la main", why:"Ce capuchon règle seulement la précharge : le guide Shimano indique 0,5 à 1,5 N·m, à la main."},
  {category:"Serrage", icon:"🔧", level:"Sécurité", page:13, q:"Quelle précaution est recommandée pour les pièces en carbone ?", choices:["Couple réduit, pâte carbone et clé dynamométrique","Graissage abondant et serrage maximal","Montage à sec sans contrôle de couple","Utilisation systématique d'un frein-filet fort"], answer:"Couple réduit, pâte carbone et clé dynamométrique", why:"Le guide rappelle des couples souvent réduits (2 à 4 N·m), l'emploi d'une pâte de montage carbone et d'une clé dynamométrique."}
];

const categoryNames = {SHIS:"Direction · SHIS", ETRTO:"Roues · ETRTO", "Pédalier":"Pédalier", VAE:"VAE", "Électricité":"Électricité", "Serrage":"Couples de serrage"};
const $ = (id) => document.getElementById(id);
const screens = {home:$("screen-home"), quiz:$("screen-quiz"), result:$("screen-result")};
let selectedCategory = "Toutes";
let selectedCount = 20;
let round = [];
let index = 0;
let score = 0;
let correct = 0;
let streak = 0;
let topStreak = 0;
let answered = false;
let missed = [];

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => el.classList.toggle("hidden", key !== name));
  window.scrollTo({top:0, behavior:"smooth"});
}

function availableQuestions() {
  return selectedCategory === "Toutes" ? questions : questions.filter(q => q.category === selectedCategory);
}

function updateAvailability() {
  const total = availableQuestions().length;
  $("question-availability").textContent = `${total} question${total > 1 ? "s" : ""} disponible${total > 1 ? "s" : ""} · réponses expliquées`;
  document.querySelectorAll("[data-count]").forEach(btn => {
    const count = Number(btn.dataset.count);
    btn.disabled = count > total && count !== 10;
    btn.title = count > total && count !== 10 ? `Seulement ${total} questions dans ce thème` : "";
  });
  if (selectedCount > total) {
    selectedCount = 10;
    document.querySelectorAll("[data-count]").forEach(btn => btn.classList.toggle("selected", Number(btn.dataset.count) === 10));
  }
}

function begin(customRound = null) {
  round = customRound ? shuffle(customRound) : shuffle(availableQuestions()).slice(0, Math.min(selectedCount, availableQuestions().length));
  index = score = correct = streak = topStreak = 0;
  missed = [];
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const item = round[index];
  $("progress-label").textContent = `Question ${index + 1} / ${round.length}`;
  $("category-label").textContent = categoryNames[item.category];
  $("progress-bar").style.width = `${(index / round.length) * 100}%`;
  $("question-icon").textContent = item.icon;
  $("difficulty").textContent = item.level;
  $("question-text").textContent = item.q;
  $("score").textContent = score.toLocaleString("fr-FR");
  $("streak").textContent = streak;
  $("feedback").classList.add("hidden");
  $("feedback").classList.remove("is-wrong");
  $("next-btn").classList.add("hidden");
  const answers = $("answers");
  answers.innerHTML = "";
  shuffle(item.choices).forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "answer-btn";
    btn.dataset.choice = choice;
    btn.innerHTML = `<span class="answer-key">${i + 1}</span><span></span>`;
    btn.lastElementChild.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(btn, choice));
    answers.appendChild(btn);
  });
}

function selectAnswer(button, choice) {
  if (answered) return;
  answered = true;
  const item = round[index];
  const isCorrect = choice === item.answer;
  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.choice === item.answer) btn.classList.add("correct");
    else if (btn === button) btn.classList.add("wrong");
    else btn.classList.add("dimmed");
  });
  if (isCorrect) {
    correct += 1;
    streak += 1;
    topStreak = Math.max(topStreak, streak);
    score += 100 + Math.min((streak - 1) * 20, 100);
    $("feedback-title").textContent = streak >= 3 ? `Bien vu ! Série de ${streak} 🔥` : "Bonne réponse !";
    $("streak-wrap").classList.add("bump");
    setTimeout(() => $("streak-wrap").classList.remove("bump"), 220);
  } else {
    missed.push(item);
    streak = 0;
    $("feedback-title").textContent = `Pas tout à fait — réponse : ${item.answer}`;
    $("feedback").classList.add("is-wrong");
  }
  $("score").textContent = score.toLocaleString("fr-FR");
  $("streak").textContent = streak;
  $("feedback-text").textContent = item.why;
  $("source-ref").textContent = `Source : Guide Technique Vélo, page ${item.page}.`;
  $("feedback").classList.remove("hidden");
  $("next-btn").textContent = index === round.length - 1 ? "Voir mes résultats →" : "Question suivante →";
  $("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  if (!answered) return;
  if (index < round.length - 1) {
    index += 1;
    renderQuestion();
  } else showResults();
}

function showResults() {
  const percent = Math.round((correct / round.length) * 100);
  const best = Math.max(readBestScore(), score);
  try { localStorage.setItem("veloquiz-best", String(best)); } catch (_) { /* Le quiz reste utilisable si le stockage local est bloqué. */ }
  updateBestScore();
  let title, message, emoji;
  if (percent >= 90) { title = "Maître mécano !"; message = "Tu connais le guide sur le bout de la clé dynamométrique."; emoji = "🏆"; }
  else if (percent >= 70) { title = "Belle mécanique !"; message = "Les bases sont solides. Quelques tours de clé et ce sera parfait."; emoji = "🚲"; }
  else if (percent >= 50) { title = "Ça roule !"; message = "Une bonne sortie d'entraînement. Revois tes erreurs pour consolider les réglages."; emoji = "🔧"; }
  else { title = "Retour à l'atelier"; message = "Chaque erreur est un réglage de plus dans ta boîte à outils. On repart ?"; emoji = "🛠️"; }
  $("result-title").textContent = title;
  $("result-message").textContent = message;
  $("result-emoji").textContent = emoji;
  $("result-percent").textContent = `${percent}%`;
  $("score-ring").style.background = `conic-gradient(var(--green) 0deg ${percent * 3.6}deg, #e1e2d9 ${percent * 3.6}deg 360deg)`;
  $("correct-count").textContent = `${correct}/${round.length}`;
  $("result-score").textContent = score.toLocaleString("fr-FR");
  $("best-streak").textContent = topStreak;
  $("retry-missed-btn").disabled = missed.length === 0;
  $("retry-missed-btn").textContent = missed.length ? `Revoir mes erreurs (${missed.length})` : "Aucune erreur !";
  showScreen("result");
}

function updateBestScore() {
  const best = readBestScore();
  $("best-score").textContent = best ? best.toLocaleString("fr-FR") : "—";
}

function readBestScore() {
  try { return Number(localStorage.getItem("veloquiz-best") || 0); }
  catch (_) { return 0; }
}

document.querySelectorAll("[data-category]").forEach(btn => btn.addEventListener("click", () => {
  selectedCategory = btn.dataset.category;
  document.querySelectorAll("[data-category]").forEach(b => b.classList.toggle("selected", b === btn));
  updateAvailability();
}));
document.querySelectorAll("[data-count]").forEach(btn => btn.addEventListener("click", () => {
  if (btn.disabled) return;
  selectedCount = Number(btn.dataset.count);
  document.querySelectorAll("[data-count]").forEach(b => b.classList.toggle("selected", b === btn));
}));
$("start-btn").addEventListener("click", () => begin());
$("next-btn").addEventListener("click", nextQuestion);
$("quit-btn").addEventListener("click", () => showScreen("home"));
$("restart-btn").addEventListener("click", () => showScreen("home"));
$("retry-missed-btn").addEventListener("click", () => { if (missed.length) begin([...missed]); });
document.querySelector(".brand").addEventListener("click", event => { event.preventDefault(); showScreen("home"); });
document.addEventListener("keydown", event => {
  if (!screens.quiz.classList.contains("hidden")) {
    if (!answered && ["1","2","3","4"].includes(event.key)) document.querySelectorAll(".answer-btn")[Number(event.key) - 1]?.click();
    else if (answered && event.key === "Enter") nextQuestion();
  }
});

updateBestScore();
updateAvailability();
