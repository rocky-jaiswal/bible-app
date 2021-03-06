// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
// import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  // const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(location, cb) {
        System.import('containers/Home')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/chapter',
      name: 'chapterView',
      getComponent(location, cb) {
        System.import('containers/ChapterView')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/verses',
      name: 'versesView',
      getComponent(location, cb) {
        System.import('containers/VersesView')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'home',
      getComponent(location, cb) {
        System.import('containers/Home')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
