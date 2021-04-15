import React from "react";
import styles from "./Display.module.scss";


const Display = (props) => {
    const {tyres} = props;
    return (
        <main>
            {tyres.map(tyre => <section className={styles.card} key={tyre._id}>
                <img src={tyre.img} alt={tyre.title} />
                <img src={tyre.brand.logo} alt={tyre.brand.title} />
                <h2>{tyre.title.toUpperCase()} <br/> {tyre.size} </h2>
                <h3> £{tyre.price}</h3>
                {console.log(tyre.price)}
            </section>
            )}
        </main>
    );
};

export default Display;
