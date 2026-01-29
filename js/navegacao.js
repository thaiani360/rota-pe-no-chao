document.addEventListener("DOMContentLoaded", () => {

  const ordemBase = [
    "amorosa.html",
    "pedra-sino.html",
    "escorrega.html",
    "pico.html",
    "indiana.html"
  ];

  const paginaAtual = location.pathname.split("/").pop();
  const btnProximo = document.querySelector(".btn-proximo");

  if (!btnProximo) return;

  // Se voltou para o index → reseta
  if (paginaAtual === "index.html" || paginaAtual === "") {
    sessionStorage.removeItem("rotaOrdem");
    sessionStorage.removeItem("rotaInicio");
    return;
  }

  // Página fora da rota
  if (!ordemBase.includes(paginaAtual)) {
    btnProximo.style.display = "none";
    btnProximo.style.visibility = "hidden";
    return;
  }

  // Define início da rota
  if (!sessionStorage.getItem("rotaInicio")) {
    sessionStorage.setItem("rotaInicio", paginaAtual);

    const indexInicio = ordemBase.indexOf(paginaAtual);

    const rotaOrdem = [
      ...ordemBase.slice(indexInicio),
      ...ordemBase.slice(0, indexInicio)
    ];

    sessionStorage.setItem("rotaOrdem", JSON.stringify(rotaOrdem));
  }

  const rotaOrdem = JSON.parse(sessionStorage.getItem("rotaOrdem"));
  const indexAtual = rotaOrdem.indexOf(paginaAtual);

  // Última página → esconde
  if (indexAtual === rotaOrdem.length - 1) {
    btnProximo.style.display = "none";
    btnProximo.style.visibility = "hidden";
    return;
  }

  // Caso normal → mostra
  btnProximo.href = rotaOrdem[indexAtual + 1];
  btnProximo.style.display = "inline-flex";
  btnProximo.style.visibility = "visible";

});
