
package main

import "fmt"

func main() {
	/*
	var numbers [3]int
	numbers[0] = 10
	numbers[1] = 20
	numbers[2] = 30
	//numbers[3] = 40

	fmt.Println("Массив:")
	for i := 0; i < 3; i++ {
		fmt.Println(numbers[i])
	}


	friends := []string{"Макс", "Соня", "Вика"}
	fmt.Println(friends)
	for i := 0; i < len(friends); i++ {
		fmt.Println(friends[i])
	}
	friends = append(friends, "Саша")
		fmt.Println(friends)
	for i := 0; i < len(friends); i++ {
		fmt.Println(friends[i])
	}
	


	numbers := []int{1, 2, 3, 4, 5}
	sum := 0
	for i := 0; i < len(numbers); i++ {
		sum += numbers[i]
	}
	fmt.Println("Сумма чисел:", sum)
	*/


	movies := []string{"Красавица и чудовище", "Матрица", "Плохие парни", "Бабушка легкого поведения", "Люди в черном"}
	for i := len(movies) - 1; i >= 0; i-- {
		fmt.Println(movies[i])
	}
}