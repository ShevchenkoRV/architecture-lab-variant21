import { CompetitionWork } from "../domain/competition-work";

export interface IWorkRepository {
  save(work: CompetitionWork): Promise<void>;
}
