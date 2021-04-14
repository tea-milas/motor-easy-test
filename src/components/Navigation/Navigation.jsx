import React, {useState} from 'react'
import styles from './Navigation.module.scss'

const Navigation = () => {
    const [brand,setBrand] = useState("");
    const [size,setSize] = useState();
    const [searchText, setSearchText] = useState("");
    {console.log(brand,size)}
    return (
        <nav>
            <div className={styles.nav__filters}>
                <h1 className={styles.nav__title}>MotorEasy Test</h1>
                <select name="brands" onChange={(e) => setBrand(e.target.value)}>
                    <option disabled selected value> -- select a brand -- </option>
                    <option value="Avon">Avon</option>
                    <option value="Bridgestone">Bridgestone</option>
                    <option value="Continental">Continental</option>
                    <option value="Cooper">Cooper</option>
                    <option value="Dunlop">Dunlop</option>
                </select>

                <select name="size" onChange={(e) => setSize(e.target.value)}>
                    <option disabled selected value> -- select a size -- </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                <input type="text" placeholder="Search by name..." onChange={(e) => setSearchText(e.target.value)}/>
            </div>
            <select name="tpp" onChange={(e) => setSize(e.target.value)}>
                <option disabled selected value> -- display tyres per page -- </option>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="23">24</option>
                <option value="36">36</option>
            </select>
        </nav>
    )
}

export default Navigation
