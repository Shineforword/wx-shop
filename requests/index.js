export const reqest=(params)=>{
  // 定义公共的url
  const baseUrl = "https:...."
  return new Promise((resolve,reject)=>{
    wx.request({
      // 结构参数
      ...params,
      // 组合路径
      // url= baseUrl + params.url,
      success:(result)=>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err);
      }
    })
  })
}