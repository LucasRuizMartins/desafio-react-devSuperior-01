import "./styles.css";
import carImg from "../../assets/car.png";

export default function Card() {
  return (
    <div className="dsc-container card-container">
      <div className="dsc-card">
        <img src={carImg} alt="" />
 
        <p>Lorem ipsum dolor</p>

   
      </div>
      
    </div>
  );
}
