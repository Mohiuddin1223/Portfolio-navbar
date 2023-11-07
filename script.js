let menu = document.queryselector('#menu-icon');
let navbar = document.queryselector('.navbar');

  menu.onclick = () => {
  menu.classlist.toggle('bx-x');
  navbar.classlist.toggle('open');
}