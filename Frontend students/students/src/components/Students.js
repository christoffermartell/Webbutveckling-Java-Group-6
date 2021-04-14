import React from "react";

const Students = (props) => {
    const students = props.students;
    console.log(students);

    return (
        <>
            <ul>
                {
                    students.map((student, i) => {
                        return (
                            <li key={i}>
                                <p>{student.name} {student.last_name} <button className="btn" onClick={() => props.deleteStudent(student)}>X</button></p>
                                <label htmlFor={student.id}>Present</label>
                                <input type="checkbox" disabled="disabled" checked={student.present} id={student.id}></input>
                            </li>
                        )
                    })
                }
                
            </ul>
        </>
    )
}

export default Students;