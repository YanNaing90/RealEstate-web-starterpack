import { MdCall } from 'react-icons/md';
import './Contact.css';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div class="paddings innerWidth flexCenter c-container">
            {/* Left Side */}
            <div class="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We always ready to help by providing the best services
                    for you. We believe a good balance to live can make your life better.</span>
                    <div class="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>+959440555599</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Call Now
                                </div>
                            </div>
                        {/* Second Mode */}
                        <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>snowboy65@gmail.com</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Chat Now
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                         <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>+959440555599</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Video Call Now
                                </div>
                            </div>
                        {/* Fourth Mode */}
                        <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>+959440555599</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Message Now
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            {/* Right Side */}
            <div class="c-right">
                <div class="image-container">
                    <img src='./contact.jpg' alt='contact' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact