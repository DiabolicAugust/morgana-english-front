import { TopicSetDocument } from 'morgana-english-shared/dist/models/topic-set.model';

export default interface DataInterface {
  overall: number;
  unused: number;
  warning: string | null;
  next: TopicSetDocument;
}
