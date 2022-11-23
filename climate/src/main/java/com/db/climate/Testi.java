package com.db.climate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Testi {

    @Id
    private int year;
    private float anomaly;
    private float lcl;
    private float ucl;

    public Testi() {
    }

    public Testi(int year, float anomaly, float lcl, float ucl) {
        this.year = year;
        this.anomaly = anomaly;
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
        return this.anomaly;
    }

    public void setAnomaly(float anomaly) {
        this.anomaly = anomaly;
    }

    public float getLcl() {
        return this.lcl;
    }

    public void setLcl(float lcl) {
        this.lcl = lcl;
    }

    public float getUcl() {
        return this.ucl;
    }

    public void setUcl(float ucl) {
        this.ucl = ucl;
    }
}