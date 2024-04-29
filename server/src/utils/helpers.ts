
//***********************************************************
// Generate a unique post id  for new posts
// based on date and userId
//***********************************************************
export function generateUniqueId({ userId, date }) {
    const timestamp = new Date(date).getTime();

    // Assuming userId is not longer than 6 digits
    return Number(`${userId}${timestamp}`);
}


//**********************************************************
// Test if an object is empty
//**********************************************************
export const isEmpty = obj => Object.keys(obj).length === 0;
