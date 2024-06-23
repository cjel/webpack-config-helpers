module.exports = {
  ifProduction: function(env, option1, option2) {
    if (env.production) {
      return option1;
    }
    return option2;
  },
  ifNotProduction: function(env, option1, option2) {
    if (env.production) {
      return option2;
    }
    return option1;
  },
  removeEmpty: function(input) {
    let output
    if (Array.isArray(input)) {
      output = input.filter(item => typeof item !== 'undefined')
    } else {
      output = {}
      Object.keys(input).forEach(key => {
        const value = input[key]
        if (typeof value !== 'undefined') {
          output[key] = value
        }
      })
    }
    return output
  }
}
