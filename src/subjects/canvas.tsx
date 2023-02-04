import { BigNumber, BigNumberish } from "ethers";
import { Subject } from "rxjs";
import { FlexBuild } from "../contracts";

export const canvasSubject = new Subject<
  [FlexBuild.ComponentStructOutput, BigNumberish] | boolean
>();

export const componentAdded = new Subject<
  [FlexBuild.ComponentStructOutput, BigNumberish]
>();
