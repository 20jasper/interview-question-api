document.querySelector("#clickMe").addEventListener("click", makeReq);

async function makeReq() {
	const res = await fetch(`/api`);
	const data = await res.json();
	document.querySelector("#question").textContent = data.question;
	let qType = data.type;
	document.querySelector("#questionType").textContent = `${qType.charAt(0).toUpperCase() + qType.slice(1)}`;
	document.querySelector("section").classList.remove("hidden");
}
