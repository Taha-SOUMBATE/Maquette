function blockAccess(Event) {
  if (
    Event.keyCode == 123 ||
    (Event.ctrlKey && event.shitKey && event.KeyCode == 73)
  ) {
    event.prevenDefault();
  }
}

document.addEventListener("keydown", blockAccess);
document.addEventListener("contextmenu", (Event) => Event.preventDefault());
