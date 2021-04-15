import React, {useState, useEffect} from "react";
import styles from "./Navigation.module.scss";
import NavMobile from "./NavMobile/NavMobile";

const Navigation = (props) => {
    const {brands, setTyres, getTyres, sizes} = props;
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    const filterBySizes = (selectedSize) => {
        fetch(`http://localhost:5000/tyres?size=${selectedSize}`)
            .then(response => response.json())
            .then(response => setTyres(response));
    };

    const filterByBrand = (selectedBrand) => {
        fetch(`http://localhost:5000/tyres?brand=${selectedBrand}`)
            .then(response => response.json())
            .then(response => setTyres(response));
    };

    const filterBySearch = (searchText) => {
        if (searchText.length > 0) {
            fetch(`http://localhost:5000/tyres?title=${searchText}`)
                .then(response => response.json())
                .then(response => setTyres(response));
        } else {
            getTyres();
        }
    };

    const resetFilters = () => {
        getTyres();
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    let isMobile = (width <= 760);

    return (
        <>
            {isMobile ? <NavMobile brands={brands} getTyres={getTyres} setTyres={setTyres} sizes={sizes} filterByBrand={filterByBrand} filterBySizes={filterBySizes} filterBySearch={filterBySearch} resetFilters={resetFilters}/> : 
                <nav>
                    <div className={styles.nav__filters}>
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
                    </div>
                </nav>
            }
        </>
    );
};

export default Navigation;
