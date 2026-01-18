import TitleDesc from "../components/TitleDesc";
import { achievementsData, volunteeringData } from "../constants/constants";
import {
  AchievementsContainer,
  TwoColumnWrapper,
  Column,
  SectionHeading,
  AchievementsItem,
} from "../styles/Achievements.styled";


export default function AchievementsPage() {
  return (
    <div>
      <TitleDesc
        title="Kundan's Achievements & Volunteering"
        desc="This section highlights Kundan's accomplishments and his contributions through various volunteering roles."
      />

      <AchievementsContainer>

        <TwoColumnWrapper>

          {/* LEFT COLUMN - ACHIEVEMENTS */}
          <Column>
            <SectionHeading>Achievements</SectionHeading>

            {achievementsData.map(({ title, position, description, year }) => (
              <AchievementsItem key={title}>
                <div className="details">
                  <h3>{title}</h3>

                  <p><strong>Year:</strong> {year}</p>
                  <p><strong>Description:</strong> {description}</p>
                </div>
              </AchievementsItem>
            ))}
          </Column>

          {/* RIGHT COLUMN - VOLUNTEERING */}
          <Column>
            <SectionHeading>Volunteering</SectionHeading>

            {volunteeringData.map(({ title, position, description, year }) => (
              <AchievementsItem key={title}>
                <div className="details">
                  <h3>{title}</h3>
                  <p><strong>Role:</strong> {position}</p>
                  <p><strong>Year:</strong> {year}</p>
                  <p><strong>Description:</strong> {description}</p>
                </div>
              </AchievementsItem>
            ))}
          </Column>

        </TwoColumnWrapper>

      </AchievementsContainer>
    </div>
  );
}
