export type WordType = 'noun' | 'verb';
export type VerbTenseType = 'present';

export interface TagEntry {
  english: string;
}

export interface NounEntry {
  spanish: string;
  english: string;
  german: string;
  tags: string[];
  type: WordType;
  tip: string | null;
}

export interface VerbEntry {
  spanish: string;
  english: string;
  german: string;
  forms: Array<{
    tense: VerbTenseType;
    conjugations: {
      first_singular: string;
      second_singular: string;
      third_singular: string;
      first_plural: string;
      second_plural: string;
      third_plural: string;
    };
  }>;
}
