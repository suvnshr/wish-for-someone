import React, { createContext, useState } from 'react'


const WishOpContext = createContext(null);


function WishOpProvider({ children }) {

    // the app fetches wishes when this is true
    const [fetchWishes, setFetchWishes] = useState(true);

    return (
        <WishOpContext.Provider value={{
            fetchWishes, setFetchWishes
        }}>
            {children}
        </WishOpContext.Provider>
    )
}

export default WishOpProvider

export { WishOpContext };



