function toggleNav(){
  var x = document.getElementById("expandable_menu");
  // console.log("is open is: " + isOpen)
  if (x.classList.contains("block")) document.getElementById("expandable_menu").classList.replace("block", "hidden")
  else {document.getElementById("expandable_menu").classList.replace("hidden","block")
  console.log(2)
}
  // // document.getElementById("expandable_menu").classList.add("block");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
}

