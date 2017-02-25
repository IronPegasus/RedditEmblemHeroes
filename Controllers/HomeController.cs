using Microsoft.AspNetCore.Mvc;

namespace RedditEmblemHeroes.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index(){ return View(); }
        public IActionResult Error(){ return View(); }
    }
}
