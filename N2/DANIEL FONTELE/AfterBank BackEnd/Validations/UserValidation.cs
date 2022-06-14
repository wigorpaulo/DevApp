using after_bank.Models;

namespace after_bank.Validations
{
    public static class UserValidation
    {
        public static bool PostValidation(User user)
        {
            if (user.Username == null || user.Username.Length < 3)
            {
                return true;
            }
            if (user.Password == null || user.Password.Length < 3)
            {
                return true;
            }
            return false;
        }
    }
}
