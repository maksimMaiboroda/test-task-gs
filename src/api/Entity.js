import Base        from './Base.js';

class Entity extends Base {
    get = async (path) => {
        return this.apiClient.get(path);
    }

    update = async (path, item) => {
        return this.apiClient.patch(path, item);
    }

    create = async (path, item) => {
        return this.apiClient.post(path, item);
    }

    delete = async (path) => {
        return this.apiClient.delete(path);
    }
}

export default Entity;
