/* RAFLY START CODING JAVASCRIPT */
/*===== Section Scroll Go Top Active Link =====*/
// Ambil Button
const goUpButton = document.querySelector(".go-up");

const scrollContainer = () => {
	return document.documentElement || document.body;
};

// Ketika user scroll kebawah sebanyak 100px perlihatkan buttonnya
document.addEventListener("scroll", () => {
	if (scrollContainer().scrollTop > 100) {
		goUpButton.classList.remove("hide");
	} else {
		goUpButton.classList.add("hide");
	}
});
/* RAFLY END JAVASCRIPT CODING */

