function toggleText() {
  const toggleTextButton = document.querySelector('.toggle-text-button');
  const div = document.querySelector('#text');

  toggleTextButton.addEventListener('click', () =>
  {
    if (div.hidden === false) {
      div.hidden = true;
    } else if (div.hidden === true) {
      div.hidden = false;
    }
  });
}
