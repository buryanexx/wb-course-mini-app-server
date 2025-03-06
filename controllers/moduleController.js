const modules = require('../data/modules.json');

// @desc    Получить все модули
// @route   GET /api/modules
// @access  Public
const getModules = (req, res) => {
  try {
    // Возвращаем сокращенную версию модулей
    const modulesList = modules.map(module => ({
      id: module.id,
      title: module.title,
      shortDescription: module.shortDescription,
      icon: module.icon
    }));
    
    // Используем return для явного завершения функции
    return res.status(200).json(modulesList);
  } catch (error) {
    console.error('Ошибка при получении модулей:', error);
    return res.status(500).json({ message: 'Ошибка сервера при получении модулей' });
  }
};

// @desc    Получить модуль по ID
// @route   GET /api/modules/:id
// @access  Public
const getModuleById = (req, res) => {
  try {
    const module = modules.find(m => m.id === parseInt(req.params.id));
    
    if (!module) {
      return res.status(404).json({ message: 'Модуль не найден' });
    }
    
    return res.status(200).json(module);
  } catch (error) {
    console.error(`Ошибка при получении модуля с ID ${req.params.id}:`, error);
    return res.status(500).json({ message: 'Ошибка сервера при получении модуля' });
  }
};

module.exports = {
  getModules,
  getModuleById
};