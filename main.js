'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal').classList.remove('active')

    const tempClient ={
        nome:"willian conceição",
        email:"t@bol.com",
        celular:1236532,
        cidade:"Morato fm"
    }

    let createClient = (client) => {
        window.localStorage.setItem('db_client', JSON.stringify(client));
    }


 

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)