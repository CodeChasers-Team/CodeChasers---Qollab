import PropTypes from "prop-types";

const QuizQuestion = (
  {id,
  question,
  options_1,
  options_2,
  options_3,
  options_4,}
) => {
  return (
    <div className="w-2/4 rounded-xl border-2 -border-primary-400 p-5">
      <h2 className="text-3xl font-semibold mb-5">Q{id}</h2>
      <img
        className="w-full h-96 object-cover rounded-md"
        src="borobudur.jpg"
      />
      <h1 className="text-3xl font-bold my-5">{question}</h1>
      <form
        action="answer"
        className="w-full flex flex-col gap-3 text-white text-opacity-100"
      >
        <input
          type="text"
          placeholder={options_1}
          className="px-5 py-3 w-full -bg-primary-500 text-center flex justify-center items-center rounded-md placeholder:text-opacity-100 placeholder:text-white"
          readOnly
        />
        <input
          type="text"
          placeholder={options_2}
          className="px-5 py-3 w-full -bg-primary-500 text-center flex justify-center items-center rounded-md placeholder:text-opacity-100 placeholder:text-white"
          readOnly
        />
        <input
          type="text"
          placeholder={options_3}
          className="px-5 py-3 w-full -bg-primary-500 text-center flex justify-center items-center rounded-md placeholder:text-opacity-100 placeholder:text-white"
          readOnly
        />
        <input
          type="text"
          placeholder={options_4}
          className="px-5 py-3 w-full -bg-primary-500 text-center flex justify-center items-center rounded-md placeholder:text-opacity-100 placeholder:text-white"
          readOnly
        />
        <div className="button w-full flex justify-between">
          <button className="py-2 px-5 -bg-primary-500 rounded-md text-white">
            pref
          </button>
          <button className="py-2 px-5 -bg-primary-500 rounded-md text-white">
            next
          </button>
        </div>
      </form>
    </div>
  );
};

QuizQuestion.propTypes {
    id: PropTypes.number,
  question : PropTypes.string,
  options_1 : PropTypes.string,
  options_2: PropTypes.string,
  options_3: PropTypes.string,
  options_4: PropTypes.string,
}

export default QuizQuestion;
