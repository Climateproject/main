package com.db.climate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Evolution {

    @Id
    private int year;
    private float cdppm;
    private float cdu;


    public Evolution() {
    }

    public Evolution(int year, float cdppm, float cdu) {
        this.year = year;
        this.cdppm = cdppm;
        this.cdu = cdu;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public float getCdppm() {
        return this.cdppm;
    }

    public void setCdppm(float cdppm) {
        this.cdppm = cdppm;
    }

    public float getCdu() {
        return this.cdu;
    }

    public void setCdu(float cdu) {
        this.cdu = cdu;
    }

}
