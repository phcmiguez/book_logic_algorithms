const inTitle = document.getElementById('title')
const inDuration = document.getElementById('duration')
const btnConvert = document.getElementById('btnConvert')
let outResult = document.getElementById('result')

btnConvert.addEventListener('click', () => {

  if(inDuration.value != typeof Number){
    console.log('as')
  }

  if(!inTitle.value || !inDuration.value){
    alert('campos vazios!')
    inTitle.focus()
  }else{
    const hours = Math.floor(inDuration.value / 60)
    const minutes = inDuration.value % 60
    outResult.innerText = `Title: ${inTitle.value}\nDuration: ${hours}h${minutes}m`
  }
})