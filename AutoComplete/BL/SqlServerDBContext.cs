using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace AutoComplete.BL
{
    public class SqlServerDBContext : IDBContext
    {
        private readonly IConfiguration Config;
        public SqlServerDBContext(IConfiguration config)
        {
            this.Config = config;
        }
        public string GetConnectionString()
        {
            return this.Config.GetConnectionString("MyConnectionString");
        }

        public IDbConnection GetConnection()
        {
            return new SqlConnection(GetConnectionString());
        }
    }
}
