package main

import "fmt"

func main() {
	/*
	movies := []string{"Красавица и чудовище", "Матрица", "Плохие парни", "Бабушка легкого поведения"}
	for i, movie := range movies {
		fmt.Printf("%d, %s\n", i, movie)
	}

	friendColors := map[string]string{
		"Аня":  "синий",
		"Вова": "зеленый",
		"Катя": "красный",
	}
	for name, color := range friendColors {
		fmt.Printf("%s любит %s цвет \n", name, color)
	}

	if _, ok := friendColors["Петя"]; !ok {
		fmt.Println("Петя не найден в списке")
	}

	friendColors["Лена"] = "желтый"
	fmt.Println("Все любимые цвета друзей:")
	for _, color := range friendColors {
		fmt.Println(color)
	}
	*/

	age := map[string]int{
		"Мама": 48,
		"Тоня": 21,
		"Саша": 15,
	}

	for name, age := range age {
		fmt.Printf("%s — %d лет \n", name, age)
	}

}