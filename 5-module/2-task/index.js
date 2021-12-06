function toggleText() {
  const toggleTextButton = document.querySelector('.toggle-text-button');
  const div = document.querySelector('#text');

  toggleTextButton.addEventListener('click', () =>
  {
    div.hidden = !div.hidden;
  });
}
