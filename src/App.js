import React, {useState, useEffect} from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Navigation from "./components/Navigation/Navigation";

function App() {
    const [tyres,setTyres] = useState();
    const [brands,setBrands] = useState();
    const [sizes,setSizes] = useState();

    const getTyres = () => {
        fetch("http://localhost:5000/tyres")
            .then(response => response.json())
            .then(response =>{
                console.log(response);
                setTyres(response);
            });
    };

    const getBrands = () => {
        fetch("http://localhost:5000/brands")
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setBrands(response);
            });
    };

    const getSizes = () => {
        fetch("http://localhost:5000/tyres/sizes")
            .then(response => response.json())
            .then(response => setSizes(response));
    };

    useEffect(() => {
        getSizes();
        getBrands();
        getTyres();  
    }, []);

    return (
        <div className="App">
            {brands && sizes && <Navigation brands={brands} getTyres={getTyres} setTyres={setTyres} sizes={sizes}/>} 
            {tyres && <Display tyres={tyres} />}
        </div>
    );
}

export default App;
