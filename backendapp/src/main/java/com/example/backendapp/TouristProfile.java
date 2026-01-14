@Entity
@Data
public class TouristProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;
    private String nationality;
    private String phone;
    private String image;

    @OneToOne
    private User user;
}
