const listData = document.getElementById("nameCharacter");

/* const getDataAsync = async () => {
  const response = await fetch("https://swapi.co/api/people");
  const data = await response.json();
  const result = data.results;

  result.forEach(name => console.log(name.name));

  const getName = result.forEach(item => {
    listData.innerHTML += `<li>${item.name}</li>`;
  });
}; */

const getData = url => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      data.results.map((item, index) => {
        console.log(item);
        listData.innerHTML += `<li>
                <p>No.${index + 1}</p> 
                <p>Name: ${item.name}</p>
                <p>Height: ${item.height} cm</p>
                <p>Hair Color: ${item.hair_color}</p> 
               </li>`;
      });
    });
};

getData("https://swapi.co/api/people");
