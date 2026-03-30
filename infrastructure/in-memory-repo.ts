import { CompetitionWork } from "../domain/competition-work";
import { IWorkRepository } from "../application/ports";

export class InMemoryRepository implements IWorkRepository {
  private data: CompetitionWork[] = [];
  async save(work: CompetitionWork) {
    this.data.push(work);
    console.log(`✅ Робота "${work.title}" успішно прийнята на конкурс!`);
  }
}
