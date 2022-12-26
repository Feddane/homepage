// taking user back to top
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
  }


  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });