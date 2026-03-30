import { SubmitWorkUseCase } from "./application/submit-work";
import { InMemoryRepository } from "./infrastructure/in-memory-repo";

const repo = new InMemoryRepository();
const submitService = new SubmitWorkUseCase(repo);

// Спроба 1: Все правильно
submitService.execute("Мій проект", "IT", "Студент")
  .catch(err => console.error(err.message));

// Спроба 2: Неправильна категорія (має видати помилку)
submitService.execute("Малюнок", "Music", "Студент")
  .catch(err => console.error(err.message));
