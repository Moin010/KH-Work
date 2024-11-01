function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    console.log(1);
    if (tabcontent[i].classList.contains("__show")) {
      tabcontent[i].classList.remove("__show");
    }
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).classList.add("__show");
  evt.currentTarget.className += " active";
}
