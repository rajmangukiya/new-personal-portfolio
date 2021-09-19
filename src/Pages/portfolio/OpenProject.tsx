import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OpenProject = () => {

  const { id }: any = useParams();

  const projects: any = [
    {
      id: 1,
      title: 'First Project',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate, magnam vel minus iure reprehenderit esse? Necessitatibus quibusdam fugiat ipsa omnis nemo totam iusto nisi commodi quaerat sunt quis dignissimos amet aliquam consequatur cum ut voluptate, accusantium illum tenetur debitis cumque quo ex in! Excepturi molestiae tempora placeat id optio soluta eaque a, iusto magni veritatis corporis esse. Eos molestiae praesentium beatae non commodi maiores nam eligendi maxime illum tempora. Dolorem eum error libero ullam voluptate aliquam fugiat beatae quidem voluptatum, perferendis ducimus excepturi vero architecto nobis corporis dignissimos illum dolorum modi. Voluptas itaque aliquid error, esse nam minima quidem.",
      images: ['https://picsum.photos/300', 'https://picsum.photos/301', 'https://picsum.photos/302', 'https://picsum.photos/303'],
      video: ''
    },
    {
      id: 2,
      title: 'First Project',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate, magnam vel minus iure reprehenderit esse? Necessitatibus quibusdam fugiat ipsa omnis nemo totam iusto nisi commodi quaerat sunt quis dignissimos amet aliquam consequatur cum ut voluptate, accusantium illum tenetur debitis cumque quo ex in! Excepturi molestiae tempora placeat id optio soluta eaque a, iusto magni veritatis corporis esse. Eos molestiae praesentium beatae non commodi maiores nam eligendi maxime illum tempora. Dolorem eum error libero ullam voluptate aliquam fugiat beatae quidem voluptatum, perferendis ducimus excepturi vero architecto nobis corporis dignissimos illum dolorum modi. Voluptas itaque aliquid error, esse nam minima quidem.",
      images: ['https://picsum.photos/400', 'https://picsum.photos/401', 'https://picsum.photos/402', 'https://picsum.photos/403'],
      video: ''
    },
    {
      id: 3,
      title: 'First Project',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate, magnam vel minus iure reprehenderit esse? Necessitatibus quibusdam fugiat ipsa omnis nemo totam iusto nisi commodi quaerat sunt quis dignissimos amet aliquam consequatur cum ut voluptate, accusantium illum tenetur debitis cumque quo ex in! Excepturi molestiae tempora placeat id optio soluta eaque a, iusto magni veritatis corporis esse. Eos molestiae praesentium beatae non commodi maiores nam eligendi maxime illum tempora. Dolorem eum error libero ullam voluptate aliquam fugiat beatae quidem voluptatum, perferendis ducimus excepturi vero architecto nobis corporis dignissimos illum dolorum modi. Voluptas itaque aliquid error, esse nam minima quidem.",
      images: ['https://picsum.photos/500', 'https://picsum.photos/501', 'https://picsum.photos/502', 'https://picsum.photos/503'],
      video: ''
    },
    {
      id: 4,
      title: 'First Project',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate, magnam vel minus iure reprehenderit esse? Necessitatibus quibusdam fugiat ipsa omnis nemo totam iusto nisi commodi quaerat sunt quis dignissimos amet aliquam consequatur cum ut voluptate, accusantium illum tenetur debitis cumque quo ex in! Excepturi molestiae tempora placeat id optio soluta eaque a, iusto magni veritatis corporis esse. Eos molestiae praesentium beatae non commodi maiores nam eligendi maxime illum tempora. Dolorem eum error libero ullam voluptate aliquam fugiat beatae quidem voluptatum, perferendis ducimus excepturi vero architecto nobis corporis dignissimos illum dolorum modi. Voluptas itaque aliquid error, esse nam minima quidem.",
      images: ['https://picsum.photos/200', 'https://picsum.photos/201', 'https://picsum.photos/202', 'https://picsum.photos/203'],
      video: ''
    }
  ]

  const data = projects[id - 1];

  return (
    <div className="">
      <Carousel showThumbs={false} width="100%" >
        <div>
          <img style={{width: '100%', height: '80vh', objectFit: "cover"}} src={data.images[0]} />
        </div>
        <div>
          <img style={{width: '100%', height: '80vh', objectFit: "cover"}} src={data.images[1]} />
        </div>
        <div>
          <img style={{width: '100%', height: '80vh', objectFit: "cover"}} src={data.images[2]} />
        </div>
      </Carousel>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="p-5" >{data.title}</h1>
        <p className="display-7 px-5" >{data.description}</p>
        <div className="d-sm-flex w-100 justify-content-evenly">
          <a href="https://rajmangukiya.me" target="_blank" className="bg-primary rounded-pill px-5 mx-2 py-2 text-center text-light my-5">live project</a>
          <a href="https://github.com/rajmangukiya" target="_blank" className="bg-primary rounded-pill px-5 mx-2 py-2 text-center text-light my-5">github repository</a>
        </div>
      </div>
    </div>

  )
}

export default OpenProject
