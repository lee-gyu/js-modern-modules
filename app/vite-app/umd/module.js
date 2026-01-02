(function (root, factory) {
    // 1. AMD 감지 (RequireJS 등)
    if (typeof define === 'function' && define.amd) {
        // 의존성('jquery')을 선언하고 팩토리에 주입
        define(['jquery'], factory);
    } 
    // 2. CommonJS 감지 (Node.js)
    else if (typeof module === 'object' && module.exports) {
        // require로 의존성을 가져와 팩토리에 주입
        module.exports = factory(require('jquery'));
    } 
    // 3. 브라우저 전역 변수 (Global Variable)
    else {
        // 의존성을 전역 객체(root)에서 찾음
        root.MyLib = factory(root.jQuery);
    }
}(typeof self !== 'undefined' ? self : this, function ($) {
    // === 실제 모듈 로직 (Factory) ===
    console.log("jQuery version:", $.fn.jquery);
    
    return {
        greet: function() { return "Hello UMD!"; }
    };
}));