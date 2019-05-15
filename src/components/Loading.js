import React from 'react'
import styled from "styled-components";

const LoadingContainer = styled.div`
@-webkit-keyframes rotating {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}

.preloader {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 48px;
    height: 48px;
    margin-left: -24px;
    margin-top: -24px;
    border: #31a9df 3px solid;
    border-left-color: transparent;
    border-radius: 50%;
    -webkit-animation: rotating 1s linear infinite;
}
`;

 const Loading = () => {
  return (
    <LoadingContainer>
      <div className="preloader"></div>
    </LoadingContainer>
  )
}


export default Loading