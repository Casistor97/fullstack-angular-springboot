@Entity
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate datePayment;
    private double prix;
    private String etat;

    @OneToOne
    private Reservation reservation;
}
