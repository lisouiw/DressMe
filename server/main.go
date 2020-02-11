package main

import (
    "fmt"
    "log"
    "net/http"
    "gopkg.in/redis.v3"
)

func HandleFunc() {
	client := redis.NewClient(&redis.Options{
        Addr: "redis:6379",
        Password: "",
        DB: 0,
    })

    pong, err := client.Ping().Result()
    if err != nil {
        panic(err)
	}


    // router := mux.NewRouter().StrictSlash(true)
    // router.HandleFunc("/todos", TodoIndex)
    // router.HandleFunc("/todos/{todoId}", TodoShow)
 
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, %q", pong)
    })

}


func main() {
 
	
	// cnn, err := mysql.Open("mysql", "docker:docker@tcp(mysql:3306)")
	// if err != nil {
	// 		log.Fatal(err)
	// }

	// id := 1
	// var name string

	// if err := cnn.QueryRow("SELECT name FROM test_tb WHERE id = ? LIMIT 1", id).Scan(&name); err != nil {
	// 		log.Fatal(err)
	// }

	HandleFunc()
 
    log.Fatal(http.ListenAndServe(":5000", nil))

}