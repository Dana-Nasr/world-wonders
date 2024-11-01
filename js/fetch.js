const instance = axios.create({
  baseURL: "https://www.world-wonders-api.org/",
});

const fetchWorldWonders = async () => {
  const response = await instance.get("/v0/wonders");

  console.log(response.data);
};
fetchWorldWonders();
