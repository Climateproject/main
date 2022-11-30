package com.db.climate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ClimateRestController {

     @Autowired
     HadrutRepository hadcrutRepo;

    @GetMapping("hadcrut/getall")
    public List<Hadcrut> getAllHadcrut(){


        return hadcrutRepo.findAll();
    }
}
