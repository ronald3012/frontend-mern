import { types } from '../types/types';

export const showModal = () => ({
  type: types.modalShow
})

export const hideModal = () => ({
    type: types.modalHide
});
