function loadWonders(index, data) {
  const wonder = data[index];
  //console.log(typeof wonder); //object
  localStorage.setItem("data", JSON.stringify(wonder)); //send as string
  //console.log(data[index]);
  window.location.href = `./details.html`;
}

function createWonderDiv() {
  let wonderData = JSON.parse(localStorage.getItem("data"));
  console.log(typeof wonderData); //parse to json

  return wonderData;
}
