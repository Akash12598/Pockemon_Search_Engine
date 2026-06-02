package com.example.demo.dto;

import java.util.List;

public class PokemonResponse {

    private String name;
    private int height;
    private int weight;
    private int baseExperience;

    private List<String> types;
    private List<String> abilities;

    private String image;

   
    public PokemonResponse() {
    }

   
    public PokemonResponse(String name, int height, int weight, int baseExperience, List<String> types, List<String> abilities, String image) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.baseExperience = baseExperience;
        this.types = types;
        this.abilities = abilities;
        this.image = image;
    }

  
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getBaseExperience() {
        return baseExperience;
    }

    public void setBaseExperience(int baseExperience) {
        this.baseExperience = baseExperience;
    }

    public List<String> getTypes() {
        return types;
    }

    public void setTypes(List<String> types) {
        this.types = types;
    }

    public List<String> getAbilities() {
        return abilities;
    }

    public void setAbilities(List<String> abilities) {
        this.abilities = abilities;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}