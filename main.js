const _input = document.querySelector(".container__repos input");
const _getBtn = document.querySelector(".repos__getButton");
const _reposData = document.querySelector(".container__showData");
const _noDataMsg = document.querySelector(".container__showData span");
const _repoLink = document.querySelector(".repo-box a");
const _repoSpan = document.querySelector(".repo-box span");
const _lang = document.getElementById("lang");
_getBtn.onclick = function () {
  getRepos();
};
function getRepos() {
  if (_input.value == "") {
    _reposData.innerHTML = "<span>Please Write Github Username</span>";
  } else {
    let url = `https://api.github.com/users/${_input.value}/repos`;
    fetch(url)
      .then((res) => res.json())
      .then((repositories) => {
        // Empty the container
        _reposData.innerHTML = "";
        // Display Data
        repositories.forEach((repo) => {
          // !create main div element
          let mainDiv = document.createElement("div");

          // create repo name text
          let repoName = document.createTextNode(repo.name);

          // Create title Attribute to main div
          mainDiv.title = repo.name;

          // Append the text to main div
          mainDiv.appendChild(repoName);

          // !create repo url
          let theUrl = document.createElement("a");

          // create url text
          let theUrlText = document.createTextNode("Visit");

          // Append The url text to anchor tag
          theUrl.appendChild(theUrlText);

          // Add the href
          theUrl.href = `https://github.com/${_input.value}/${repo.name}`;

          // set Attribute to Url
          theUrl.setAttribute("target", "_blank");

          // Append tag to url to div
          mainDiv.appendChild(theUrl);

          // !create stars count Span
          let starsSpan = document.createElement("span");

          // create stars span text
          let starsText = document.createTextNode(
            `Stars ${repo.stargazers_count}`
          );

          // add stars count text to span
          starsSpan.appendChild(starsText);

          // Append stars count to main div
          mainDiv.appendChild(starsSpan);

          // !add class name to main div
          mainDiv.classList.add("repo-box");

          // !Append main div to container
          _reposData.appendChild(mainDiv);
        });
      });
  }
}
_lang.onclick = function () {
  if (document.body.querySelector(".container").style.direction == "ltr") {
    document.body.querySelector(".container").style.direction = "rtl";
    _input.placeholder = 'ادخل اسم المستخدم';
    _getBtn.innerHTML = 'اظهر الكل';
    _noDataMsg.innerHTML = 'لا يوجد بيانات لعرضها'
    _lang.innerHTML = 'En <img src="./usa.png" alt="flag">'
  } else {
    document.body.querySelector(".container").style.direction = "ltr";
    _input.placeholder = 'Github Username';
    _getBtn.innerHTML = 'Get Repos';
    _noDataMsg.innerHTML = 'No Data To Show';
    _lang.innerHTML = 'Ar <img src="./egypt.png" alt="flag">'
  }
};
