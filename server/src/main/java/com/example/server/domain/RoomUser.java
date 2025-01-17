package com.example.server.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "roomUser")
public class RoomUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    private Room room;
    @NotNull
    private boolean isCaptain;
    @NotNull
    private String roomNickname;

    private String profileImage;

    @NotNull
    private boolean isReady;

    @OneToOne(fetch = FetchType.LAZY)
    private User user;

    @OneToOne(fetch = FetchType.LAZY , cascade = CascadeType.ALL, orphanRemoval = true)
    private GameOrder gameOrder;
}
