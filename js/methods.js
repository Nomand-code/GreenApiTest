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

     
    
   async sendFileByUrl(id, token, chatId, url, buttons) {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.gif'];
    const isCorrect = allowedExtensions.some(ext => url.toLowerCase().endsWith(ext));
    if (!isCorrect) {
    alert("Ссылка должна заканчиваться на .jpg, .png или .pdf");
    return;
        }
    // Извлекаем имя файла из URL (или можно передавать отдельным параметром)
    const fileName = url.split('/').pop() || 'file';

    const body = {
        chatId: chatId,
        urlFile: url,
        fileName: fileName,
        caption: "Посмотрите этот файл",
       
    };
    //console.log(fileName)
    return await greenApi.postData(id, token, 'sendFileByUrl', body);
}

};
