package com.example.demo.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.Exception.PokemonNotFoundException;
import com.example.demo.dto.PokemonResponse;

import tools.jackson.databind.JsonNode;

@Service
public class PokemonService {

    private final RestTemplate restTemplate = new RestTemplate();

    @Cacheable(value = "pokemon",
            key = "#name.toLowerCase()")
    public PokemonResponse getPokemon(
            String name) {

        try {

            String url =
                    "https://pokeapi.co/api/v2/pokemon/"
                            + name.toLowerCase();

            JsonNode response =
                    restTemplate.getForObject(
                            url,
                            JsonNode.class);

            List<String> abilities =
                    new ArrayList<>();

            response.get("abilities")
                    .forEach(a ->
                            abilities.add(
                                    a.get("ability")
                                            .get("name")
                                            .asText()));

            List<String> types =
                    new ArrayList<>();

            response.get("types")
                    .forEach(t ->
                            types.add(
                                    t.get("type")
                                            .get("name")
                                            .asText()));

            return new PokemonResponse(
                    response.get("name").asText(),
                    response.get("height").asInt(),
                    response.get("weight").asInt(),
                    response.get("base_experience").asInt(),
                    types,
                    abilities,
                    response.get("sprites").get("front_default").asText()
            );

        } catch (Exception ex) {

            throw new PokemonNotFoundException(
                    "Pokemon not found");
        }
    }
}