// document.addEventListener('contextmenu', event => event.preventDefault());
// document.addEventListener('copy', event => event.preventDefault());
// document.addEventListener('cut', event => event.preventDefault());

// document.onkeydown = function(e) {
//     if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
//       alert("Developer tools are disabled!");
//       return false;
//     }
//   };
const checkBox = document.querySelector(".checkbox")
const body = document.body;

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark"){
  body.classList.add('dark-mode');
  checkBox.checked = false;
} else {
  checkBox.checked = true;
}
checkBox.addEventListener('change', () => {
  if( !checkBox.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", () => {
  document.getElementById("header").style.visibility = "hidden";
  document.getElementById("loader").style.visibility = "visible";
  document.getElementById('footer-contact-us').style.visibility = "hidden";

  setTimeout(() => {
    document.getElementById("header").style.visibility = "visible";
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById('footer-contact-us').style.visibility = "visible";
  }, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() =>{
    header.style.opacity = "1";
    document.getElementById('footer-contact-us').style.opacity = "1";
  },400);
});

const number = "9992136824";
const message = "Hyy I want to talk"
const enCodedMessage = encodeURIComponent(message)

function whatsapp ()  {
  const url = "https://web.whatsapp.com/send?phone=" + number + "&text=" + enCodedMessage;
  window.location.href = url;
};



