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
  position: relative;

  div {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #555;
    color: white;
  }
  @media (max-width: 576px) {
    div {

    }
  }
  `

export default function Carousel() {
  return (
    <>
      <Hero>
        <div>
          <h1>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
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