document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq() {

  const res = await fetch(`/api`)
  const data = await res.json()
  console.log(data)
  console.log(res)
  document.querySelector("#question").textContent = data.question
  document.querySelector("#questionType").textContent = data.type
}