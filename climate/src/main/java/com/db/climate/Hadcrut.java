package com.db.climate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Hadcrut {

    @Id
    private int year;
    private float Anomaly;
    private float lcl;
    private float ucl;


    public Hadcrut() {
    }

    public Hadcrut(int year, float Anomaly, float lcl, float ucl) {
        this.year = year;
        this.Anomaly = Anomaly;
        this.lcl = lcl;
        this.ucl = ucl;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public float getAnomaly() {
        return this.Anomaly;
    }

    public void setAnomaly(float Anomaly) {
        this.Anomaly = Anomaly;
    }

    public float getlcl() {
        return this.lcl;
    }

    public void setlcl(float lcl) {
        this.lcl = lcl;
    }

    public float getucl() {
        return this.ucl;
    }

    public void setucl(float ucl) {
        this.ucl = ucl;
    }

   
    
}
