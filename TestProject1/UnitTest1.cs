using AutoComplete.BL;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public async Task TestMethod1()
        {
            var myConfiguration = new Dictionary<string, string>
            {
                {"ConnectionStrings:MyConnectionString", "Server=(localdb)\\MSSQLLocalDB;Initial Catalog=myDB;Trusted_Connection=True;"}
            };

            var configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(myConfiguration)
                .Build();
            var testobject = new AutoCompleteDataReprository(new SqlServerDBContext(configuration));
            var res = await testobject.GetSuggestionsAsync("Ba");
            Assert.IsTrue(res.Count > 0);
        }
    }
}
