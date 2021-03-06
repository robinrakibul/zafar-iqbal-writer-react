import React from 'react';
// Get Current Year
const getYear = () => {
    return new Date().getFullYear();
}
const Footer = () => {
    return (
       <footer className='bottom-0 text-center w-full m-0 bg-blue-900 text-white p-5 font-[poppins]'>
           <p><small>Copyright &copy; Rakibul Hassan Robin | {getYear()}</small></p>
       </footer>
    );
};

export default Footer;