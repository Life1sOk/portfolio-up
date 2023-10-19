import styled from "styled-components";

export const SlideContainerLayout = styled.div<{ $duration?: string }>`
  width: 50%;
  aspect-ratio: 1/1;
  padding: 0 0.1875rem 0.1875rem 0.1875rem; /* 3px converted to rem */
  background-color: ${({ theme }) => theme.animation.background};
  border-radius: 0.3125rem; /* 5px converted to rem */
  flex-shrink: 0;
  transition: all 1s;

  box-shadow: 1.3125rem 2.125rem 1.625rem -0.375rem rgba(0, 0, 0, 0.75); /* 21px 34px 26px -6px converted to rem */
  -webkit-box-shadow: 1.3125rem 2.125rem 1.625rem -0.375rem rgba(0, 0, 0, 0.75); /* 21px 34px 26px -6px converted to rem */
  -moz-box-shadow: 1.3125rem 2.125rem 1.625rem -0.375rem rgba(0, 0, 0, 0.75); /* 21px 34px 26px -6px converted to rem */

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  animation-name: slide;
  animation-duration: ${({ $duration }) => ($duration ? $duration : "2s")};

  @keyframes slide {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const TitleLayout = styled.span`
  color: white;
  font-size: 0.75rem; /* 12px converted to rem */
  font-weight: 600;

  margin: 0.625rem; /* 10px converted to rem */
`;

export const MainColumnLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 25, 47, 0.5);
  padding: 0.5rem; /* 8px converted to rem */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainRawLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 25, 47, 0.5);
  padding: 0.5rem; /* 8px converted to rem */

  display: flex;
  justify-content: space-between;
`;

// export const SlideContainerLayout = styled.div<{ $duration?: string }>`
//   width: 50%;
//   aspect-ratio: 1/1;
//   padding: 0 3px 3px 3px;
//   background-color: ${({ theme }) => theme.animation.background};
//   border-radius: 5px;
//   flex-shrink: 0;
//   transition: all 1s;

//   box-shadow: 21px 34px 26px -6px rgba(0, 0, 0, 0.75);
//   -webkit-box-shadow: 21px 34px 26px -6px rgba(0, 0, 0, 0.75);
//   -moz-box-shadow: 21px 34px 26px -6px rgba(0, 0, 0, 0.75);

//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   animation-name: slide;
//   animation-duration: ${({ $duration }) => ($duration ? $duration : "2s")};

//   @keyframes slide {
//     from {
//       transform: scale(0);
//     }
//     to {
//       transform: scale(1);
//     }
//   }
// `;

// export const TitleLayout = styled.span`
//   color: white;
//   font-size: 12px;
//   font-weight: 600;

//   margin: 10px;
// `;

// export const MainColumnLayout = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 25, 47, 0.5);
//   padding: 8px;

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// export const MainRawLayout = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 25, 47, 0.5);
//   padding: 8px;

//   display: flex;
//   justify-content: space-between;
// `;
