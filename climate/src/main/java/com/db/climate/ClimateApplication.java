package com.db.climate;

import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
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
			new User("RitvaR", "Ritva", "Roponen", 1237),
			new User("TeroT", "Tero", "Tauriainen", 1238),
			new User("OttoO", "Otto", "Ollila", 1239)
			
		));

		//UserRepo.delete(new User("RitvaR", "Ritva", "Roponen", 1237));

		Optional<User> opt = UserRepo.findById("MarkoM");

		if(opt.isPresent()){
			User p = opt.get();
			p.setUsername(null);
		}
	}
}
