using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Knockout_Webmail.Models
{
    // Models returned by MeController actions.
    public class GetViewModel
    {
        public string Hometown { get; set; }
        public string Username { get; set; }

    }
}