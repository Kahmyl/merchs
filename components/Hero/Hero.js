import React from 'react';
import styled from 'styled-components';

const Hero = styled.div`
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("photographer.jpg");

  /* Set a specific height */
  
  height: 50%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display:block;
 
  div {
    text-align: center;
    position: absolute;
    top: 30%;
    left: 25%;
    transform: translate(-30%, -25%);
    background: rgba(256, 256, 256, 0.8);
    color: black;
    padding: 15px 50px;
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  h1 {
    margin-bottom: 5px;
  }
  small {display:block;
    color: grey; 
    margin-bottom: 15px;}
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
  }
  
  button:hover {
    background-color: #555;
    color: white;
  }
  @media (max-width: 576px) {
    div {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  `

export default function Carousel() {
  return (
    <>
      <Hero>
        <div>
          <h1>25% off all products</h1>
          <small>*offer runs while stocks last</small>
          <button>Shop now</button>
        </div>  
      </Hero>
    </>
  )
}
// import React from 'react';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBCarouselElement,
//   MDBCarouselCaption,
// } from 'mdb-react-ui-kit';

// export default function Carousel() {
//   return (
//     <MDBCarousel showIndicators showControls dark fade>
//       <MDBCarouselInner>
//         <MDBCarouselItem className='active'>
//           <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp' alt='...' />
//           <MDBCarouselCaption>
//             <h5>First slide label</h5>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </MDBCarouselCaption>
//         </MDBCarouselItem>

//         <MDBCarouselItem>
//           <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt='...' />
//           <MDBCarouselCaption>
//             <h5>Second slide label</h5>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </MDBCarouselCaption>
//         </MDBCarouselItem>

//         <MDBCarouselItem>
//           <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt='...' />
//           <MDBCarouselCaption>
//             <h5>Third slide label</h5>
//             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//           </MDBCarouselCaption>
//         </MDBCarouselItem>
//       </MDBCarouselInner>
//     </MDBCarousel>
//   );
// }