export const setLocalStorage = (param: string, value: any) => 
    localStorage.setItem(param, value);

export const getLocalStorage = (param: string) => 
    localStorage.getItem(param)