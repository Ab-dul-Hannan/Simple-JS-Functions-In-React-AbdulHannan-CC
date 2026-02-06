import React, { useState } from 'react'
import styles from './counter.module.css'
import { ArrowRight, ArrowLeft, Ban } from 'lucide-react'

const counter = () => {

    let [value, setValue] = useState(0)

    return (
        <div className={styles.counterbox}>
            <div className={styles.screen}>
                {value}
            </div>
            <div className={styles.playbtns}>
                <button className={`${styles.btns} ${styles.b1}`}
                onClick={() => {
                    value--;
                    setValue(value);
                }}><ArrowLeft /></button>

                <button className={`${styles.btns} ${styles.b2}`} 
                onClick={() => {
                    setValue(value = 0);
                }}><Ban /></button>

                <button className={`${styles.btns} ${styles.b3}`} 
                onClick={() => {
                    value++;
                    setValue(value);
                }}><ArrowRight /></button>
            </div>
        </div>
    )
}

export default counter