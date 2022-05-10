// Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMsj = document.querySelector('#txtMsj');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    //console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    //console.log('Desconectado');

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('enviar-msj', (payload) => {
    console.log(payload);
});

btnEnviar.addEventListener('click', () => {
    const msj = txtMsj.value;
    const payload = {
        msj,
        id: '123ABC',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-msj', payload, (id) => {
        console.log("Desde el server", id);
    });
});