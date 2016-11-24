angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home/home.html","<h1>Welcome :)</h1>\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<footer>\n  footer\n</footer>\n");
$templateCache.put("layout/header.html","<nav >\n  Header\n</nav>\n");}]);