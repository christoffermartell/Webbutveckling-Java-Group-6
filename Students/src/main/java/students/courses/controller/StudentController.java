package students.courses.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import students.courses.model.request.StudentDetailsRequestModel;
import students.courses.model.respond.StudentRespondModel;
import students.courses.repository.entity.StudentEntity;
import students.courses.service.StudentService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("students") // localhost:8080/students
public class StudentController {

    private final StudentService studentService;

    // instead of @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    List<StudentEntity> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping(path = "/{student_id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<StudentEntity> getSpecificStudent(@PathVariable("student_id") String student_id) {
        return studentService.getSpecificStudent(student_id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StudentRespondModel createStudent(@RequestBody StudentDetailsRequestModel studentDetailsModel) {
        // insert some create logic here
        StudentRespondModel response = new StudentRespondModel();
        return response;
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public StudentRespondModel updateStudent(@PathVariable("product_id") String student_id, @RequestBody StudentDetailsRequestModel studentDetails) {
        // insert update logic here, maybe do this as the last function in spring. I can assist here if needed /Jocke

        StudentRespondModel updatedStudent = new StudentRespondModel();
        return updatedStudent;
    }

    @DeleteMapping(path = "/{student_id}")
    public void deleteStudent(@PathVariable("student_id") String student_id) {
        // I can assist here if needed /Jocke
    }


}
