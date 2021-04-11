package students.courses.repository;

import org.springframework.data.repository.CrudRepository;
import students.courses.repository.entity.StudentEntity;

public interface StudentRepository extends CrudRepository<StudentEntity, Long> {
}
