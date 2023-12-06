const posts = [{ title: "POST1" }];

function create2ndPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST2" });
      resolve();
    }, 1000);
  });
}

function create3rdPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST3" });
      resolve();
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        resolve(poppedElement);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const today = new Date();
      const lastActivityTime = today.toISOString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

Promise.all([
  create2ndPost(),
  updateLastUserActivityTime(),
  create3rdPost(),
  updateLastUserActivityTime(),
])
  .then((results) => {
    const lastActivityTime = results.pop();
    console.log("All Posts:", posts);
    console.log("Last Activity Time:", lastActivityTime);
    return deletePost();
  })
  .then(() => {
    console.log("Remaining Posts", posts);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
