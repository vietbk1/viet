using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net;
using System.Runtime.InteropServices;
using System.Text.Json.Nodes;
using Test_for_PBL.Models;
using Test_for_PBL.Services;

namespace Test_for_PBL.Controllers
{
    public class LoginController : Controller
    {
        private readonly UsersService _userService;

        public LoginController(UsersService userService)
        {
            _userService = userService;
        }

        public async Task<IActionResult> Create()
        {
            return View();
        }

       



        public async Task<IActionResult> Index()
        {
            List<User> users = _userService.GetUsers();
           
            return View(users);
        }


        public bool NewUser(FileUpload fu)
        {
            User oUser = JsonConvert.DeserializeObject<User>(fu.User);
            List<User> users = _userService.GetUsers();

            for (int i = 0; i < users.Count; i++)
            {
                if (users[i].Name == oUser.Name)
                {
                    return false;
                }
            }

            _userService.Save(oUser);
            return true;
        }



      
        public Boolean Login(FileUpload fu)
        {

            User oUser = JsonConvert.DeserializeObject<User>(fu.User);
            List<User> users = _userService.GetUsers();
            for(int i = 0; i < users.Count; i++)
            {
                if (users[i].Name == oUser.Name && users[i].Password == oUser.Password)
                {
                    return true;
                }
            }

            return false;


        }

     
    }
}
