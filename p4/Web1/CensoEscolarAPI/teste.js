fetch("http://localhost:3000/posts", { method: "GET" })
  .then((response) => response.json())
  .then((posts) => {
    for (let post of posts) {
      console.log(`titulo ${post.title}`);
    }
  })
  .catch((err) => console.log(err.message));
