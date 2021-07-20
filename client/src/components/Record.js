import React from "react";
import { dbService } from "../firebase";

const Record = ({ recordObj, isOwner }) => {
  const handleDeteleClick = async () => {
    const ok = window.confirm("삭제하시겠습니까 ?");
    if (ok) {
      // records/(obj_id) is the DB address of each record
      await dbService.doc("records/" + recordObj.id).delete();
    } else {
    }
  };
  return (
    <div>
      <h4>{recordObj.record}</h4>
      {/* if isOwner -> render button */}
      {isOwner && (
        <>
          <button onClick={handleDeteleClick}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Record;
