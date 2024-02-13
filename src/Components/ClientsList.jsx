import React from 'react'
import C1 from '../assets/c1.png'
import C2 from '../assets/c2.png'
import C3 from '../assets/c3.png'
import C4 from '../assets/c4.png'
import C5 from '../assets/c5.png'
import { Container } from 'react-bootstrap'

const ClientsList = () => {

    const bestSeller = {
        "bestSellerCollections": {
          "data": [
            {
              "id": 1,
              "productImage": C1,
            },
            {
              "id": 2,
              "productImage": C2,
            },
            {
              "id": 3,
              "productImage": C3,
            },
            {
              "id": 4,
              "productImage": C4,
            },
            {
              "id": 4,
              "productImage": C5,
            }
          ]
        }
      };

  return (
    <>
    <Container>

    <div className='d-flex flex-column text-center '>
        <h1>We are not alone</h1>

        <div className="d-flex justify-content-evenly mt-5">
        {bestSeller.bestSellerCollections.data.map(data => (
          <div >
                <img src={data.productImage} alt='custome' className='clients'/>
            </div>
        ))}
        </div>
    </div>
        </Container>
    </>
  )
}

export default ClientsList