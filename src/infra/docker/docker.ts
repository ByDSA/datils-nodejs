import { SudoParams } from "../../os/cmd/params";

export type DockerParams = Partial<SudoParams & {
  env: string;
  dettach: boolean;
}>;
