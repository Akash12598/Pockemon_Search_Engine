# Pokemon Search Engine

A Spring Boot based REST API application that allows users to search Pokémon and retrieve detailed information using the PokeAPI.

## Features

* Search Pokémon by name
* Fetch Pokémon details from PokeAPI
* Display key attributes such as:

  * Name
  * Height
  * Weight
  * Types
  * Abilities
  * Base Experience
  * Pokémon Image
* RESTful API architecture
* Exception handling for invalid Pokémon names

## Technologies Used

* Java 17
* Spring Boot
* Spring Web
* Maven
* Lombok
* RestTemplate / WebClient
* PokeAPI

## API Endpoint

### Search Pokémon

```http
GET /api/pokemon/{name}
```

### Example

```http
GET /api/pokemon/pikachu
```

### Sample Response

```json
{
  "name": "pikachu",
  "height": 4,
  "weight": 60,
  "baseExperience": 112,
  "types": ["electric"],
  "abilities": ["static", "lightning-rod"]
}
```

## Getting Started

### Clone Repository

```bash
git clone https://github.com/Akash12598/Pockemon_Search_Engine.git
```

### Navigate to Project

```bash
cd Pockemon_Search_Engine
```

### Run Application

```bash
mvn spring-boot:run
```

The application will start on:

```text
http://localhost:8080
```

## API Source

This project uses the public PokeAPI:

https://pokeapi.co

## Project Structure

```text
src
 ├── controller
 ├── service
 ├── dto
 ├── exception
 └── model
```

## Future Enhancements

* Search history
* Pagination
* Caching
* Frontend using React
* Pokémon comparison feature

## Author

Akash Khairnar

GitHub: https://github.com/Akash12598
