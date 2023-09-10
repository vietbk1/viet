using System.ComponentModel.DataAnnotations;

namespace Test_for_PBL.Models
{
    public class User
    {
        [Key]
        [Required]

        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
    }
}
