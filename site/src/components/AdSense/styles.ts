import styled from "styled-components";

export const AdSenseContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
