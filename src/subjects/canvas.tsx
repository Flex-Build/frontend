import { Subject } from "rxjs";
import { GetAllComponents_components } from "../graph-ql/queries/GET_ALL_COMPONENTS/__generated__/GetAllComponents";

export const canvasSubject = new Subject<
  GetAllComponents_components | boolean
>();
