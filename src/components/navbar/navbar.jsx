import React from 'react'
import styles from './navbar.module.css'
import { CornerDownRight } from 'lucide-react'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logobtn}><span>Use State Practice</span></div>
      <div className={styles.announce}>
        <CornerDownRight size={18} color="#1c2120" className={styles.cornericon} /> <p>2026 &copy; <span>Abdul Hannan.</span> All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Navbar