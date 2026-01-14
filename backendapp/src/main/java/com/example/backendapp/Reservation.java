@Entity
@Data
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate dateReservation;
    private double prix;
    private String etat;

    @ManyToOne
    private TouristProfile tourist;
}
