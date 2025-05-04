package com.Dakshinkali.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@Entity
public class Category {

    private String image_url;
    @Id
    private Long id;
    private String name;
    private int rate;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval =  true)// so that operation performed on product entity will also be applied to the it
      //orphan removal= true means if a product is removed from category then that product will automatically removed from the database
    private List<Product> products = new ArrayList<>();


}

