export const retrieveThemeStatus = () => {
    switch (localStorage.getItem("isBlackTheme")) {
        case null:
            localStorage.setItem("isBlackTheme", "false");
            return false
        case "true":
            return true;
        case "false":
            return false;
    }
}