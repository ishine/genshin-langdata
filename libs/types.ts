import type allTags from "../dataset/tags.json";

type TagID = keyof typeof allTags;

export type Word = {
  id?: string;
  en: string;
  ja?: string;
  pronunciationJa?: string;
  zhCN?: string;
  pinyins?: {
    char: string;
    pron: string;
  }[];
  notes?: string;
  notesZh?: string;
  tags?: TagID[];
  examples?: {
    en: string;
    ja: string;
    zhCN?: string;
    ref: string;
    refURL?: string;
  }[];
  variants?: {
    en?: string[];
    ja?: string[];
    zhCN?: string[];
  };
  _meta?: {
    translator: boolean | {
      enToJa: boolean;
      jaToEn: boolean;
    };
  };
};

export type Tags = {
  [tagId: string]: {
    en: string,
    ja: string,
    "zh-CN": string,
    title: {
      en: string,
      ja: string,
      "zh-CN": string,
    }
  }
};

//
// Type checkers
//
export const defineWords = (words: Word[]): Word[] => words;
export const defineTags = (tags: Tags): Tags => tags;
