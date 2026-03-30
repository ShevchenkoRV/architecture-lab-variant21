import { CompetitionWork, VALID_CATEGORIES } from "../domain/competition-work";
import { IWorkRepository } from "./ports";

export class SubmitWorkUseCase {
  constructor(private repository: IWorkRepository) {}

  async execute(title: string, category: string, author: string) {
    // 1. Перевірка категорії
    if (!VALID_CATEGORIES.includes(category)) {
      throw new Error(`Помилка: Категорія "${category}" не існує!`);
    }

    // 2. Перевірка дедлайну (бізнес-правило)
    const deadline = new Date('2026-12-31'); // Постав дату з майбутнього
    if (new Date() > deadline) {
      throw new Error("Помилка: Дедлайн минув!");
    }

    const work: CompetitionWork = {
      id: Math.random().toString(36).substr(2, 9),
      title, category, author,
      submittedAt: new Date()
    };

    await this.repository.save(work);
    return work;
  }
}
