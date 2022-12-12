package com.db.climate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Nhemisphere {
    
    @Id
    private int year;
    private float t;
    private float lf;
    private float lfm;
    private float lfp;
    private float am;
    private float ap;
    private float abm;
    private float abp;


    public Nhemisphere() {
    }

    public Nhemisphere(int year, float t, float lf, float lfm, float lfp, float am, float ap, float abm, float abp) {
        this.year = year;
        this.t = t;
        this.lf = lf;
        this.lfm = lfm;
        this.lfp = lfp;
        this.am = am;
        this.ap = ap;
        this.abm = abm;
        this.abp = abp;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public float getT() {
        return this.t;
    }

    public void setT(float t) {
        this.t = t;
    }

    public float getLf() {
        return this.lf;
    }

    public void setLf(float lf) {
        this.lf = lf;
    }

    public float getLfm() {
        return this.lfm;
    }

    public void setLfm(float lfm) {
        this.lfm = lfm;
    }

    public float getLfp() {
        return this.lfp;
    }

    public void setLfp(float lfp) {
        this.lfp = lfp;
    }

    public float getAm() {
        return this.am;
    }

    public void setAm(float am) {
        this.am = am;
    }

    public float getAp() {
        return this.ap;
    }

    public void setAp(float ap) {
        this.ap = ap;
    }

    public float getAbm() {
        return this.abm;
    }

    public void setAbm(float abm) {
        this.abm = abm;
    }

    public float getAbp() {
        return this.abp;
    }

    public void setAbp(float abp) {
        this.abp = abp;
    }

    
}