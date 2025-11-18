import { useState } from "react";
import { postCategories } from "../questionsAPI";

interface CategoriesSelected {
  selectedCategories: string[];
  difficulty: string;
  numberOfQuestions: number;
}

interface Question {
  question: string;
  choices: string[];
  answer: number;
}

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      question: "fsdfasjfh",
      choices: ["asdfsad", "asdfsad", "asdfsad", "asdfsad"],
      answer: 2,
    },
    {
      question: "fsdfasjfh",
      choices: ["asdfsad", "asdfsad", "asdfsad", "asdfsad"],
      answer: 2,
    },
  ]);

  const fetchQuestions = async (categories: CategoriesSelected) => {
    try {
      const response = await postCategories(categories);
      setQuestions((prev) => {
        return [...prev, response.data];
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { questions, fetchQuestions };
}
