import React, { useState, useEffect } from 'react';

const wardrobe = {
    All: [],
    Haut: ["T-Shirt", "Sweat", "Pull", "Chemise", "Polo"],
    Veste: ["Manteau", "Bombere", "Trench"],
    Bas: ["Jean", "Short", "Jupe"],
    Combinaison: ["Robe", "Salopette"],
    Chaussures: ["Basket", "Sandales", "Bottes", "Talons"],
    Accessoire: ["Bonnet, Chapeau, Casquette", "Gant", "Echarpe", "Ceinture", "Chaussettes", "Collant"],
    Bijoux: ["Boucle d'oreilles", "Collier", "Bracelet", "Bague", "Montre"]
}

function Category({ name, value, i, active, onClick }) {

    return (
        <React.Fragment>
            <div className={`${i === active ? "category-active" : "category"} item-center`} onClick={() => onClick()} key={i}>{name}</div>
            {
                i === active &&
                value.map((value, i) => {
                    return <div className="sub-category item-center" key={i}>
                        {value}
                    </div>
                })
            }
        </React.Fragment>
    )
}

function Menu(props) {
    const [act, setAct] = useState(0);

    return (
        <div id="menu" className="col-3 p-0">
            {
                Object.entries(wardrobe).map((e, i) => {
                    return <Category name={e[0]} value={e[1]} key={i} i={i} active={act} onClick={() => setAct(i)} />
                })
            }
        </div>
    )
}

export default Menu
