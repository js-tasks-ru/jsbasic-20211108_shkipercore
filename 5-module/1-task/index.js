function hideSelf() {
  const hiddenButton = document.querySelector('.hide-self-button');

  hiddenButton.addEventListener('click', () =>
  {
    hiddenButton.hidden = true;
  });
}
