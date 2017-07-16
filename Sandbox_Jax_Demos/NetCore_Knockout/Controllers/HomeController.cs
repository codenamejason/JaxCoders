using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NetCore_Knockout.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "JaxCoders";

            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "About JaxCoders Programmmers Group!";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Contact the JaxCoders Group";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
