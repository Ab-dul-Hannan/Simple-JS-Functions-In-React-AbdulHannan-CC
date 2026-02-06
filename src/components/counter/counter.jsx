import React, {usestate} from 'react' 
import styles from './counter.module.css'
import {ArrowRight, ArrowLeft} from 'lucide-react'

const counter = () => {
  return (
    <div className={styles.counterbox}>
        <div className={styles.screen}>
            0
        </div>
        <div className={styles.playbtns}>
            <button className={`${styles.btns} ${styles.b1}`}><ArrowLeft /></button>
            <button className={styles.btns}>2</button>
            <button className={styles.btns}><ArrowRight /></button>
        </div>
    </div>
  )
}

export default counter