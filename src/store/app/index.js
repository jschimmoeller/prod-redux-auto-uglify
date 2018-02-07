const appVersion = require('../../../package.json').version;

export default function app(app={} , action) {
  switch (action.type) {
    case '@@redux/INIT':
      return {
              appSize: 'large',
              appVersion: appVersion
            };

    default:
      return app;
  } // end switch
}

export function before (appsState, action){
  return action.payload;
}

export function after (newAppsState, action, oldAppsState){
  return newAppsState;
}
