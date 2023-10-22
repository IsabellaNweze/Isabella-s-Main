const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
	btn.classList.toggle("open");
	if (nav.style.display == "flex") {
		nav.style.display = "none";
	} else {
		nav.style.display = "flex";
	}
});
