import type { IStatus } from "@components/containers/project-box";

import { StatusProjectStyle } from "./index.style";

const StatusProject = ({ data }: { data: IStatus }) => {
  return <StatusProjectStyle $status={data}>{data}</StatusProjectStyle>;
};

export default StatusProject;
