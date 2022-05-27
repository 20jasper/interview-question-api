document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq() {

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#question").textContent = data.question
  document.querySelector("#questionType").textContent = data.questionType
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}