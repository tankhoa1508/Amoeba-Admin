function openBoard(evt, section) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(section).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Upload image
let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("upload");

inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
  document.querySelector(".upload-label").style.display = "none";
  document.querySelector(".btn-change").classList.remove("non-active");
  document.querySelector(".btn-change").classList.add("active");
};


