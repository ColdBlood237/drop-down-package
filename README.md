call the function inside an event listner passing in it the dom element of your drop down menu:

example below :

const drop_down_btn = document.querySelector(".drop-down-btn");
const drop_down_menu = document.querySelector(".drop-down-menu");

drop_down_btn.addEventListener("click", () => {
drop_down(drop_down_menu);
});

function drop_down(menu) {
if (menu.classList.contains("invisible")) {
menu.classList.remove("invisible");
} else {
menu.classList.add("invisible");
}
}
