import objectMerge from 'object-merge';

export default function (app, payload, status, data) {
  let newState = objectMerge({}, app);

  if (status === 'FULFILLED'){
    newState = objectMerge(newState, data)
  }
  console.log('zzz', newState);
  return newState;
}

export function action (payload, app) {
  return Promise.resolve(payload);
}
