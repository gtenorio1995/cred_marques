// MENU BURGUER
function menuBurguer() {
  // captura de campos
  const navigation = document.querySelector("#block_navigation");
  const btnBurguer = document.querySelector("#menu_burguer");
  const list_menu = document.querySelectorAll("#block_navigation li");

  const menuToggle = () => {
    btnBurguer.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  btnBurguer.addEventListener("click", menuToggle);

  function removeClass(e) {
    list_menu.forEach((el) => {
      el.classList.remove("selected");
    });

    this.classList.add("selected");
    menuToggle();
  }

  list_menu.forEach((item) => {
    item.addEventListener("click", removeClass);
  });
}
menuBurguer();
