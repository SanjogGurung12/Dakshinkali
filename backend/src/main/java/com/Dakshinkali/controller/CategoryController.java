package com.Dakshinkali.controller;

import com.Dakshinkali.model.Category;
import com.Dakshinkali.repo.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryRepo repo;

    @PostMapping("category")
    public Category createCategory(@RequestBody Category category){
        return repo.save(category);
    }

    @GetMapping("categories")
    public List<Category> getAllCategories(){
        return repo.findAll();

    }


}
