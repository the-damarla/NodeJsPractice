require('./flowOfCode');
const { add } = require('./exportingAFunction'); 

console.log(add(1, 2));
console.log("hey, VijaySaiNag");
console.log("")

const moduleCachingExample = require('./moduleCaching');
console.log(moduleCachingExample.getName());
moduleCachingExample.setName('Vijay Sai Nag');
console.log(moduleCachingExample.getName());
// Even though we're importing new instance of the class we created it's giving the older value which we have set
// this is called caching methodology of nodeJs
const showModuleCached = require('./moduleCaching');
console.log(showModuleCached.getName());
console.log("");

console.log("classExportExample");
const importingExportedClassInstance = require('./exportingAClass');
const initiatingClass = new importingExportedClassInstance("importedClassOneExample");
console.log(initiatingClass.getName());
initiatingClass.setName("settingNewName");
console.log(initiatingClass.getName());

const changeNameInClassInstance = new importingExportedClassInstance("changing existing name in class instance");
console.log(changeNameInClassInstance.getName());
changeNameInClassInstance.setName("changing again");
console.log(changeNameInClassInstance.getName());