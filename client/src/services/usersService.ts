import apiClient from '../api/apiClient';

const fetchUsers = async () => {
    return await apiClient.get('/users');
};

export { fetchUsers };
