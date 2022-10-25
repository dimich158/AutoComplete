using AutoComplete.DTO;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace AutoComplete.BL
{
    public class AutoCompleteDataReprository : IAutoCompleteDataReprository
    {
        private readonly IDBContext _context;

        public AutoCompleteDataReprository(IDBContext context)
        {
            _context = context;
        }

        public async Task<List<CityDTO>> GetSuggestionsAsync(string q)
        {
            using (var connection = _context.GetConnection())
            {
                var p = new DynamicParameters();
                p.Add("search", q, DbType.String);
                var res = await connection.QueryAsync<CityDTO>("dbo.AUTO_COMP_DATA_GET_PRO", param: p, commandType: CommandType.StoredProcedure);
                return res.ToList();
            }
        }
    }
}
