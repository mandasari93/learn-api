const getDataAsync = async () => {
    const response = await fetch("https://swapi.co/api/planets")
    const data = await response.json()
    const result = data.results;
   
    result.forEach(name => console.log(name.name)) 

}

getDataAsync();

