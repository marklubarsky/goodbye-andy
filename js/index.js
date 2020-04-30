(() => {
  document.querySelector('.uy-flag').addEventListener('click', () => {
    document.querySelector('.uy-team-content').style.display = 'block';
    window.scrollTo(0,document.body.scrollHeight);
  })
})();
