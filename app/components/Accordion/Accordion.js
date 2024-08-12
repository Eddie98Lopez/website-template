import React from 'react'
import styles from "./Accordion.module.css"
import AccordionItem from './AccordionItem'
import accordionDummyData from './dummyData'



const Accordion = ({array}) => {
  return (
    <ul className={styles.accordion}>
        {!array&&accordionDummyData.map((item,i)=> <AccordionItem key={i} item={item} index={i}/>)}
        {array && array.map((item,i)=><AccordionItem key={`accordion-item-${i}`} item={item} index={i}/>)}
    </ul>
  )
}

export default Accordion