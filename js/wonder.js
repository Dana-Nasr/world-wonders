function createWonderDiv() {
  let h2 = document.createElement("h2");
  let wonderData = JSON.parse(localStorage.getItem("data"));
  console.log(typeof wonderData);
  h2.innerText = wonderData.name;
  document.getElementById("wonder").appendChild(h2);
}

createWonderDiv();
