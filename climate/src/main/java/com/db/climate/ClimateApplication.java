package com.db.climate;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ClimateApplication {

	@Autowired
	UserRepository UserRepo;

	public static void main(String[] args) {
		SpringApplication.run(ClimateApplication.class, args);
	}

	@PostConstruct
	public void init(){
		UserRepo.delete(1L, "MattiM", "Matti", "Meikäläinen", 1234
		);
	}
}
