function drop_down(menu) {
  if (menu.classList.contains("invisible")) {
    menu.classList.remove("invisible");
  } else {
    menu.classList.add("invisible");
  }
}

export default drop_down;
