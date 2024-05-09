package com.example.TDDPairing.Greetings;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;

//@SpringBootTest // works fine until RestTemplate added
@SpringBootTest(webEnvironment=WebEnvironment.DEFINED_PORT) // needed for RestTemplate
public class GreetingControllerTest {
    @Autowired
    private GreetingController controller;
    @Autowired
    private TestRestTemplate restTemplate;

//  simple sanity check test that will fail if the application context cannot start
    @Test
    void contextLoads() { }


    @Test
    void controllerLoads() {
        assertThat(controller).isNotNull();
    }

//  Requires SpringBootTest(webEnvironment=WebEnvironment.DEFINED_PORT)
    @Test
    void greetingShouldReturnDefaultMessage() {
        assertThat(this.restTemplate.getForObject("http://localhost:8080/hello",
                String.class)).isEqualTo("hello");
    }

}
