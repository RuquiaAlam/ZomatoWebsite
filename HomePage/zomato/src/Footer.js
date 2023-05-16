import "./footer.css";
const Footer=() =>
{
    return ( 
        <div>
            <footer>
            <center>
        <h6>Copyright Developer 2022. All Rights Reserved</h6>
        </center>

        <div className="fotDiv">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="fotDiv">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="fotDiv noBorder">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
         
        
        <div className="social">
          <center>
            <a href="www.facebook.com/" target="_blank">
              <img
                src="https://i.ibb.co/dtzG625/facebook.png"
                alt="fb"
                className="socialImg"
              />
            </a>
            <a href="www.instagram.com/" target="_blank">
              <img
                src="https://i.ibb.co/19H5LvT/insta.png"
                alt="insta"
                className="socialImg"
              />
            </a>
            <a href="www.youtube.com/" target="_blank">
              <img
                src="https://i.ibb.co/w07K2Vn/youtube1.png"
                alt="yt"
                className="socialImg"
              />
            </a>
          </center>
        </div>
        </footer>
        </div>
    );

} ;
export default Footer;