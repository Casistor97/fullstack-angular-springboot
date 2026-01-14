@Entity
@Data
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String review;
    private String commentaire;
    private LocalDate dateReviews;

    @ManyToOne
    private TouristProfile tourist;
}
