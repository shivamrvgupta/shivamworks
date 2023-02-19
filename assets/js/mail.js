const scriptURL = 'https://script.google.com/macros/s/AKfycbxUXyb8teTA-qL0bzDIH3VnH-xNCwrHlr3DDsx82KVPxeAp3b-XWHFo2WVFHcR3G1sDAA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => {
      msg.innerHTML = "There is Error, Please Check the values again"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
})