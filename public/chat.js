
const socket = io('http://localhost:3000');

socket.on('update_messages', (menssages) => {
    updateMessagensOnScreen(menssages)
})

function updateMessagensOnScreen(menssages) {
    const div_menssages = document.querySelector('#messages');
    
    let list_menssages = '<ul>'
    menssages.foreach(menssage => {
        list_menssages += `<li>${menssage}<li>`
    })
    list_menssages += '</ul>'
    div_menssages.innerHTML = list_menssages
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#messagem_form')
    form.addEventListener('submint', (event) => {
        event.preventDefault();
        const menssage = document.forms['messagem_form_name']['msg'].value;
        console.log(menssage)
        document.forms['messagem_form_name']['msg'].value = ''
        socket.emit('new_message', { msg: menssage })
        console.log(menssage)
    })
})