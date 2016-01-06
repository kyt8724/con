namespace ContosoUniversity.Models
{
    public class Photo
    {
        public int PhotoID { get; set; }
        public int StudentID { get; set; }
        public string OriginalFileName { get; set; }
        public string SystemFileName { get; set; }
    }
}