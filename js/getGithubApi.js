const githubFollowers = document.getElementById("githubFollowers");

const getDataGithub = url => {
  fetch(url)
    .then(respon => respon.json())
    .then(data => {
      console.log(data);
      data.map(item => {
        githubFollowers.innerHTML += `

               <div>
                    <div class="card" style="width:200px;">
                    <img class="card-img-top" style="width: 200px; height: 200px;" src="${
                      item.avatar_url
                    }" alt="Avatar" />
                    <div class="card-body">
                        <h5 class="card-title">${item.login}</h5>
                        <a href="${
                          item.html_url
                        }" class="btn btn-primary">Go to Profile</a>
                    </div>
                </div>
            `;
      });
    });
};

getDataGithub("https://api.github.com/users/mandasari93/followers");
