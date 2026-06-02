package com.example.demo.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.PokemonService;
import com.example.demo.dto.PokemonResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/pokemon")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class PokemonController {

    private final PokemonService pokemonService = new PokemonService();

    @GetMapping("/{name}")
    public ResponseEntity<PokemonResponse> getPokemon(
            @PathVariable String name) {

        return ResponseEntity.ok(
                pokemonService.getPokemon(name));
    }
}