document.getElementById("reservaForm").addEventListener("submit", function(e){

e.preventDefault()

let nome = document.getElementById("nome").value
let whatsapp = document.getElementById("whatsapp").value
let data = document.getElementById("data").value
let hora = document.getElementById("hora").value
let pessoas = document.getElementById("pessoas").value
let obs = document.getElementById("obs").value

let mensagem = `Reserva Muliba Restaurante

Nome: ${nome}
WhatsApp: ${whatsapp}
Data: ${data}
Hora: ${hora}
Pessoas: ${pessoas}
Obs: ${obs}`

let url = "https://wa.me/258860200011?text=" + encodeURIComponent(mensagem)

window.open(url)

})
