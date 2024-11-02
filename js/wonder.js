function createWonderDiv() {
  let wonderData = localStorage.getItem("data");
  let h2 = document.createElement("h2");
  h2.innerText = wonderData;
  document.getElementById("wonder").appendChild(h2);
}

createWonderDiv();
