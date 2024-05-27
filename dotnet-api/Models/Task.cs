// Models/Task.cs
namespace dotnet_api.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string? Name { get; set; } // Make Name nullable
        public bool IsComplete { get; set; }
    }
}
