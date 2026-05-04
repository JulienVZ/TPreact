import imageDog from "./Dog.jpeg";
import React from "react";


export const Card = ({ title = "Texte card", description = "Test d'une card", imageUrl="https://imageresizer.com/fr/g%C3%A9n%C3%A9rateur-de-m%C3%A8mes/modifier/sad-hamster" ,title_card = "image.jpg"}) => {
    return (
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "10px", width: "200px", height:"200px", display: "flex", justifyContent: "space-between", flexDirection:"column" }}>
            <h3>{title}</h3>
            <img src={imageDog} style={{ width: "100%" }} alt="Mon image" />
            <p>{description}</p>
        </div>
    );
};
