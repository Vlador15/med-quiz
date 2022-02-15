import React, { useState } from "react";
import { saveAnswer } from "../../../utils/helper";

// components
import Modal from "../../../utils/modal/modal";
import StorageIcon from "@material-ui/icons/Storage";

import "./TableQuiz.scss";

export const TableQuiz = (props) => {
  const [dataInput, setDataInput] = useState(Array(props.data.length).fill(""));
  const [count, setCount] = useState(0);

  const addInput = (item, index) => {
    let datas = item.type.split(" ");

    const save = (e) => {
      let num = Number(e.target.value) || 0;
      if (typeof num !== "number") num = 0;
      if (num > 100) num = 100;
      if (num < 0) num = 0;

      let copyDatas = [...dataInput];
      copyDatas[index] = num;
      props.data[index].answer = num;
      setDataInput(copyDatas);
      saveAnswer(props);
    };

    switch (datas[0]) {
      case "input":
        return (
          <input
            type={datas[1]}
            placeholder={item.placeholder}
            defaultValue={item.answer || dataInput[index]}
            onChange={(e) => save(e)}
            className={item.answer ? "answer-green" : "answer-red"}
          />
        );

      case "select":
        return (
          <select>
            {item.answers.map((ans, index) => {
              return (
                <option value={ans} key={index}>
                  {ans}
                </option>
              );
            })}
          </select>
        );

      default:
        break;
    }
  };

  const NewModal = ({ schedule, item, index }) => {
    const editSchedule = (e, i) => {
      let num = Number(e.target.value);
      if (typeof num !== "number") num = 0;
      if (num > 5) num = 5;
      if (num < 0) num = 0;

      schedule[i] = num;
      props.data[index].schedule = schedule;
      saveAnswer(props);
    };
    return (
      <Modal
        title="Заполните график наблюдений"
        desc="Проставьте 1-5 в те дни, когда были симптомы"
        icon={<StorageIcon color="primary" style={{ fontSize: "30px" }} />}
        setCount={setCount}
        count={count}
      >
        <table className="quiz__table-modal">
          <tbody>
            <tr>
              {[...Array(schedule.length)].map((e, i) => (
                <td key={i}>
                  <input
                    type="text"
                    placeholder={schedule[i] === 0 ? `${i + 1}` : schedule[i]}
                    defaultValue={schedule[i] === 0 ? "" : schedule[i]}
                    onChange={(e) => editSchedule(e, i)}
                    className={schedule[i] ? "answer-green" : "answer-red"}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </Modal>
    );
  };

  return (
    <div className="quiz__block">
      <div className="overlay">
        <div className="overlay__row">
          <table className="quiz__table">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>#</th>
                <th style={{ width: "70%" }}>Вопрос</th>
                <th style={{ width: "25%" }}>Поле для ответа</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((item, index) => {
                let number = index + 1;

                return (
                  <tr key={index}>
                    <td>{number}</td>
                    <td>{item.question}</td>
                    <td>{addInput(item, index)}</td>
                    {item.schedule && (
                      <td>
                        <NewModal
                          schedule={item.schedule}
                          item={item}
                          index={index}
                        />
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
