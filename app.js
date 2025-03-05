let amigos = [];

function adicionarAmigo() {
   let input = document.getElementById("amigo");
   let nome = input.value.replace(/\s+/g, ' ').trim();

   if (!nome) {
      alert("Digite um nome válido!");
      return;
   }

   if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nome)) { 
      alert("O nome deve conter apenas letras!");
      return;
   }

   if (amigos.includes(nome.toLowerCase())) {
      alert("Esse nome já foi adicionado!");
      return;
   }

   amigos.push(nome.toLowerCase());
   atualizarLista();
   input.value = "";
   input.focus();
}

function atualizarLista() {
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = "";
   for (let nome of amigos) {
      let item = document.createElement("li");
      item.textContent = nome;
      lista.appendChild(item);
   }
}

function sortearAmigo() {
   if (amigos.length < 3) {
      alert("Adicione pelo menos três amigos!");
      return;
   }

   let index = Math.floor(Math.random() * amigos.length);
   let sorteado = amigos[index];

   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `O amigo secreto é: ${sorteado}`;

   let limparLista = document.getElementById("listaAmigos");
   limparLista.innerHTML = "";
   amigos = [];
}