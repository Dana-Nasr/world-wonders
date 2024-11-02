function createElements(data) {
  for (let wonder in data) {
    let img = document.createElement("img");
    img.setAttribute("src", data[wonder].links.images[0]);
    document.getElementById("wonders").appendChild(img);

    console.log(wonder);
    let h2 = document.createElement("h2");
    h2.innerText = data[wonder].name;
    document.getElementById("wonders").appendChild(h2);

    let btn = document.createElement("button");
    btn.innerText = "view more";
    btn.setAttribute("id", wonder);
    document.getElementById("wonders").appendChild(btn);
    btn.addEventListener("click", function () {
      loadWonders(wonder);
    });
  }
}

function loadWonders(index) {
  //window.location.href = "./details.html";
  console.log(fetchedData[index]);
}
