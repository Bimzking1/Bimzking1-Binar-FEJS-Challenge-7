import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/navbar.module.css'
import Logo from '../../public/image/binar.png'

export default function Navbar() {
  return (
    <div>
        <div className={styles.navbarContainer}>
          <Link href="/">
            <div className={styles.title}>
              <div className={styles.titleImage} >
                <Image className={styles.imageLogo} alt={Logo} src={Logo}/>
              </div>
              <div className={styles.titleText} >
              FEJS-2 Catalog
              </div>
            </div>
          </Link>
          <div>
              <div className={styles.navigationContainer}>
                  <li className={styles.item}><Link href="/">Home</Link></li>
                  <li className={styles.item}><Link href="/input">Input</Link></li>
                  <li className={styles.item}><Link href="/chart">Chart</Link></li>
                  <li className={styles.item}><Link href="/download">Download</Link></li>
              </div>
          </div>
        </div>
    </div>
  )
}
