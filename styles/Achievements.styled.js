import styled from "styled-components";

export const AchievementsContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: auto;
`;

export const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: stretch;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;

export const SectionHeading = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.headingColor};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  padding-left: 12px;
`;

export const AchievementsItem = styled.div`
  background: ${({ theme }) => theme.colors.contentBackground};
  border-radius: 14px;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: 300ms all ease;
  min-height: 220px;

  /* Same shadow styling logic as Contact page */
  filter: drop-shadow(
      0 ${({ darkMode }) => (darkMode ? "1px" : "4px")}
        ${({ darkMode }) => (darkMode ? "2px" : "3px")}
        ${({ theme }) => theme.colors.primary}
    )
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));

  &:hover {
    background: ${({ theme }) => theme.colors.contentHover};
    transform: translateY(-4px);
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
    color: ${({ theme }) => theme.colors.headingColor};
  }

  p {
    font-size: 1.7rem;
    margin: 0.4rem 0;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1.5;
  }
`;
