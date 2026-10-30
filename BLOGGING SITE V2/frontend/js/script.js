const pages = document.querySelectorAll(".page");
const menuButtons = document.querySelectorAll(".menu button");
const feed = document.getElementById("feed");
const postInput = document.getElementById("postInput");
const postBtn = document.getElementById("postBtn");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const postCount = document.getElementById("postCount");

let myPosts = 1;

// switch pages
menuButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    pages.forEach(function (page) {
      page.classList.add("hidden");
    });
    document.getElementById(button.dataset.page).classList.remove("hidden");
  });
});

// create post
postBtn.addEventListener("click", function () {
  const text = postInput.value;
  if (text === "") {
    return;
  }

  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = "<h3>carlos</h3><p></p>";
  post.querySelector("p").textContent = text;

  feed.prepend(post);
  postInput.value = "";

  myPosts++;
  postCount.textContent = "Posts: " + myPosts;

  document.querySelector('[data-page="home"]').click();
});

// search posts
searchInput.addEventListener("input", function () {
  const word = searchInput.value.toLowerCase();
  results.innerHTML = "";

  if (word === "") {
    return;
  }

  feed.querySelectorAll(".post").forEach(function (post) {
    if (post.textContent.toLowerCase().includes(word)) {
      results.appendChild(post.cloneNode(true));
    }
  });
});