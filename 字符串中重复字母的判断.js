//判断字符串里是否有两个相邻的重复字母。有的话返回true，没有返回false。
function con(str){
	var reg = /[a-zA-Z]/;
	if (reg.test(str)) {
		for (var i = 0; i < str.length; i++) {
			if (reg.test(str[i]) && reg.test(str[i+1]) && str[i] == str[i+1]) {
				console.log(str[i]+str[i+1]);
				return true;
			}
		}
	}
	return false;
}
con("pettre");