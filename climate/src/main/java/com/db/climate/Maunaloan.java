package com.db.climate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Maunaloan {

    @Id
    private int year;
    private float mean;
    private float unc;

    public Maunaloan() {
    }

    public Maunaloan(int year, float mean, float unc) {
        this.year = year;
        this.mean = mean;
        this.unc = unc;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public float getMean() {
        return this.mean;
    }

    public void setMean(float mean) {
        this.mean = mean;
    }

    public float getUnc() {
        return this.unc;
    }

    public void setUnc(float unc) {
        this.unc = unc;
    }


}