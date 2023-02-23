package main

import (
	"fmt"
	"log"

	"github.com/FarStep131/apprunner-tutorial/app/server"
)

const (
	host = "0.0.0.0"
	port = "8080"
)

func main() {
	s := server.New()
	err := s.Start(fmt.Sprintf("%s:%s", host, port))
	if err != nil {
		log.Fatalf("server stopped with error: %s", err)
	}

	log.Printf("server stopped successfully")
}
