import React from 'react'

const Blog = () => {

  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, adipisci.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, asperiores! Fuga assumenda, et tempora repellendus odit quam harum impedit laborum nulla atque minima nihil temporibus. Asperiores maxime cum porro quisquam quae, delectus harum dicta eius officia aliquid magni et dolore ducimus, modi blanditiis. Deserunt facilis minus laudantium, eveniet delectus quam.",
      image: "https://picsum.photos/401",
      directLink: "https://github.com/rajmangukiya"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, adipisci.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, asperiores! Fuga assumenda, et tempora repellendus odit quam harum impedit laborum nulla atque minima nihil temporibus. Asperiores maxime cum porro quisquam quae, delectus harum dicta eius officia aliquid magni et dolore ducimus, modi blanditiis. Deserunt facilis minus laudantium, eveniet delectus quam.",
      image: "https://picsum.photos/402",
      directLink: "https://github.com/rajmangukiya"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, adipisci.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, asperiores! Fuga assumenda, et tempora repellendus odit quam harum impedit laborum nulla atque minima nihil temporibus. Asperiores maxime cum porro quisquam quae, delectus harum dicta eius officia aliquid magni et dolore ducimus, modi blanditiis. Deserunt facilis minus laudantium, eveniet delectus quam.",
      image: "https://picsum.photos/403",
      directLink: "https://github.com/rajmangukiya"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, adipisci.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, asperiores! Fuga assumenda, et tempora repellendus odit quam harum impedit laborum nulla atque minima nihil temporibus. Asperiores maxime cum porro quisquam quae, delectus harum dicta eius officia aliquid magni et dolore ducimus, modi blanditiis. Deserunt facilis minus laudantium, eveniet delectus quam.",
      image: "https://picsum.photos/404",
      directLink: "https://github.com/rajmangukiya"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, adipisci.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, asperiores! Fuga assumenda, et tempora repellendus odit quam harum impedit laborum nulla atque minima nihil temporibus. Asperiores maxime cum porro quisquam quae, delectus harum dicta eius officia aliquid magni et dolore ducimus, modi blanditiis. Deserunt facilis minus laudantium, eveniet delectus quam.",
      image: "https://picsum.photos/405",
      directLink: "https://github.com"
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, adipisci.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, asperiores! Fuga assumenda, et tempora repellendus odit quam harum impedit laborum nulla atque minima nihil temporibus. Asperiores maxime cum porro quisquam quae, delectus harum dicta eius officia aliquid magni et dolore ducimus, modi blanditiis. Deserunt facilis minus laudantium, eveniet delectus quam.",
      image: "https://picsum.photos/406",
      directLink: "https://github.com"
    },
    {
      id: 7,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, adipisci.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, asperiores! Fuga assumenda, et tempora repellendus odit quam harum impedit laborum nulla atque minima nihil temporibus. Asperiores maxime cum porro quisquam quae, delectus harum dicta eius officia aliquid magni et dolore ducimus, modi blanditiis. Deserunt facilis minus laudantium, eveniet delectus quam.",
      image: "https://picsum.photos/407",
      directLink: "https://github.com"
    },
    {
      id: 8,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, adipisci.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, asperiores! Fuga assumenda, et tempora repellendus odit quam harum impedit laborum nulla atque minima nihil temporibus. Asperiores maxime cum porro quisquam quae, delectus harum dicta eius officia aliquid magni et dolore ducimus, modi blanditiis. Deserunt facilis minus laudantium, eveniet delectus quam.",
      image: "https://picsum.photos/408",
      directLink: "https://github.com/rajmangukiya"
    }
  ]


  return (
    <div className="pb-5 min-vh-100">
      <div className="container d-flex flex-wrap justify-content-around align-items-center">
        {
          blogs.map((blog: any) => (
            <a href={blog.directLink} target='_blank' className="blog-block mt-5">
              <div style={{width: '250px', height: '200px', objectFit: 'cover', overflow: 'hidden'}}>
                <img className="w-100 h-100" src={blog.image} alt="blog-image" />
              </div>
              <h5 className="m-3 text-dark">{
                blog?.title.length > 50 ? blog.title.slice(0, 50) + ' . . .' : blog.title
              }</h5>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Blog
