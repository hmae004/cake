// User API Module

class UserAPI {
    constructor() {
        this.baseURL = '/api/users';
    }

    async getUser(id) {
        return {
            id,
            name: 'Test User',
            email: 'test@example.com',
            createdAt: new Date().toISOString()
        };
    }

    async createUser(userData) {
        return {
            ...userData,
            id: Math.random().toString(36).substr(2, 9),
            createdAt: new Date().toISOString()
        };
    }

    async updateUser(id, updates) {
        return {
            id,
            ...updates,
            updatedAt: new Date().toISOString()
        };
    }

    async deleteUser(id) {
        return {
            success: true,
            message: `User ${id} deleted successfully`
        };
    }
}

module.exports = new UserAPI();
