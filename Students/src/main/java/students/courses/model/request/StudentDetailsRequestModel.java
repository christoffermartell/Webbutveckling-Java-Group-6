package students.courses.model.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

public class StudentDetailsRequestModel {

    @JsonProperty("student_id")
    private String studentId;

    @Size(min = 2, max = 100)
    private String name;

    @Size(min = 2, max = 100)
    @JsonProperty("last_name")
    private String lastName;

    @Min(1)
    private int age;

    private boolean present;

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isPresent() {
        return present;
    }

    public void setPresent(boolean present) {
        this.present = present;
    }
}
