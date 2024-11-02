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

// elements of wonder.html
function createWonder(data) {
  let name = document.getElementById("name");
  let summary = document.getElementById("summary");
  let location = document.getElementById("location");
  let map = document.getElementById("map");
  let year = document.getElementById("year");
  let period = document.getElementById("period");
  let britannica = document.getElementById("britannica");
  let wiki = document.getElementById("wiki");
  let advisor = document.getElementById("advisor");
  // console.log(data.links.google_maps);

  name.innerHTML = `Name: ${data.name}`;
  // createImage(data.links.images[0], "img");
  summary.innerHTML = ` ${data.summary}`;
  year.innerHTML = `Year: ${data.build_year}`;
  period.innerHTML = `Period of Time: ${data.time_period}`;
  location.innerHTML = `Location: ${data.location}`;
  if (data.links.google_maps != null) {
    map.setAttribute("href", `${data.links.google_maps}`);
  }
  if (data.links.trip_advisor != null) {
    advisor.setAttribute("href", `${data.links.trip_advisor}`);
  }
  if (data.links.britannica != null) {
    britannica.setAttribute("href", `${data.links.britannica}`);
  }
  wiki.setAttribute("href", `${data.links.wiki}`);

  loadImages(data);
  console.log(data);
}
