document
  .getElementById('userEnteredStringExampleInput')
  .addEventListener('keyup', (e) => {
    document.getElementById('userEnteredStringExampleOutput').innerHTML =
      e.target.value
  })

document.getElementById('userEnteredStringExampleOutput').innerHTML = 'hello!'
