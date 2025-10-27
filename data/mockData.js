const titles = [
  "Come imparare React in 30 giorni",
  "Tutorial completo JavaScript 2024",
  "Le migliori ricette italiane",
  "Viaggiare low cost in Europa",
  "Gaming: trucchi e segreti",
  "Fitness a casa senza attrezzi",
  "Storia dell'arte moderna",
  "Programmazione Python per principianti",
  "Fotografia: guida completa",
  "Musica elettronica tutorial",
  "Come investire nel 2024",
  "Cucina vegana facile",
  "Laravel vs Django confronto",
  "Disegno digitale per iniziare",
  "Marketing sui social media",
  "Giardinaggio urbano",
  "Film da vedere assolutamente",
  "Allenamento HIIT 20 minuti",
  "Meditazione guidata rilassante",
  "Come creare un podcast",
];

const channels = [
  "TechMaster",
  "CucinaItaliana",
  "TravelVlog",
  "CodeAcademy",
  "FitnessLife",
  "ArtChannel",
  "GamerPro",
  "MusicStudio",
  "FinanceGuru",
  "HealthyLiving",
  "DevTutorials",
  "CreativeHub",
];

function formatViews(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num.toString();
}

function getRandomDate() {
  const days = Math.floor(Math.random() * 365);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
}

const videoPool = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: titles[i % titles.length] + `#${Math.floor(i / titles.length) + 1}`,
  thumbnail: `https://picsum.photos/320/180?random=${i}`,
  channel: channels[i % channels.length],
  channelAvatar: `https://i.pravatar.cc/150?img=${(i % channels.length) + 1}`,
  views: formatViews(Math.floor(Math.random() * 5000000)),
  uploadDate: getRandomDate(),
  duration: `${Math.floor(Math.random() * 20) + 1}:${String(
    Math.floor(Math.random() * 60)
  ).padStart(2, "0")}`,
  description: `Questo è un video interessante su ${titles[
    i % titles.length
  ].toLowerCase()}. Contenuto di qualità per imparare e divertirsi.`,
  likes: formatViews(Math.floor(Math.random() * 100000)),
  subscribers: formatViews(Math.floor(Math.random() * 1000000)),
}));

module.exports = { videoPool };
