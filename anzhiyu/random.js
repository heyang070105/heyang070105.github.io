var posts=["2025/09/26/步入大学：自由探索与自我成长之旅/","2025/09/25/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };