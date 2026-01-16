function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const telefone = '5548991020114' // número de telefone com código do país e DDD - RAFAEL DAL FORNO

  const texto = `Olá, Meu nome é ${nome}.\n${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, '_blank');
}

