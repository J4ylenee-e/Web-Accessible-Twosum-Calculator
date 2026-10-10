const numberInput = document.querySelector("#numberInput");
const pushButton = document.querySelector("#push");
const popButton = document.querySelector("#pop");
const arrayDisplay = document.querySelector("#array");
const resultDisplay = document.querySelector("#result");
const targetInput = document.querySelector("#targetInput");
const targetButton = document.querySelector("#targetnum");


//where numbers are stored
let nums =[];
var twoSum = function(nums,target){
    const map = new Map();

    nums.forEach(
        (num,i) => {
        map.set(num,i);
    }
)

    let answer = [];

    nums.forEach(
        (num,i) =>{
            const complement = target - num;
            if(map.has(complement) && map.get(complement) !== i){
                answer = [i,map.get(complement)];
            }
        }




    )

    return answer;

}

function updateArray(){
    arrayDisplay.textContent = "";
    nums.forEach(
        (num) => {
            let item=document.createElement("div");
            item.textContent = num;
            //class name for css
            item.className = "array_item";
            //array is displayed in website
            arrayDisplay.append(item);

        }
    );
}

function updateResult(){
    //if target empty
    if(targetInput.value == ""){
        //then this will  be displayed
        resultDisplay.textContent = "Please Enter a target number";
        return;
    }
    const target= Number(targetInput.value);
    //runs twosum
    const answer = twoSum(nums,target);
    //if there are two indixes
    if(answer.length==2){
        //and the result is target then the numbers that add up to target are printed
        resultDisplay.textContent = "Numbers that add up: "+ nums[answer[0]] + " and " + nums[answer[1]];
    }
    else{
        //will tell you this until two indexes hit target
        resultDisplay.textContent = "No two numbers add up to that target";
    }
}

pushButton.addEventListener("click", ()=>{
    let input = numberInput.value;
    //if there is no number then nothing happens
    if(input==""){
        return;
    }
    //number gets pushed into array
    nums.push(Number(input));
    //clears
    numberInput.value ="";

    updateArray();

    updateResult();
});

popButton.addEventListener("click", ()=>{
    //this makes sure if array is not empty
    if(nums.length==0){
        return;
    }
    //last number gets popped
    nums.pop();
    updateArray();
    updateResult();
})

targetButton.addEventListener("click",()=>{
    updateResult();
});