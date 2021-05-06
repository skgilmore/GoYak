using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace GoYak.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }

        public string Name { get; set; }
        public string UserName { get; set; }

      public int Zip { get; set; }
        public string Email { get; set; }

       

    }
}

