package main

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()
	//sets Access-Control-Allow-Headers
	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Content-Type", "application/json")
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "*")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type")
	c.Writer.Header().Set("Access-Control-Max-Age", "86400")
	})

	//c.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	router.GET("/:cont", getCont)

	router.Run("localhost:8080")

}

func getCont(c *gin.Context) {
	cont := c.Param("cont")
	postBody, _ := json.Marshal(map[string]string{
		"content": cont,
	})
	responseBody := bytes.NewBuffer(postBody)
	//Leverage Go's HTTP Post function to make request
	resp, err := http.Post("https://discord.com/api/webhooks/969607622774886420/U-kPiqpyR1QH1lYsK_KFej6vrc6RdIWiq1Vs4gW42x5hY0VS-pgvEy_aTXZrcu0jL51a", "application/json", responseBody)
	//Handle Error
	if err != nil {
		log.Fatalf("An Error Occured %v", err)
	}
	defer resp.Body.Close()
	//Read the response body
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}
	sb := string(body)
	log.Printf(sb)

}
