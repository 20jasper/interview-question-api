document.querySelector("#clickMe").addEventListener("click", makeReq);

async function makeReq() {
	const res = await fetch(`/api`);
	const data = await res.json();
	document.querySelector("#question").innerHTML = data.question;
	let qType = data.type;
	document.querySelector("#questionType").textContent = `${qType.charAt(0).toUpperCase() + qType.slice(1)}`;
	document.querySelector("main").classList.add("animate__animated", "animate__bounceIn");
	document.querySelector("main").classList.remove("hidden");
	document.querySelector("main").addEventListener("animationend", () => {
	document.querySelector("main").classList.remove("animate__animated");
	document.querySelector("main").classList.remove("animate__bounceIn");
	});
}
