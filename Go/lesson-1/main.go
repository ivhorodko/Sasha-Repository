package main

import "fmt"

func main() {
	name := "Саша"
	favoriteColor := "черный"
	age := 15
	hobby := "Чтение книг"

	fmt.Println("Меня зовут:", name)
	fmt.Println("Мой любимый цвет -", favoriteColor)

	if age >= 18 {
		fmt.Println("Мне есть 18")
	} else {
		fmt.Println("Мне нет 18")
	}

	fmt.Println("Моe хобби -", hobby)
}