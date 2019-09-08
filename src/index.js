import React from 'react';
import dva, { connect } from 'dva';
import createLoading from 'dva-loading';
import './index.css'
// import './assets/iconfont/iconfont.css'

// 1. Initialize
const app = dva();
app.use(createLoading());
//app.model(require("./models/config").default)
//app.model(require("./models/upload").default)
// 4. Router
app.router(require('./router').default);
// 5. Start
app.start('#root');

export default app._store;
