import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import styles from "./WriteAComponent.module.scss"
function index() {

    const [code, setCode] = useState('');
    const [price, setPrice] = useState('');

    return (
        <div className={styles.writeAComponentContainer}>
            <Navbar />
            <div className={styles.insertCode}>
                <textarea placeholder='Write Your Code Here' className={styles.inputArea} value={code} onChange={(e) => (setCode(e.target.value))}></textarea>
                <div className={styles.buttonAndInput}>
                    <input placeholder="Enter Price" type="number" className={styles.priceInput} value={price} onChange={(e) => (setPrice(e.target.value))}></input>
                    <button className={styles.upload}>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default index