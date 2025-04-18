const getItem = (key) => {
   return localStorage.getItem(key)
}

const setItem = (key, value) => {
   localStorage.setItem(key, value); 

}

const removeItem  = (key) =>  {
    localStorage.removeItem(key);
}

const clear = () => {
    localStorage.clear();
}


const storageService = {
     getItem,
     setItem,
     removeItem,
     clear
}

export default storageService