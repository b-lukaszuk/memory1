# Memory1

Implementacja pracy domowej z podyplomowki PB JSDeveloper 2020/2021

**Deployed version ->** [Here](https://b-lukaszuk.github.io/memory1/)

# Task 1

Create memory game. Where computer plays with itself. The number of players random 2-4. Each player takes turn in revealing board elements. Trying to find a pair. Typical memory game.  Lets make an assumption that players have perfect memory but they only remember elements the reveal by them self. 

# Dodatkowe info od Karola

> memory gamne input
> const figures = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "-", "_"];

Zamienilem `_` na `~` bo sie bardziej rozni od `-` z listy

# Moj algorytm zgadujacy karty

Jesli jest para kart w pamieci to gracz wybiera te karty.

Jesli nie to wybiera 1 karte losowo.

Po odslonieciu 1 karty dostaje informacje zwrotna, jesli jest para z kompletu w pamieci wtedy jest ona wybierana, jesli nie to typowana kolejna losowa karta.
