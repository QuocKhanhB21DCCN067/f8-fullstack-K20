const players = [
  { id: 1, name: "DragonSlayer", scores: [120, 85, 200, 95], level: 8, badge: "gold" },
  { id: 2, name: "NightWolf",    scores: [60, 75, 50],        level: 5, badge: null },
  { id: 3, name: "StarQueen",    scores: [300, 250, 180, 90, 120], level: 12, badge: "diamond" },
  { id: 4, name: "IronFist",     scores: [40, 30],             level: 2, badge: null },
  { id: 5, name: "ShadowBlade",  scores: [150, 200, 175],      level: 9, badge: "silver" },
];


// Hàm 1 
function getTotalScore(player) {
  const totalScore = player.scores.reduce((prev, curr) => {
    return prev + curr
  }, 0)

  return totalScore
}

// console.log(getTotalScore(players[0]));

// Hàm 2 
function getRanking(players) {
  const rankPlayers = players

  .map(player => {
    const totalScore = player.scores.reduce((prev, curr) => prev + curr, 0)
  
  return {
    name: player.name,
    totalScore: totalScore, 
    badge: player.badge || "none"
  }
  })

  .sort((a, b) => b.totalScore - a.totalScore)

  const finalRanking = rankPlayers
  .map((player, index) => {
    return {
      rank: index + 1,
      name: player.name,
      totalScore: player.totalScore, 
      badge: player.badge || "none"
    }
  })

  return finalRanking
}

// console.log(getRanking(players));


// Hàm 3
function getTopPlayers(players, n) {
  const topPlayer = getRanking(players)

  const topName = topPlayer
  .slice(0, n)
  .map(player => player.name)

  return topName
}

// console.log(getTopPlayers(players, 1));

// Hàm 4
function formatPlayerCard(player) {
  const playerRanking = getRanking(players)

  playerRanking.forEach(player => {
    let strBadge = ""
    if(player.badge === "diamond") strBagde = "💎 DIAMOND"
    else if (player.badge === "gold") strBagde = "🏅 GOLD"
    else if (player.badge === "silver") strBagde = "🥈 SILVER"
  })

  return `${player.name} | Lv.${player.level} | ${player.totalScore} điểm | ${strBagde}`

}

console.log(formatPlayerCard(players[0]));




