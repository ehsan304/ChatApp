import toast from "react-hot-toast";
import { useState } from "react";
const useSignUp = () => {
    const [loading, setloading] = useState(false)


    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender })
        if (!success) return;
        setloading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })

            })

            const data = await res.json();
            console.log(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setloading(false);
        }




    }

    return {loading, signup}
}
export default useSignUp

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill all the fields')
        return false;
    }
    if (password != confirmPassword) {
        toast.error("passwords do not match")
        return false
    }

    if (password < 6) {
        toast.error('password must be atleast 6 characters long')
        return false;
    }
    return true
}