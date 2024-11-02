const instance = axios.create({
  baseURL: "https://www.world-wonders-api.org/",
});

const fetchWorldWonders = async () => {
  try {
    const response = await instance.get("/v0/wonders");
    const fetchedData = response.data;
    return fetchedData;
  } catch (error) {
    console.log(error);
  }
};


async function data() {
  const fetchedWonders = await fetchWorldWonders();
  createElements(fetchedWonders);
}

data();

// console.log(typeof response.data);
// console.log(fetchedData[0].name);
// console.log(fetchedData[0].links.images[0]);

//createElements(fetchedWonders);
