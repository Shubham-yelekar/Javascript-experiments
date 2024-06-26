window.addEventListener( 'DOMContentLoaded', () =>{

  let wakeupOptionSelected = true
  let sleepOptionSelected = false

  const wakeupOption = document.getElementById('wakeupOption')
  const sleepOption = document.getElementById('sleepOption')
  const hoursInput = document.getElementById('hours').value
  const minutesInput = document.getElementById('minutes').value
  const ampmInput = document.getElementById('am_pm').value
  const calcBtn = document.getElementById('calc-btn')

  wakeupOption.addEventListener('click', () => {
    if (wakeupOption.classList.contains('selected')){
      wakeupOption.classList.remove('selected')
      sleepOption.classList.add('selected')
    } else {
      wakeupOption.classList.add('selected')
      sleepOption.classList.remove('selected')
    }
  })

  sleepOption.addEventListener('click', () => {
    if (sleepOption.classList.contains('selected')){
      sleepOption.classList.remove('selected')
      wakeupOption.classList.add('selected')
    } else {
      sleepOption.classList.add('selected')
      wakeupOption.classList.remove('selected')
    }
  })

  calcBtn.addEventListener('click', ()=>{
    console.log(hoursInput)
  })




}

)





