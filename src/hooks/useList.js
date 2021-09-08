import React from "react"
const useList = () =>{
    const [studentList, setStudentList] = React.useState([
        {
            id: 1,
            name: "Huyen"
        },
        {
            id: 2,
            name: "Hoa"
        },
        {
            id: 3,
            name: "Hung"
        },
        {
            id: 4,
            name: "Long"
        }
    ])
    const [index, setIndex] = React.useState(0)
    const nextItem = () => {
        setIndex(()=>index === studentList.length -1 ? 0 : index + 1)
    }
    const prevItem = () => {
        setIndex(() => index === 0? studentList.length-1: index -1)
    }
    return [studentList, index, {nextItem, prevItem}]
}
export default useList;