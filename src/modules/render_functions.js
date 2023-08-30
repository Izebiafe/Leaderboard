const appendLeaderboardUl = (name, score) => {
  const ulLeaderboard = document.getElementById('leaderboard');
  const liLeaders = document.createElement('li');
  liLeaders.className = 'leaders';
  liLeaders.textContent = `${name}: ${score}`;
  ulLeaderboard.appendChild(liLeaders);
};

const leaders = [
  {
    name: 'John Doe',
    score: 85,
  },
  {
    name: 'Cameron Brown',
    score: 76,
  },
  {
    name: 'Folden Smith',
    score: 50,
  },
  {
    name: 'Boston Doe',
    score: 65,
  },
  {
    name: 'Camila Brown',
    score: 25,
  },
];

const renderUI = () => {
  leaders.forEach((leader) => {
    appendLeaderboardUl(leader.name, leader.score);
  });
};

export default renderUI;