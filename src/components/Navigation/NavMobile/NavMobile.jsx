import React, {useState} from "react";
import styles from "./NavMobile.module.scss";

const NavMobile = (props) => {
    const {brands, setTyres, getTyres, sizes, filterByBrand, filterBySearch, filterBySizes, resetFilters, showPage} = props;
    const [isOpen,setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navMob}>
            <button className={styles.openbtn} onClick={toggleNav}>&#9776;</button>
            
            {isOpen && <nav className={styles.sidepanel}>
                <button className={styles.closebtn} onClick={toggleNav}>X</button>
                <h1 className={styles.nav__title}>MotorEasy Test</h1>
                
                <select name="brands" onChange={(e) => filterByBrand(e.target.value)}>
                    <option disabled selected value> -- select a brand -- </option>
                    {brands.map( brand => <option value={brand.title} key={brand._id}>{brand.title}</option>)}
                </select>

                <select name="size" onChange={(e) => filterBySizes(e.target.value)}>
                    <option disabled selected value> -- select a size -- </option>
                    {sizes.map( size => <option key={size} value={size}>{size}</option> )}
                </select>

                <input type="text" placeholder="Search by name..." onChange={(e) => filterBySearch(e.target.value)}/>

                <button className={styles.nav__reset_btn} onClick={resetFilters}>Reset filters</button>
                <select className={styles.pagination} name="page" onChange={(e) => showPage(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </nav>}
        </div>
    );
};

export default NavMobile;
