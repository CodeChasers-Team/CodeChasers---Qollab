import QuizQuestion from "../../components/Quizquestion";

const QuizPage = () => {
  const question = [
    {
      id: 1,
      question: "what is this",
      image_url: "borobudur.jpg",
      options_1: "teample",
      options_2: "house",
      options_3: "musque",
      options_4: "cave",
      answer: "teample",
    },
    {
      id: 2,
      question: "what is this",
      image_url: "borobudur.jpg",
      options_1: "teample",
      options_2: "house",
      options_3: "musque",
      options_4: "cave",
      answer: "cave",
    },
    {
      id: 3,
      question: "what is this",
      image_url: "borobudur.jpg",
      options_1: "teample",
      options_2: "house",
      options_3: "musque",
      options_4: "cave",
      answer: "house",
    },
    {
      id: 4,
      question: "what is this",
      image_url: "borobudur.jpg",
      options_1: "teample",
      options_2: "house",
      options_3: "musque",
      options_4: "cave",
      answer: "musque",
    },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {question.map((data) => (
        <QuizQuestion
          key={data.id}
          question={data.question}
          options_1={data.options_1}
          options_2={data.options_2}
          options_3={data.options_3}
          options_4={data.options_4}
        />
      ))}
    </div>
  );
};

export default QuizPage;
