package com.example.TDDPairing.Greetings;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
public class Greeting {

    @Getter
    @Setter
    private long id;

    @Getter
    @Setter
    private String content;

}
