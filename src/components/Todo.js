import React from "react"
import useList from "../hooks/useList"
function Todo({props}) {
    const [studentList,index,handleFunction] = useList();

    return (
        <div style={{margin:"5%"}}>
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline", fontWeight: "bold"}}>
                <h4>{"学生一覧 :"} &nbsp;</h4>
                <div>[{studentList.map((item, index) => {
                    return item.name
                }).join(", ")}]</div>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline", fontWeight: "bold"}}>
                <h4>{"位置 :"}&nbsp;</h4>
                <div>{studentList[index]?.id}</div>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline", fontWeight: "bold"}}>
                <h4>{"名前 : "}&nbsp;</h4>
                <div>{studentList[index]?.name}</div>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline", paddingLeft:"40px"}}>
                <div style={{marginRight: "50px"}}>
                    <button onClick={handleFunction.nextItem} style={{padding:"5px"}}>{"次に"}</button>
                </div>
                <div>
                    <button onClick={handleFunction.prevItem} style={{padding:"5px"}}>{"前に"}</button>
                </div>
            </div>
        </div>
    );
}
export default Todo