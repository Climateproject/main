package com.db.climate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    void delete(Long id, String username, String fname, String lname, int password);
    
}
