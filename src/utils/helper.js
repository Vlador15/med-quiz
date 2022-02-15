export const login = (data) => {
  localStorage.user = JSON.stringify({
    ...data,
    isAuth: true,
  });
};

export const logout = () => {
  localStorage.user = JSON.stringify({});
  localStorage.questions = "";
  window.location.assign("/");
};

export const userData = () => {
  try {
    return JSON.parse(localStorage.user);
  } catch (e) {
    logout();
    return JSON.parse(localStorage.user);
  }
};

export const questionsData = (combineObjects) => {
  try {
    return JSON.parse(localStorage.questions);
  } catch (e) {
    localStorage.questions = JSON.stringify(combineObjects);
    return JSON.parse(localStorage.questions);
  }
};

export const saveAnswer = (props) => {
  //item.answer = e.target.value;

  // let data = JSON.parse(localStorage.questions);
  // data[props.index].questions = props.data;
  // localStorage.questions = JSON.stringify(data);
  // console.log("save");

  let data = JSON.parse(localStorage.questions);
  data[props.index].questions = props.data;
  localStorage.questions = JSON.stringify(data);
  console.log("save");
};

export const deleteAnswer = () => {
  localStorage.questions = "";
  window.location.assign("/quiz");
};

export const getDataSchedule = (props) => {
  let data = JSON.parse(localStorage.questions);
  let row = data[props.index];
  return row.questions;
};
