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
