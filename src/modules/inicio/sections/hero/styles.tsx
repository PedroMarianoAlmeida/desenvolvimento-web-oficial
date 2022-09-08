import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  margin-top: 78px;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.4;
  }
  img {
    @keyframes ani {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(22px);
      }
      100% {
        transform: translateY(0);
      }
    }
    animation: ani 5s linear infinite;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 100px;
    padding: 0 60px;
    text-align: center;
    div {
      align-items: center;
    }
  }
`;
