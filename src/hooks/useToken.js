import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        // console.log('inside token' , user);
        const email = user?.user?.email
        const photoURL = user?.user?.photoURL
        const displayName = user?.user?.displayName
        const creationTime = user?.user?.metadata?.creationTime
        const lastLogin = user?.user?.metadata?.lastSignInTime
        const currentUser = {
            email,
            photoURL,
            displayName,
            creationTime,
            lastLogin
        }
        if (email) {
            fetch(`https://safe-hamlet-60048.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('inside useToken' ,  data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }


    }, [user])
    return [token]
}

export default useToken 