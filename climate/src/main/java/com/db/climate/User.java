package com.db.climate;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String fname;
    private String lname;
    private int password;

    public User(Long id, String username, String fname, String lname, int password) {
    }

    public User(String username, String fname, String lname, int password) {
        this.username = username;
        this.fname = fname;
        this.lname = lname;
        this.password = password;
    }

    public User(long id, String username, String fname, String lname, int password) {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFname() {
        return this.fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return this.lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public int getPassword() {
        return this.password;
    }

    public void setPassword(int password) {
        this.password = password;
    }

    public User id(Long id) {
        setId(id);
        return this;
    }

    public User username(String username) {
        setUsername(username);
        return this;
    }

    public User fname(String fname) {
        setFname(fname);
        return this;
    }

    public User lname(String lname) {
        setLname(lname);
        return this;
    }

    public User password(int password) {
        setPassword(password);
        return this;
    }

    
}
