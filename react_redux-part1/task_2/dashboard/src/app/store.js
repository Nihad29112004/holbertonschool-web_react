import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

/**
 * Redux Store-un konfiqurasiyası.
 * configureStore funksiyası avtomatik olaraq:
 * 1. rootReducer-i store-a bağlayır.
 * 2. Redux Thunk middleware-ini əlavə edir (async əməliyyatlar üçün).
 * 3. Redux DevTools-u aktivləşdirir.
 */
const store = configureStore({
  reducer: rootReducer,
});

export default store;