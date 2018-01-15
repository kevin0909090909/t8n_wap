/**
* @Date:   2017-01-04T10:22:21+08:00
* @Last modified time: 2017-01-06T15:17:13+08:00
*/



function create (option) {
  if(typeof option['created'] === "function" ){
    let c = function () {
      option.created();
      console.log(this.$store.state.showTab);
      this.$store.state.showTab = true;
    }
    option.created = c;
  }else if(typeof option['created'] === "undefined" ){
    let c = function () {
      this.$store.state.showTab = true;
    }
    option['created'] = c;
  }

  return option;
}


export default create
