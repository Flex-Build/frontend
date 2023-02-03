import { Subject } from "rxjs";
import { FlexBuild } from "../contracts";

export const canvasSubject = new Subject<
  FlexBuild.ComponentStructOutput | boolean
>();
