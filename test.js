

var twoSum = function(nums, target) {
    
    let n = nums.length;
    for(let i=0; i<n ; i++){
            
        for(let j= i+1; j<n ; j++ ) {

            if(nums[i] + nums[j] === target)
            {
                return [i, j];
            }
            
        }
   
    }

    return [];
        
};

let num = [8, 20, 4, 5, 6, 3];

console.log(twoSum(num, 5))