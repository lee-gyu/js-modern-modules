// define(의존성_배열, 팩토리_함수)
define([], function() {
    console.log("1. [Module] Calculator 모듈이 로드되고 정의되었습니다.");

    // 이 객체가 외부로 노출(Export)됩니다.
    return {
        add: function(a, b) {
            return a + b;
        },
        formatCurrency: function(amount) {
            return "$" + amount.toFixed(2);
        }
    };
});