import type { Question } from "../models/Question";

export const questionsData: Question[] = [
  {
    id: 1,
    question: "Mis on Eesti pealinn?",
    answers: [
      { id: 1, text: "Tallinn" },
      { id: 2, text: "Tartu" },
      { id: 3, text: "Narva" },
    ],
    correct: 1,
  },
  {
    id: 2,
    question: "Mis on Eesti suurim saar?",
    answers: [
      { id: 1, text: "Saaremaa" },
      { id: 2, text: "Suur-Pakri" },
      { id: 3, text: "Hiiumaa" },
    ],
    correct: 1,
  },
  {
    id: 3,
    question: "Kes oli Eesti esimene president?",
    answers: [
      { id: 1, text: "Konstantin Päts" },
      { id: 2, text: "Lennart Meri" },
      { id: 3, text: "Johan Pitka" },
    ],
    correct: 1,
  },
  {
    id: 4,
    question: "Mitu maakonda on Eestis?",
    answers: [
      { id: 1, text: "15" },
      { id: 2, text: "14" },
      { id: 3, text: "16" },
    ],
    correct: 1,
  },
  {
    id: 5,
    question: "Kui pikk on Eesti maismaapiiri kogupikkus",
    answers: [
      { id: 1, text: "833" },
      { id: 2, text: "633" },
      { id: 3, text: "1033" },
    ],
    correct: 1,
  },
  {
    id: 6,
    question: "",
    answers: [
      { id: 1, text: "" },
      { id: 2, text: "" },
      { id: 3, text: "" },
    ],
    correct: 1,
  },
];
