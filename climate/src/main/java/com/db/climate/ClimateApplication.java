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
		UserRepo.saveAll(List.of(
			new User(3L,"LiisaL", "Liisa", "Laukkanen", 1236),
			new User(4L,"RitvaR", "Ritva", "Roponen", 1237),
			new User(5L,"TeroT", "Tero", "Tauriainen", 1238),
			new User(6L,"OttoO", "Otto", "Ollila", 1239)
			
		));
	}
}
