import styled from "styled-components";

import type { IStatus } from "@components/containers/project-box";

export const StatusProjectStyle = styled.span<{ $status: IStatus }>`
  color: ${({ $status }) =>
    $status === "finished"
      ? "rgba(0, 128, 0, 1)"
      : $status === "process"
      ? "rgba(255, 165, 0, 1)"
      : "initial"};
`;

/*
    orange: rgba(255, 165, 0, 1), rgba(255, 193, 112, 1) 
    green: rgba(0, 128, 0, 1)
*/
