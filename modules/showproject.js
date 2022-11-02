const homeDisplay = document.getElementById('homesection');
const portfolioDisplay = document.getElementById('portfoliosection');
const aboutDisplay = document.getElementById('aboutsection');
const homeBtn = document.getElementById('home');
const portfolioBtn = document.getElementById('portfolio');
const aboutBtn = document.getElementById('about');
const hr1 = document.getElementById('toph1');
const hr2 = document.getElementById('hr2');
const hr3 = document.getElementById('hr3');
const hr4 = document.getElementById('hr4');
const hr5 = document.getElementById('hr5');
const hr6 = document.getElementById('hr6');
const hr8 = document.getElementById('hr8');

export default (event) => {
  window.scrollTo(0, 0);
  if (!homeDisplay.classList.contains('hidden')) homeDisplay.classList.add('hidden');
  if (portfolioDisplay.classList.contains('hidden')) portfolioDisplay.classList.remove('hidden');
  if (!aboutDisplay.classList.contains('hidden')) aboutDisplay.classList.add('hidden');
  if (homeBtn.classList.contains('rightmenuSelected')) homeBtn.classList.remove('rightmenuSelected');
  if (!portfolioBtn.classList.contains('rightmenuSelected')) portfolioBtn.classList.add('rightmenuSelected');
  if (aboutBtn.classList.contains('rightmenuSelected')) aboutBtn.classList.remove('rightmenuSelected');
  switch (event.target.id) {
    case 'thumb1':
      hr1.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'thumb2':
      hr2.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'thumb3':
      hr3.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'thumb4':
      hr4.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'thumb5':
      hr5.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'thumb6':
      hr6.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'thumb8':
      hr8.scrollIntoView({ behavior: 'smooth' });
      break;
    default:
      break;
  }
};
