import './Value.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton
, AccordionItemState, AccordionItemPanel } from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';
import data from'../../utils/accordion';
import { useState } from 'react';

const Value = () => {
  return (
    <section className='v-wrapper'>
        <div class="paddings innerWidth flexCenter v-container">
            {/* Left Side */}
            <div className="v-left">
                <div className="image-container">
                    <img src='./value.png' alt='' />
                </div>
            </div>
            {/* Right Side */}
            <div class="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We give to you</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you.<br />
                We believe a good balance to live can make your life better.</span>
                <Accordion className='accordion'  allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                        data.map((item, i) => {
                            const [className, setClassName] = useState(null);
                            return (
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                            <AccordionItemState>
                                                {({expanded}) => expanded ? 
                                                setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>
                                            <div class="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className='primaryText'>
                                                {item.heading}
                                            </span>
                                            <div class="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p class="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value