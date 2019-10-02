/**
 * Define the action types
 */
export const REQUEST_PROVIDERS = 'REQUEST_PROVIDERS';
export const RECEIVE_PROVIDERS = 'RECEIVE_PROVIDERS';
export const SELECT_PROVIDER = 'SELECT_PROVIDER';

export const REQUEST_SESSION = 'REQUEST_SESSION';
export const RECEIVE_SESSION = 'RECEIVE_SESSION';

// I'm not certain that we need this
//export const RECEIVE_AUTH = 'RECEIVE_AUTH';
export const RECEIVE_WEB_TOKEN = 'RECEIVE_WEB_TOKEN';

export const REQUEST_ROOT_CONTAINER = 'REQUEST_ROOT_CONTAINER';
export const RECEIVE_ROOT_CONTAINER = 'RECEIVE_ROOT_CONTAINER';
export const REQUEST_CONTAINER = 'REQUEST_CONTAINER';
export const RECEIVE_CONTAINER = 'RECEIVE_CONTAINER';

export const REQUEST_UPLOAD = 'REQUEST_UPLOAD';
export const RECEIVE_UPLOAD = 'RECEIVE_UPLOAD';

export const SELECT_CONTAINER = 'SELECT_CONTAINER';
export const DESELECT_CONTAINER = 'DESELECT_CONTAINER';

export const SELECT_BYTESTREAM = 'SELECT_BYTESTREAM';
export const DESELECT_BYTESTREAM = 'DESELECT_BYTESTREAM';

export default {
  REQUEST_PROVIDERS,
  RECEIVE_PROVIDERS,
  SELECT_PROVIDER,
  REQUEST_SESSION,
  RECEIVE_SESSION,
  RECEIVE_WEB_TOKEN,
  REQUEST_ROOT_CONTAINER,
  RECEIVE_ROOT_CONTAINER,
  REQUEST_CONTAINER,
  RECEIVE_CONTAINER,
  REQUEST_UPLOAD,
  RECEIVE_UPLOAD,
  SELECT_CONTAINER,
  DESELECT_CONTAINER,
  SELECT_BYTESTREAM,
  DESELECT_BYTESTREAM
};
