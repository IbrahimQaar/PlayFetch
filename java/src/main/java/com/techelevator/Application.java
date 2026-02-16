package com.techelevator;

import com.techelevator.model.Pet;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Objects;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    public static class Authority {

       private String name;

       public String getName() {
          return name;
       }

       public void setName(String name) {
          this.name = name;
       }

       public Authority(String name) {
          this.name = name;
       }

       @Override
       public boolean equals(Object o) {
          if (this == o) return true;
          if (o == null || getClass() != o.getClass()) return false;
          Authority authority = (Authority) o;
          return name.equals(authority.name);
       }

       @Override
       public int hashCode() {
          return Objects.hash(name);
       }

       @Override
       public String toString() {
          return "Authority{" +
             "name=" + name +
             '}';
       }
    }

}
