

namespace PRMS_System.DTO
{
    public class BulkAttendanceDto
    {
        public int ClassId { get; set; }     
        public int BatchId { get; set; }
        public DateTime Date { get; set; }
        public List<StudentAttendanceDto> Attendances { get; set; }
    }

    public class StudentAttendanceDto
    {
        public int StudentId { get; set; }
        public string Status { get; set; }  // e.g., "Present", "Absent", "Late"
    }

    public class AttendanceDto
    {
        public int StudentId { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
    }
}
