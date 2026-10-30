const feed = document.getElementById("feed");
const postInput = document.getElementById("postInput");
const postBtn = document.getElementById("postBtn");

showPosts(feed);

postBtn.addEventListener("click", function () {
  if (postInput.value === "") {
    return;
  }

  const posts = getPosts();
  posts.push({ username: "carlos", text: postInput.value, comments: [] });
  savePosts(posts);

  postInput.value = "";
  showPosts(feed);
});

fetch("https://api.open-meteo.com/v1/forecast?latitude=13.62&longitude=123.19&current_weather=true")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const temp = data.current_weather.temperature;
    document.getElementById("weather").textContent = "Weather today: " + temp + "°C";
  });