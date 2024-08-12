import React, {useState} from 'react'
import styles from "./Accordion.module.css"


const AccordionItem = ({item,index}) => {
    const [expand,setExpand] = useState(false)
    

    const handleExpand = () => {
        setExpand(!expand)
    }
  return (
    <li className={`${styles.accordion_item}`} onClick={handleExpand
    }>
        <h3>{item.headline}</h3>
        <div className={`${styles.expanding_container} ${expand && styles.expanded}`}>
        <div>
        <p>{item.text}</p>
        </div>
        </div>
    </li>
  )
}

export default AccordionItem