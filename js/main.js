document.querySelector("#clickMe").addEventListener("click", newQuestion);

function newQuestion() {
	makeReq()
	document.querySelector("section").classList.add("animate__animated", "animate__bounceIn");
	document.querySelector("section").classList.remove("hidden");
	document.querySelector("section").addEventListener("animationend", () => {
		document.querySelector("section").classList.remove("animate__animated");
		document.querySelector("section").classList.remove("animate__bounceIn");
	});
}

async function makeReq() {
	const res = await fetch(`/api`);
	const data = await res.json();
	document.querySelector("#question").innerHTML = data.question;
	let qType = data.type;
	document.querySelector("#questionType").textContent = `${qType.charAt(0).toUpperCase() + qType.slice(1)}`;
};
