package com.example.demo.Exception;

public class PokemonNotFoundException
extends RuntimeException
{

public PokemonNotFoundException(String message)
{
super(message);
}
}
