const _input = document.querySelector(".container__repos input");
const _getBtn = document.querySelector(".repos__getButton");
const _reposData = document.querySelector(".container__showData");

_getBtn.onclick = function () {
  getRepos();
};
function getRepos() {
  if (_input.value == "") {
    _reposData.innerHTML = "<span>Please Write Github Username</span>";
  } else {
    let url = "https://api.github.com/users/alaayasser741/repos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Empty the container
        _reposData.innerHTML='';
      });
  }
}
