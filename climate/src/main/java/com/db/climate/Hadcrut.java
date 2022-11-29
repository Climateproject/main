package com.db.climate;

import java.time.Year;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Hadcrut {

    @Id
    private int Year;
    private float Anomaly;
    private float Ld;
    private float Ud;


    public Hadcrut() {
    }

    public Hadcrut(int Year, float Anomaly, float Ld, float Ud) {
        this.Year = Year;
        this.Anomaly = Anomaly;
        this.Ld = Ld;
        this.Ud = Ud;
    }

    public int getYear() {
        return this.Year;
    }

    public void setYear(int Year) {
        this.Year = Year;
    }

    public float getAnomaly() {
        return this.Anomaly;
    }

    public void setAnomaly(float Anomaly) {
        this.Anomaly = Anomaly;
    }

    public float getLd() {
        return this.Ld;
    }

    public void setLd(float Ld) {
        this.Ld = Ld;
    }

    public float getUd() {
        return this.Ud;
    }

    public void setUd(float Ud) {
        this.Ud = Ud;
    }

   
    
}
