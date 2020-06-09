export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
export const isAuthenticated = () => localStorage.getItem('user1') !== null;
export const getRole = () => localStorage.getItem('user1');
export const logout = () => {
    localStorage.removeItem('user1');
};