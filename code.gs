function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .addMetaTag('viewport', 'width=Ddevice-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}
