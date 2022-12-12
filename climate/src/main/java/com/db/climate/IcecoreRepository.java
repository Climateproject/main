package com.db.climate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IcecoreRepository extends JpaRepository<Icecore, Integer> {
    
}
