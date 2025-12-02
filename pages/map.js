import { useContext } from "react";
import TitleDesc from "../components/TitleDesc";
import { MapContainer } from "../styles/Map.styled";
import { ThemeContext } from "./_app";

const Map = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <TitleDesc
        title="Kundan's Location"
        desc="Here mentioned location of Kundan."
      />
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d734.3704880899079!2d83.24801162954037!3d26.85593351127784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1764534194011!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0px", ...(darkMode && { filter: "invert(90%)" }) }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </div>
  );
};
export default Map;
