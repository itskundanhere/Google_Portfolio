import Image from "next/image";
import TitleDesc from "../components/TitleDesc";
import { educationData } from "../constants/constants";
import { EducationContainer, EducationOverview, EducationItem } from "../styles/Education.styled";

const Education = () => {
  return (
    <div>
      <TitleDesc
        title="Kundan's Education"
        desc="Kundan has pursued and completed the following educational qualifications, reflecting his continuous dedication to learning and growth."
      />
      <EducationContainer>
        <p>{educationData.info}</p>

        <EducationOverview>
          {educationData.educationList.map(({ degree, institute, year, specialization, marks, achievements, logo }) => (
            <EducationItem key={degree}>
              <div className="details">
                <h3>{degree}</h3>
                <p><strong>Institute:</strong> {institute}</p>
                <p><strong>Year:</strong> {year}</p>
                <p><strong>Specialization:</strong> {specialization}</p>
                <p><strong>Marks:</strong> {marks}</p>
              </div>
              <div className="logo">
                <Image src={logo} alt={institute} width={120} height={120} />
              </div>
            </EducationItem>
          ))}
        </EducationOverview>
      </EducationContainer>
    </div>
  );
};

export default Education;
