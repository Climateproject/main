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
    //  HadrutRepository hadcrutRepo2;
    @Autowired
    NhemisphereRepository NhemisphereRepo;

     @Autowired
     MaunaloanRepository MaunaloanRepo;

     @Autowired
     VostokRepository VostokRepo;
     
     @Autowired
     IcecoreRepository IcecoreRepo;

     @Autowired
     EvolutionRepository EvolutionRepo;


    @GetMapping("hadcrut/getall")
    public List<Hadcrut> getAllHadcrut(){


        return hadcrutRepo.findAll();
    }

    @GetMapping("nhemisphere/getall")
    public List<Nhemisphere> getAllnhemisphere(){

        return NhemisphereRepo.findAll();
    }

    @GetMapping("maunaloan/getall")
    public List<Maunaloan> getAllmaunaloan(){

        return MaunaloanRepo.findAll();
    }

    @GetMapping("vostok/getall")
    public List<Vostok> getAllvostok(){

        return VostokRepo.findAll();
    }

    @GetMapping("icecore/getall")
    public List<Icecore> getAllicecore(){

        return IcecoreRepo.findAll();
    }
    
    @GetMapping("evolution/getall")
    public List<Evolution> getAllevolution(){

        return EvolutionRepo.findAll();
    }
}

