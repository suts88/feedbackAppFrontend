import { IFeedbackModel } from "./IFeedbackModel";

export interface ICommentModel{
  id: Number;
  content: String;
  feedback: IFeedbackModel;
}
