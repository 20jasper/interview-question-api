document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq() {

  const res = await fetch(`/api?student`)
  const data = await res.json()

  document.querySelector("#question").textContent = data.question
  document.querySelector("#questionType").textContent = data.questionType
}