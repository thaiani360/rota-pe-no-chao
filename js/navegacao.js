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
  const btnVoltar = document.querySelector(".btn-voltar");

  if (!btnProximo && !btnVoltar) return;

  if (paginaAtual === "index.html" || paginaAtual === "") {
    sessionStorage.removeItem("rotaInicio");
    sessionStorage.removeItem("rotaOrdem");

    if (btnProximo) btnProximo.style.display = "none";
    if (btnVoltar) btnVoltar.style.display = "none";
    return;
  }

  if (btnVoltar) {
    btnVoltar.style.display = "inline-flex";
    btnVoltar.addEventListener("click", (e) => {
      e.preventDefault();
      history.back();
    });
  }

  if (!ordemBase.includes(paginaAtual)) {
    if (btnProximo) btnProximo.style.display = "none";
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

  if (indexAtual === rotaOrdem.length - 1) {
    btnProximo.style.display = "none";
    return;
  }

  btnProximo.style.display = "inline-flex";
  btnProximo.href = rotaOrdem[indexAtual + 1];
});
