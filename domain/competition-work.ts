export const VALID_CATEGORIES = ['Art', 'Science', 'IT'];

export interface CompetitionWork {
  id: string;
  title: string;
  category: string;
  author: string;
  submittedAt: Date;
}
