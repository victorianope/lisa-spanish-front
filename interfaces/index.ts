export type WordEntry = {
  spanish: string;
  english: string;
  german: string;
  tags: string[];
  tip: string | null;
  mistakes: number;
  lastChecked: Date;
};
