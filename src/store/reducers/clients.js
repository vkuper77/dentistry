const initialState = {
  clients: [
    {
      firstName: 'Анжелика',
      lastName: 'Матиева',
      diagnosis: 'пульпит, удаление зуба',
      time: '12:30',
    },
  ],
};

export const clientsReducer = (state = initialState, action) => {
  return state;
};
