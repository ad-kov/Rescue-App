namespace RescueCall.Models
{
    public class RescueRequest
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string  Location { get; set; }
        public string Status { get; set; } = "Pending";
        public DateTime RequestTime { get; set; } = DateTime.UtcNow;
    }
}
