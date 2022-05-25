import styled from "styled-components";

interface StatusWrapperProps {
  isSuccess?: boolean;
  isLarge?: boolean;
}

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ isLarge }) => (isLarge ? "1.4rem" : "1.2rem")};
  background: ${(props: StatusWrapperProps) =>
    props.isSuccess ? "var(--background-success)" : "var(--background-error)"};
  padding: ${({ isLarge }) => (isLarge ? "0.4rem 1.2rem" : "0.2rem 1rem")};
  color: ${(props: StatusWrapperProps) =>
    props.isSuccess ? "var(--color-success)" : "var(--color-error)"};
  border-radius: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  .status-icon {
    display: flex;
    align-items: center;
    font-size: 2.1rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: ${({ isLarge }) => (isLarge ? "1.3rem" : "1.1rem")};
    padding: ${({ isLarge }) => (isLarge ? "0.3rem 1.2rem" : "0.1rem 1rem")};
  }
`;

export { StatusWrapper };
