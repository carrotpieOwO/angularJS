// 타입스크립트는 타입지정가능

//let num = 10;
let num : number = 10;

//명시적으로 number라는 타입을 지정했기 때문에 에러남
num.push(); 

//리턴 타입 지정 가능
function testing(): string {
 
    
    return 10
}

//컴파일 단계에서 에러를 미리 파악할 수 있다. 


export class AppComponent{

}