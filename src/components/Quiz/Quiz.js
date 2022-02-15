import React from "react";

import "./Quiz.scss";

// db
import { title0, shortDB } from "./Questions/ShortsDb";
import { title1, question1 } from "./Questions/Block1";
import { title2, question2 } from "./Questions/Block2";
import { title3, question3 } from "./Questions/Block3";
import { title4, question4 } from "./Questions/Block4";

// components
import { TableQuiz } from "./Table/TableQuiz";
import { deleteAnswer, questionsData } from "../../utils/helper";
import SimpleAccordion from "../../utils/accordion/accordion";

function Quiz(props) {
  let combineObjects = [
    { title: title0, questions: [...shortDB] },
    { title: title1, questions: [...question1] },
    { title: title2, questions: [...question2] },
    { title: title3, questions: [...question3] },
    { title: title4, questions: [...question4] },
  ];

  let datas = questionsData(combineObjects);

  console.log(datas);

  const questionsList = () => {
    return datas.map((item, index) => {
      return (
        <SimpleAccordion title={item.title} key={index}>
          <TableQuiz title={item.title} data={item.questions} index={index} />
        </SimpleAccordion>
      );
    });
  };
  return (
    <section className="quiz">
      {questionsList()}

      <div className="answer">
        <button className="answer__delete" onClick={() => deleteAnswer()}>
          Очистить форму
        </button>
        <button className="answer__send">Отправить данные</button>
      </div>
    </section>
  );
}

export default Quiz;
