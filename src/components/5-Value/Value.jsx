import './Value.css';
import valuImg from '/assets/value.png';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import data from '../../../utils/accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useState } from 'react';

const Value = () => {
  
  return (
    <section className='v-wrapper' id='value'>
      <div className="container value"> 
        {/* left side */}
        <div className="v-left">
          <div className="img-container">
            <img src={valuImg} alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="v-right">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give to You</span>
          <span className='secondaryText'>
            We always ready to help by providing the best services for you.
            <br />
            We believe a good blace to live can make your life better
          </span>



          <Accordion

          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {
              data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem className={`accordionItem ${className}`} key={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className='accordionButton'>
                        <AccordionItemState>
                          {({expanded})=> expanded? setClassName("expanded") : setClassName("collapsed")}
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className='flexCenter primaryText'>
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20}/>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
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
