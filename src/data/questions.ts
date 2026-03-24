import type { Question } from "../models/Question";

export const questionsData: Question[] = [
  {
    id: 1,
    text: "Mis on Eesti pealinn?",
    answers: [
      { id: 1, text: "Tallinn" },
      { id: 2, text: "Tartu" },
      { id: 3, text: "Narva" },
      { id: 4, text: "Pärnu" },
    ],
    correct: 1,
  },
  {
    id: 2,
    text: "Milline neist on Eesti suurim saar?",
    answers: [
      { id: 1, text: "Saaremaa" },
      { id: 2, text: "Suur-Pakri" },
      { id: 3, text: "Hiiumaa" },
    ],
    correct: 1,
  },
  {
    id: 3,
    text: "Kes oli Eesti esimene president?",
    answers: [
      { id: 1, text: "Konstantin Päts" },
      { id: 2, text: "Lennart Meri" },
      { id: 3, text: "Johan Pitka" },
    ],
    correct: 1,
  },
  {
    id: 44,
    text: "Mitu maakonda on Eestis?",
    answers: [
      { id: 1, text: "15" },
      { id: 2, text: "14" },
      { id: 3, text: "16" },
    ],
    correct: 1,
  },
  {
    id: 5,
    text: "Kui pikk on Eesti maismaapiiri kogupikkus?",
    answers: [
      { id: 1, text: "833" },
      { id: 2, text: "933" },
      { id: 3, text: "1033" },
      { id: 4, text: "1133" },
    ],
    correct: 1,
  },
  {
    id: 6,
    text: "Millal mainiti Eestit esimest korda ajaloos?",
    answers: [
      { id: 1, text: "56. aastal eKr" },
      { id: 2, text: "1220. aastal" },
      { id: 3, text: "1535. aastal" },
      { id: 4, text: "1857. aastal" },
      { id: 5, text: "1918. aastal" },
      { id: 6, text: "98. aastal pKr" },
      { id: 7, text: "2.sajandi keskpaiku" },
    ],
    correct: 6,
  },
];
