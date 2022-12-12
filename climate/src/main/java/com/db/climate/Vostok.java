package com.db.climate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Vostok {

    @Id
    private float depth;
    private float ageofice;
    private float meanofair;
    private float co;

    public Vostok() {
    }

    public Vostok(float depth, float ageofice, float meanofair, float co) {
        this.depth = depth;
        this.ageofice = ageofice;
        this.meanofair = meanofair;
        this.co = co;
    }

    public float getDepth() {
        return this.depth;
    }

    public void setDepth(float depth) {
        this.depth = depth;
    }

    public float getAgeofice() {
        return this.ageofice;
    }

    public void setAgeofice(float ageofice) {
        this.ageofice = ageofice;
    }

    public float getMeanofair() {
        return this.meanofair;
    }

    public void setMeanofair(float meanofair) {
        this.meanofair = meanofair;
    }

    public float getCo() {
        return this.co;
    }

    public void setCo(float co) {
        this.co = co;
    }
}