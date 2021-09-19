import React from 'react'
import Project from './Project'

const Portfolio = () => {

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

  return (
    <>
      <div className="min-vh-100 d-flex flex-wrap">
        {
          projects.map((x: any) => {
            return (
              <Project data={x} />
            )
          })
        }
      </div>
    </>
  )
}

export default Portfolio
