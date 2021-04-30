﻿using System;
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

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [MaxLength(255)]
        public string Email { get; set; }

       

    }
}

