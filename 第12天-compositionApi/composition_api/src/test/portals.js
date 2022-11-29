// const global = {
//   init(app) {
//     app.config.globalProperties.$name = 'leo'
//   }
// }

// export default global


export default function (app) {
  app.config.globalProperties.$name = 'leo'
}
