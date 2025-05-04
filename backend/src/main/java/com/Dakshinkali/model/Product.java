package com.Dakshinkali.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class Product {

    @Id
    private Long id;

    private String name;
    private Double rate1;
    private Doublde rat2;
    private String image_url;

    @ManyToOne
    @JoinColumn(name = "category_id" )  //foreign key
    private Category category;


}
