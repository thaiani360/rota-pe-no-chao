window.addEventListener("load", () => {

  const ordemBase = [
    "amorosa.html",
    "pedra-sino.html",
    "escorrega.html",
    "pico.html",
    "indiana.html"
  ];

  const paginaAtual = location.pathname.split("/").pop();

  const btnProximo = document.querySelector(".btn-proximo");
  const btnVoltar  = document.querySelector(".btn-voltar");

  if (!btnProximo || !btnVoltar) return;

  if (paginaAtual === "index.html" || paginaAtual === "") {
    sessionStorage.removeItem("rotaOrdem");
    sessionStorage.removeItem("rotaInicio");
    return;
  }

  if (!ordemBase.includes(paginaAtual)) {
    btnProximo.style.display = "none";
    btnVoltar.style.display = "none";
    return;
  }

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

  if (indexAtual === 0) {
    btnVoltar.style.display = "none";
  } else {
    btnVoltar.style.display = "inline-flex";
    btnVoltar.href = rotaOrdem[indexAtual - 1];
  }

  if (indexAtual === rotaOrdem.length - 1) {
    btnProximo.style.display = "none";
  } else {
    btnProximo.style.display = "inline-flex";
    btnProximo.href = rotaOrdem[indexAtual + 1];
  }

});
