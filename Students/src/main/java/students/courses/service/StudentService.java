package students.courses.service;

import students.courses.dto.StudentDto;
import students.courses.repository.entity.StudentEntity;

import java.util.List;
import java.util.Optional;

public interface StudentService {

    List<StudentEntity> getAllStudents();

    Optional<StudentEntity> getSpecificStudent(String studentId);

    StudentDto createStudent(StudentDto studentDetails);

    Optional<StudentDto> updateStudent(String studentId, StudentDto studentDto);

    void deleteStudent(String studentId);
}
