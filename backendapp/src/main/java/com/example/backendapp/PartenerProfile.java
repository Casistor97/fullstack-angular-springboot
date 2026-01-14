@Entity
@Data
public class PartnerProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String partnername;
    private String phone;
    private String address;
    private String image;
    private String link;

    @OneToOne
    private User user;
}
