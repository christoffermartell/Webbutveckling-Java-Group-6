package students.courses.service.impl;

import org.springframework.stereotype.Service;
import students.courses.Util.Utility;
import students.courses.dto.StudentDto;
import students.courses.repository.StudentRepository;
import students.courses.repository.entity.StudentEntity;
import students.courses.service.StudentService;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final Utility utility;

    // instead of @Autowired
    public StudentServiceImpl(StudentRepository studentRepository, Utility utility) {
        this.studentRepository = studentRepository;
        this.utility = utility;
    }

    public List<StudentEntity> getAllStudents() {
        return null;
    }


    public Optional<StudentEntity> getSpecificStudent(String studentId) {
        return Optional.empty();
    }


    public StudentDto createStudent(StudentDto studentDetails) {
        return null;
    }


    public Optional<StudentDto> updateStudent(String studentId, StudentDto studentDto) {
        return Optional.empty();
    }


    public void deleteStudent(String studentId) {

    }
}
