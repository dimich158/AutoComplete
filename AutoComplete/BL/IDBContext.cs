using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace AutoComplete.BL
{
    public interface IDBContext
    {
        public string GetConnectionString();
        public IDbConnection GetConnection();
    }
}
