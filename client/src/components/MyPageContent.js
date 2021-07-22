import ActivityRecord from "./ActivityRecord";

const MypageContent = ({
  userObj,
  userInfoObj,
  question,
  answered,
  handleMyQuestion,
}) => {
  return (
    <>
      <div style={{ fontSize: "1.6em" }}>
        <p>이름&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{userInfoObj.name}</p>
        <p>학과&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{userInfoObj.department}</p>
        <p>이메일 : &nbsp;{userObj.email}</p>
      </div>
      <ActivityRecord
        question={question}
        answered={answered}
        handleMyQuestion={handleMyQuestion}
      />
    </>
  );
};

export default MypageContent;
