const blogPosts = [
  { id: 1, title: "Blog 1", body: "Lorem Ipsum 1", author: "Author 1" },
  { id: 2, title: "Blog 2", body: "Lorem Ipsum 2", author: "Author 2" },
  { id: 3, title: "Blog 3", body: "Lorem Ipsum 3", author: "Author 3" },
  { id: 4, title: "Blog 4", body: "Lorem Ipsum 4", author: "Author 2" },
];
const printBlogs = (blogs) => {
  return new Promise((resolve, reject) => {
    if (blogs) {
      blogs.map((blog) => {
        console.log(blog);
      });
      resolve("Success. Blogs has been listed.");
    } else {
      reject("Error! Blogs couldn't listed.");
    }
  });
};

const newBlog = {
  id: 5,
  title: "Blog 5",
  body: "Lorem Ipsum 5",
  author: "Mustafa Bucak",
};

const addBlog = (blog) => {
  return new Promise((resolve, reject) => {
    if (blog) {
      blogPosts.push(blog);
      resolve("Success. Blog has been added.");
    } else {
      reject("Error! Blog couldn't added.");
    }
  });
};

const runProcess = async () => {
  try {
    let listProcess1 = await printBlogs(blogPosts);
    console.log(listProcess1);

    let addProcess = await addBlog(newBlog);
    console.log(addProcess);
    let listProcess2 = await printBlogs(blogPosts);
    console.log(listProcess2);
  } catch (err) {
    console.log(err);
  }
};

runProcess();
