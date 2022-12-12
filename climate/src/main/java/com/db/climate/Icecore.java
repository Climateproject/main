package com.db.climate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Icecore {

    @Id
    private float agc;
    private float coppm;
    private float cosppm;

    public Icecore() {
    }

    public Icecore(float agc, float coppm, float cosppm) {
        this.agc = agc;
        this.coppm = coppm;
        this.cosppm = cosppm;
    }

    public float getAgc() {
        return this.agc;
    }

    public void setAgc(float agc) {
        this.agc = agc;
    }

    public float getCoppm() {
        return this.coppm;
    }

    public void setCoppm(float coppm) {
        this.coppm = coppm;
    }

    public float getCosppm() {
        return this.cosppm;
    }

    public void setCosppm(float cosppm) {
        this.cosppm = cosppm;
    }
}
