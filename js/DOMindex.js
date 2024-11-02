function createImage(image, id) {
  let img = document.createElement("img");
  img.setAttribute("src", image);
  document.getElementById(id).appendChild(img);
}
function loadImages(data) {
  const images = data.links.images;
  const size = images.length;
  for (let i = 0; i < size; i++) {
    createImage(images[i], "images");
  }
}
//elements of index.html
function createElements(data) {
  for (let wonder in data) {
    //card
    let card = document.createElement("div");
    card.setAttribute("class", "card flex column center");
    card.setAttribute("id", `card${wonder}`);
    document.getElementById("wonders").appendChild(card);

    //image div
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "divImg");
    imgDiv.setAttribute("id", `imgDiv${wonder}`);
    document.getElementById(`card${wonder}`).appendChild(imgDiv);
    createImage(data[wonder].links.images[0], `imgDiv${wonder}`);

    //name
    let h2 = document.createElement("h2");
    h2.innerText = data[wonder].name;
    document.getElementById(`card${wonder}`).appendChild(h2);

    //button
    let btn = document.createElement("button");
    btn.innerText = "view more";
    btn.setAttribute("id", wonder);
    btn.setAttribute("class", "btn");
    document.getElementById(`card${wonder}`).appendChild(btn);
    btn.addEventListener("click", function () {
      loadWonders(wonder, data);
    });
  }
}
