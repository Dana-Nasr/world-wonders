function createImage(image, id) {
  let img = document.createElement("img");
  img.setAttribute("src", image);
  document.getElementById(id).appendChild(img);
}

function createElements(data) {
  for (let wonder in data) {
    createImage(data[wonder].links.images[0], "wonders");

    console.log(wonder);
    let h2 = document.createElement("h2");
    h2.innerText = data[wonder].name;
    document.getElementById("wonders").appendChild(h2);

    let btn = document.createElement("button");
    btn.innerText = "view more";
    btn.setAttribute("id", wonder);
    document.getElementById("wonders").appendChild(btn);
    btn.addEventListener("click", function () {
      loadWonders(wonder, data);
    });
  }
}

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
  createImage(data.links.images[0], "img");
  summary.innerHTML = `Summary: ${data.summary}`;
  year.innerHTML = `Year: ${data.build_year}`;
  period.innerHTML = `Period of Time: ${data.time_period}`;

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


function loadImages(data) {
  const images = data.links.images;
  const size = images.length;
  for (let i = 1; i < size; i++) {
    createImage(images[i], "images");
  }
}
