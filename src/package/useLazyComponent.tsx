// "use strict";
import * as React from "react";

function UseCreateLoadableComponent(opts) {
  let {
    loadFn
  } = opts;
  let [state, setState] = React.useState(
    {
      error: null,
      loading: false,
      loaded: null,
      ...opts
    }
  );
  let res: any = React.useRef(null);

  React.useEffect(() => {
    if (!res.current) {
      res.current = loadFn(state.loader);
    }
  }, []);
  React.useEffect(() => {
    if (!state.loading) {
      return;
    }
    // 无论是否错误都返回结果
    res.current.promise
      .then(() => {
        setState({ ...state, ...res.current });
      })
      .catch(err => {
        setState({ ...state, ...res.current });
      });
  }, [res.current]);

  return () => {
    if (state.loading || state.error) {
      return <state.loading />
    } else if (state.loaded) {
      return <state.loaded.default />
    } else {
      return null;
    }
  }
}

function CreateLoadableComponent(opts) {
  if (!opts.loading) {
    throw new Error("Requires a `loading` component");
  };
  // 延迟执行UseCreateLoadableComponent
  return () => UseCreateLoadableComponent(opts)();
}

function load(loader) {
  let promise = loader();

  let state = {
    loading: true,
    loaded: null,
    error: null,
    promise: null
  };

  state.promise = promise
    .then(loaded => {
      state.loading = false;
      state.loaded = loaded;
      return loaded;
    })
    .catch(err => {
      state.loading = false;
      state.error = err;
      throw err;
    });
  return state;
}

function Loadable(opts) {
  return CreateLoadableComponent({ ...opts, loadFn: load })
}

export default Loadable;


// DEMO
// const LoadableComponent = (loader) => {
//   return Loadable({
//     loader,
//     loading() {
//       return <div>Loading...</div>
//     }
//   })
// };
{/* <BrowserRouter></BrowserRouter>
  <Route component={LoadableComponent(() => import('lazy'))}></Route>
</BrowserRouter> */}