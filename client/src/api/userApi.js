const fetchUser = async () => {
    const response =  await fetch("http://localhost:3500/user")
    if (!response) {
        throw new Error("Network response was not ok")
    }
    return response.json();
};

export {fetchUser} ;