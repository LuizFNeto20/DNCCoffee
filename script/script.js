(function () {
    const btnModal = document.querySelector("nav ul li:nth-child(2) a");
    const modal = document.querySelector(".position-absolute")

    btnModal.addEventListener("click", function () {
        modal.classList.remove("d-none");
        modal.classList.add("d-flex");
    });

    const exitModal = modal.querySelector("div a i");

    exitModal.addEventListener("click", function () {
        modal.classList.remove("d-flex");
        modal.classList.add("d-none");
    });
})()