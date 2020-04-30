(() => {
  document.querySelector('.uy-flag').addEventListener('click', () => {
    document.querySelector('.uy-team-content').style.display = 'block';
    window.scrollTo({
      left: 0,
      top: document.querySelector('.uy-team-content').offsetTop,
      behavior: 'smooth',
    });
  })
})();
