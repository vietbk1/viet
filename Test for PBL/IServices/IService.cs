using Test_for_PBL.Models;

namespace Test_for_PBL.IServices
{
    public interface IService
    {

        User Save(User user);
        List<User> GetUsers();

        
    }
}
