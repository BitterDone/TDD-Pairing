package com.example.TDDPairing;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
class UtilitiesTest {

    @Test
    void testHelloPasses() {
        String returnValue = new Utilities().hello();
        Assert.isTrue(returnValue.equals("hello world"), "'hello world' == 'hello world'");
    }
}
