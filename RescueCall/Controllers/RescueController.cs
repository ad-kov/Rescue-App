using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RescueCall.Models;
using System.Linq;

namespace RescueCall.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RescueController : ControllerBase
    {

        private readonly AppDbContext _context;
        private readonly ILogger<RescueController> _logger;

        public RescueController(AppDbContext context, ILogger<RescueController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET all RescueRequests
       [HttpGet]
       public async Task<IActionResult> GetRequests()
        {
            var requests = await _context.RescueRequests.ToListAsync();
            _logger.LogInformation($"Retrieved {requests.Count} requests from the database.");
            return Ok(requests);

        }


        // POST a new RescueRequest
        [HttpPost]
        public async Task<IActionResult> CreateRequest([FromBody] RescueRequest newRequest)
        {
            if (string.IsNullOrEmpty(newRequest.Description) || string.IsNullOrEmpty(newRequest.Location))
            {
                return BadRequest("Both description and location are required.");
            }

            try
            {
                _context.RescueRequests.Add(newRequest);
                await _context.SaveChangesAsync();
                return Ok(newRequest); // Vrací nový request
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // PUT (Update) an existing RescueRequest
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRequest(int id, [FromBody] RescueRequest updatedRequest)
        {
            var request = await _context.RescueRequests.FindAsync(id);

            if (request == null)
            {
                return NotFound(); 
            }
            request.Status = updatedRequest.Status;
            await _context.SaveChangesAsync();

            return Ok(request); 
        }

        // GET a RescueRequest by Id
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var request = _context.RescueRequests.FirstOrDefault(r => r.Id == id);
            if (request == null)
            {
                return NotFound(); // Pokud není nalezený požadavek
            }
            return Ok(request); // Pokud je požadavek nalezen
        }


        // DELETE a RescueRequest by Id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRescueRequest(int id)
        {
            var request = await _context.RescueRequests.FindAsync(id);

            if (request == null)
            {
                return NotFound(); 
            }

            _context.RescueRequests.Remove(request); 
            await _context.SaveChangesAsync(); 

            return NoContent(); 
        }
    }
}
