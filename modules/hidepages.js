const portfolioDisplay = document.getElementById('portfoliosection');
const aboutDisplay = document.getElementById('aboutsection');
const contactDisplay = document.getElementById('contactsection');
const resumeDisplay = document.getElementById('resumesection');
const portfolioBtn = document.getElementById('portfolio');
const aboutBtn = document.getElementById('about');
const contactBtn = document.getElementById('contact');
const resumeBtn = document.getElementById('resume');

export default (event) => {
  window.scrollTo(0, 0);
  switch (event.target.id) {
    case 'portfolio':
      if (!aboutDisplay.classList.contains('hidden')) aboutDisplay.classList.add('hidden');
      if (!contactDisplay.classList.contains('hidden')) contactDisplay.classList.add('hidden');
      if (!resumeDisplay.classList.contains('hidden')) resumeDisplay.classList.add('hidden');
      if (portfolioDisplay.classList.contains('hidden')) portfolioDisplay.classList.remove('hidden');
      if (!portfolioBtn.classList.contains('rightmenuSelected')) portfolioBtn.classList.add('rightmenuSelected');
      if (aboutBtn.classList.contains('rightmenuSelected')) aboutBtn.classList.remove('rightmenuSelected');
      if (contactBtn.classList.contains('rightmenuSelected')) contactBtn.classList.remove('rightmenuSelected');
      if (resumeBtn.classList.contains('rightmenuSelected')) resumeBtn.classList.remove('rightmenuSelected');
      break;

    case 'about':
      if (!portfolioDisplay.classList.contains('hidden')) portfolioDisplay.classList.add('hidden');
      if (!contactDisplay.classList.contains('hidden')) contactDisplay.classList.add('hidden');
      if (!resumeDisplay.classList.contains('hidden')) resumeDisplay.classList.add('hidden');
      if (aboutDisplay.classList.contains('hidden')) aboutDisplay.classList.remove('hidden');
      if (!aboutBtn.classList.contains('rightmenuSelected')) aboutBtn.classList.add('rightmenuSelected');
      if (portfolioBtn.classList.contains('rightmenuSelected')) portfolioBtn.classList.remove('rightmenuSelected');
      if (contactBtn.classList.contains('rightmenuSelected')) contactBtn.classList.remove('rightmenuSelected');
      if (resumeBtn.classList.contains('rightmenuSelected')) resumeBtn.classList.remove('rightmenuSelected');
      break;

    case 'contact':
      if (!portfolioDisplay.classList.contains('hidden')) portfolioDisplay.classList.add('hidden');
      if (!aboutDisplay.classList.contains('hidden')) aboutDisplay.classList.add('hidden');
      if (contactDisplay.classList.contains('hidden')) contactDisplay.classList.remove('hidden');
      if (!resumeDisplay.classList.contains('hidden')) resumeDisplay.classList.add('hidden');
      if (!contactBtn.classList.contains('rightmenuSelected')) contactBtn.classList.add('rightmenuSelected');
      if (portfolioBtn.classList.contains('rightmenuSelected')) portfolioBtn.classList.remove('rightmenuSelected');
      if (aboutBtn.classList.contains('rightmenuSelected')) aboutBtn.classList.remove('rightmenuSelected');
      if (resumeBtn.classList.contains('rightmenuSelected')) resumeBtn.classList.remove('rightmenuSelected');
      break;
    case 'resume':
      if (!portfolioDisplay.classList.contains('hidden')) portfolioDisplay.classList.add('hidden');
      if (!aboutDisplay.classList.contains('hidden')) aboutDisplay.classList.add('hidden');
      if (!contactDisplay.classList.contains('hidden')) contactDisplay.classList.add('hidden');
      if (resumeDisplay.classList.contains('hidden')) resumeDisplay.classList.remove('hidden');
      if (!resumeBtn.classList.contains('rightmenuSelected')) resumeBtn.classList.add('rightmenuSelected');
      if (portfolioBtn.classList.contains('rightmenuSelected')) portfolioBtn.classList.remove('rightmenuSelected');
      if (aboutBtn.classList.contains('rightmenuSelected')) aboutBtn.classList.remove('rightmenuSelected');
      if (contactBtn.classList.contains('rightmenuSelected')) contactBtn.classList.remove('rightmenuSelected');
      break;
    default:
      break;
  }
};
