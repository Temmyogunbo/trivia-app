import env from 'env-var';

export const API_URL = env.get('REACT_APP_API_URL').asString();
