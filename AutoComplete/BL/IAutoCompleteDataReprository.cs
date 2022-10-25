using AutoComplete.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoComplete.BL
{
    public interface IAutoCompleteDataReprository
    {
        public Task<List<CityDTO>> GetSuggestionsAsync(string q);
    }
}
