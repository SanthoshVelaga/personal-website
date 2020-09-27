$(document).ready(function () {
	$("#nav-icon3").click(function () {
		openNav();
		addOverlay();

		if (this.matches(".open")) {
			closeNav();
			removeOverlay();
		}

		$(this).toggleClass("open");
	});
});

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

function addOverlay() {
	$(overlay).removeClass("overlay-content-hide");
}

function removeOverlay() {
	$(overlay).addClass("overlay-content-hide");
}
