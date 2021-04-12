package students.courses.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import students.courses.dto.StudentDto;
import students.courses.model.request.StudentDetailsRequestModel;
import students.courses.model.respond.StudentRespondModel;
import students.courses.service.StudentService;

import java.util.ArrayList;
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
    List<StudentRespondModel> getAllStudents() {

        List<StudentDto> studentDtos = studentService.getAllStudents();
        ArrayList<StudentRespondModel> responseList = new ArrayList<>();

        for (StudentDto studentDto : studentDtos){
            StudentRespondModel respondModel = new StudentRespondModel();
            BeanUtils.copyProperties(studentDto,respondModel);
            responseList.add(respondModel);

        }
            return responseList;

    }

    @GetMapping(path = "/{studentId}")
    @ResponseStatus(HttpStatus.OK)
    public StudentRespondModel getSpecificStudent(@PathVariable String studentId) throws Exception {

        StudentRespondModel responseModel = new StudentRespondModel();
        Optional<StudentDto> optionalStudentDto = studentService.getSpecificStudent(studentId);
        if (optionalStudentDto.isPresent()){
            StudentDto studentDto = optionalStudentDto.get();
            BeanUtils.copyProperties(studentDto,responseModel);
            return responseModel;
        }
        throw new Exception("No student with id : " + studentId);



    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StudentRespondModel createStudent(@RequestBody StudentDetailsRequestModel studentDetailsModel) {
        // insert some create logic here
        //Copy json to DtoIn
        StudentDto studentDtoIn = new StudentDto();
        BeanUtils.copyProperties(studentDetailsModel,studentDtoIn);
        //pass dtoIn in to service layer
        StudentDto studentDtoOut = studentService.createStudent(studentDtoIn);
        //Copy dtoOut from service layer to response
        StudentRespondModel response = new StudentRespondModel();
        BeanUtils.copyProperties(studentDtoOut,response);

        return response;
    }

    @PutMapping(path = "/{studentId}")
    @ResponseStatus(HttpStatus.OK)
    public StudentRespondModel updateStudent(@PathVariable String studentId, @RequestBody StudentDetailsRequestModel studentDetails) throws Exception {
        // insert update logic here, maybe do this as the last function in spring. I can assist here if needed /Jocke

        StudentDto studentDtoIn = new StudentDto();
        BeanUtils.copyProperties(studentDetails,studentDtoIn);

        Optional<StudentDto> studentDtoOut = studentService.updateStudent(studentId,studentDtoIn);
        if (studentDtoOut.isEmpty()){
            throw new Exception("No student with id : " + studentId);
        }
        StudentDto studentDto = studentDtoOut.get();
        StudentRespondModel responseModel = new StudentRespondModel();
        BeanUtils.copyProperties(studentDto,responseModel);

        return responseModel;
    }

    @DeleteMapping(path = "/{studentId}")
    public String deleteStudent(@PathVariable String studentId) throws Exception {
        // I can assist here if needed /Jocke
        boolean deleted = studentService.deleteStudent(studentId);
        if (deleted){
            return "";
        }
        throw new Exception("No student with id : " + studentId);
    }


}
