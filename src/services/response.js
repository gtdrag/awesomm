export const parseResponse = res => {
  if (res.status === 200) {
    return { message: 'success', payload: res.data };
  }
  if (res.status === 404) {
    return { message: 'failed', payload: '404 not found' };
  }
  if (res.status === 500) {
    return { message: 'failed', payload: 'Internal server error' };
  }
  return { message: 'failed', payload: 'unknown error' };
};
