// require(설정_객체, 의존성_배열, 콜백_함수)
require.config({
    baseUrl: 'js' // 'js' 폴더를 기본 경로로 설정
});

console.log("0. [App] 애플리케이션이 시작됩니다. 모듈 로딩을 요청합니다...");

// 'calculator' 파일을 찾아 로드하고, 완료되면 콜백 함수 실행
require(['calculator'], function(calc) {
    // 의존성 주입(Dependency Injection) 완료
    // 'calc' 매개변수는 calculator.js가 리턴한 객체입니다.
    
    console.log("2. [App] 모듈 로딩 완료. 비즈니스 로직을 실행합니다.");
    
    const price = 100;
    const tax = 20;
    const total = calc.add(price, tax);
    
    const message = "Total Price: " + calc.formatCurrency(total);
    console.log(message); // 출력: Total Price: $120.00
    
    // 화면에 결과 출력 (Demo용)
    document.body.innerHTML = `<h1>${message}</h1>`;
});