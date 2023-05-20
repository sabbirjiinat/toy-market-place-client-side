
const Footer = () => {
 
  return (

    <div className="bg-base-300">
      <footer className="footer p-10  text-base-content b">
      <div>
       
          <img className="h-10" src="https://i.ibb.co/ccyx5bm/logo.png"
          alt="" />
      
       
        <p>
         <span className="text-xl text-gray-800"> Electronic Toy</span>
          <br />
         <span> Providing reliable tech since 1992</span>
        </p>
        <img className="h-10 cursor-pointer" src="https://i.ibb.co/M2YbMKN/Group9969.png" alt="" />
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
  
 
    </footer>
      <p className="text-center pb-5">All rights reserved &copy; electronicToy.com</p>
       </div>
   
  );
};

export default Footer;
