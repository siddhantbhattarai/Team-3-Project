namespace PRMS_System.DTO
{
    public class UpdateAssignmentStatusDto
    {
        public int AssignmentId { get; set; }
        public List<StudentAssignmentStatusDto> StudentStatuses { get; set; }
    }

    public class StudentAssignmentStatusDto
    {
        public int StudentId { get; set; }
        public string Status { get; set; }  // e.g., "Submitted", "Not Submitted", "Checked"
        public string Grade { get; set; }  // e.g., "A", "B", "C"
    }
}
