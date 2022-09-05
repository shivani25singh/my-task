import Head from 'next/head'
 import Image from 'next/image'
 import styles from '../../styles/Home.module.css'

export default function forturner() {
    return (

        <div className={styles.grid}>
           <div className={styles.card}>
             <Image src="/img2.webp" width="400" height="380px" />
             <h2>Forturner</h2>
             <p>Automatic</p>
             <h4>RS 25.00 lakhs onwards</h4>
             </div>
             </div>

    )

}