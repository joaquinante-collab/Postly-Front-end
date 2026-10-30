function getPosts() {
  const saved = localStorage.getItem("posts");
  if (saved) {
    return JSON.parse(saved);
  }
  return [{ username: "maria", text: "Hello everyone!", comments: [] }];
}

function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function addCommentToPage(comments, username, text) {
  const comment = document.createElement("div");
  comment.className = "comment";
  comment.innerHTML = "<b></b> <span></span>";
  comment.querySelector("b").textContent = username;
  comment.querySelector("span").textContent = text;
  comments.appendChild(comment);
}

function createPost(posts, index) {
  const data = posts[index];
  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML =
    "<h3></h3><p></p>" +
    "<button class='comment-btn'>Comment</button>" +
    "<div class='comments'></div>" +
    "<div class='comment-form hidden'>" +
    "<input type='text' placeholder='Write a comment...'>" +
    "<button class='send-btn'>Send</button>" +
    "</div>";

  post.querySelector("h3").textContent = data.username;
  post.querySelector("p").textContent = data.text;

  const commentBtn = post.querySelector(".comment-btn");
  const form = post.querySelector(".comment-form");
  const input = form.querySelector("input");
  const sendBtn = form.querySelector(".send-btn");
  const comments = post.querySelector(".comments");

  data.comments.forEach(function (c) {
    addCommentToPage(comments, c.username, c.text);
  });

  commentBtn.addEventListener("click", function () {
    form.classList.toggle("hidden");
  });

  sendBtn.addEventListener("click", function () {
    if (input.value === "") {
      return;
    }

    data.comments.push({ username: "carlos", text: input.value });
    savePosts(posts);

    addCommentToPage(comments, "carlos", input.value);
    input.value = "";
  });

  return post;
}

function showPosts(feed, onlyUser) {
  const posts = getPosts();
  feed.innerHTML = "";

  posts.forEach(function (data, index) {
    if (onlyUser && data.username !== onlyUser) {
      return;
    }
    feed.prepend(createPost(posts, index));
  });
}