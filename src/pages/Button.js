import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

const Button = () => {
  return (
    <div className='testimonials-btn'>
      <Link to='/testimonials'>See Testimonials</Link>
    </div>
  );
};

export default Button;







// import React from 'react';
// import { Link } from 'react-router-dom';

// const Button = () => {
//   return (
//     <div className="fixed bottom-7 right-5 z-[1000] font-bold">
//       <Link
//         to="/testimonials"
//         className="inline-block bg-primary text-white px-3 py-1 rounded text-base transition-colors duration-300 hover:bg-animation"
//       >
//         See Testimonials
//       </Link>
//     </div>
//   );
// };

// export default Button;
