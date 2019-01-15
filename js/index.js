const listData = document.getElementById("nameCharacter");

const getData = url => {
  fetch(url)
    .then(respon => respon.json())
    .then(data => {
      data.results.map((item, index) => {
        console.log(item);
        listData.innerHTML += `<li class="list-group-item">
                <p>No.${index + 1}</p> 
                <p>Name: ${item.name}</p>
                <p>Height: ${item.height} cm</p>
                <p>Hair Color: ${item.hair_color}</p> 
               </li>`;
      });
    });
};

getData("https://swapi.co/api/people");
