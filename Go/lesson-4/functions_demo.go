package main

import "fmt"

func greet(name string) {
	fmt.Printf("Привет, %s!\n", name)
}

func sumSlice(nums []int) int {
	sum := 0
	for _, num := range nums {
		sum += num
	}
	return sum
}

func getColor(name string, colors map[string]string) string {
	if color, exists := colors[name]; exists {
		return color
	}
	return "Цвет для этого имени не найден"
}

func isEven(n int) bool {
	return n%2 == 0
}

func main() {
	greet("Саша")

	numbers := []int{15, 32, 3}
	sum := sumSlice(numbers)
	fmt.Println("Сумма:", sum)

	colorMap := map[string]string{
		"Саша": "черный",
		"Алена": "красный",
		"Маша": "белый",
	}
	fmt.Println(getColor("Саша", colorMap))
	fmt.Println(getColor("Соня", colorMap))

	num := 7
	if isEven(num) {
		fmt.Printf("%d — чётное число\n", num)
	} else {
		fmt.Printf("%d — нечётное число\n", num)
	}

	fmt.Println("Число 4 чётное?", isEven(4))
	fmt.Println("Число 7 чётное?", isEven(7))
}