const firebaseConfig = {
  apiKey: "AIzaSyDY2upxR50iLnxoXUXv-rN0de8PLXk1-nI",
  authDomain: "pizzamongol-79c59.firebaseapp.com",
  databaseURL: "https://pizzamongol-79c59-default-rtdb.firebaseio.com",
  projectId: "pizzamongol-79c59",
  storageBucket: "pizzamongol-79c59.appspot.com",
  messagingSenderId: "1006667078853",
  appId: "1:1006667078853:web:79ad5a0a205dda399c64ac",
  measurementId: "G-YW7FC03WXP"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Função para enviar os dados
function enviarDados() {
  const nome = pedidocompleto;
  database.ref('usuarios').push({
    cliente: nome
  });
  //alert('Pedido enviado com sucesso!');
}