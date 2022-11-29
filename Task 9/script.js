/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class  Movie {
    constructor(titleM, directorM, budgetM) {
      this.title = titleM;
      this.director = directorM;
      this.budget = budgetM;
    };
    wasExpensive() {
      if (this.budget > 1e8) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  const movieOne = new Movie("Avatar", "James Cameron", 1e9);
  console.log(movieOne);
  console.log(movieOne.wasExpensive())