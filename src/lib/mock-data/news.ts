import type { NewsArticle } from "./types"

export const newsArticles: NewsArticle[] = [
  {
    kind: "news",
    id: "news-tech-01",
    category: "technology",
    source: "Tech Startups",
    headline: "Meta releases a 30 billion parameter agent that runs on a single GPU",
    summary:
      "The open release lands as Intel raises fifteen billion dollars to chase the same local AI push, with memory shortages now spilling into consumer hardware prices.",
    imageUrl: "https://picsum.photos/seed/tech-meta-agent/640/400",
    publishedAt: "2026-08-10T09:00:00Z",
    url: "https://techstartups.com",
  },
  {
    kind: "news",
    id: "news-tech-02",
    category: "technology",
    source: "Tech Startups",
    headline: "Big tech AI purchase commitments approach one and a half trillion dollars",
    summary:
      "Chipmakers, cloud providers, and robotaxi operators are all racing to scale at once, with Uber and Pony.ai preparing thousands of autonomous vehicles for European roads.",
    imageUrl: "https://picsum.photos/seed/tech-spend/640/400",
    publishedAt: "2026-08-14T07:30:00Z",
    url: "https://techstartups.com",
  },
  {
    kind: "news",
    id: "news-tech-03",
    category: "technology",
    source: "Ars Technica",
    headline: "Coding agents are getting less human oversight by default",
    summary:
      "A major AI lab is switching its coding agent's autonomous mode on for most users going forward, reshaping how much review a change gets before shipping.",
    imageUrl: "https://picsum.photos/seed/tech-agents/640/400",
    publishedAt: "2026-08-14T06:00:00Z",
    url: "https://arstechnica.com",
  },
  {
    kind: "news",
    id: "news-sports-01",
    category: "sports",
    source: "Associated Press",
    headline: "Timberwolves to retire Kevin Garnett's number this season",
    summary:
      "The ceremony is set for Minnesota's game against Boston, honoring the Hall of Fame forward's run with the franchise.",
    imageUrl: "https://picsum.photos/seed/sports-kg/640/400",
    publishedAt: "2026-08-14T12:00:00Z",
    url: "https://apnews.com",
  },
  {
    kind: "news",
    id: "news-sports-02",
    category: "sports",
    source: "Associated Press",
    headline: "All-Star Game confirmed to return to San Francisco",
    summary:
      "League officials confirmed the host city for an upcoming All-Star weekend, with planning already underway for surrounding events.",
    imageUrl: "https://picsum.photos/seed/sports-allstar/640/400",
    publishedAt: "2026-08-14T11:00:00Z",
    url: "https://apnews.com",
  },
  {
    kind: "news",
    id: "news-sports-03",
    category: "sports",
    source: "CNN Sport",
    headline: "MLB bullpen struggles pile up as playoff race tightens",
    summary:
      "Late-inning meltdowns are becoming a recurring storyline for one contender, with the manager running low on fresh arms and patience alike.",
    imageUrl: "https://picsum.photos/seed/sports-bullpen/640/400",
    publishedAt: "2026-08-14T10:15:00Z",
    url: "https://cnn.com/sport",
  },
  {
    kind: "news",
    id: "news-finance-01",
    category: "finance",
    source: "Yahoo Finance",
    headline: "Stocks slip from record highs as consumer sentiment cools",
    summary:
      "The S&P 500 pulled back after a fresh record close, with weaker retail sales and softer consumer confidence data weighing on the broader market.",
    imageUrl: "https://picsum.photos/seed/finance-slip/640/400",
    publishedAt: "2026-08-14T21:15:00Z",
    url: "https://finance.yahoo.com",
  },
  {
    kind: "news",
    id: "news-finance-02",
    category: "finance",
    source: "The Motley Fool",
    headline: "Long bond yields hit a twenty five year high at auction",
    summary:
      "A thirty year government bond sale cleared at its richest yield in decades, a sign investors want more compensation for holding long dated debt.",
    imageUrl: "https://picsum.photos/seed/finance-bonds/640/400",
    publishedAt: "2026-08-14T18:00:00Z",
    url: "https://fool.com",
  },
  {
    kind: "news",
    id: "news-finance-03",
    category: "finance",
    source: "TheStreet",
    headline: "Reddit set to join the S&P 500 next week",
    summary:
      "Shares jumped on the news as index funds prepare to add the social platform, while a fintech lender also rallied on a record quarterly profit.",
    imageUrl: "https://picsum.photos/seed/finance-reddit/640/400",
    publishedAt: "2026-08-14T16:45:00Z",
    url: "https://thestreet.com",
  },
]
