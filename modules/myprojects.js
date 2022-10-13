/* Store Projects in Javascript objects */
const projects = {
  MySpendings: {
    name: 'My Spendings',
    description: 'A Rails Mobile application that stores transactions (movements or spendings) in a database, organized in categories, allowing to administrate your budget, by calculating the totals for each category.',
    image: './img/myspendings1c.png',
    image2: './img/myspendings1c.png',
    technologies: ['CSS3', 'Rails', 'RSpec', 'Capybara'],
    linkLive: 'https://my-spendings-acolombo1.herokuapp.com/',
    linkSource: 'https://github.com/acolombo1/MySpendings',
  },
  PortfolioPage: {
    name: 'Portfolio Page Functional Example',
    description: 'A Microverse design done a project to hold the student\'s portfolio.',
    image: './img/portfolio.png',
    image2: './img/portfolio.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkLive: 'https://acolombo1.github.io/Portfolio/',
    linkSource: 'https://github.com/acolombo1/Portfolio/',
  },
  ToDoList: {
    name: 'To-Do List Web App',
    description: '"To Do List" is a simple yet powerful app that displays a list of tasks, and allows to add and remove them as well as mark them as done. For this application, we used local storage to save the data so that it is permanently stored in your browser.',
    image: './img/todolist.png',
    image2: './img/todolist.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Jest'],
    linkLive: 'https://acolombo1.github.io/todolist/dist/',
    linkSource: 'https://github.com/acolombo1/todolist/',
  },
  AwesomeBooks: {
    name: 'Awesome Books',
    description: '"Awesome books" is a simple website that displays a list of books and allows you to add and remove books from that list. For building this application, we used local storage to save the data of the books and we give it some interactivity using JavaScript. We also used a medium-fidelity wireframe to build the UI.',
    image: './img/awbooks.png',
    image2: './img/awbooks.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkLive: 'https://acolombo1.github.io/Aw-books3/',
    linkSource: 'https://github.com/acolombo1/Aw-books3/',
  },
  Capstone1: {
    name: 'FICA Football Tournament',
    description: 'FICA Tournament is an imaginary football event for which I copied the design and filled with my own data, on the main an about pages.',
    image: './img/fica.png',
    image2: './img/fica.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkLive: 'https://acolombo1.github.io/Capstone1/',
    linkSource: 'https://github.com/acolombo1/Capstone1/',
  },
  Leaderboard: {
    name: 'Leaderboard',
    description: 'A single page application that uses an API to keep a register of top scores (leaderboard).',
    image: './img/leaderboard.png',
    image2: './img/leaderboard.png',
    technologies: ['HTML', 'CSS3', 'API'],
    linkLive: 'https://acolombo1.github.io/leaderboard/dist/',
    linkSource: 'https://github.com/acolombo1/leaderboard',
  },
  Metrics: {
    name: 'Metrics',
    description: 'Metrics is a mobile application that shows a list of cryptocurrencies ordered by market cap. It makes use of coinpaprika.com API to have values updated. It also shows additional data on opening of a crypto card. Built with React/Redux.',
    image: './img/metrics.png',
    image2: './img/metrics.png',
    technologies: ['HTML', 'CSS3', 'React', 'Redux'],
    linkLive: 'https://metrics-acolombo1.herokuapp.com/',
    linkSource: 'https://github.com/acolombo1/Metrics',
  },
};

function addnode(projectname, node) {
  const project = projects[projectname];
  const newnode = document.createElement('div');
  newnode.innerHTML = `<h3>${project.name}</h3>`;
  node.appendChild(newnode);
}

function retrievedata() {
  const mainnode = document.getElementById('myprojects');
  addnode('MySpendings', mainnode);
}

export default retrievedata;