// next.config.js
module.exports = {
  webpack: (config:any) => {
    config.optimization.minimizer = config.optimization.minimizer.filter(
      (minimizer:any) => minimizer.constructor.name !== 'CssMinimizerPlugin'
    )
    return config
  }
}