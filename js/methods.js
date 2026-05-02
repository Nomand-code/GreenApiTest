import { greenApi } from './api.js';

export const waMethods = {
    // Получение настроек
    async fetchSettings(id, token) {
        return await greenApi.getData(id, token, 'getSettings');
    },

    // Получение состояния инстанса (авторизован или нет)
    async fetchStateInstance(id, token) {
        return await greenApi.getData(id, token, 'getStateInstance');
    },

    // Отправка сообщения
    async sendMessage(id, token, chatId, message) {
        const body = { chatId, message };
        return await greenApi.postData(id, token, 'sendMessage', body);
    },

     
    
   async sendFileByUrl(id, token, chatId, url,fileName) {
        // Простая проверка расширения
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.gif'];
        const isCorrect = allowedExtensions.some(ext => url.toLowerCase().includes(ext)); 
        
        if (!isCorrect) {
            throw new Error("Ссылка должна содержать .jpg, .png или .pdf");
        }

        // Извлекаем имя файла

        const body = {
            chatId: chatId,
            urlFile: url,      
            fileName: fileName,
            caption: "Посмотрите!"
        };

        return await greenApi.postData(id, token, 'sendFileByUrl', body);
    }

};
