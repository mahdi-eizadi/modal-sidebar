import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const openSidebar = () => { setIsSidebar(true) }
    const closeSidebar = () => { setIsSidebar(false) }

    const openModal = () => { setIsModal(true) }
    const closeModal = () => { setIsModal(false) }

    return <AppContext.Provider value={{
        isModal,
        isSidebar,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
    }}>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}