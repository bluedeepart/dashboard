const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];
const sidebarTogglerBtn = document.getElementById('sidebar-toggler');
sidebarTogglerBtn.addEventListener('click', sidebarToggler);

window.addEventListener('load', hideSidebar);
window.addEventListener('resize', hideSidebar);

function sidebarToggler() {
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    sidebar.style.transform = 'translateX(0)';
  } else {
    sidebar.classList.add('open');
    sidebar.style.transform = 'translateX(-100%)';
  }
}

function hideSidebar() {
  if (window.innerWidth > 992) {
    sidebar.classList.remove('open');
    sidebar.style.transform = 'translateX(0)';
  } else {
    sidebar.classList.add('open');
    sidebar.style.transform = 'translateX(-100%)';
  }
}
