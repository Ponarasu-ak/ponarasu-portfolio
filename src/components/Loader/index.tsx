import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loadingtext">
        <p>Sending</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loadingtext p {
    color: white;
    position: relative;
  }

  .loadingtext p::after {
    position: absolute;
    animation: b 2s infinite linear;
    color: white;
    content: "";
    left: 105%;
  }

  @keyframes b {
    0% {
      content: "";
    }

    10% {
      content: ".";
    }

    40% {
      content: "..";
    }

    70% {
      content: "...";
    }

    100% {
      content: "";
    }
  }
`;

export { Loader };
