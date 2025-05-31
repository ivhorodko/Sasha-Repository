package main

import (
	"fmt"
	"lesson-6/helpers"    // импортируем наш пакет helpers
	"lesson-6/greetings"  // импортируем наш пакет greetings
)

func main() {
	// Вызываем функцию Multiply из пакета helpers
	result := helpers.Multiply(6, 7)

	// Вызываем функцию Hello из пакета greetings
	message := greetings.Hello("Саша")

	fmt.Println("Результат умножения:", result)
	fmt.Println(message)
}