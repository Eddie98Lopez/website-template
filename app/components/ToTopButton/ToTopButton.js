import React from 'react';
import { BsArrowUpSquareFill } from "react-icons/bs";
import useScrollPosition from '@/app/utils/useScrollPositon';

const ToTopButton = () => {
    const scroll = useScrollPosition()
  return (
    <div>
        <BsArrowUpSquareFill/>
    </div>
  )
}

export default ToTopButton