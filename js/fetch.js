const instance = axios.create({
  baseURL: "https://www.world-wonders-api.org/",
});

const fetchWorldWonders = async () => {
  try {
    const response = await instance.get("/v0/wonders");

    const fetchedData = response.data;
    // console.log(typeof response.data);
    // console.log(fetchedData[0].name);
    // console.log(fetchedData[0].links.images[0]);

    for (let wonder in fetchedData) {
      let img = document.createElement("img");
      img.setAttribute("src", fetchedData[wonder].links.images[0]);
      document.getElementById("wonders").appendChild(img);
      
      console.log(wonder);
      let h2 = document.createElement("h2");
      h2.innerText = fetchedData[wonder].name;
      document.getElementById("wonders").appendChild(h2);

      let btn = document.createElement("button");
      btn.innerText = "view more";
      btn.setAttribute("id", wonder);
      document.getElementById("wonders").appendChild(btn);
    }
  } catch (error) {
    console.log(error);
  }
};

fetchWorldWonders();
