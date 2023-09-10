using Test_for_PBL.IServices;
using Test_for_PBL.Models;

namespace Test_for_PBL.Services
{
    public class UsersService: IService
    {
        public readonly dbctx _context;
        public UsersService(dbctx context)
        {
            _context = context;
        }

        public User Save(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public List<User> GetUsers()
        {
           List<User> users = _context.Users.ToList();
            return users;
        }
    }
}
