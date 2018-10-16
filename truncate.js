;(function () {

  var truncateVue = {};

  truncateVue.install = function (Vue) {
    
    /**
     * 
     * @param {String} text
     * @param {Number} length
     * @param {String} clamp
     * 
     */

    Vue.filter('truncate', function (text, length = 25, clamp) {
      clamp = clamp || '...';
      length = length || 30;
      
        clamp = clamp || '...';
        length = ~~length;
        return text.length > length ? text.slice(0, length) + clamp : text;
    });
  }

  if (typeof exports == "object") {
    module.exports = truncateVue;
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return truncateVue });
  } else if (window.Vue) {
    window.truncateVue = truncateVue;
    Vue.use(truncateVue);
  }

})()
