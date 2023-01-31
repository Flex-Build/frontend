import { BehaviorSubject, Subject } from "rxjs";

export const canvasSubject = new BehaviorSubject<JSX.Element | undefined>(
  undefined
);
