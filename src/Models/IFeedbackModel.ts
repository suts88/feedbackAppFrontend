import { ICommentModel } from "./ICommentModel";

export interface IFeedbackModel{
  feedbackTitle: String;
  category?: String;
  upvotes?: String;
  status?: String;
  description?: String;
  comments?: ICommentModel [];
}
