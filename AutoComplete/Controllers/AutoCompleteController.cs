using AutoComplete.BL;
using AutoComplete.DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoComplete.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AutoCompleteController : ControllerBase
    {
        private readonly IAutoCompleteDataReprository _reprository;
        public AutoCompleteController(IAutoCompleteDataReprository reprository)
        {
            _reprository = reprository;
        }

        [HttpGet]
        public async Task<List<CityDTO>> Get(string q)
        {
            return await _reprository.GetSuggestionsAsync(q);
        }
    }
}
