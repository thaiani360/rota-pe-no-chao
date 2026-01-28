
  const abrir = document.getElementById("abrirModal");
  const fechar = document.getElementById("fecharModal");
  const modal = document.getElementById("modalInscricao");

  abrir.addEventListener("click", () => {
    modal.classList.add("ativo");
  });

  fechar.addEventListener("click", () => {
    modal.classList.remove("ativo");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("ativo");
    }
  });
