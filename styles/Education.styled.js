import styled from "styled-components";

export const EducationContainer = styled.div`
  padding: 2rem 1rem;
`;

export const EducationOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const EducationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.83);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  div.details {
    max-width: 70%;
    
    h3 {
      margin: 0 0 0.5rem 0;
      color: #f7f6f633;
    }

    p {
      margin: 0.2rem 0;
      color: #5a5656ff;
    }
  }

  div.logo {
    max-width: 200px;  /* Adjust as required */
    flex-shrink: 0;

    img {
      width: 100%;
      height: 150;px          /* Maintain aspect ratio */
      object-fit: contain;   /* Prevent compression */
      border-radius: 10px;
    }
  }
`;
