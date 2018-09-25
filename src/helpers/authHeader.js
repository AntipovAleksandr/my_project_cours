class LocalStorageWorker {
    getItem(name) {
        return JSON.parse(localStorage.getItem(name));
    }
    setItem(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }
    clearItem(name) {
        localStorage.removeItem(name);
    }
}

// SOLID
let instance;

export default function storageWorker() {
    if (!instance) {
        instance = new LocalStorageWorker();
    }
    return instance;
}