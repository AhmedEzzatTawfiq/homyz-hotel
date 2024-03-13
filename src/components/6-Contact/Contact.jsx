import "./Contact.css";
import contactImg from "/assets/contact.jpg";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <div>
      <div className="c-wrapper" id="contact">
        <div className="container contact">
          {/* left side */}
          <div className="c-left">
            <span className="orangeText">Our Contact</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">
              We always ready to help by providing the best services for you We
              believe a good blace to live can make your life better
            </span>

            <div className="contact-modes">
              {/* first row */}
              <div className="row">
                <div className="mode">
                  <div className="flexStart call">
                    <div className="flexCenter icon">
                      <MdCall />
                    </div>
                    <div className="flexColStart detail">
                      <span>Call</span>
                      <span className="secondaryText">021 213 143 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>
                <div className="mode">
                  <div className="flexStart call">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill />
                    </div>
                    <div className="flexColStart detail">
                      <span>Chat</span>
                      <span className="secondaryText">021 213 143 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>
                <div className="mode">
                  <div className="flexStart call">
                    <div className="flexCenter icon">
                    <BsFillChatDotsFill />
                    </div>
                    <div className="flexColStart detail">
                      <span>Video Call</span>
                      <span className="secondaryText">021 213 143 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>
                <div className="mode">
                  <div className="flexStart call">
                    <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter />
                    </div>
                    <div className="flexColStart detail">
                      <span>Message</span>
                      <span className="secondaryText">021 213 143 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>
              </div>
            </div>
          </div>

          <div className="c-right">
            <div className="img-container">
              <img src={contactImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
