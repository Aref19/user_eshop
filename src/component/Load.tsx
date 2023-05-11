
import { ReactElement } from 'react';
import LoadCss from '../css/Load.module.css'
import { useState } from 'react';

const Load = () => {
  const [div, setDive] = useState("one");








  return (
    <div className={LoadCss.loading}>
      <div className={LoadCss.dot_1}></div>
      <div className={LoadCss.dot_2}></div>
      <div className={LoadCss.dot_3}></div>
    </div>
  )
}

export default Load;